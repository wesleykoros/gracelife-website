import Link from "next/link";

export default function AgedCareServicesPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <div className="inline-flex items-center rounded border border-gracelife-teal/30 bg-gracelife-teal/5 px-3 py-1 text-sm font-semibold text-gracelife-teal">
          Aged Care Services
        </div>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Aged Care &{" "}
          <span className="text-gracelife-purple">Support at Home</span>
        </h1>

        <p className="max-w-2xl text-gray-700">
          Gracelife Care Services provides respectful in-home support to help older
          Australians remain safe, comfortable, and independent at home. We focus on
          dignity, reliability, and care that fits your routines and preferences.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an aged care enquiry
          </Link>
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            Back to Services
          </Link>
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Supports we provide</h2>
          <p className="mt-2 text-sm text-gray-700">
            We provide practical support that helps people stay well at home, with
            consistency and respect.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Personal care (showering, toileting, grooming)",
              "Assistance with mobility and transfers (as appropriate)",
              "Domestic assistance (cleaning, laundry, meal preparation)",
              "Medication reminders and wellbeing checks",
              "Social support and companionship",
              "Respite support for family carers",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gracelife-purple/30 bg-gracelife-purple/5 p-6">
          <h2 className="text-xl font-semibold">Our approach</h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Person-centred support tailored to your preferences",
              "Respect for cultural, spiritual, and personal values",
              "Consistent staff where possible for continuity",
              "Clear communication with clients and families",
              "Support that promotes dignity, comfort, and independence",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded border border-gracelife-purple/30 bg-white p-4">
            <div className="text-sm font-semibold text-gracelife-purple">
              Ideal for:
            </div>
            <p className="mt-1 text-sm text-gray-700">
              Older people who want reliable support at home, and families looking for
              dependable care partners.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">How it works</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              1. Enquire
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Contact us to discuss support needs, preferred schedule, and any current
              services already in place.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-purple">
              2. Plan
            </div>
            <p className="mt-2 text-sm text-gray-700">
              We confirm the right supports, align expectations, and plan a safe and
              consistent service approach.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              3. Support
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Care begins with reliable delivery, clear communication, and respectful
              support that fits daily life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>

        <div className="mt-4 space-y-6">
          <div>
            <div className="font-medium">Can family members make an enquiry?</div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — families are welcome to contact us to discuss support needs and next steps.
            </p>
          </div>

          <div>
            <div className="font-medium">Do you provide respite?</div>
            <p className="mt-2 text-sm text-gray-700">
              Yes — we can provide respite support to help family carers take a break,
              based on availability and support requirements.
            </p>
          </div>

          <div>
            <div className="font-medium">How soon can services start?</div>
            <p className="mt-2 text-sm text-gray-700">
              This depends on support needs and availability. Contact us and we’ll discuss
              the best pathway and timeframes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
        <h2 className="text-xl font-semibold">Talk to Gracelife about aged care support</h2>
        <p className="mt-2 text-sm text-gray-700">
          We’re here to help you explore options and plan support that fits your needs.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an aged care enquiry
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
