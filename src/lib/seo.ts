import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
};

/**
 * Google truncates meta descriptions around 155-160 characters. Trim at a word
 * boundary here so every page is covered rather than each caller remembering.
 */
function trimDescription(input: string, limit = 155) {
  const text = input.trim();
  if (text.length <= limit) return text;

  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > limit - 25 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.\u2014-]+$/, "")}…`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noindex = false,
  image = "/og-default.jpg",
  imageAlt = "ZEEPACK premium custom packaging",
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const imageUrl = new URL(image, siteConfig.siteUrl).toString();
  const summary = trimDescription(description);

  return {
    title,
    description: summary,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      // Keep following: a noindex page should still pass link equity onward
      // rather than becoming a dead end in the crawl.
      follow: true,
    },
    openGraph: {
      title,
      description: summary,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [imageUrl],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/og-default.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: "2020",
    legalName: "ZEEPACK LLC",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2975 Coburn Hollow Road",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: ["US", "CA", "GB", "AU"],
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Packaging Products",
      url: `${siteConfig.siteUrl}/products`,
    },
    sameAs: [
      "https://www.facebook.com/zeecustomboxes",
      "https://www.instagram.com/zeecustomboxes",
      "https://www.linkedin.com/company/85652701",
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "en-US",
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/og-default.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2975 Coburn Hollow Road",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.siteUrl).toString(),
    })),
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildProductSchema(input: {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  additionalProperty?: Array<{ name: string; value: string }>;
  /** Real customer reviews only — feeds aggregateRating; omit when none exist. */
  reviews?: Array<{ author: string; rating: number; text: string; date: string }>;
}) {
  // Canonical URLs on this site never take a trailing slash.
  const pageUrl = new URL(input.path, siteConfig.siteUrl).toString().replace(/\/$/, "");
  // SKU is the page slug (last path segment), stable per product.
  const sku = input.path.split("/").filter(Boolean).pop() ?? input.path;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    sku,
    image: [new URL(input.image, siteConfig.siteUrl).toString()],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: input.category,
    url: pageUrl,
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    offers: input.offers
      ? {
          "@type": "Offer",
          price: input.offers.price,
          priceCurrency: input.offers.priceCurrency,
          availability: input.offers.availability,
          itemCondition: "https://schema.org/NewCondition",
          priceValidUntil: "2027-08-04",
          url: pageUrl,
          seller: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "US",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 3,
                maxValue: 5,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 3,
                maxValue: 5,
                unitCode: "DAY",
              },
            },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: ["US", "CA", "GB", "AU"],
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 15,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
        }
      : undefined,
    additionalProperty: input.additionalProperty?.map((item) => ({
      "@type": "PropertyValue",
      name: item.name,
      value: item.value,
    })),
    ...(input.reviews && input.reviews.length
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              Math.round(
                (input.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  input.reviews.length) *
                  10,
              ) / 10
            ).toFixed(1),
            reviewCount: input.reviews.length,
            bestRating: "5",
          },
          review: input.reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(r.rating),
              bestRating: "5",
            },
            reviewBody: r.text,
            datePublished: r.date,
          })),
        }
      : {}),
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: "United States",
    url: new URL(input.path, siteConfig.siteUrl).toString(),
  };
}
