"use client";

import { useMemo, useState } from "react";

type Program = "DVA" | "NDIS" | "Aged Care" | "General";

export default function ContactClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState<Program>("General");
  const [message, setMessage] = useState("");

  // Honeypot
  const [company, setCompany] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canSubmit = useMemo(
    () =>
      fullName.trim().length >= 2 &&
      email.trim().length > 3 &&
      message.trim().length >= 10,
    [fullName, email, message]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    if (company.trim()) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, program, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Failed to send.");
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
      setErrorMsg("Failed to send. Please try again.");
    }
  }

  return (
    <section className="grid gap-8 md:grid-cols-2">
      {/* Form */}
      <div className="rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Enquiry form</h2>

        <form className="mt-5 space-y-4" onSubmit={onSubmit}>
          {/* fields unchanged — kept as-is */}
          {/* ... your full form JSX stays here ... */}
        </form>
      </div>

      {/* Info panel */}
      <div className="space-y-6">
        <div className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
          <h3 className="text-lg font-semibold">What happens next</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• We review your enquiry and confirm the best pathway</li>
            <li>• We may ask clarifying questions</li>
            <li>• We confirm availability and next steps</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
