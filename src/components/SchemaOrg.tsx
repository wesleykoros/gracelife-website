export default function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://gracelifecareservices.com.au/#business",
        name: "Gracelife Care Services",
        url: "https://gracelifecareservices.com.au",
        image: "https://gracelifecareservices.com.au/og-image.jpg",
        description:
          "Gracelife Care Services provides compassionate in-home support and community health care for DVA clients, NDIS participants, and older Australians.",
        areaServed: "Australia",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AU",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://gracelifecareservices.com.au/#website",
        url: "https://gracelifecareservices.com.au",
        name: "Gracelife Care Services",
        publisher: { "@id": "https://gracelifecareservices.com.au/#business" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
