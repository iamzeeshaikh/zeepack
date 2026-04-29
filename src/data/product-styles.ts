import type { Category } from "@/data/categories";
import { categories, getCategoryBySlug } from "@/data/categories";

export type ProductStyle = {
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  image: string;
  fallbackImage: string;
  galleryImages: string[];
  useCases: string[];
  materialOptions: string[];
  finishOptions: string[];
  relatedProducts: string[];
  badge: string;
  overview: string;
  dimensionsCopy: string;
  keyHighlights: string[];
  faq: Array<{ question: string; answer: string }>;
};

type StyleSeed = {
  title: string;
  description: string;
  badge: string;
  useCases?: string[];
};

const styleSeedsByCategory: Record<string, StyleSeed[]> = {
  "rigid-boxes": [
    {
      title: "Magnetic Closure Box",
      description:
        "A presentation-first rigid structure with a cleaner reveal and stronger keepsake feel.",
      badge: "Gift-focused",
      useCases: ["Beauty launches", "Premium gifting", "Jewelry sets"],
    },
    {
      title: "Two Piece Rigid Box",
      description:
        "Classic lid-and-base structure that feels substantial, calm, and unmistakably premium.",
      badge: "Retail-ready",
      useCases: ["Retail presentation", "Collector sets", "Product launches"],
    },
    {
      title: "Shoulder Neck Box",
      description:
        "A layered rigid format that adds presence and a more architectural opening sequence.",
      badge: "Premium finish friendly",
      useCases: ["Fragrance", "Luxury gifting", "Launch kits"],
    },
    {
      title: "Drawer Style Box",
      description:
        "A sliding reveal format suited to keepsake products, jewelry, and compact premium sets.",
      badge: "Insert compatible",
      useCases: ["Jewelry", "Accessories", "Premium samples"],
    },
    {
      title: "Book Style Box",
      description:
        "Elegant hinged construction that supports storytelling and ceremonial presentation.",
      badge: "Story-led",
      useCases: ["Campaign kits", "Press mailers", "Collector editions"],
    },
    {
      title: "Lid and Base Box",
      description:
        "A timeless rigid format balancing premium presentation with practical structure.",
      badge: "Signature style",
      useCases: ["Beauty gifting", "Retail shelf", "Luxury packaging"],
    },
  ],
  "mailer-boxes": [
    {
      title: "Roll End Tuck Front Mailer",
      description:
        "A clean self-locking mailer built for stronger brand presentation in transit.",
      badge: "DTC-ready",
      useCases: ["E-commerce", "Subscription drops", "Launch sends"],
    },
    {
      title: "Subscription Mailer",
      description:
        "Structured for repeat deliveries where presentation and consistency both matter.",
      badge: "Repeat delivery",
      useCases: ["Subscription brands", "Monthly drops", "Retention kits"],
    },
    {
      title: "E-commerce Mailer",
      description:
        "Shipping-first structure that still keeps the unboxing experience feeling elevated.",
      badge: "Shipping support",
      useCases: ["Online orders", "DTC brands", "Launch fulfilment"],
    },
    {
      title: "Kraft Mailer",
      description:
        "A restrained tactile direction with a more natural and premium visual tone.",
      badge: "Eco-conscious",
      useCases: ["Minimal brands", "Lower-ink systems", "Sustainable lines"],
    },
    {
      title: "Printed Mailer",
      description:
        "Exterior and interior print opportunities for a more memorable branded arrival.",
      badge: "Brand-led",
      useCases: ["Campaign mailers", "Premium DTC", "Interior print"],
    },
    {
      title: "Insert Mailer",
      description:
        "Mailer system built around added support, insert fit, and cleaner product organization.",
      badge: "Insert compatible",
      useCases: ["Fragile products", "Beauty sets", "Jar support"],
    },
  ],
  "folding-cartons": [
    {
      title: "Reverse Tuck End",
      description:
        "A versatile folding carton style suited to premium retail products and cleaner shelf presentation.",
      badge: "Shelf ready",
      useCases: ["Cosmetics", "Food packaging", "Wellness"],
    },
    {
      title: "Straight Tuck End",
      description:
        "A streamlined carton structure with a polished look and efficient opening style.",
      badge: "Retail classic",
      useCases: ["Beauty products", "Confectionery", "Premium cartons"],
    },
    {
      title: "Auto-Lock Bottom",
      description:
        "Adds extra base support for products that need stronger structure without losing elegance.",
      badge: "Protection",
      useCases: ["Heavier products", "Retail packs", "Gourmet goods"],
    },
    {
      title: "Sleeve Carton",
      description:
        "A layered carton direction that adds hierarchy and campaign flexibility to a base structure.",
      badge: "Seasonal",
      useCases: ["Limited editions", "Launch packaging", "Gift sleeves"],
    },
  ],
  "product-boxes": [
    {
      title: "Retail Product Box",
      description:
        "A flexible premium structure for shelf-ready presentation across multiple SKUs.",
      badge: "Retail-ready",
      useCases: ["Retail shelves", "Beauty", "Food"],
    },
    {
      title: "Gift-Ready Box",
      description:
        "A stronger presentation route for products that need a more elevated first impression.",
      badge: "Gift-focused",
      useCases: ["Premium gifting", "Seasonal drops", "Launches"],
    },
    {
      title: "Launch Set Box",
      description:
        "Supports product bundles, PR kits, and campaign-led packaging systems.",
      badge: "Launch kits",
      useCases: ["Press kits", "Multi-product sets", "Campaign sends"],
    },
    {
      title: "Protective Branded Box",
      description:
        "Balances direct-to-consumer protection with cleaner outside presentation.",
      badge: "Hybrid use",
      useCases: ["Shipping + retail", "Premium DTC", "Protective presentation"],
    },
    {
      title: "Insert-Led Product Box",
      description:
        "Built around more precise fit, internal support, and premium organization.",
      badge: "Insert compatible",
      useCases: ["Bottle support", "Multi-item kits", "Luxury presentation"],
    },
    {
      title: "Multi-SKU Packaging Family",
      description:
        "A coordinated packaging language for brands with several product dimensions.",
      badge: "Scalable",
      useCases: ["Collections", "Multi-SKU brands", "Product families"],
    },
  ],
  "candle-boxes": [
    {
      title: "Single Candle Box",
      description:
        "A focused format for retail presentation, gifting, and fragrance-led launches.",
      badge: "Retail-ready",
      useCases: ["Single jars", "Boutique shelves", "Gift candles"],
    },
    {
      title: "Gift Set Candle Box",
      description:
        "Supports multiple candles or candle-plus-accessory bundles with cleaner presentation.",
      badge: "Gift set",
      useCases: ["Holiday sets", "Bundles", "Gifting"],
    },
    {
      title: "Seasonal Candle Packaging",
      description:
        "Developed for capsule launches, seasonal gifting, and limited-edition fragrance drops.",
      badge: "Seasonal",
      useCases: ["Holiday launches", "Limited editions", "Collections"],
    },
    {
      title: "Mailer-Ready Candle Box",
      description:
        "Built with stronger protection considerations for direct-to-consumer candle delivery.",
      badge: "Shipping support",
      useCases: ["DTC candles", "Online delivery", "Transit safety"],
    },
    {
      title: "Rigid Candle Presentation Box",
      description:
        "A more elevated direction for premium home fragrance collections and gifting sets.",
      badge: "Premium gifting",
      useCases: ["Collector candles", "Home fragrance", "Premium sets"],
    },
    {
      title: "Insert-Led Candle Box",
      description:
        "Uses custom inserts to reduce movement and support a more precise reveal.",
      badge: "Insert compatible",
      useCases: ["Glass jars", "Fragile vessels", "Secure fit"],
    },
  ],
  "cosmetic-boxes": [
    {
      title: "Serum Carton",
      description:
        "Clean shelf-ready cosmetic packaging for smaller beauty products with precision fit.",
      badge: "Shelf ready",
      useCases: ["Serums", "Skincare", "Beauty retail"],
    },
    {
      title: "Skincare Set Box",
      description:
        "Presentation-focused format for coordinated skincare kits and multi-item lines.",
      badge: "Launch kits",
      useCases: ["Skincare sets", "PR kits", "Beauty gifting"],
    },
    {
      title: "Perfume-Style Presentation Box",
      description:
        "A premium direction for beauty launches that need ceremony and stronger bottle support.",
      badge: "Premium finish friendly",
      useCases: ["Fragrance", "Beauty gifting", "Collector editions"],
    },
    {
      title: "Lipstick and Makeup Carton",
      description:
        "Designed for clarity, elegant print detail, and refined shelf appeal.",
      badge: "Retail-ready",
      useCases: ["Makeup lines", "Cosmetics", "Retail display"],
    },
    {
      title: "Influencer Mailer Set",
      description:
        "A beauty-focused mailer structure for launches, gifting, and campaign sends.",
      badge: "Campaign",
      useCases: ["Influencer kits", "PR mailers", "Launch sends"],
    },
    {
      title: "Insert-Led Cosmetic Box",
      description:
        "Keeps jars, bottles, or multi-piece sets secure while improving the reveal.",
      badge: "Insert compatible",
      useCases: ["Jars", "Bottles", "Beauty kits"],
    },
  ],
  "perfume-boxes": [
    {
      title: "Single Bottle Rigid Box",
      description:
        "A fragrance format built around secure bottle support and a ceremonial reveal.",
      badge: "Fragrance",
      useCases: ["Single bottle", "Premium gifting", "Retail display"],
    },
    {
      title: "Perfume Gift Set",
      description:
        "Supports bottle, sample, and accessory presentation in one refined structure.",
      badge: "Gift set",
      useCases: ["Gift sets", "Holiday launches", "Collector presentation"],
    },
    {
      title: "Collector Edition Box",
      description:
        "A more dramatic presentation format suited to premium pricing and special launches.",
      badge: "Collector",
      useCases: ["Collector editions", "Luxury fragrance", "Limited releases"],
    },
    {
      title: "Magnetic Closure Fragrance Box",
      description:
        "A luxurious opening experience with added protection and tactile value.",
      badge: "Magnetic closure",
      useCases: ["High-end fragrances", "Gifting", "Premium reveals"],
    },
    {
      title: "Launch Kit Fragrance Box",
      description:
        "Combines presentation, insert support, and campaign-level detail for fragrance launches.",
      badge: "Campaign",
      useCases: ["Launch kits", "Press mailers", "Beauty campaigns"],
    },
    {
      title: "Retail Display Fragrance Box",
      description:
        "Engineered for premium shelf presence with refined finishing and clean structure.",
      badge: "Retail-ready",
      useCases: ["Retail shelves", "Counters", "Display packaging"],
    },
  ],
  "jewelry-boxes": [
    {
      title: "Ring Box",
      description:
        "Compact presentation with keepsake-level tactility and gifting appeal.",
      badge: "Keepsake",
      useCases: ["Rings", "Fine jewelry", "Gift-ready"],
    },
    {
      title: "Necklace Box",
      description:
        "Supports elegant arrangement and softer insert-led product positioning.",
      badge: "Insert compatible",
      useCases: ["Necklaces", "Pendant sets", "Luxury gifting"],
    },
    {
      title: "Bracelet Box",
      description:
        "A refined format for retail display, gifting, and premium presentation.",
      badge: "Retail-ready",
      useCases: ["Bracelets", "Cuffs", "Boutique display"],
    },
    {
      title: "Jewelry Set Presentation Box",
      description:
        "Built for multi-piece presentation with better organization and perceived value.",
      badge: "Gift set",
      useCases: ["Jewelry sets", "Bridal gifting", "Collector sets"],
    },
    {
      title: "Drawer Jewelry Box",
      description:
        "A sliding reveal format for collectible, bridal, and keepsake packaging moments.",
      badge: "Drawer style",
      useCases: ["Bridal", "Keepsake gifts", "Fine jewelry"],
    },
    {
      title: "Insert-Led Jewelry Box",
      description:
        "Uses soft-touch support structures for a more precise and protected reveal.",
      badge: "Soft insert",
      useCases: ["Rings", "Necklaces", "Premium fit"],
    },
  ],
  "custom-tissue-paper": [
    {
      title: "Logo Repeat Tissue",
      description:
        "Branded tissue that adds softness and ritual to a premium unboxing flow.",
      badge: "Unboxing",
      useCases: ["Fashion", "Beauty", "Retail wrapping"],
    },
    {
      title: "Seasonal Printed Tissue",
      description:
        "An easy way to update a packaging system for campaigns and limited releases.",
      badge: "Seasonal",
      useCases: ["Holiday wraps", "Launches", "Campaign kits"],
    },
    {
      title: "Luxury Wrap Sheet",
      description:
        "A softer branded layer for boutiques, gifting, and premium mailers.",
      badge: "Gift-ready",
      useCases: ["Boutique wrapping", "Gift packaging", "Premium DTC"],
    },
  ],
  "paper-bags": [
    {
      title: "Boutique Retail Bag",
      description:
        "A carry format designed to feel as considered as the packaging inside it.",
      badge: "Retail",
      useCases: ["Boutique counters", "Retail pickup", "Luxury stores"],
    },
    {
      title: "Gift Bag",
      description:
        "Premium bag structure developed for gifting, events, and elevated carry presentation.",
      badge: "Gift-focused",
      useCases: ["Holiday gifting", "Jewelry", "Beauty retail"],
    },
    {
      title: "Event and Launch Bag",
      description:
        "Supports launches, premium events, and campaign-ready handoff moments.",
      badge: "Event-ready",
      useCases: ["Launch events", "PR gifting", "Premium activations"],
    },
    {
      title: "Luxury Carry Bag",
      description:
        "A stronger premium carry format with refined handles and brand presence.",
      badge: "Signature",
      useCases: ["Retail carry", "Fashion", "Boutique gifting"],
    },
  ],
  sleeves: [
    {
      title: "Box Sleeve",
      description:
        "A clean outer branding layer for boxes that need more hierarchy without extra bulk.",
      badge: "Editorial",
      useCases: ["Rigid boxes", "Cartons", "Gift sets"],
    },
    {
      title: "Jar Set Sleeve",
      description:
        "Designed for grouped products where a branded outer wrap adds clarity and finish.",
      badge: "Bundle-ready",
      useCases: ["Candles", "Beauty sets", "Food gifting"],
    },
    {
      title: "Retail Carton Sleeve",
      description:
        "A refined sleeve direction for retail cartons, seasonal updates, and special releases.",
      badge: "Retail-ready",
      useCases: ["Retail packaging", "Seasonal drops", "Limited editions"],
    },
    {
      title: "Seasonal Collection Wrap",
      description:
        "An efficient campaign layer for capsule launches and limited-edition storytelling.",
      badge: "Seasonal",
      useCases: ["Campaign wraps", "Holiday edits", "Special releases"],
    },
  ],
  "labels-and-stickers": [
    {
      title: "Brand Seal",
      description:
        "A premium closure detail for tissue wraps, sleeves, and box presentations.",
      badge: "Seal",
      useCases: ["Tissue closures", "Sleeves", "Gift wrapping"],
    },
    {
      title: "Product Label",
      description:
        "A refined label format for product details, compliance, and branded presentation.",
      badge: "Product detail",
      useCases: ["Beauty labels", "Food labels", "Boutique products"],
    },
    {
      title: "Closure Sticker",
      description:
        "Adds a cleaner branded finish to mailers, wraps, and short-run packaging programs.",
      badge: "Flexible",
      useCases: ["Mailers", "Short runs", "Packaging seals"],
    },
    {
      title: "Seasonal Campaign Sticker",
      description:
        "Useful for capsule launches and changing campaign visuals without redesigning the full pack.",
      badge: "Seasonal",
      useCases: ["Launches", "Campaigns", "Limited drops"],
    },
  ],
  inserts: [
    {
      title: "Bottle Insert",
      description:
        "A precise insert structure for bottles that need stronger fit and presentation.",
      badge: "Protection",
      useCases: ["Beauty bottles", "Fragrance", "Gift sets"],
    },
    {
      title: "Jar Insert",
      description:
        "Supports jars and vessels with cleaner internal organization and reduced movement.",
      badge: "Secure fit",
      useCases: ["Candles", "Skincare jars", "Gourmet sets"],
    },
    {
      title: "Multi-Product Tray",
      description:
        "Organizes several items in one refined presentation layout with better spacing.",
      badge: "Multi-item",
      useCases: ["Launch kits", "Gift sets", "PR kits"],
    },
    {
      title: "Gift Set Organizer",
      description:
        "Adds order, protection, and a more premium reveal inside premium gifting formats.",
      badge: "Gift-ready",
      useCases: ["Gift sets", "Collector kits", "Premium presentations"],
    },
  ],
  "sustainable-packaging": [
    {
      title: "Recyclable Mailer",
      description:
        "A lower-impact shipping format that keeps structure practical and presentation clean.",
      badge: "Eco-conscious",
      useCases: ["E-commerce", "Sustainable brands", "DTC"],
    },
    {
      title: "Paper-Based Insert",
      description:
        "A more responsible insert route where paper-based support suits the product.",
      badge: "Paper-based",
      useCases: ["Beauty", "Candles", "Gift sets"],
    },
    {
      title: "Low-Ink Luxury Carton",
      description:
        "A restrained premium carton direction that relies on structure and material feel more than excess print.",
      badge: "Minimal",
      useCases: ["Beauty", "Food", "Retail"],
    },
    {
      title: "Reusable Rigid Box Concept",
      description:
        "A premium format developed for longer-life use and more considered material decisions.",
      badge: "Reusable",
      useCases: ["Luxury gifting", "Collector boxes", "Keepsake packaging"],
    },
  ],
};

