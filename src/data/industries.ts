export type Industry = {
  slug: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  packagingFocus: string[];
};

export const industries: Industry[] = [
  {
    slug: "cosmetics",
    name: "Cosmetics",
    description:
      "Packaging for skincare, beauty, fragrance, and wellness brands that need precision, clarity, and elevated shelf appeal.",
    image: "/images/curated/skin-care-oil-box.webp",
    highlights: [
      "Retail presentation",
      "Fine-detail finishing",
      "Custom inserts for jars and bottles",
    ],
    packagingFocus: [
      "Cosmetic boxes",
      "Perfume boxes",
      "Rigid gifting boxes",
      "Labels and tissue paper",
    ],
  },
  {
    slug: "candles",
    name: "Candles",
    description:
      "Boutique packaging for home fragrance and candle collections with a balance of protection and gifting appeal.",
    image: "/images/curated/magnetic-candle-box.webp",
    highlights: [
      "Insert-led protection",
      "Seasonal gifting formats",
      "Strong unboxing presentation",
    ],
    packagingFocus: [
      "Candle boxes",
      "Mailer boxes",
      "Rigid launch boxes",
      "Custom labels",
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    description:
      "Premium packaging systems for apparel, accessories, and boutique retail brands that want a considered arrival experience.",
    image: "/images/curated/paper-lunch-bag.webp",
    highlights: [
      "Luxury retail bags",
      "Tissue-led unboxing",
      "Editorial brand presentation",
    ],
    packagingFocus: [
      "Mailer boxes",
      "Paper bags",
      "Tissue paper",
      "Sleeves and labels",
    ],
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    description:
      "Compact, tactile presentation packaging for jewelry collections where fit, softness, and perceived value matter.",
    image: "/images/curated/bracelet-packaging.webp",
    highlights: [
      "Keepsake presentation",
      "Compact premium boxes",
      "Soft inserts and pouch support",
    ],
    packagingFocus: [
      "Jewelry boxes",
      "Rigid boxes",
      "Paper bags",
      "Tissue paper",
    ],
  },
  {
    slug: "food",
    name: "Food & Confectionery",
    description:
      "Refined packaging for chocolates, confectionery, and gourmet products that need structure, story, and premium shelf presence.",
    image: "/images/curated/bon-bon-box.webp",
    highlights: [
      "Gifting presentation",
      "Retail-ready formats",
      "Clean, modern print direction",
    ],
    packagingFocus: [
      "Folding cartons",
      "Rigid boxes",
      "Labels and sleeves",
      "Specialty gift sets",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Packaging systems for modern online brands that need shipping-ready structure with a more memorable brand experience.",
    image: "/images/curated/foldable-mailer-box.webp",
    highlights: [
      "Fulfillment-friendly formats",
      "Branded arrival experience",
      "Scalable packaging systems",
    ],
    packagingFocus: [
      "Mailer boxes",
      "Tissue paper",
      "Labels and stickers",
      "Sustainable packaging",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
