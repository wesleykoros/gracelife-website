type ServiceArea = { name: string };

type SchemaOrgProps = {
  baseUrl: string;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
  email?: string;
  telephone?: string;
  serviceAreas?: ServiceArea[];
};

export default function SchemaOrg({
  baseUrl,
  name,
  description,
  logoUrl,
  imageUrl,
  email,
  telephone,
  serviceAreas = [],
}: SchemaOrgProps) {
  // Ensure URLs are consistent (no trailing slash issues)
  const siteUrl = baseUrl.replace(/\/+$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteUrl}/#business`,
        name,
        url: siteUrl,
        image: imageUrl,
        logo: logoUrl,
        description,
        areaServed:
          serviceAreas.length > 0
            ? serviceAreas.map((a) => ({ "@type": "AdministrativeArea", name: a.name }))
            : "Australia",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AU",
        },
        ...(email ? { email } : {}),
        ...(telephone ? { telephone } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name,
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#homepage`,
        url: siteUrl,
        name,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
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
