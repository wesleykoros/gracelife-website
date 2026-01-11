import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  message: string;
};

function escapeHtml(input: string) {
  return (input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Accept multiple possible field names from the client to avoid breakage.
 * (Useful if your Contact form uses different keys.)
 */
function normalizePayload(body: any): Payload {
  const pick = (...keys: string[]) => {
    for (const k of keys) {
      const v = body?.[k];
      if (v !== undefined && v !== null) return String(v);
    }
    return "";
  };

  const name = pick("name", "fullName", "fullname", "full_name", "firstName", "first_name");
  const email = pick("email", "emailAddress", "email_address");
  const phone = pick("phone", "phoneNumber", "phone_number", "mobile", "telephone");
  const program = pick("program", "service", "type", "programType", "program_type");
  const message = pick("message", "messageText", "message_text", "enquiry", "details", "notes");

  return {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    program: (program || "General").trim(),
    message: message.trim(),
  };
}

function isLikelyEmail(email: string) {
  // Simple sanity check (not strict RFC)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildAdminEmail(p: Payload) {
  const name = escapeHtml(p.name);
  const email = escapeHtml(p.email);
  const phone = escapeHtml(p.phone || "");
  const program = escapeHtml(p.program || "General");
  const message = escapeHtml(p.message);

  return {
    subject: `New enquiry (${p.program || "General"}) — ${p.name || "Website"}`,
    html: `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.5">
        <h2 style="margin:0 0 12px">New website enquiry</h2>

        <table style="border-collapse:collapse; width:100%; max-width:680px">
          <tr>
            <td style="padding:8px 0; width:140px"><strong>Name</strong></td>
            <td style="padding:8px 0">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0"><strong>Email</strong></td>
            <td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0"><strong>Phone</strong></td>
            <td style="padding:8px 0">${phone || "-"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0"><strong>Program</strong></td>
            <td style="padding:8px 0">${program}</td>
          </tr>
        </table>

        <div style="margin-top:14px">
          <strong>Message</strong>
          <div style="margin-top:8px; padding:12px; border:1px solid #e5e7eb; border-radius:10px; background:#fafafa; white-space:pre-wrap">${message}</div>
        </div>

        <p style="margin-top:14px; color:#6b7280; font-size:12px">
          Sent from the Gracelife website contact form.
        </p>
      </div>
    `,
  };
}

function buildAutoReplyEmail(p: Payload) {
  const firstName = (p.name || "").trim().split(/\s+/)[0] || "there";
  const program = (p.program || "General").trim();

  return {
    subject: "Thank you for contacting Gracelife Care Services",
    html: `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6">
        <p>Hi ${escapeHtml(firstName)},</p>

        <p>
          Thank you for contacting <strong>Gracelife Care Services</strong>.
          We’ve received your enquiry regarding <strong>${escapeHtml(program)}</strong> support.
        </p>

        <p>
          A member of our team will review your message and respond as soon as possible.
          If we need any additional details, we’ll be in touch.
        </p>

        <p style="color:#6b7280; font-size:13px">
          Please avoid sharing highly sensitive medical details by email.
          We’ll collect clinical information via appropriate channels if needed.
        </p>

        <p>
          Kind regards,<br/>
          <strong>Gracelife Care Services</strong><br/>
          DVA • NDIS • Aged Care
        </p>
      </div>
    `,
  };
}

/**
 * Parse either JSON or FormData submissions.
 */
async function readBody(req: Request): Promise<any> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return await req.json();
  }

  // Handles multipart/form-data and application/x-www-form-urlencoded
  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const form = await req.formData();
    const obj: Record<string, string> = {};
    for (const [key, value] of form.entries()) {
      // Ignore File values for now (no attachments)
      if (typeof value === "string") obj[key] = value;
    }
    return obj;
  }

  // Fallback: try json, then formData
  try {
    return await req.json();
  } catch {
    const form = await req.formData();
    const obj: Record<string, string> = {};
    for (const [key, value] of form.entries()) {
      if (typeof value === "string") obj[key] = value;
    }
    return obj;
  }
}

export async function POST(req: Request) {
  try {
    const body = await readBody(req);
    const payload = normalizePayload(body);

    // Validation
    const missing = {
      name: !payload.name,
      email: !payload.email,
      message: !payload.message,
    };

    if (missing.name || missing.email || missing.message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields.",
          missing,
          receivedKeys: Object.keys(body || {}),
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!isLikelyEmail(payload.email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.RESEND_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return new Response(
        JSON.stringify({ ok: false, error: "Server email is not configured." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1) Admin notification
    const adminEmail = buildAdminEmail(payload);
    await resend.emails.send({
      from,
      to,
      subject: adminEmail.subject,
      html: adminEmail.html,
      replyTo: payload.email, // replying goes to visitor
    });

    // 2) Auto-reply to visitor
    const autoReply = buildAutoReplyEmail(payload);
    await resend.emails.send({
      from,
      to: payload.email,
      subject: autoReply.subject,
      html: autoReply.html,
      replyTo: to, // replying goes to your team inbox
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Failed to send email.",
        // Useful locally; harmless in prod (remove if you prefer)
        details: err?.message || String(err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

