"use client";

import { useMemo, useState } from "react";

type Program = "DVA" | "NDIS" | "Aged Care" | "General";

export default function ContactClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState<Program>("General");
  const [message, setMessage] = useState("");

  // Simple anti-spam honeypot (hidden field)
  const [company, setCompany] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return fullName.trim().length >= 2 && email.trim().length > 3 && message.trim().length >= 10;
  }, [fullName, email, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    // Honeypot: if filled, treat as spam but respond OK
    if (company.trim().length > 0) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, program, message }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Failed to send. Please try again.");
        return;
      }

      setStatus("sent");
      setFullName("");
      setEmail("");
      setPhone("");
      setProgram("General");
      setMessage("");
      setCompany("");
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send. Please check your connection and try again.");
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold">Enquiry form</h2>

      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="text-sm font-medium">Full name</label>
          <input
            className="mt-1 w-full rounded border border-gray-200 px-3 py-2 outline-none focus:border-gracelife-teal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded border border-gray-200 px-3 py-2 outline-none focus:border-gracelife-teal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone (optional)</label>
          <input
            className="mt-1 w-full rounded border border-gray-200 px-3 py-2 outline-none focus:border-gracelife-teal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="04xx xxx xxx"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Program</label>
          <select
            className="mt-1 w-full rounded border border-gray-200 px-3 py-2 outline-none focus:border-gracelife-teal"
            value={program}
            onChange={(e) => setProgram(e.target.value as Program)}
          >
            <option value="General">General</option>
            <option value="DVA">DVA</option>
            <option value="NDIS">NDIS</option>
            <option value="Aged Care">Aged Care</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            className="mt-1 min-h-[140px] w-full rounded border border-gray-200 px-3 py-2 outline-none focus:border-gracelife-teal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what support is needed and any preferred days/times..."
            required
          />
          <div className="mt-1 text-xs text-gray-500">
            Please include enough detail so we can route your enquiry correctly.
          </div>
        </div>

        {/* Honeypot field (hidden) */}
        <div className="hidden">
          <label className="text-sm font-medium">Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full rounded border border-gray-200 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit || status === "sending"}
          className="rounded bg-gracelife-purple px-5 py-2 text-white transition-opacity disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>

        {status === "sent" && (
          <div className="rounded border border-gracelife-teal/30 bg-gracelife-teal/5 p-3 text-sm text-gray-700">
            Thanks — your enquiry has been sent.
          </div>
        )}

        {status === "error" && (
          <div className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {errorMsg || "Failed to send."}
          </div>
        )}
      </form>
    </div>
  );
}
