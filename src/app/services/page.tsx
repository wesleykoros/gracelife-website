import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Gracelife Care Services including DVA community nursing, NDIS disability support, and Aged Care services delivered at home.",
};
const services = [
  {
    title: "DVA Community Nursing & Veteran Support",
    tag: "DVA",
    href: "/services/dva",
    accent: "teal",
    bullets: [
      "Community nursing and clinical support at home",
      "Post-hospital follow-up and care coordination",
      "Medication support and chronic disease monitoring",
      "Respectful, veteran-centred approach",
    ],
  },
  {
    title: "NDIS Disability Support Services",
    tag: "NDIS",
    href: "/services/ndis",
    accent: "purple",
    bullets: [
      "Assistance with Daily Living (in-home supports)",
      "Community access and participation",
      "Capacity building and routine support",
      "Goal-focused, participant-led care",
    ],
  },
  {
    title: "Aged Care & Support at Home",
    tag: "Aged Care",
    href: "/services/aged-care",
    accent: "teal",
    bullets: [
      "Personal care (showering, toileting, grooming)",
      "Domestic assistance and meal preparation",
      "Medication reminders and wellbeing checks",
      "Social support and respite for carers",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      {/* HERO with image */}
      <section className="relative overflow-hidden rounded-lg border">
        <Image
          src="/services/services-hero.jpg"
          alt="Community health care services"
          width={1200}
          height={600}
          className="h-64 w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-6 text-white">
            <h1 className="text-3xl font-semibold md:text-4xl">Our Services</h1>
            <p className="mt-2 text-sm">
              DVA • NDIS • Aged Care support delivered with dignity and care.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
              >
                Make an enquiry
              </Link>
              <Link
                href="/contact"
                className="rounded border border-white/70 px-5 py-2 text-white transition-colors hover:bg-white hover:text-black"
              >
                Referral / intake
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="grid gap-6 md:grid-cols-3">
        {services.map((s) => {
          const isPurple = s.accent === "purple";
          const border = isPurple
            ? "border-gracelife-purple/30"
            : "border-gracelife-teal/30";
          const bg = isPurple ? "bg-gracelife-purple/5" : "bg-gracelife-teal/5";
          const tag = isPurple ? "text-gracelife-purple" : "text-gracelife-teal";

          return (
            <div
              key={s.href}
              className={`rounded-lg border ${border} ${bg} p-6 transition-shadow hover:shadow-sm`}
            >
              <div className={`mb-2 text-sm font-semibold ${tag}`}>{s.tag}</div>
              <h2 className="text-lg font-semibold">{s.title}</h2>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className={`${tag} mt-[2px]`}>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={s.href}
                  className={`inline-flex items-center rounded border px-4 py-2 text-sm transition-colors ${
                    isPurple
                      ? "border-gracelife-purple text-gracelife-purple hover:bg-gracelife-purple hover:text-white"
                      : "border-gracelife-teal text-gracelife-teal hover:bg-gracelife-teal hover:text-white"
                  }`}
                >
                  View {s.tag} services
                </Link>
              </div>
            </div>
          );
        })}
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
              Tell us what support is needed and whether it’s DVA, NDIS, Aged Care,
              or general in-home services.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-purple">
              2. Plan
            </div>
            <p className="mt-2 text-sm text-gray-700">
              We confirm the right service approach, schedule, and any documentation
              required for safe service delivery.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gracelife-teal">
              3. Support
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Care begins with reliable staff, clear communication, and a focus on dignity
              and consistent support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
