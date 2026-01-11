import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Compassionate care,{" "}
          <span className="text-gracelife-purple">delivered where you live.</span>
        </h1>

        <p className="max-w-2xl text-gray-700">
          Gracelife Care Services provides dependable in-home support and community
          health care tailored to DVA clients, NDIS participants, and older Australians.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            View services
          </Link>

          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an enquiry
          </Link>
        </div>
      </section>

      {/* PROGRAMS (with images) */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "DVA",
            image: "/home/home-care.jpg",
            color: "text-gracelife-teal",
            desc: "Veteran-focused support delivered with respect and coordination.",
            href: "/services/dva",
          },
          {
            title: "NDIS",
            image: "/home/disability-support.jpg",
            color: "text-gracelife-purple",
            desc: "Participant-led supports aligned to goals and independence.",
            href: "/services/ndis",
          },
          {
            title: "Aged Care",
            image: "/home/aged-care.jpg",
            color: "text-gracelife-teal",
            desc: "Helping older Australians remain safe and supported at home.",
            href: "/services/aged-care",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="overflow-hidden rounded-lg border transition-shadow hover:shadow-sm"
          >
            <Image
              src={item.image}
              alt={`${item.title} support`}
              width={600}
              height={400}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <div className={`font-semibold ${item.color}`}>{item.title}</div>
              <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="rounded-lg border border-gracelife-purple/30 bg-gracelife-purple/5 p-6">
        <h2 className="text-xl font-semibold">What families say</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            "The care felt respectful and reliable. We finally felt supported.",
            "Staff were professional, kind, and always on time.",
            "Gracelife made navigating care much easier for our family.",
          ].map((quote, i) => (
            <div key={i} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-700">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
        <h2 className="text-xl font-semibold">Need support at home?</h2>
        <p className="mt-2 text-sm text-gray-700">
          Speak with our team about DVA, NDIS, or Aged Care support options.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
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
      </section>
    </div>
  );
}