const assetPoolByCategory: Record<string, string[]> = {
  "rigid-boxes": [
    "/images/curated/rigid-setup-box.webp",
    "/images/curated/one-piece-rigid-box.webp",
    "/images/curated/rigid-magnetic-box.webp",
    "/images/real/rigid-boxes.webp",
    "/images/real/jewelry-boxes.webp",
    "/images/real/product-boxes.webp",
  ],
  "mailer-boxes": [
    "/images/curated/foldable-mailer-box.webp",
    "/images/real/mailer-boxes.webp",
    "/images/real/product-boxes.webp",
    "/images/curated/mycelium-box.webp",
    "/images/real/tissue-paper.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/real/sustainable-packaging.webp",
  ],
  "folding-cartons": [
    "/images/real/folding-cartons.webp",
    "/images/curated/skin-care-oil-box.webp",
    "/images/curated/bon-bon-box.webp",
    "/images/real/labels-stickers.webp",
    "/images/real/sleeves.webp",
  ],
  "product-boxes": [
    "/images/curated/rigid-magnetic-box.webp",
    "/images/curated/bon-bon-box.webp",
    "/images/curated/rigid-setup-box.webp",
    "/images/curated/foldable-mailer-box.webp",
    "/images/real/product-boxes.webp",
    "/images/curated/retail-insert-tray.webp",
  ],
  "candle-boxes": [
    "/images/curated/magnetic-candle-box.webp",
    "/images/real/candle-boxes.webp",
    "/images/curated/rigid-magnetic-box.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/curated/rigid-setup-box.webp",
    "/images/real/sleeves.webp",
  ],
  "cosmetic-boxes": [
    "/images/real/cosmetic-boxes.webp",
    "/images/curated/skin-care-oil-box.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/real/mailer-boxes.webp",
    "/images/curated/foldable-mailer-box.webp",
    "/images/real/perfume-boxes.webp",
  ],
  "perfume-boxes": [
    "/images/real/perfume-boxes.webp",
    "/images/curated/skin-care-oil-box.webp",
    "/images/curated/rigid-magnetic-box.webp",
    "/images/curated/rigid-setup-box.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/curated/bon-bon-box.webp",
  ],
  "jewelry-boxes": [
    "/images/real/jewelry-boxes.webp",
    "/images/curated/bracelet-packaging.webp",
    "/images/curated/one-piece-rigid-box.webp",
    "/images/curated/retail-insert-tray.webp",
    "/images/curated/rigid-setup-box.webp",
    "/images/real/product-boxes.webp",
  ],
  "custom-tissue-paper": [
    "/images/real/tissue-paper.webp",
    "/images/real/sleeves.webp",
    "/images/real/paper-bags.webp",
    "/images/curated/paper-lunch-bag.webp",
  ],
  "paper-bags": [
    "/images/curated/paper-lunch-bag.webp",
    "/images/real/paper-bags.webp",
    "/images/real/sleeves.webp",
    "/images/real/tissue-paper.webp",
    "/images/real/sustainable-packaging.webp",
  ],
  sleeves: [
    "/images/real/sleeves.webp",
    "/images/real/folding-cartons.webp",
    "/images/real/labels-stickers.webp",
    "/images/real/product-boxes.webp",
    "/images/real/candle-boxes.webp",
  ],
  "labels-and-stickers": [
    "/images/real/labels-stickers.webp",
    "/images/real/sleeves.webp",
    "/images/real/tissue-paper.webp",
    "/images/real/cosmetic-boxes.webp",
  ],
  inserts: [
    "/images/curated/retail-insert-tray.webp",
    "/images/real/inserts.webp",
    "/images/curated/bracelet-packaging.webp",
    "/images/real/candle-boxes.webp",
    "/images/real/cosmetic-boxes.webp",
  ],
  "sustainable-packaging": [
    "/images/curated/mycelium-box.webp",
    "/images/real/sustainable-packaging.webp",
    "/images/real/folding-cartons.webp",
    "/images/real/paper-bags.webp",
    "/images/real/tissue-paper.webp",
    "/images/curated/retail-insert-tray.webp",
  ],
};

