import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gracelife Care Services | DVA, NDIS & Aged Care Support",
    template: "%s | Gracelife Care Services",
  },
  description:
    "Gracelife Care Services provides compassionate in-home support and community health care for DVA clients, NDIS participants, and older Australians.",
  keywords: [
    "Gracelife Care Services",
    "DVA community nursing",
    "NDIS disability support",
    "Aged care at home",
    "In-home care Australia",
    "Community nursing services",
    "Disability support services",
  ],
  authors: [{ name: "Gracelife Care Services" }],
  metadataBase: new URL("https://gracelifecareservices.com.au"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Gracelife Care Services",
    description:
      "Compassionate care, delivered where you live. DVA, NDIS & Aged Care support.",
    url: "https://gracelifecareservices.com.au",
    siteName: "Gracelife Care Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gracelife Care Services – Compassionate care at home",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracelife Care Services",
    description:
      "Compassionate care, delivered where you live. DVA, NDIS & Aged Care support.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gracelife-teal/10 via-white to-white`}
      >
        {/* ✅ Schema.org JSON-LD (Global) */}
        <SchemaOrg
          baseUrl="https://gracelifecareservices.com.au"
          name="Gracelife Care Services"
          description="Gracelife Care Services provides compassionate in-home support and community health care for DVA clients, NDIS participants, and older Australians."
          logoUrl="https://gracelifecareservices.com.au/brand/logo.jpg"
          imageUrl="https://gracelifecareservices.com.au/og-image.jpg"
          email="info@gracelifecareservices.com.au"
          telephone="+61405564495"
          serviceAreas={[
            { name: "New South Wales" },
            { name: "Greater Sydney and Regional New South Wales" },
          ]}
        />

        {/* ✅ Tidio Chat Widget */}
        <Script
          id="tidio-chat"
          strategy="afterInteractive"
          src="https://code.tidio.co/ybcq5ua2xjjvjyi2a7ct8csvboqrptjl.js"
        />

        <Header />

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
