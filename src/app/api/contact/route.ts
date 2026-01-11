import { Resend } from "resend";

export const runtime = "nodejs"; // important for email sending

type Payload = {
  fullName: string;
  email: string;
  phone?: string;
  program: "DVA" | "NDIS" | "Aged Care" | "General";
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const program = (body.program || "General") as Payload["program"];
    const message = (body.message || "").trim();

    // Basic validation
    if (!fullName || fullName.length < 2) {
      return Response.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return Response.json(
        { error: "Please enter a message (at least 10 characters)." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.RESEND_TO_EMAIL;

    if (!resendKey || !from || !to) {
      return Response.json(
        { error: "Email service is not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const subject = `New enquiry (${program}) — ${fullName}`;
    const text = [
      `New enquiry received via gracelife website`,
      ``,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Program: ${program}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `This message was sent from the Gracelife website contact form.`,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New website enquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tr><td style="padding: 6px 0; width: 140px;"><strong>Name</strong></td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Email</strong></td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Phone</strong></td><td style="padding: 6px 0;">${escapeHtml(phone || "-")}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Program</strong></td><td style="padding: 6px 0;">${escapeHtml(program)}</td></tr>
        </table>
        <div style="margin-top: 14px;">
          <strong>Message</strong>
          <div style="margin-top: 6px; padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </div>
        </div>
        <p style="margin-top: 16px; color: #666; font-size: 12px;">
          Sent from the Gracelife website contact form.
        </p>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      replyTo: email, // so you can hit reply
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: "Something went wrong sending the enquiry." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
