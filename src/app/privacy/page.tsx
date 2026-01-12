import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Gracelife Care Services privacy policy outlining how we collect, use, and protect personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Privacy <span className="text-gracelife-purple">Policy</span>
        </h1>
        <p className="max-w-2xl text-gray-700">
          This Privacy Policy explains how Gracelife Care Services collects, uses, stores,
          and discloses personal information in connection with our services and website.
        </p>
      </header>

      <section className="space-y-5 rounded-lg border border-gray-200 bg-white p-6">
        <div>
          <h2 className="text-lg font-semibold">1. What we collect</h2>
          <p className="mt-2 text-sm text-gray-700">
            We may collect personal information you provide to us, such as your name, contact
            details (email/phone), and information relevant to your enquiry or service request.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2. How we use your information</h2>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="mt-[2px] text-gracelife-teal">•</span>
              <span>To respond to enquiries and provide information about our services.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[2px] text-gracelife-purple">•</span>
              <span>
                To coordinate services and communicate with you (or your nominated representative).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[2px] text-gracelife-teal">•</span>
              <span>
                To meet legal, regulatory, and quality/safety obligations (where applicable).
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Sensitive information</h2>
          <p className="mt-2 text-sm text-gray-700">
            Please avoid submitting highly sensitive medical information through the website
            enquiry form. If clinical details are required, we will collect them through
            appropriate channels.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. Sharing and disclosure</h2>
          <p className="mt-2 text-sm text-gray-700">
            We do not sell personal information. We may share information with trusted service
            providers (for example, secure email delivery) and where required or authorised by law.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Storage and security</h2>
          <p className="mt-2 text-sm text-gray-700">
            We take reasonable steps to protect personal information from loss, misuse,
            unauthorised access, and disclosure. No online transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">6. Access and correction</h2>
          <p className="mt-2 text-sm text-gray-700">
            You may request access to, or correction of, personal information we hold about you,
            subject to applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Contact</h2>
          <p className="mt-2 text-sm text-gray-700">
            For privacy questions or requests, please contact us via the{" "}
            <Link
              href="/contact"
              className="text-gracelife-purple underline underline-offset-4"
            >
              Contact page
            </Link>
            .
          </p>
        </div>

        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString("en-AU")}
        </div>
      </section>
    </div>
  );
}
