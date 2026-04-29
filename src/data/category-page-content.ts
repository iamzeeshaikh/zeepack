import type { Category } from "@/data/categories";
import { getProductStylesByCategory } from "@/data/product-styles";

export type VariantCard = {
  title: string;
  description: string;
  image: string;
  slug?: string;
  badge?: string;
};

const variantCardsBySlug: Record<string, VariantCard[]> = {
  "rigid-boxes": [
    {
      title: "Magnetic Closure Box",
      description:
        "A presentation-first rigid box with a cleaner reveal and stronger gifting feel.",
      image: "/images/curated/rigid-magnetic-box.webp",
    },
    {
      title: "Two Piece Rigid Box",
      description:
        "Classic lid-and-base structure for premium gifting, launches, and retail display.",
      image: "/images/curated/one-piece-rigid-box.webp",
    },
    {
      title: "Shoulder Neck Box",
      description:
        "A refined, layered format with extra presence and a more architectural opening.",
      image: "/images/curated/rigid-setup-box.webp",
    },
    {
      title: "Drawer Style Box",
      description:
        "A sliding rigid format suited to keepsake products, jewelry, and premium kits.",
      image: "/images/real/jewelry-boxes.webp",
    },
    {
      title: "Book Style Box",
      description:
        "Elegant hinged construction for stronger storytelling and ceremonial presentation.",
      image: "/images/real/product-boxes.webp",
    },
    {
      title: "Lid and Base Box",
      description:
        "A timeless premium format that balances gifting appeal with practical structure.",
      image: "/images/real/rigid-boxes.webp",
    },
  ],
  "mailer-boxes": [
    {
      title: "Tuck Top Mailers",
      description:
        "A clean self-locking format for premium e-commerce and launch shipments.",
      image: "/images/curated/foldable-mailer-box.webp",
    },
    {
      title: "Subscription Mailers",
      description:
        "Structured for recurring deliveries where presentation and repeatability both matter.",
      image: "/images/real/mailer-boxes.webp",
    },
    {
      title: "E-commerce Mailers",
      description:
        "Shipping-ready mailers designed to protect products while extending the brand story.",
      image: "/images/curated/mycelium-box.webp",
    },
    {
      title: "Kraft Mailers",
      description:
        "A restrained, tactile mailer direction with a more natural and premium tone.",
      image: "/images/real/sustainable-packaging.webp",
    },
    {
      title: "Printed Mailers",
      description:
        "Exterior and interior branding options for a more memorable arrival experience.",
      image: "/images/real/tissue-paper.webp",
    },
    {
      title: "Insert Mailers",
      description:
        "Mailer systems built around added support, inserts, and better product organization.",
      image: "/images/real/inserts.webp",
    },
  ],
  "candle-boxes": [
    {
      title: "Single Candle Box",
      description:
        "A focused format for retail presentation, gifting, and fragrance-led product launches.",
      image: "/images/curated/magnetic-candle-box.webp",
    },
    {
      title: "Gift Set Box",
      description:
        "Supports multiple candles or candle-plus-accessory bundles with cleaner presentation.",
      image: "/images/real/candle-boxes.webp",
    },
    {
      title: "Seasonal Collection Packaging",
      description:
        "Developed for capsule launches, holiday gifting, and limited-edition candle drops.",
      image: "/images/curated/rigid-magnetic-box.webp",
    },
    {
      title: "Mailer-Ready Candle Box",
      description:
        "Built with added protection considerations for direct-to-consumer delivery.",
      image: "/images/real/mailer-boxes.webp",
    },
    {
      title: "Rigid Candle Presentation Box",
      description:
        "A more elevated direction for premium home fragrance collections and gifting sets.",
      image: "/images/curated/rigid-setup-box.webp",
    },
    {
      title: "Insert-Led Candle Box",
      description:
        "Uses custom inserts to reduce movement and support a more precise reveal.",
      image: "/images/real/inserts.webp",
    },
  ],
  "cosmetic-boxes": [
    {
      title: "Serum Carton",
      description:
        "Clean, shelf-ready cosmetic packaging for smaller premium beauty products.",
      image: "/images/real/cosmetic-boxes.webp",
    },
    {
      title: "Skincare Set Box",
      description:
        "Presentation-focused formats for coordinated skincare kits and multi-item lines.",
      image: "/images/curated/skin-care-oil-box.webp",
    },
    {
      title: "Perfume-Style Presentation Box",
      description:
        "A premium direction for beauty launches that need stronger ceremony and protection.",
      image: "/images/real/perfume-boxes.webp",
    },
    {
      title: "Lipstick and Makeup Carton",
      description:
        "Designed for clarity, elegant print detail, and strong shelf appeal.",
      image: "/images/real/product-boxes.webp",
    },
    {
      title: "Influencer Mailer Set",
      description:
        "A beauty-focused mailer structure for launches, gifting, and campaign sends.",
      image: "/images/curated/foldable-mailer-box.webp",
    },
    {
      title: "Insert-Led Cosmetic Box",
      description:
        "Keeps jars, bottles, or multi-piece sets more secure and more premium on reveal.",
      image: "/images/curated/retail-insert-tray.webp",
    },
  ],
  "perfume-boxes": [
    {
      title: "Single Bottle Rigid Box",
      description:
        "A premium fragrance format built around secure bottle support and ceremonial reveal.",
      image: "/images/real/perfume-boxes.webp",
    },
    {
      title: "Perfume Gift Set",
      description:
        "Supports bottle, sample, and add-on presentation in one cleaner structure.",
      image: "/images/curated/skin-care-oil-box.webp",
    },
    {
      title: "Collector Edition Box",
      description:
        "A more dramatic presentation format suited to premium pricing and gifting.",
      image: "/images/curated/rigid-magnetic-box.webp",
    },
    {
      title: "Magnetic Closure Fragrance Box",
      description:
        "A luxurious opening experience with added protection and tactile value.",
      image: "/images/curated/rigid-setup-box.webp",
    },
    {
      title: "Launch Kit Fragrance Box",
      description:
        "Combines presentation, insert support, and campaign-level detail for brand launches.",
      image: "/images/curated/retail-insert-tray.webp",
    },
    {
      title: "Retail Display Fragrance Box",
      description:
        "Engineered for premium shelf presence with refined finishing and clean structure.",
      image: "/images/real/cosmetic-boxes.webp",
    },
  ],
  "jewelry-boxes": [
    {
      title: "Ring Box",
      description:
        "Compact presentation with keepsake-level tactility and gifting appeal.",
      image: "/images/real/jewelry-boxes.webp",
    },
    {
      title: "Necklace Box",
      description:
        "Supports elegant arrangement and softer insert-led product positioning.",
      image: "/images/curated/bracelet-packaging.webp",
    },
    {
      title: "Bracelet Box",
      description:
        "A refined format for retail display, gifting, and premium presentation.",
      image: "/images/curated/one-piece-rigid-box.webp",
    },
    {
      title: "Jewelry Set Box",
      description:
        "Built for multi-piece presentation with better organization and perceived value.",
      image: "/images/curated/retail-insert-tray.webp",
    },
    {
      title: "Drawer Jewelry Box",
      description:
        "A premium reveal format for collectible, bridal, or keepsake packaging.",
      image: "/images/curated/rigid-setup-box.webp",
    },
    {
      title: "Insert-Led Jewelry Box",
      description:
        "Uses soft-touch support structures for a more precise and protected reveal.",
      image: "/images/real/inserts.webp",
    },
  ],
  "product-boxes": [
    {
      title: "Retail Product Box",
      description:
        "A versatile premium format for shelf-ready product presentation across multiple SKUs.",
      image: "/images/real/product-boxes.webp",
    },
    {
      title: "Gift-Ready Box",
      description:
        "A stronger presentation route for products that need a more elevated first impression.",
      image: "/images/curated/bon-bon-box.webp",
    },
    {
      title: "Launch Set Box",
      description:
        "Supports product bundles, press kits, and campaign-driven packaging systems.",
      image: "/images/curated/rigid-setup-box.webp",
    },
    {
      title: "Protective Branded Box",
      description:
        "Balances shipping support with cleaner outside presentation and finishing.",
      image: "/images/curated/foldable-mailer-box.webp",
    },
    {
      title: "Insert-Led Product Box",
      description:
        "Built around more precise fit, product support, and premium organization.",
      image: "/images/curated/retail-insert-tray.webp",
    },
    {
      title: "Multi-SKU Packaging Family",
      description:
        "A coordinated packaging system for brands with multiple product dimensions.",
      image: "/images/curated/skin-care-oil-box.webp",
    },
  ],
};

