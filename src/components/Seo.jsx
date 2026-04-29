import Head from "next/head";
import { businessInfo, menuSections, siteUrl } from "@/lib/siteData";

const defaultImage = `${siteUrl}/logo.png`;

function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: businessInfo.name,
    description: businessInfo.description,
    url: siteUrl,
    image: defaultImage,
    telephone: businessInfo.restaurantPhone,
    email: businessInfo.email,
    servesCuisine: businessInfo.cuisine,
    priceRange: "$$",
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: businessInfo.address.country,
    },
    hasMenu: `${siteUrl}/menu`,
    sameAs: [businessInfo.facebook],
  };
}

function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "India Spice House Menu",
    url: `${siteUrl}/menu`,
    hasMenuSection: menuSections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      description: section.description,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
      })),
    })),
  };
}

export { menuJsonLd, restaurantJsonLd };

export default function Seo({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  jsonLd = [],
}) {
  const url = `${siteUrl}${path}`;
  const titleTemplate = title.includes("India Spice House")
    ? title
    : `${title} | India Spice House`;
  const schemaItems = [restaurantJsonLd(), ...jsonLd];

  return (
    <Head>
      <title>{titleTemplate}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/logo.png" />

      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="India Spice House" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItems) }}
      />
    </Head>
  );
}
