export default function ComplianceStrip() {
  return (
    <section
      aria-labelledby="compliance-heading"
      className="rounded-2xl border border-gray-200 bg-white px-6 py-5"
    >
      <h2 id="compliance-heading" className="sr-only">
        Compliance and accreditation
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* NDIS */}
        <div className="flex items-start gap-4">
          <span
            className="mt-1.5 h-3 w-3 rounded-full bg-gracelife-teal"
            aria-hidden
          />
          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-900">
              NDIS Registered Provider
            </div>
            <p className="mt-1 text-sm text-gray-700">
              Delivering participant-centred supports in line with NDIS Practice
              Standards and Quality &amp; Safeguards requirements.
            </p>
          </div>
        </div>

        {/* DVA */}
        <div className="flex items-start gap-4">
          <span
            className="mt-1.5 h-3 w-3 rounded-full bg-gracelife-purple"
            aria-hidden
          />
          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-900">
              DVA Community Nursing
            </div>
            <p className="mt-1 text-sm text-gray-700">
              Supporting eligible veterans with respectful, coordinated community
              nursing and in-home care services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