const supportImagesBySlug: Record<string, string> = {
  "rigid-boxes": "/images/curated/rigid-magnetic-box.webp",
  "mailer-boxes": "/images/curated/mycelium-box.webp",
  "candle-boxes": "/images/curated/retail-insert-tray.webp",
  "cosmetic-boxes": "/images/curated/retail-insert-tray.webp",
  "perfume-boxes": "/images/curated/skin-care-oil-box.webp",
  "jewelry-boxes": "/images/curated/retail-insert-tray.webp",
  "product-boxes": "/images/curated/bon-bon-box.webp",
  "custom-tissue-paper": "/images/real/sleeves.webp",
  "paper-bags": "/images/real/sleeves.webp",
  sleeves: "/images/real/labels-stickers.webp",
  "labels-and-stickers": "/images/real/cosmetic-boxes.webp",
  inserts: "/images/real/cosmetic-boxes.webp",
  "sustainable-packaging": "/images/real/paper-bags.webp",
};

const galleryBySlug: Record<string, string[]> = {
  "rigid-boxes": [
    "/images/curated/rigid-setup-box.webp",
    "/images/curated/one-piece-rigid-box.webp",
    "/images/curated/rigid-magnetic-box.webp",
  ],
  "mailer-boxes": [
    "/images/curated/foldable-mailer-box.webp",
    "/images/real/tissue-paper.webp",
    "/images/curated/mycelium-box.webp",
  ],
  "candle-boxes": [
    "/images/curated/magnetic-candle-box.webp",
    "/images/curated/rigid-magnetic-box.webp",
    "/images/curated/retail-insert-tray.webp",
  ],
  "cosmetic-boxes": [
    "/images/curated/skin-care-oil-box.webp",
    "/images/real/cosmetic-boxes.webp",
    "/images/curated/retail-insert-tray.webp",
  ],
  "perfume-boxes": [
    "/images/real/perfume-boxes.webp",
    "/images/curated/skin-care-oil-box.webp",
    "/images/curated/rigid-setup-box.webp",
  ],
  "jewelry-boxes": [
    "/images/curated/bracelet-packaging.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/curated/one-piece-rigid-box.webp",
  ],
  "product-boxes": [
    "/images/real/product-boxes.webp",
    "/images/curated/bon-bon-box.webp",
    "/images/curated/foldable-mailer-box.webp",
  ],
  "custom-tissue-paper": [
    "/images/real/tissue-paper.webp",
    "/images/real/sleeves.webp",
    "/images/real/paper-bags.webp",
  ],
  "paper-bags": [
    "/images/curated/paper-lunch-bag.webp",
    "/images/real/paper-bags.webp",
    "/images/real/sleeves.webp",
    "/images/real/tissue-paper.webp",
  ],
  sleeves: [
    "/images/real/sleeves.webp",
    "/images/real/folding-cartons.webp",
    "/images/real/labels-stickers.webp",
  ],
  "labels-and-stickers": [
    "/images/real/labels-stickers.webp",
    "/images/real/tissue-paper.webp",
    "/images/real/cosmetic-boxes.webp",
  ],
  inserts: [
    "/images/curated/retail-insert-tray.webp",
    "/images/real/inserts.webp",
    "/images/real/cosmetic-boxes.webp",
  ],
  "sustainable-packaging": [
    "/images/curated/mycelium-box.webp",
    "/images/real/sustainable-packaging.webp",
    "/images/real/paper-bags.webp",
  ],
};