const styleRecords = buildStyleRecords();

export const productStyles = Object.values(styleRecords);

export function getProductStyleBySlug(slug: string) {
  return styleRecords[slug];
}

export function getProductStylesByCategory(categorySlug: string) {
  return productStyles.filter((style) => style.categorySlug === categorySlug);
}

export function getImagePoolByCategory(categorySlug: string) {
  const styles = getProductStylesByCategory(categorySlug);

  return [
    ...(assetPoolByCategory[categorySlug] ?? []),
    ...styles.flatMap((style) => [
      style.image,
      style.fallbackImage,
      ...style.galleryImages,
    ]),
  ].filter(
    (image, index, array): image is string =>
      Boolean(image) && array.indexOf(image) === index,
  );
}

export function getRelatedProductStyles(style: ProductStyle) {
  return style.relatedProducts
    .map((slug) => getProductStyleBySlug(slug))
    .filter((item): item is ProductStyle => Boolean(item));
}

function buildStyleRecords() {
  const records: Record<string, ProductStyle> = {};

  categories.forEach((category) => {
    const seeds =
      styleSeedsByCategory[category.slug] ??
      category.variants.map((title) => ({
        title,
        description: `A premium ${category.name.toLowerCase()} format shaped for cleaner presentation and stronger structure.`,
        badge: "Premium format",
      }));

    const pool = assetPoolByCategory[category.slug] ?? [category.image];
    let previousImage = "";

    const styles = seeds.map((seed, index) => {
      const primaryImage = pickDistinctImage(pool, index, previousImage, category.image);
      previousImage = primaryImage;
      const galleryImages = [primaryImage, ...rotateImages(pool, primaryImage)].slice(0, 3);
      const slug = `${category.slug}-${slugify(seed.title)}`;
      const useCases = seed.useCases ?? buildUseCases(category);

      const style: ProductStyle = {
        title: seed.title,
        slug,
        description: seed.description,
        categorySlug: category.slug,
        image: primaryImage,
        fallbackImage: category.image,
        galleryImages,
        useCases,
        materialOptions: category.materials,
        finishOptions: category.finishes,
        relatedProducts: [],
        badge: seed.badge,
        overview: buildOverview(seed.title, category),
        dimensionsCopy: buildDimensionsCopy(seed.title, category),
        keyHighlights: buildHighlights(seed, category),
        faq: buildStyleFaqs(seed.title, category),
      };

      records[slug] = style;
      return style;
    });

    styles.forEach((style) => {
      style.relatedProducts = styles
        .filter((item) => item.slug !== style.slug)
        .slice(0, 3)
        .map((item) => item.slug);
    });
  });

  return records;
}

