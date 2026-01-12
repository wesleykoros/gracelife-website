import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using the Gracelife Care Services website and services.",
};

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Terms <span className="text-gracelife-purple">of Use</span>
        </h1>
        <p className="max-w-2xl text-gray-700">
          These Terms of Use apply to your use of the Gracelife Care Services website.
          By using this site, you agree to these terms.
        </p>
      </header>

      <section className="space-y-5 rounded-lg border border-gray-200 bg-white p-6">
        <div>
          <h2 className="text-lg font-semibold">1. General information only</h2>
          <p className="mt-2 text-sm text-gray-700">
            Content on this website is provided for general information only and does not
            constitute medical or clinical advice. For medical advice, consult a qualified
            healthcare professional.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2. Enquiries and service availability</h2>
          <p className="mt-2 text-sm text-gray-700">
            Submitting an enquiry does not guarantee service availability. We will confirm
            suitability, scheduling, and any relevant program requirements during intake.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Acceptable use</h2>
          <p className="mt-2 text-sm text-gray-700">
            You agree not to misuse this website, including attempting unauthorised access,
            interfering with site operation, or submitting false or misleading information.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. Third-party services</h2>
          <p className="mt-2 text-sm text-gray-700">
            We may use third-party services (for example, email delivery providers) to support
            website operations. Their services may be subject to their own terms and policies.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Limitation of liability</h2>
          <p className="mt-2 text-sm text-gray-700">
            To the extent permitted by law, Gracelife Care Services is not liable for any loss
            arising from use of this website or reliance on its content.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">6. Changes to these terms</h2>
          <p className="mt-2 text-sm text-gray-700">
            We may update these terms from time to time. Continued use of the website means
            you accept any updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Contact</h2>
          <p className="mt-2 text-sm text-gray-700">
            If you have questions about these terms, please contact us via the{" "}
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

