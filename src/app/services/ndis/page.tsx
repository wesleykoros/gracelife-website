import Link from "next/link";

export default function NdisServicesPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <div className="inline-flex items-center rounded border border-gracelife-purple/30 bg-gracelife-purple/5 px-3 py-1 text-sm font-semibold text-gracelife-purple">
          NDIS Services
        </div>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          NDIS Disability Support{" "}
          <span className="text-gracelife-purple">Services</span>
        </h1>

        <p className="max-w-2xl text-gray-700">
          Gracelife Care Services delivers person-centred NDIS supports aligned to
          participant goals, routines, and preferences. We focus on respect,
          consistency, and practical support that helps people live well day-to-day.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an NDIS enquiry
          </Link>
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            Back to Services
          </Link>
        </div>
      </section>

      {/* SUPPORTS */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Supports we provide</h2>
          <p className="mt-2 text-sm text-gray-700">
            Supports are tailored to your goals and plan needs and may be delivered
            at home and/or in the community.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Assistance with Daily Living (in-home supports)",
              "Personal care and routine support",
              "Community access and participation",
              "Support with life skills, routines, and independence",
              "Social support and connection",
              "Care coordination support (where applicable)",
              "Supported Independent Living (SIL) support (where appropriate)",
              "High-intensity / complex support needs (where required and appropriate)",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded border border-gray-200 bg-gray-50 p-4">
            <div className="text-sm font-semibold text-gray-900">Note</div>
            <p className="mt-1 text-sm text-gray-700">
              Specific supports are confirmed during intake based on your plan,
              preferences, and service availability.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
          <h2 className="text-xl font-semibold">How we work</h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Participant-led and goal-focused support",
              "Respectful, culturally safe care",
              "Clear communication with participants and families",
              "Consistent staff where possible",
              "Progress updates that support plan outcomes",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded border border-gracelife-teal/30 bg-white p-4">
            <div className="text-sm font-semibold text-gracelife-teal">
              We support
            </div>
            <p className="mt-1 text-sm text-gray-700">
              Participants seeking practical in-home support, community access, and
              assistance building independence and everyday routines.
            </p>
          </div>
        </div>
      </section>

      {/* GOALS / OUTCOMES */}
      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Typical goals we support</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-gracelife-purple">
              Daily routines
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Support with consistent routines, self-care, meal preparation, and
              everyday activities.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              Community participation
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Building confidence to access community activities, appointments,
              and social supports.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-purple">
              Independence
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Practical assistance that supports choice, control, and skill-building
              over time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>

        <div className="mt-4 space-y-6">
          <div>
            <div className="font-medium">
              Can a support coordinator contact you?
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — support coordinators are welcome to reach out. We can discuss
              supports, availability, and next steps.
            </p>
          </div>

          <div>
            <div className="font-medium">
              Do you provide in-home and community supports?
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — supports can be delivered at home and/or in the community, based
              on your plan and preferences.
            </p>
          </div>

          <div>
            <div className="font-medium">How do I get started?</div>
            <p className="mt-2 text-sm text-gray-700">
              Contact us and tell us what supports you’re looking for. We’ll guide
              you through intake and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-gracelife-purple/30 bg-gracelife-purple/5 p-6">
        <h2 className="text-xl font-semibold">Talk to Gracelife about NDIS support</h2>
        <p className="mt-2 text-sm text-gray-700">
          We’re here to help you understand options and set up supports that fit your goals.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an NDIS enquiry
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