function buildUseCases(category: Category) {
  return [
    ...category.industries.slice(0, 3),
    "Premium gifting",
  ];
}

function buildOverview(title: string, category: Category) {
  return `${title} sits within our ${category.name.toLowerCase()} collection and is developed for brands that need more control over structure, finish, and the way the packaging is perceived at first touch. It works best when the goal is to align protection, presentation, and brand tone in one cleaner packaging format.`;
}

function buildDimensionsCopy(title: string, category: Category) {
  return `${title} can be developed in custom dimensions around the product, insert depth, and the type of reveal you want to create. We can also shape interior print, exterior print, specialty closures, and support structures around the broader ${category.name.toLowerCase()} system.`;
}

function buildHighlights(seed: StyleSeed, category: Category) {
  return [
    `${seed.badge} structure with a more considered visual hierarchy`,
    `Works with ${category.finishes.slice(0, 2).join(" and ").toLowerCase()} finishes`,
    "Can be shaped around inserts, custom sizing, and premium presentation needs",
    "Suitable for quote-first packaging programs with low minimum flexibility",
    `Supports ${category.industries.slice(0, 2).join(" and ").toLowerCase()} use cases`,
    "Can be positioned for retail, gifting, or direct-to-consumer delivery",
  ];
}

function buildStyleFaqs(title: string, category: Category) {
  const categoryName = category.name.toLowerCase();

  return [
    {
      question: `What is a ${title.toLowerCase()}?`,
      answer: `A ${title.toLowerCase()} is a premium packaging format within our ${categoryName} collection, developed to balance structure, presentation, and a cleaner customer-facing reveal.`,
    },
    {
      question: `Can ${title.toLowerCase()} be made in custom sizes?`,
      answer:
        "Yes. We build packaging around the product dimensions, insert needs, and the intended customer experience rather than relying only on fixed stock sizes.",
    },
    {
      question: `Is ${title.toLowerCase()} suitable for premium packaging?`,
      answer:
        "Yes. This style is especially useful where refined structure, finish compatibility, and brand perception all matter.",
    },
    {
      question: `Can ${title.toLowerCase()} include inserts?`,
      answer:
        "Yes. Inserts can be added where fit, protection, and cleaner internal presentation are important.",
    },
    {
      question: `What finishes work best with ${title.toLowerCase()}?`,
      answer: `Popular finish routes include ${category.finishes.slice(0, 3).join(", ").toLowerCase()}, depending on the desired brand direction and material choice.`,
    },
    {
      question: `How do I request a quote for ${title.toLowerCase()}?`,
      answer:
        "You can request a quote by sharing the product type, quantity, dimensions, material preferences, and finishing direction through our quote form or contact page.",
    },
  ];
}

function pickDistinctImage(
  pool: string[],
  index: number,
  previousImage: string,
  fallback: string,
) {
  if (pool.length === 0) {
    return fallback;
  }

  let image = pool[index % pool.length] ?? fallback;

  if (image === previousImage && pool.length > 1) {
    image = pool[(index + 1) % pool.length] ?? fallback;
  }

  return image;
}

function rotateImages(pool: string[], primaryImage: string) {
  const unique = pool.filter((image, index) => pool.indexOf(image) === index);
  const filtered = unique.filter((image) => image !== primaryImage);
  return filtered.length > 0 ? filtered : unique;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCategoryForStyle(style: ProductStyle) {
  return getCategoryBySlug(style.categorySlug);
}