const seoKeywordsBySlug: Record<string, string[]> = {
  "rigid-boxes": [
    "luxury rigid boxes",
    "custom rigid boxes",
    "premium rigid setup boxes",
    "custom gift rigid boxes",
  ],
  "mailer-boxes": [
    "custom mailer boxes",
    "printed mailer boxes",
    "premium mailer packaging",
    "custom shipping boxes",
  ],
  "candle-boxes": [
    "custom candle boxes",
    "luxury candle packaging",
    "premium candle gift boxes",
    "printed candle boxes",
  ],
  "cosmetic-boxes": [
    "custom cosmetic packaging",
    "luxury cosmetic boxes",
    "premium beauty packaging",
    "custom skincare boxes",
  ],
  "perfume-boxes": [
    "custom perfume boxes",
    "luxury fragrance packaging",
    "premium perfume gift boxes",
    "custom perfume rigid boxes",
  ],
  "jewelry-boxes": [
    "custom jewelry boxes",
    "luxury jewelry packaging",
    "premium ring boxes",
    "custom necklace boxes",
  ],
  "product-boxes": [
    "custom product boxes",
    "premium product packaging",
    "printed product boxes",
    "custom retail packaging",
  ],
};

const relatedCategoriesBySlug: Record<string, string[]> = {
  "rigid-boxes": [
    "mailer-boxes",
    "candle-boxes",
    "cosmetic-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "mailer-boxes": [
    "rigid-boxes",
    "candle-boxes",
    "cosmetic-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "candle-boxes": [
    "rigid-boxes",
    "mailer-boxes",
    "cosmetic-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "cosmetic-boxes": [
    "rigid-boxes",
    "mailer-boxes",
    "candle-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "perfume-boxes": [
    "rigid-boxes",
    "mailer-boxes",
    "candle-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "jewelry-boxes": [
    "rigid-boxes",
    "mailer-boxes",
    "candle-boxes",
    "product-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
  "product-boxes": [
    "rigid-boxes",
    "mailer-boxes",
    "candle-boxes",
    "cosmetic-boxes",
    "paper-bags",
    "custom-tissue-paper",
  ],
};

export function getCategorySupportImage(category: Category) {
  const styleVariants = getProductStylesByCategory(category.slug);

  if (styleVariants.length > 1) {
    const distinctSupport = styleVariants.find((style) => style.image !== category.image);
    if (distinctSupport) {
      return distinctSupport.image;
    }
  }

  return supportImagesBySlug[category.slug] ?? category.image;
}

export function getCategoryVariants(category: Category): VariantCard[] {
  const styleVariants = getProductStylesByCategory(category.slug);

  if (styleVariants.length > 0) {
    return styleVariants.map((style) => ({
      title: style.title,
      description: style.description,
      image: style.image,
      slug: style.slug,
      badge: style.badge,
    }));
  }

  return (
    variantCardsBySlug[category.slug] ??
    category.variants.map((variant) => ({
      title: variant,
      description:
        "A premium format developed around stronger presentation, structure, and refined detail.",
      image: category.image,
    }))
  );
}

export function getCategoryGallery(category: Category) {
  const styleVariants = getProductStylesByCategory(category.slug);

  if (styleVariants.length > 0) {
    const uniqueImages = [
      category.image,
      ...styleVariants.map((style) => style.image),
      ...styleVariants.flatMap((style) => style.galleryImages),
    ].filter((image, index, array) => array.indexOf(image) === index);

    return uniqueImages.slice(0, 3);
  }

  return galleryBySlug[category.slug] ?? [category.image, category.image, category.image];
}

export function getCategorySeoKeywords(category: Category) {
  return seoKeywordsBySlug[category.slug] ?? [category.name.toLowerCase()];
}

export function getRelatedCategories(category: Category, categories: Category[]) {
  const relatedSlugs = relatedCategoriesBySlug[category.slug] ?? [];
  return categories.filter((item) => relatedSlugs.includes(item.slug));
}

export function getCategorySeoParagraphs(category: Category) {
  const [keywordOne, keywordTwo, keywordThree, keywordFour] =
    getCategorySeoKeywords(category);

  return [
    `${category.name} from ZEEPACK are designed for brands that need presentation and protection to work together. Whether the goal is premium retail display, gifting, or a stronger direct-to-consumer reveal, our ${keywordOne} balance material quality, clean structure, and refined finish choices.`,
    `Every project can be tailored around product size, insert needs, material direction, and the level of finish required. From ${keywordTwo} to ${keywordThree}, we help brands shape packaging that feels more established, more intentional, and more aligned with long-term brand perception.`,
    `Our team develops ${keywordFour} with close attention to fit, structure, production practicality, and the final customer experience. That makes them suitable for shipping, shelf display, gifting, launch kits, and premium presentation across a wide range of modern product categories.`,
  ];
}

export function getCategoryFaqs(category: Category) {
  const baseName = category.name.toLowerCase();
  const firstMaterial = category.materials[0] ?? "premium board";
  const firstFinish = category.finishes[0] ?? "premium finishing";
  const firstIndustry = category.industries[0] ?? "premium products";

  const genericFaqs = [
    {
      question: `What are ${baseName}?`,
      answer: `${category.name} are packaging formats developed around product fit, presentation quality, and stronger brand perception. They are often used where a more premium, structured, and customer-facing packaging experience matters.`,
    },
    {
      question: `Are ${baseName} good for luxury packaging?`,
      answer: `Yes. ${category.name} are well suited to luxury packaging because they can be customized for size, material, inserts, and finishing while maintaining a more considered premium look.`,
    },
    {
      question: `Can I order custom ${baseName} in my own size?`,
      answer: `Yes. We build packaging around your product dimensions, insert needs, and presentation goals rather than relying only on standard stock sizing.`,
    },
    {
      question: `What materials are used for ${baseName}?`,
      answer: `Material options for ${category.name} often include ${firstMaterial}, along with other board and wrap options depending on structure, finish expectations, and protection needs.`,
    },
    {
      question: `Can ${baseName} include inserts?`,
      answer: `Yes. Inserts can be added for support, product organization, and a cleaner reveal, especially when products need more secure placement.`,
    },
    {
      question: "What finishing options are available?",
      answer: `Popular finish routes include ${firstFinish}, plus other options such as embossing, soft-touch lamination, matte coatings, foil work, and custom closure details depending on the category.`,
    },
    {
      question: `Are premium closure styles available for ${baseName}?`,
      answer: `Yes. Depending on the structure, closure options can include magnetic styles, ribbon details, sleeves, lift-off lids, or other presentation-led solutions.`,
    },
    {
      question: `Do you offer low minimum ${baseName} orders?`,
      answer: `Yes. We support lower minimum options for many premium projects, especially for launches, boutique runs, and growing brands.`,
    },
    {
      question: `Can ${baseName} be used for ${firstIndustry.toLowerCase()} products?`,
      answer: `Yes. ${category.name} can be adapted for ${firstIndustry.toLowerCase()} and other premium categories by adjusting material choice, structural support, and finishing direction.`,
    },
    {
      question: `Are ${baseName} suitable for shipping?`,
      answer: `That depends on the structure and material choice. Many formats can be adapted for shipping support directly, or used as presentation packaging inside an outer shipping solution.`,
    },
    {
      question: "Can I print inside and outside the packaging?",
      answer: `Yes. Interior and exterior print can both be developed depending on the structure, production method, and the level of brand detail required.`,
    },
    {
      question: "Do you provide samples?",
      answer: `Yes. Depending on the project stage, we can discuss reference samples, material samples, or production-style sampling before final approval.`,
    },
    {
      question: "What is the turnaround time?",
      answer: `Turnaround depends on structure, finishing complexity, and production volume. Many projects move through production in roughly a few weeks after approvals are complete.`,
    },
    {
      question: "Are sustainable materials available?",
      answer: `Yes. Recyclable boards, recycled-content papers, lower-impact ink routes, and more restrained material choices can be explored where suitable.`,
    },
    {
      question: "How do I request a quote?",
      answer: `You can request a quote by sharing your packaging type, quantity, dimensions, material preferences, print needs, and finishing notes through our form or by contacting the team directly.`,
    },
  ];

  return genericFaqs;
}
