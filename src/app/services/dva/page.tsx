import Link from "next/link";

export default function DvaServicesPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <div className="inline-flex items-center rounded border border-gracelife-teal/30 bg-gracelife-teal/5 px-3 py-1 text-sm font-semibold text-gracelife-teal">
          DVA Services
        </div>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          DVA Community Nursing &{" "}
          <span className="text-gracelife-purple">Veteran Support</span>
        </h1>

        <p className="max-w-2xl text-gray-700">
          Gracelife Care Services supports eligible veterans and their families with
          respectful, reliable care at home. We work with you and your health team
          to help maintain independence, safety, and dignity.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make a DVA enquiry
          </Link>
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            Back to Services
          </Link>
        </div>
      </section>

      {/* WHAT WE CAN HELP WITH */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">How we can help</h2>
          <p className="mt-2 text-sm text-gray-700">
            Our team provides clinically informed, person-centred care designed to
            support everyday living and reduce avoidable hospital visits.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Community nursing and clinical support at home",
              "Medication support and prompts (as appropriate)",
              "Wound care and dressing changes (as clinically required)",
              "Continence support and monitoring",
              "Chronic disease monitoring and wellbeing checks",
              "Personal care",
              "Post-hospital support and care coordination",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gracelife-purple/30 bg-gracelife-purple/5 p-6">
          <h2 className="text-xl font-semibold">What you can expect</h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Respectful, veteran-centred communication",
              "Reliable scheduling and clear coordination",
              "Accurate documentation and progress updates",
              "Privacy, dignity, and culturally safe care",
              "A consistent team wherever possible",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded border border-gracelife-purple/30 bg-white p-4">
            <div className="text-sm font-semibold text-gracelife-purple">
              Suitable for:
            </div>
            <p className="mt-1 text-sm text-gray-700">
              Veterans and families seeking coordinated support at home, post-hospital
              follow-up, or ongoing monitoring and care.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS / DELIVERY */}
      <section className="rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Service delivery</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              In-home support
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Care delivered at home, focused on safety, independence, and day-to-day
              wellbeing.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-purple">
              Coordination
            </div>
            <p className="mt-2 text-sm text-gray-700">
              We liaise with your GP and relevant providers to support continuity of
              care where needed.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              Documentation
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Clear notes and updates that support safe care delivery and communication
              with appropriate parties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>

        <div className="mt-4 space-y-6">
          <div>
            <div className="font-medium">How do I start DVA services?</div>
            <p className="mt-2 text-sm text-gray-700">
              Contact us and we’ll guide you through the intake process and the best
              pathway based on your needs.
            </p>
          </div>

          <div>
            <div className="font-medium">Do you support post-hospital care?</div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — we can assist with post-hospital support and help coordinate care
              where appropriate.
            </p>
          </div>

          <div>
            <div className="font-medium">Can family members make an enquiry?</div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — families are welcome to contact us to discuss support needs and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
        <h2 className="text-xl font-semibold">Talk to Gracelife about DVA support</h2>
        <p className="mt-2 text-sm text-gray-700">
          Tell us what support is needed and we’ll help you navigate the next steps.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make a DVA enquiry
          </Link>
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            View all services
          </Link>
        </div>
      </section>
    </div>
  );
}
