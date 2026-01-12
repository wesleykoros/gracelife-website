import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Gracelife Care Services",
  description:
    "Contact Gracelife Care Services to enquire about DVA, NDIS, or Aged Care support. We respond promptly to all enquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Contact <span className="text-gracelife-purple">Gracelife</span>
        </h1>
        <p className="max-w-2xl text-gray-700">
          Send an enquiry and our team will respond as soon as possible.  
          If you’re contacting us about DVA, NDIS, or Aged Care support, select the program below.
        </p>
      </section>

      {/* Two-column layout */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* LEFT: Form */}
        <ContactClient />

        {/* RIGHT: Info / trust panel */}
        <div className="space-y-6">
          <div className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
            <h3 className="text-lg font-semibold">What happens next</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>
                  We review your enquiry and confirm the best pathway (DVA, NDIS, Aged Care, or General).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>
                  We may ask a few questions to understand preferences, risks, and scheduling needs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>
                  We confirm availability and next steps for starting support.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Privacy</h3>
            <p className="mt-2 text-sm text-gray-700">
              Please avoid sharing highly sensitive medical details in the enquiry form.
              We’ll collect clinical information via appropriate channels if required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


