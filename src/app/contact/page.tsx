import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gracelife Care Services to enquire about DVA, NDIS, or Aged Care support. We respond promptly to all enquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Contact <span className="text-gracelife-purple">Gracelife</span>
        </h1>
        <p className="max-w-2xl text-gray-700">
          Send an enquiry and our team will respond as soon as possible.
        </p>
      </section>

      <ContactClient />
    </div>
  );
}
