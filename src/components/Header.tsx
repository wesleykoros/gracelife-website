"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt="Gracelife Care Services"
              width={48}
              height={48}
              className="h-12 w-12"
              priority
            />

            <div className="leading-tight">
              <div className="font-semibold text-gray-900">
                Gracelife Care Services
              </div>

              {/* Tagline ONLY on desktop */}
              <div className="hidden text-sm text-gray-600 md:block">
                Compassionate care, delivered where you live.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded border border-gracelife-purple px-3 py-2 text-gracelife-purple hover:bg-gracelife-purple hover:text-white"
            >
              Make an enquiry
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden rounded border p-2"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded bg-gracelife-purple px-4 py-3 text-center text-white"
              >
                Make an enquiry
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
