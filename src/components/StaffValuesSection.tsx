import Image from "next/image";
import Link from "next/link";

type StaffMember = {
  name: string;
  role: string;
  blurb: string;
  imageSrc: string;
};

const staff = [
  {
    name: "Our Clinical Team",
    role: "Registered Nurses & Community Clinicians",
    blurb:
      "Providing clinically informed care, oversight, and coordination to support safety and wellbeing at home.",
    imageSrc: "/team/staff-1.jpg",
  },
  {
    name: "Our Support Workers",
    role: "NDIS & Community Support",
    blurb:
      "Delivering practical, person-centred support that aligns with goals, routines, and independence.",
    imageSrc: "/team/staff-2.jpg",
  },
  {
    name: "Our Care Coordination Team",
    role: "Intake, Scheduling & Communication",
    blurb:
      "Ensuring smooth onboarding, clear communication, and reliable scheduling for clients and families.",
    imageSrc: "/team/staff-3.jpg",
  },
];


const values = [
  {
    title: "Dignity & Respect",
    text: "We deliver care that protects privacy, choice, and personal dignity—always.",
    accent: "teal",
  },
  {
    title: "Reliable Support",
    text: "Consistent communication and dependable scheduling you can count on.",
    accent: "purple",
  },
  {
    title: "Person-centred Care",
    text: "Support tailored to goals, routines, culture, and what matters most to you.",
    accent: "teal",
  },
  {
    title: "Safety First",
    text: "Clinically informed care with clear documentation and risk-aware practice.",
    accent: "purple",
  },
] as const;

export default function StaffValuesSection() {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Our people & values
        </h2>
        <p className="max-w-3xl text-gray-700">
          Gracelife Care Services is built on compassionate, professional support.
          Our team focuses on dignity, reliability, and care that fits real life.
        </p>
      </div>

      {/* Values */}
      <div className="grid gap-4 md:grid-cols-2">
        {values.map((v) => {
          const isPurple = v.accent === "purple";
          const border = isPurple
            ? "border-gracelife-purple/25"
            : "border-gracelife-teal/25";
          const bg = isPurple ? "bg-gracelife-purple/5" : "bg-gracelife-teal/5";
          const dot = isPurple ? "bg-gracelife-purple" : "bg-gracelife-teal";

          return (
            <div
              key={v.title}
              className={`rounded-2xl border ${border} ${bg} p-6`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-2 h-2.5 w-2.5 rounded-full ${dot}`} />
                <div>
                  <div className="font-semibold">{v.title}</div>
                  <p className="mt-1 text-sm text-gray-700">{v.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Staff grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {staff.map((m) => (
          <div
            key={m.name}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <div className="relative h-44 w-full">
              <Image
                src={m.imageSrc}
                alt={`${m.name} — ${m.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* subtle overlay for consistency */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="space-y-2 p-5">
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
              <p className="text-sm text-gray-700">{m.blurb}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold">Want to speak with our team?</div>
            <p className="mt-1 text-sm text-gray-700">
              Send an enquiry and we’ll respond as soon as possible.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
            >
              Make an enquiry
            </Link>
            <Link
              href="/services"
              className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
