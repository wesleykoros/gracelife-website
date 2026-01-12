4
import type { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gracelife Care Services, our people, values, and commitment to dignified DVA, NDIS, and Aged Care support.",
};
export default function AboutPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          About{" "}
          <span className="text-gracelife-purple">Gracelife Care Services</span>
        </h1>

        <p className="max-w-2xl text-gray-700">
          Gracelife Care Services is a community-focused provider delivering
          respectful, reliable in-home care across DVA, NDIS, and Aged Care programs.
          Our focus is simple: care that supports dignity, independence, and everyday wellbeing.
        </p>
      </section>

      {/* BRAND STORY */}
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Our story</h2>
          <p className="mt-3 text-sm text-gray-700">
            Gracelife Care Services was established to provide care that feels personal,
            consistent, and grounded in respect. We recognise that support at home is
            not just about tasks — it’s about trust, relationships, and understanding
            what matters most to each person.
          </p>
          <p className="mt-3 text-sm text-gray-700">
            Our services are designed to fit naturally into people’s lives, supporting
            independence while offering reassurance to families and carers. Whether
            supporting veterans, people with disability, or older Australians, we
            approach every service with professionalism and compassion.
          </p>
        </div>

        <div className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
          <h3 className="text-lg font-semibold text-gracelife-teal">
            What guides our work
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Respect for dignity, choice, and independence",
              "Care that is person-centred and strengths-based",
              "Reliable service delivery and clear communication",
              "Culturally safe and inclusive practices",
              "Professional standards across all programs",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
<section className="space-y-6">
  <h2 className="text-xl font-semibold">Who we support</h2>

  <div className="grid gap-6 md:grid-cols-3">
    {/* DVA */}
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Image
        src="/about/home-care.jpg"
        alt="Veteran and in-home care support"
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="text-sm font-semibold text-gracelife-teal">
          Veterans (DVA)
        </div>
        <p className="mt-2 text-sm text-gray-700">
          Supporting eligible veterans and families with respectful, coordinated
          care that enables independence at home.
        </p>
      </div>
    </div>

    {/* NDIS */}
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Image
        src="/about/disability-support.jpg"
        alt="NDIS disability support at home"
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="text-sm font-semibold text-gracelife-purple">
          NDIS Participants
        </div>
        <p className="mt-2 text-sm text-gray-700">
          Delivering flexible, participant-led supports aligned to individual
          goals, routines, and preferences.
        </p>
      </div>
    </div>

    {/* Aged Care */}
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Image
        src="/about/aged-care.jpg"
        alt="Aged care support at home"
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="text-sm font-semibold text-gracelife-teal">
          Older Australians
        </div>
        <p className="mt-2 text-sm text-gray-700">
          Providing reliable aged care and support at home that promotes comfort,
          safety, and dignity.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* SERVICE APPROACH */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Our approach to care</h2>
          <p className="mt-3 text-sm text-gray-700">
            We take a thoughtful, structured approach to care delivery — ensuring the
            right supports are in place, communication is clear, and services are
            delivered consistently.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Clear intake and service planning",
              "Consistent carers wherever possible",
              "Ongoing communication with clients and families",
              "Respect for privacy and personal boundaries",
              "Focus on safety and wellbeing",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gracelife-purple/30 bg-gracelife-purple/5 p-6">
          <h2 className="text-xl font-semibold">Why families choose Gracelife</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Compassionate, people-first care",
              "Professional and dependable support",
              "Clear communication and accountability",
              "Services tailored to real-life needs",
              "A calm, respectful approach to care",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[2px] text-gracelife-purple">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-gracelife-teal/30 bg-gracelife-teal/5 p-6">
        <h2 className="text-xl font-semibold">
          Learn how Gracelife can support you
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Whether you’re exploring care options for yourself or a loved one,
          our team is here to help.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded border border-gracelife-teal px-5 py-2 text-gracelife-teal transition-colors hover:bg-gracelife-teal hover:text-white"
          >
            View our services
          </Link>
          <Link
            href="/contact"
            className="rounded bg-gracelife-purple px-5 py-2 text-white transition-colors hover:opacity-90"
          >
            Make an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}