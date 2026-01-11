import Link from "next/link";
import Image from "next/image";

const navLinkClass =
  "relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.jpg"
            alt="Gracelife Care Services logo"
            width={56}
            height={56}
            priority
          />

          <div className="leading-tight">
            <div className="font-semibold">Gracelife Care Services</div>
            <div className="text-sm text-gray-600">
              Compassionate care, delivered where you live.
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services" className={navLinkClass}>
            Services
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded border border-gracelife-purple px-3 py-2 text-gracelife-purple transition-colors hover:bg-gracelife-purple hover:text-white"
          >
            Make an enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
