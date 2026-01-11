import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <div className="font-medium text-gray-900">
              Gracelife Care Services
            </div>
            <div className="text-xs text-gray-500">
              DVA • NDIS • Aged Care
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-1 text-sm">
            <div className="font-medium text-gray-900">Contact</div>
            <div>
              <a
                href="mailto:info@gracelifecareservices.com.au"
                className="transition-colors hover:text-gracelife-teal"
              >
                info@gracelifecareservices.com.au
              </a>
            </div>
            <div>
              <a
                href="tel:+61405564495"
                className="transition-colors hover:text-gracelife-teal"
              >
                0405 564 495
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-1">
            <div className="font-medium text-gray-900">Legal</div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-gracelife-purple"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-gracelife-purple"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Gracelife Care Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
