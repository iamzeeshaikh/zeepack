import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  CircleGauge,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  Truck,
} from "lucide-react";

import type { Category } from "@/data/categories";
import type { Industry } from "@/data/industries";

export type IndustrySolutionCard = {
  title: string;
  description: string;
  categorySlug: string;
  image: string;
  badge?: string;
};

export type IndustryAudienceCard = {
  title: string;
  description: string;
};

export type IndustryPageContent = {
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  trustPills: string[];
  supportImage: string;
  priorityCards: string[];
  materialsCopy: string[];
  finishCards: Array<{ title: string; icon: LucideIcon }>;
  gallery: string[];
  audience: IndustryAudienceCard[];
  valueProps: Array<{ title: string; description: string; icon: LucideIcon }>;
  seoParagraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
  recommendedSolutions: IndustrySolutionCard[];
  relatedIndustrySlugs: string[];
  relatedCategorySlugs: string[];
};

const defaultFinishes = [
  { title: "Foil Stamping", icon: Sparkles },
  { title: "Embossing", icon: Layers3 },
  { title: "Spot UV", icon: Palette },
  { title: "Soft-touch Lamination", icon: SwatchBook },
  { title: "Matte Finish", icon: ShieldCheck },
  { title: "Custom Inserts", icon: Boxes },
];

export const industryPageContent: Record<string, IndustryPageContent> = {
  cosmetics: {
    eyebrow: "Packaging for Beauty Brands",
    heroTitle: "Custom Cosmetic Packaging Boxes for Beauty Brands",
    heroDescription:
      "Developed for skincare, makeup, fragrance, and wellness brands that need custom cosmetic packaging, stronger beauty packaging, cleaner cosmetic boxes, and more refined skincare packaging across retail and direct-to-consumer channels, including brands sourcing cosmetic boxes USA support.",
    trustPills: [
      "Custom Sizes",
      "Premium Finishes",
      "Low Minimums",
      "Insert Options",
    ],
    supportImage: "/images/zee/perfume-sleeve-box.jpg",
    priorityCards: [
      "Shelf presence that feels precise, not crowded",
      "Compact structures for jars, bottles, and skincare sets",
      "Print quality and finish combinations that support premium beauty positioning",
      "Insert-led support for launch kits, gifting, and influencer mailers",
    ],
    materialsCopy: [
      "Cosmetic packaging often works best with SBS board, coated paper stocks, textured paperboard, and rigid structures for premium kits or gifting. Material choice depends on whether the goal is retail shelf display, direct shipping, or a more elevated launch experience.",
      "For beauty brands, structure and finish need to feel exact. Inserts are especially valuable for bottles, jars, and multi-piece skincare sets where protection and symmetry both influence the final perception.",
    ],
    finishCards: [
      { title: "Foil Details", icon: Sparkles },
      { title: "Embossing", icon: Layers3 },
      { title: "Spot UV", icon: Palette },
      { title: "Matte Lamination", icon: ShieldCheck },
      { title: "Soft-touch Feel", icon: SwatchBook },
      { title: "Insert Presentation", icon: Boxes },
    ],
    gallery: [
      "/images/zee/cosmetic-serum-box.jpg",
      "/images/zee/perfume-sleeve-box.jpg",
      "/images/zee/insert-partitioned.jpg",
    ],
    audience: [
      {
        title: "Skincare brands",
        description: "For serums, creams, treatment kits, and elevated retail presentation.",
      },
      {
        title: "Beauty startups",
        description: "Low-minimum premium packaging for emerging beauty and personal care launches.",
      },
      {
        title: "Makeup brands",
        description: "Designed for shelf clarity, finer print detail, and stronger product perception.",
      },
      {
        title: "Fragrance lines",
        description: "Supports premium bottle presentation, inserts, and collector-level gifting formats.",
      },
      {
        title: "Premium personal care",
        description: "Packaging for wellness, body care, and boutique personal care collections.",
      },
    ],
    valueProps: [
      {
        title: "Premium beauty presentation",
        description: "Helps products feel more established at shelf level and in direct-to-consumer delivery.",
        icon: Sparkles,
      },
      {
        title: "Custom sizes",
        description: "Each format can be shaped around jars, bottles, palettes, and sets so the final pack feels more precise.",
        icon: Boxes,
      },
      {
        title: "Finish flexibility",
        description: "Makes it easier to align foil, embossing, and matte routes to beauty brand positioning.",
        icon: Palette,
      },
      {
        title: "Fast production planning",
        description: "Launch timelines, campaign kits, and replenishment runs can be scoped with clearer production expectations.",
        icon: BadgeCheck,
      },
      {
        title: "Low minimum options",
        description: "Useful for beauty startups, smaller runs, and premium test launches.",
        icon: CircleGauge,
      },
      {
        title: "USA delivery support",
        description: "Structured production and delivery planning helps brands coordinate retail drops and direct-to-consumer movement across the USA for beauty packaging programs.",
        icon: Truck,
      },
    ],
    seoParagraphs: [
      "ZEEPACK develops custom cosmetic packaging for brands that need stronger beauty presentation, premium finish control, and cleaner structural support. From skincare launches to fragrance sets, our packaging systems are built around the way beauty products are displayed, gifted, and shipped.",
      "Whether you need luxury cosmetic boxes, custom skincare packaging, or premium beauty packaging for mailers and retail shelves, we shape the structure around product size, insert requirements, print quality, and the final customer experience.",
      "Our approach to cosmetic packaging combines presentation and practicality. That includes custom sizing, finer-detail printing, insert support for bottles and jars, premium finishing options, and material choices suited to both shelf display and direct-to-consumer delivery.",
    ],
    faqs: [
      {
        question: "What packaging is best for cosmetic products?",
        answer:
          "The best cosmetic packaging depends on the product format, retail environment, and brand positioning. Folding cartons, rigid boxes, sleeves, inserts, and premium mailers are all strong options depending on whether the product needs shelf display, gifting appeal, or direct shipping support.",
      },
      {
        question: "Can cosmetic packaging be customized by product size?",
        answer:
          "Yes. Cosmetic packaging can be tailored to bottles, jars, tubes, palettes, and multi-piece sets so the final structure feels more precise and premium.",
      },
      {
        question: "Do you offer inserts for skincare or beauty products?",
        answer:
          "Yes. Inserts are especially useful for skincare, fragrance, and beauty kits because they improve product fit, protection, and visual organization.",
      },
      {
        question: "What finishes work best for luxury cosmetic packaging?",
        answer:
          "Foil details, embossing, spot UV, matte lamination, and soft-touch surfaces are all strong choices for luxury cosmetic packaging depending on the brand direction.",
      },
      {
        question: "Can I order cosmetic packaging in low minimums?",
        answer:
          "Yes. We support low minimum cosmetic packaging options for launches, growing beauty brands, and smaller premium runs.",
      },
      {
        question: "Are sustainable cosmetic packaging materials available?",
        answer:
          "Yes. Recyclable paper-based structures, recycled-content boards, and lower-impact material options can be explored where suitable.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Cosmetic packaging can be developed around specific brand colors, print directions, and finish combinations for better consistency.",
      },
      {
        question: "Do you offer printed cosmetic boxes?",
        answer:
          "Yes. We offer printed cosmetic boxes with exterior branding, interior print options, and premium finish routes where required.",
      },
      {
        question: "Can cosmetic packaging include foil stamping?",
        answer:
          "Yes. Foil stamping is commonly used in premium beauty packaging to create a more elevated and retail-ready presentation.",
      },
      {
        question: "Are sleeves and cartons available?",
        answer:
          "Yes. Sleeves, folding cartons, rigid gift boxes, and insert-led structures can all be built within a cosmetic packaging system.",
      },
      {
        question: "Can you help with launch kit packaging?",
        answer:
          "Yes. We support launch kits, influencer mailers, PR boxes, and premium gifting formats for beauty campaigns.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on size, quantity, structure, and finish complexity. Many projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. Reference samples, material samples, or production-style sampling can be discussed depending on the project stage.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. We support domestic and international delivery depending on the project scope and production plan.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing product type, quantity, dimensions, material preferences, print needs, and finishing notes through our form or by contacting the team directly.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Rigid Boxes",
        description: "Premium beauty gifting, launch kits, and collector-style presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/zee/rigid-lid-box.jpg",
        badge: "Launch Kits",
      },
      {
        title: "Folding Cartons",
        description: "Shelf-ready skincare, makeup, and personal care packaging.",
        categorySlug: "folding-cartons",
        image: "/images/zee/folding-carton-corrugated.jpg",
        badge: "Shelf Ready",
      },
      {
        title: "Sleeve Packaging",
        description: "A clean wrap layer for jars, kits, and seasonal beauty lines.",
        categorySlug: "sleeves",
        image: "/images/zee/sleeve-apparel.jpg",
        badge: "Seasonal",
      },
      {
        title: "Insert Boxes",
        description: "Added support and better organization for jars, bottles, and sets.",
        categorySlug: "inserts",
        image: "/images/zee/insert-partitioned.jpg",
        badge: "Protection",
      },
      {
        title: "Paper Bags",
        description: "Retail-ready carry presentation for beauty counters and events.",
        categorySlug: "paper-bags",
        image: "/images/zee/paper-bag-bakery.jpg",
        badge: "Retail",
      },
      {
        title: "Tissue Paper",
        description: "A softer premium layer inside beauty mailers and boutique packaging.",
        categorySlug: "custom-tissue-paper",
        image: "/images/zee/tissue-paper-custom.jpg",
        badge: "Unboxing",
      },
    ],
    relatedIndustrySlugs: ["candles", "jewelry", "ecommerce"],
    relatedCategorySlugs: ["rigid-boxes", "folding-cartons", "inserts"],
  },
  candles: {
    eyebrow: "Packaging for Growing Candle Brands",
    heroTitle: "Custom Packaging for Candle Brands",
    heroDescription:
      "Created for candle labels that need protection for jars, premium gifting appeal, stronger scent-led branding, and a more confident direct-to-consumer delivery experience.",
    trustPills: ["Custom Sizes", "Insert Support", "Low Minimums", "Shipping Ready"],
    supportImage: "/images/zee/insert-partitioned.jpg",
    priorityCards: [
      "Protection for glass jars and delicate vessels",
      "Premium gifting presentation for seasonal and evergreen collections",
      "Scent-led branding that feels boutique and refined",
      "Shipping safety without losing visual appeal",
    ],
    materialsCopy: [
      "Candle packaging usually needs stronger board direction than visually similar retail cartons because jars add fragility and weight. Depending on the use case, that can mean rigid boxes, reinforced cartons, or mailer-led systems with insert support.",
      "For home fragrance brands, structure and finish should work together. A package still needs to feel elegant, but it also has to hold the product securely through retail handling, gifting, and shipping.",
    ],
    finishCards: [
      { title: "Matte Finishes", icon: ShieldCheck },
      { title: "Warm Foil Accents", icon: Sparkles },
      { title: "Premium Sleeve Styling", icon: Layers3 },
      { title: "Insert Presentation", icon: Boxes },
      { title: "Soft-touch Surfaces", icon: SwatchBook },
      { title: "Gift-Ready Details", icon: BadgeCheck },
    ],
    gallery: [
      "/images/zee/candle-boxes.jpg",
      "/images/zee/insert-partitioned.jpg",
      "/images/zee/mailer-blank.jpg",
    ],
    audience: [
      {
        title: "Home fragrance brands",
        description: "For premium scent collections with stronger product storytelling.",
      },
      {
        title: "Gifting brands",
        description: "Built for holiday releases, seasonal launches, and premium gift sets.",
      },
      {
        title: "Boutique candle labels",
        description: "Packaging that feels curated, refined, and ready for retail counters.",
      },
      {
        title: "DTC candle stores",
        description: "Shipping-aware packaging with better arrival experience and support.",
      },
    ],
    valueProps: [
      {
        title: "Better jar protection",
        description: "Insert-led support and stronger structures help reduce movement and breakage risk.",
        icon: ShieldCheck,
      },
      {
        title: "Premium gifting appeal",
        description: "Useful for collections that need a more boutique and presentable reveal.",
        icon: BadgeCheck,
      },
      {
        title: "Scent-led presentation",
        description: "Finish, print, and structure can all reinforce fragrance identity more effectively.",
        icon: Palette,
      },
      {
        title: "Retail and e-commerce ready",
        description: "A packaging system can be shaped to support shelf display and direct shipping together.",
        icon: Truck,
      },
      {
        title: "Low minimum flexibility",
        description: "Supports growing candle labels, premium test runs, and seasonal collections.",
        icon: CircleGauge,
      },
      {
        title: "Gift-set compatibility",
        description: "Ideal for candle bundles, accessories, and launch-ready premium sets.",
        icon: Boxes,
      },
    ],
    seoParagraphs: [
      "ZEEPACK creates custom candle boxes for brands that need better jar protection, stronger gifting presentation, and a more refined first impression across retail and direct-to-consumer channels.",
      "From luxury candle packaging to candle gift packaging and custom candle mailer boxes, we help fragrance-led brands choose structures that feel premium while supporting the practical needs of shipping, handling, and unboxing.",
      "Our candle packaging solutions can include inserts, reinforced board choices, premium finishes, and sleeve or rigid formats depending on whether the packaging is meant for shelf presentation, gifting, or more protective transit use.",
    ],
    faqs: [
      {
        question: "What packaging is best for candle products?",
        answer:
          "The best candle packaging depends on the vessel, weight, retail setting, and shipping needs. Rigid boxes, reinforced cartons, inserts, and mailer systems are all strong options depending on how the candles will be sold and delivered.",
      },
      {
        question: "Can candle packaging be customized by jar size?",
        answer:
          "Yes. Candle packaging can be tailored around vessel diameter, height, insert requirements, and gift-set configurations.",
      },
      {
        question: "Do you offer inserts for candle jars?",
        answer:
          "Yes. Inserts are one of the most important parts of premium candle packaging because they improve fit, reduce movement, and protect glassware more effectively.",
      },
      {
        question: "What finishes work well for luxury candle packaging?",
        answer:
          "Warm foil accents, matte coatings, soft-touch surfaces, sleeve styling, and subtle embossing all work well for luxury candle packaging.",
      },
      {
        question: "Can I order candle packaging in low minimums?",
        answer:
          "Yes. We support lower minimum candle packaging options for boutique brands, seasonal drops, and premium launch runs.",
      },
      {
        question: "Are sustainable candle packaging materials available?",
        answer:
          "Yes. Recyclable boards, lower-impact material routes, and more restrained print approaches can all be explored depending on the packaging format.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Candle packaging can be developed around your existing palette, print direction, and finish strategy.",
      },
      {
        question: "Do you offer printed candle boxes?",
        answer:
          "Yes. Printed candle boxes can include exterior branding, refined interior details, and presentation-led finish combinations.",
      },
      {
        question: "Can candle packaging include foil stamping?",
        answer:
          "Yes. Foil stamping is often used to add warmth and premium emphasis to candle packaging without making it feel overcrowded.",
      },
      {
        question: "Are mailers and gift sets available?",
        answer:
          "Yes. Candle packaging systems can include retail cartons, rigid gift boxes, insert-led gift sets, and shipping-ready mailers.",
      },
      {
        question: "Can you help with seasonal candle launches?",
        answer:
          "Yes. We support holiday gifting, limited-edition collections, and boutique candle launches with premium formats and low minimum flexibility.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on size, quantity, insert requirements, and finish complexity. Many candle packaging projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. Depending on the project, material samples or production-style sampling can be discussed before final approval.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. We support domestic and international projects depending on the packaging plan and production scope.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing candle type, jar size, quantity, material direction, insert needs, and finishing notes through our form or by contacting the team.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Rigid Boxes",
        description: "Premium gifting and elevated collection presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/zee/rigid-lid-box.jpg",
        badge: "Gifting",
      },
      {
        title: "Mailer Boxes",
        description: "Shipping-aware structures with better branded arrival.",
        categorySlug: "mailer-boxes",
        image: "/images/zee/mailer-blank.jpg",
        badge: "DTC",
      },
      {
        title: "Candle Jar Boxes",
        description: "Retail and gifting formats tailored around vessel support.",
        categorySlug: "candle-boxes",
        image: "/images/zee/candle-boxes.jpg",
        badge: "Jar Fit",
      },
      {
        title: "Insert Packaging",
        description: "Cleaner product positioning and reduced movement for fragile jars.",
        categorySlug: "inserts",
        image: "/images/zee/insert-partitioned.jpg",
        badge: "Protection",
      },
      {
        title: "Gift Sets",
        description: "Structured presentation for candles, accessories, and seasonal bundles.",
        categorySlug: "product-boxes",
        image: "/images/zee/product-rigid-box.jpg",
        badge: "Seasonal",
      },
      {
        title: "Shipping Boxes",
        description: "Practical support for direct-to-consumer candle delivery.",
        categorySlug: "mailer-boxes",
        image: "/images/zee/mailer-blank.jpg",
        badge: "Transit",
      },
    ],
    relatedIndustrySlugs: ["cosmetics", "ecommerce", "fashion"],
    relatedCategorySlugs: ["candle-boxes", "mailer-boxes", "inserts"],
  },
  jewelry: {
    eyebrow: "Packaging for Modern Jewelry Labels",
    heroTitle: "Premium Jewelry Packaging That Feels Brand-Aligned",
    heroDescription:
      "Designed for fine jewelry brands, boutique collections, and gifting-led labels that need precision inserts, premium tactility, and a more elevated reveal.",
    trustPills: ["Custom Sizes", "Soft Inserts", "Low Minimums", "Gift Ready"],
    supportImage: "/images/zee/insert-partitioned.jpg",
    priorityCards: [
      "Boutique feel with stronger perceived value",
      "Small-format precision and cleaner structure",
      "Insert accuracy for rings, necklaces, bracelets, and sets",
      "Gift-ready presentation that still feels brand-aligned",
    ],
    materialsCopy: [
      "Jewelry packaging often benefits from rigid structures, textured wraps, soft presentation surfaces, and smaller-format precision. The structure has to feel premium before the product is even handled.",
      "Soft inserts, layered materials, and cleaner lift-off or drawer formats help create a more considered reveal. For jewelry, fit and tactility often carry more luxury weight than excessive print coverage.",
    ],
    finishCards: [
      { title: "Foil Stamping", icon: Sparkles },
      { title: "Textured Wraps", icon: SwatchBook },
      { title: "Magnetic Closures", icon: BadgeCheck },
      { title: "Ribbon Details", icon: BadgeCheck },
      { title: "Soft Insert Presentation", icon: Boxes },
      { title: "Blind Embossing", icon: Layers3 },
    ],
    gallery: [
      "/images/zee/jewelry-cotton-box.jpg",
      "/images/zee/insert-partitioned.jpg",
      "/images/zee/rigid-lid-box.jpg",
    ],
    audience: [
      {
        title: "Fine jewelry brands",
        description: "Packaging for higher-value pieces where tactility and precision matter.",
      },
      {
        title: "Boutique jewelry labels",
        description: "A stronger reveal for smaller collections with a distinct brand point of view.",
      },
      {
        title: "Gifting businesses",
        description: "Keepsake-ready formats that elevate perceived value from first touch.",
      },
      {
        title: "Handmade premium collections",
        description: "Low-minimum packaging that still feels polished and presentation-first.",
      },
    ],
    valueProps: [
      {
        title: "Keepsake-level presentation",
        description: "Helps jewelry feel more premium and more gift-worthy immediately.",
        icon: Sparkles,
      },
      {
        title: "Precision insert support",
        description: "Supports small-format items with more controlled product positioning.",
        icon: Boxes,
      },
      {
        title: "Premium tactile feel",
        description: "Wraps, surfaces, and finishes contribute directly to perceived value.",
        icon: SwatchBook,
      },
      {
        title: "Luxury closure options",
        description: "Useful for gifting, collector-style presentation, and boutique packaging moments.",
        icon: BadgeCheck,
      },
      {
        title: "Low minimum flexibility",
        description: "Supports smaller premium collections and boutique launches.",
        icon: CircleGauge,
      },
      {
        title: "Retail and gifting alignment",
        description: "Suitable for boutique counters, gifting, and premium online orders.",
        icon: Truck,
      },
    ],
    seoParagraphs: [
      "ZEEPACK creates jewelry packaging for brands that need precision, tactility, and stronger perceived value across gifting, boutique retail, and premium unboxing moments.",
      "From luxury jewelry boxes to custom jewelry packaging and premium jewelry gift boxes, we shape the structure around insert fit, smaller-format detail, and the softer material feel that jewelry packaging often requires.",
      "Our jewelry packaging systems can include rigid boxes, drawer formats, magnetic closures, foil details, textured wraps, and insert-led layouts that help premium pieces feel more aligned with the brand and the moment of reveal.",
    ],
    faqs: [
      {
        question: "What packaging is best for jewelry products?",
        answer:
          "The best jewelry packaging usually depends on the product size, gifting goals, retail environment, and desired level of presentation. Rigid boxes, insert-led boxes, drawer formats, and smaller premium gift boxes are all strong options.",
      },
      {
        question: "Can jewelry packaging be customized by product size?",
        answer:
          "Yes. Jewelry packaging can be built around rings, bracelets, necklaces, earrings, and multi-piece sets with inserts tailored to the exact product format.",
      },
      {
        question: "Do you offer inserts for jewelry pieces?",
        answer:
          "Yes. Soft-touch pads, foam-backed holders, and precision insert layouts can all be developed depending on the piece and packaging direction.",
      },
      {
        question: "What finishes work best for luxury jewelry packaging?",
        answer:
          "Foil stamping, textured wraps, blind embossing, soft matte finishes, ribbon details, and magnetic closures all work well in luxury jewelry packaging.",
      },
      {
        question: "Can I order jewelry packaging in low minimums?",
        answer:
          "Yes. We support low minimum options for premium jewelry packaging, especially for boutique collections and smaller launches.",
      },
      {
        question: "Are sustainable jewelry packaging materials available?",
        answer:
          "Yes. Recyclable paper-based routes, lower-impact board options, and more restrained material choices can be explored where suitable.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Jewelry packaging can be aligned with your brand palette, surface feel, and finish direction for a more cohesive presentation.",
      },
      {
        question: "Do you offer printed jewelry boxes?",
        answer:
          "Yes. Printed jewelry boxes are available, though many premium jewelry brands also prefer quieter finishing routes with more restrained branding.",
      },
      {
        question: "Can jewelry packaging include foil stamping?",
        answer:
          "Yes. Foil stamping is a strong option for jewelry packaging because it adds premium emphasis without overwhelming the structure.",
      },
      {
        question: "Are drawer boxes and rigid boxes available?",
        answer:
          "Yes. Drawer boxes, lift-off rigid boxes, magnetic closure formats, and insert-led premium structures are all available.",
      },
      {
        question: "Can you help with gifting packaging for jewelry collections?",
        answer:
          "Yes. We support gifting formats, boutique counter presentation, and collector-style jewelry packaging directions.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on structure, finish, insert requirements, and quantity. Many projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. Sampling options can be discussed depending on how advanced the packaging direction already is.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. We support domestic and international delivery depending on the packaging plan and project scope.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing your jewelry type, quantity, dimensions, insert needs, materials, and finishing ideas through our form or by contacting the team directly.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Two Piece Rigid Boxes",
        description: "Classic keepsake presentation for premium jewelry gifting.",
        categorySlug: "rigid-boxes",
        image: "/images/zee/rigid-lid-box.jpg",
        badge: "Keepsake",
      },
      {
        title: "Drawer Boxes",
        description: "A refined reveal format for collectible and premium jewelry moments.",
        categorySlug: "jewelry-boxes",
        image: "/images/zee/jewelry-cotton-box.jpg",
        badge: "Reveal",
      },
      {
        title: "Magnetic Closure Boxes",
        description: "Luxury opening experience for premium sets and higher-value presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/zee/rigid-lid-box.jpg",
        badge: "Closure",
      },
      {
        title: "Precision Inserts",
        description: "Soft support for rings, necklaces, bracelets, and multi-piece arrangements.",
        categorySlug: "inserts",
        image: "/images/zee/insert-partitioned.jpg",
        badge: "Fit",
      },
      {
        title: "Premium Pouches + Boxes",
        description: "Layered presentation systems that feel more complete and gift-ready.",
        categorySlug: "jewelry-boxes",
        image: "/images/zee/jewelry-cotton-box.jpg",
        badge: "Boutique",
      },
      {
        title: "Gift Packaging",
        description: "Premium structures for gifting-driven collections and boutique launches.",
        categorySlug: "product-boxes",
        image: "/images/zee/product-rigid-box.jpg",
        badge: "Gifting",
      },
    ],
    relatedIndustrySlugs: ["fashion", "cosmetics", "ecommerce"],
    relatedCategorySlugs: ["jewelry-boxes", "rigid-boxes", "inserts"],
  },
  fashion: {
    eyebrow: "Packaging for Fashion Brands",
    heroTitle: "Premium Packaging for Fashion Labels and Boutique Retail",
    heroDescription:
      "Built for apparel, accessories, gifting collections, and boutique retail brands that need stronger arrival experience, better carry presentation, and cleaner inside-the-box storytelling.",
    trustPills: ["Custom Sizes", "Premium Finishes", "Low Minimums", "Retail Ready"],
    supportImage: "/images/zee/tissue-paper-custom.jpg",
    priorityCards: [
      "Luxury carry presentation for retail and boutique environments",
      "Better tissue-led unboxing for apparel and accessories",
      "Packaging systems that support both gifting and shipping",
      "Refined structures that align with editorial brand positioning",
    ],
    materialsCopy: [
      "Fashion packaging often relies on a broader system rather than one structure. Mailers, paper bags, tissue, sleeves, and premium product boxes all work together depending on how the collection is sold and delivered.",
      "The most effective fashion packaging usually balances tactile materials, stronger brand restraint, and enough practical support for retail handling or e-commerce fulfillment without losing elegance.",
    ],
    finishCards: [
      { title: "Matte Surfaces", icon: ShieldCheck },
      { title: "Foil Details", icon: Sparkles },
      { title: "Embossing", icon: Layers3 },
      { title: "Premium Tissue Layers", icon: SwatchBook },
      { title: "Retail Bag Presentation", icon: BadgeCheck },
      { title: "Sleeve Styling", icon: Palette },
    ],
    gallery: [
      "/images/zee/paper-bag-bakery.jpg",
      "/images/zee/tissue-paper-custom.jpg",
      "/images/zee/mailer-blank.jpg",
    ],
    audience: [
      {
        title: "Apparel brands",
        description: "Packaging that supports collections sold through retail and direct channels.",
      },
      {
        title: "Accessories labels",
        description: "Stronger presentation for smaller premium products and gifting formats.",
      },
      {
        title: "Boutique retailers",
        description: "Carry presentation, tissue systems, and gifting-ready retail packaging.",
      },
      {
        title: "DTC fashion stores",
        description: "Refined arrival experience for modern online apparel and accessories brands.",
      },
    ],
    valueProps: [
      {
        title: "Editorial brand presentation",
        description: "Supports fashion brands that want packaging to feel considered and design-led.",
        icon: Palette,
      },
      {
        title: "Retail carry impact",
        description: "Premium paper bags and wraps strengthen boutique presentation beyond the product itself.",
        icon: BadgeCheck,
      },
      {
        title: "Softer unboxing experience",
        description: "Tissue, sleeves, and interior details create a more layered arrival moment.",
        icon: SwatchBook,
      },
      {
        title: "Shipping flexibility",
        description: "Mailer-led systems can be shaped for e-commerce without feeling generic.",
        icon: Truck,
      },
      {
        title: "Low minimum options",
        description: "Useful for drops, capsules, and smaller premium runs.",
        icon: CircleGauge,
      },
      {
        title: "Multi-format consistency",
        description: "A coordinated system can span bags, boxes, mailers, and accessories more effectively.",
        icon: Boxes,
      },
    ],
    seoParagraphs: [
      "ZEEPACK develops fashion packaging for brands that need cleaner retail presentation, stronger carry experience, and a more refined direct-to-consumer arrival.",
      "From custom apparel packaging to boutique shopping bags, tissue systems, sleeves, and premium mailers, our packaging routes are shaped around the way fashion and accessories brands actually sell and present their products.",
      "Whether the goal is gifting, boutique retail, e-commerce fulfillment, or a more editorial unboxing moment, we help fashion brands choose materials, finishes, and structures that align with the collection and the brand position.",
    ],
    faqs: [
      {
        question: "What packaging is best for fashion brands?",
        answer:
          "The best fashion packaging often includes a coordinated mix of mailers, paper bags, tissue paper, sleeves, and premium product boxes depending on whether the brand sells through retail, e-commerce, gifting, or all three.",
      },
      {
        question: "Can fashion packaging be customized by product size?",
        answer:
          "Yes. Apparel and accessories packaging can be sized around garments, folded sets, accessories, or boutique gifting formats.",
      },
      {
        question: "Do you offer tissue paper and paper bags for fashion brands?",
        answer:
          "Yes. Tissue paper and premium paper bags are core parts of many fashion packaging systems, especially for boutique retail and editorial unboxing.",
      },
      {
        question: "What finishes work best for premium fashion packaging?",
        answer:
          "Matte surfaces, foil details, embossing, textured papers, and restrained sleeve styling all work well for premium fashion packaging.",
      },
      {
        question: "Can I order fashion packaging in low minimums?",
        answer:
          "Yes. We support lower minimum options for launches, capsule drops, and smaller premium collections.",
      },
      {
        question: "Are sustainable fashion packaging materials available?",
        answer:
          "Yes. Recyclable boards, paper-based carry options, lower-ink directions, and more restrained material systems can all be explored.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Fashion packaging can be developed around your existing palette, print direction, and premium finish strategy.",
      },
      {
        question: "Do you offer printed mailers for fashion brands?",
        answer:
          "Yes. Printed fashion mailers can include exterior branding, interior detail, and tissue layering for a more premium arrival.",
      },
      {
        question: "Can fashion packaging include foil stamping?",
        answer:
          "Yes. Foil details are often used in fashion packaging to create a cleaner premium accent without making the design feel heavy.",
      },
      {
        question: "Are sleeves and retail bags available?",
        answer:
          "Yes. Sleeves, premium bags, tissue programs, and mailers can all be part of a broader fashion packaging system.",
      },
      {
        question: "Can you help with launch packaging for capsule collections?",
        answer:
          "Yes. We support capsule launches, boutique retail gifting, and campaign-specific fashion packaging systems.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on structure, quantity, and finish complexity. Many fashion packaging projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. Material and structure sampling can be discussed depending on the project needs.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. Domestic and international support is available depending on the packaging scope and production plan.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing your product type, quantity, dimensions, preferred formats, and finish direction through our form or by contacting the team directly.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Mailer Boxes",
        description: "Shipping-aware fashion packaging with a more refined arrival experience.",
        categorySlug: "mailer-boxes",
        image: "/images/zee/mailer-blank.jpg",
        badge: "DTC",
      },
      {
        title: "Paper Bags",
        description: "Boutique retail carry presentation for premium fashion counters and events.",
        categorySlug: "paper-bags",
        image: "/images/zee/paper-bag-bakery.jpg",
        badge: "Retail",
      },
      {
        title: "Tissue Paper",
        description: "A softer, more layered unboxing experience for apparel and accessories.",
        categorySlug: "custom-tissue-paper",
        image: "/images/zee/tissue-paper-custom.jpg",
        badge: "Unboxing",
      },
      {
        title: "Sleeves",
        description: "A refined wrap layer for folded sets, seasonal edits, and premium collections.",
        categorySlug: "sleeves",
        image: "/images/zee/sleeve-apparel.jpg",
        badge: "Collection",
      },
      {
        title: "Product Boxes",
        description: "Stronger structure for accessories, gifting formats, and limited-edition packaging.",
        categorySlug: "product-boxes",
        image: "/images/zee/product-rigid-box.jpg",
        badge: "Gifting",
      },
      {
        title: "Labels & Stickers",
        description: "Flexible detailing for wraps, seals, product information, and seasonal updates.",
        categorySlug: "labels-and-stickers",
        image: "/images/zee/label-body-butter.jpg",
        badge: "Details",
      },
    ],
    relatedIndustrySlugs: ["jewelry", "ecommerce", "cosmetics"],
    relatedCategorySlugs: ["mailer-boxes", "paper-bags", "custom-tissue-paper"],
  },
  food: {
    eyebrow: "Packaging for Gourmet and Confectionery Brands",
    heroTitle: "Premium Food Packaging for Brands That Need Structure and Shelf Presence",
    heroDescription:
      "Developed for confectionery, specialty food, gifting products, and gourmet retail formats that need cleaner structure, presentation value, and premium print control.",
    trustPills: ["Custom Sizes", "Premium Finishes", "Low Minimums", "Retail Ready"],
    supportImage: "/images/zee/product-rigid-box.jpg",
    priorityCards: [
      "Shelf presence that feels clean and premium",
      "Packaging formats suited to gourmet gifting and specialty retail",
      "Structure that supports product protection without visual heaviness",
      "Print and finish control for a more elevated food brand presentation",
    ],
    materialsCopy: [
      "Food and confectionery packaging often relies on folding cartons, rigid gift formats, sleeves, and labels depending on the product type and the level of presentation required. Material direction should align with shelf display, handling, and perceived value.",
      "For premium food packaging, structure and graphics need to feel balanced. Too much decoration can reduce the premium feel, while stronger board choice, cleaner layout, and refined finishes often make the product feel more established.",
    ],
    finishCards: defaultFinishes,
    gallery: [
      "/images/zee/folding-carton-corrugated.jpg",
      "/images/zee/product-rigid-box.jpg",
      "/images/zee/label-body-butter.jpg",
    ],
    audience: [
      {
        title: "Chocolate brands",
        description: "Presentation-led packaging for gifting, retail display, and premium collections.",
      },
      {
        title: "Confectionery labels",
        description: "Clean structure and refined graphics for stronger shelf presence.",
      },
      {
        title: "Gourmet product brands",
        description: "Packaging for specialty products where detail and perceived value matter.",
      },
      {
        title: "Seasonal gifting businesses",
        description: "Gift-ready formats for launches, holiday drops, and premium edible sets.",
      },
    ],
    valueProps: [
      {
        title: "Better shelf presence",
        description: "Supports gourmet and confectionery products that need a more premium retail feel.",
        icon: Sparkles,
      },
      {
        title: "Gift-ready structure",
        description: "Useful for premium food presentation, gifting programs, and collector-style formats.",
        icon: BadgeCheck,
      },
      {
        title: "Clean print discipline",
        description: "Helps food packaging feel more upscale and less crowded visually.",
        icon: Palette,
      },
      {
        title: "Scalable for product lines",
        description: "A consistent packaging language can be built across multiple SKU sizes and collections.",
        icon: Boxes,
      },
      {
        title: "Retail and gifting alignment",
        description: "Suitable for shelf display, carry presentation, and premium direct gifting.",
        icon: Truck,
      },
      {
        title: "Low minimum flexibility",
        description: "Supports premium test runs, launches, and smaller specialty collections.",
        icon: CircleGauge,
      },
    ],
    seoParagraphs: [
      "ZEEPACK creates food packaging for brands that need more premium shelf presence, stronger gifting presentation, and cleaner packaging structure across confectionery and gourmet formats.",
      "From folding cartons and rigid gift boxes to sleeves, labels, and premium product packaging, we help food brands shape packaging that looks more refined while still supporting practical retail and handling needs.",
      "Whether the product is sold in boutiques, specialty food retail, gifting sets, or e-commerce channels, our food packaging approach combines better structure, cleaner graphics, premium finishes, and more strategic product presentation.",
    ],
    faqs: [
      {
        question: "What packaging is best for premium food products?",
        answer:
          "The best food packaging depends on product type, shelf environment, and whether the goal is retail display, gifting, or specialty presentation. Folding cartons, rigid gift boxes, sleeves, and labels are all strong options for premium food brands.",
      },
      {
        question: "Can food packaging be customized by product size?",
        answer:
          "Yes. Packaging can be developed around specific product dimensions, portions, bundled sets, and shelf display needs.",
      },
      {
        question: "Do you offer inserts for gourmet or gift food packaging?",
        answer:
          "Yes. Inserts can be used where product organization, protection, or premium gift presentation are important.",
      },
      {
        question: "What finishes work best for premium food packaging?",
        answer:
          "Foil accents, embossing, matte coatings, textured stocks, and cleaner print direction all work well for premium food packaging.",
      },
      {
        question: "Can I order food packaging in low minimums?",
        answer:
          "Yes. We support lower minimum options for premium food brands, launches, and specialty collections.",
      },
      {
        question: "Are sustainable food packaging materials available?",
        answer:
          "Yes. Recyclable boards, paper-based structures, and lower-impact material choices can be explored depending on the product and format.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Food packaging can be aligned with your existing palette and packaging direction for more consistent brand presentation.",
      },
      {
        question: "Do you offer printed food boxes?",
        answer:
          "Yes. Printed food boxes can be created with premium graphics, cleaner layouts, and finish routes that support upscale brand positioning.",
      },
      {
        question: "Can food packaging include foil stamping?",
        answer:
          "Yes. Foil stamping is often used to add premium emphasis to confectionery and gourmet packaging.",
      },
      {
        question: "Are cartons and gift boxes available?",
        answer:
          "Yes. Folding cartons, rigid gift boxes, sleeves, and premium product boxes are all available depending on the application.",
      },
      {
        question: "Can you help with seasonal or gifting packaging?",
        answer:
          "Yes. We support holiday gifting, limited-edition collections, and premium food packaging projects built around presentation.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on structure, finish, and quantity. Many projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. Sampling can be discussed depending on the project stage and the materials involved.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. Domestic and international project support is available depending on the production scope.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing product type, quantity, dimensions, packaging format, and finish direction through our form or by contacting the team.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Folding Cartons",
        description: "Shelf-ready structure for gourmet products and confectionery collections.",
        categorySlug: "folding-cartons",
        image: "/images/zee/folding-carton-corrugated.jpg",
        badge: "Shelf Ready",
      },
      {
        title: "Rigid Boxes",
        description: "Premium gifting formats for elevated food and confectionery presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/zee/rigid-lid-box.jpg",
        badge: "Gifting",
      },
      {
        title: "Labels & Stickers",
        description: "Useful for premium seals, product details, and smaller-run updates.",
        categorySlug: "labels-and-stickers",
        image: "/images/zee/label-body-butter.jpg",
        badge: "Details",
      },
      {
        title: "Sleeves",
        description: "A refined outer layer for cartons, sets, and premium seasonal releases.",
        categorySlug: "sleeves",
        image: "/images/zee/sleeve-apparel.jpg",
        badge: "Seasonal",
      },
      {
        title: "Product Boxes",
        description: "Flexible premium structures for presentation and gifting use cases.",
        categorySlug: "product-boxes",
        image: "/images/zee/product-rigid-box.jpg",
        badge: "Presentation",
      },
      {
        title: "Paper Bags",
        description: "Carry-ready premium packaging for retail gifting and specialty presentation.",
        categorySlug: "paper-bags",
        image: "/images/zee/paper-bag-bakery.jpg",
        badge: "Retail",
      },
    ],
    relatedIndustrySlugs: ["cosmetics", "fashion", "ecommerce"],
    relatedCategorySlugs: ["folding-cartons", "rigid-boxes", "labels-and-stickers"],
  },
  ecommerce: {
    eyebrow: "Packaging for Modern E-commerce Brands",
    heroTitle: "Premium E-commerce Packaging for Better Arrival and Better Recall",
    heroDescription:
      "Created for online brands that need shipping-ready structure, stronger branded arrival, and packaging systems that feel premium without compromising practicality.",
    trustPills: ["Shipping Ready", "Custom Sizes", "Low Minimums", "Insert Support"],
    supportImage: "/images/zee/tissue-paper-custom.jpg",
    priorityCards: [
      "Shipping-ready structure that still feels brand-led",
      "Branded arrival experience for direct-to-consumer orders",
      "Insert and wrap options for cleaner product protection",
      "Scalable packaging formats for growing online brands",
    ],
    materialsCopy: [
      "E-commerce packaging usually needs a stronger balance of structure and efficiency than retail-only packaging. Corrugated mailers, inserts, tissue, labels, and premium product boxes all play a role depending on the product and the shipping journey.",
      "The most effective direct-to-consumer packaging systems keep fulfillment practical while still making the brand feel more established when the package arrives and is opened.",
    ],
    finishCards: [
      { title: "Interior Print", icon: Palette },
      { title: "Tissue Layering", icon: SwatchBook },
      { title: "Insert Support", icon: Boxes },
      { title: "Matte Coatings", icon: ShieldCheck },
      { title: "Foil Details", icon: Sparkles },
      { title: "Branded Seals", icon: BadgeCheck },
    ],
    gallery: [
      "/images/zee/mailer-blank.jpg",
      "/images/zee/tissue-paper-custom.jpg",
      "/images/zee/insert-partitioned.jpg",
    ],
    audience: [
      {
        title: "DTC startups",
        description: "Premium shipping systems for early-stage online brands with growth ambitions.",
      },
      {
        title: "Subscription brands",
        description: "Packaging routes that support repeat delivery and stronger arrival consistency.",
      },
      {
        title: "Online gifting brands",
        description: "Adds presentation value to products sold directly through digital channels.",
      },
      {
        title: "Scaling e-commerce stores",
        description: "Packaging systems that can grow with volume without losing presentation quality.",
      },
    ],
    valueProps: [
      {
        title: "Stronger branded arrival",
        description: "Helps the first physical touchpoint feel more intentional and more premium.",
        icon: Sparkles,
      },
      {
        title: "Practical fulfillment support",
        description: "Packaging can be shaped around easy packing, inserts, and scalable shipping workflows.",
        icon: Truck,
      },
      {
        title: "Insert and tissue compatibility",
        description: "Useful for better product organization and a cleaner reveal inside the box.",
        icon: Boxes,
      },
      {
        title: "Low minimum flexibility",
        description: "Supports new product launches, smaller brands, and test runs.",
        icon: CircleGauge,
      },
      {
        title: "Retail-grade perception online",
        description: "Makes direct-to-consumer packaging feel more considered and more established.",
        icon: BadgeCheck,
      },
      {
        title: "System-level consistency",
        description: "Mailers, inserts, wraps, and labels can be aligned into a cohesive e-commerce packaging language.",
        icon: Layers3,
      },
    ],
    seoParagraphs: [
      "ZEEPACK develops e-commerce packaging for online brands that need stronger structure, better arrival experience, and a more premium direct-to-consumer presentation.",
      "From custom mailer boxes and printed shipping boxes to tissue systems, inserts, branded seals, and premium product packaging, we help brands design e-commerce packaging that feels more strategic and more memorable.",
      "Our premium e-commerce packaging routes support shipping protection, fulfillment practicality, internal branding opportunities, and cleaner unboxing experiences that help online brands feel more established from the first delivery.",
    ],
    faqs: [
      {
        question: "What packaging is best for e-commerce brands?",
        answer:
          "The best e-commerce packaging usually depends on product fragility, fulfillment needs, and the level of branded arrival experience you want to create. Mailer boxes, inserts, tissue, labels, and premium product boxes are all common parts of a strong system.",
      },
      {
        question: "Can e-commerce packaging be customized by product size?",
        answer:
          "Yes. Packaging can be developed around the product dimensions, insert needs, and shipping requirements of each SKU or product family.",
      },
      {
        question: "Do you offer inserts for e-commerce packaging?",
        answer:
          "Yes. Inserts are especially useful for e-commerce because they improve protection, reduce movement, and create a cleaner unboxing layout.",
      },
      {
        question: "What finishes work best for premium e-commerce packaging?",
        answer:
          "Interior print, matte coatings, branded tissue, subtle foil details, and cleaner label or seal systems all work well for premium e-commerce packaging.",
      },
      {
        question: "Can I order e-commerce packaging in low minimums?",
        answer:
          "Yes. We support low minimum packaging options for growing online brands and launch-ready direct-to-consumer projects.",
      },
      {
        question: "Are sustainable e-commerce packaging materials available?",
        answer:
          "Yes. Recyclable board structures, paper-based insert routes, and lower-impact material directions can all be explored where suitable.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. E-commerce packaging can be aligned with your brand palette and overall presentation direction across mailers, inserts, tissue, and labels.",
      },
      {
        question: "Do you offer printed mailer boxes?",
        answer:
          "Yes. Printed mailers with exterior branding, interior graphics, and supporting unboxing layers are available.",
      },
      {
        question: "Can e-commerce packaging include foil stamping?",
        answer:
          "Yes. Foil can be used where it supports the brand without making the shipping format feel overworked.",
      },
      {
        question: "Are tissue paper and labels available?",
        answer:
          "Yes. Tissue, labels, branded seals, and support inserts can all be integrated into a premium e-commerce packaging system.",
      },
      {
        question: "Can you help with subscription packaging?",
        answer:
          "Yes. Subscription and repeat-delivery packaging systems can be shaped around fulfillment needs and stronger branded arrival.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Turnaround depends on structure, printing, insert complexity, and volume. Many projects move through production in a few weeks after approvals.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes. We can discuss sample routes depending on how defined the structure and branding direction already are.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. Domestic and international support is available depending on the packaging and delivery plan.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by sharing your product type, quantity, dimensions, material preferences, print needs, and shipping priorities through our form or by contacting the team.",
      },
    ],
    recommendedSolutions: [
      {
        title: "Mailer Boxes",
        description: "The core premium shipping format for many modern online brands.",
        categorySlug: "mailer-boxes",
        image: "/images/zee/mailer-blank.jpg",
        badge: "DTC",
      },
      {
        title: "Tissue Paper",
        description: "Adds softness and brand layering inside mailers and shipping boxes.",
        categorySlug: "custom-tissue-paper",
        image: "/images/zee/tissue-paper-custom.jpg",
        badge: "Unboxing",
      },
      {
        title: "Labels & Stickers",
        description: "Useful for branded seals, shipping touches, and lower-run customization.",
        categorySlug: "labels-and-stickers",
        image: "/images/zee/label-body-butter.jpg",
        badge: "Seals",
      },
      {
        title: "Custom Inserts",
        description: "Improves protection and organization for fragile or premium products.",
        categorySlug: "inserts",
        image: "/images/zee/insert-partitioned.jpg",
        badge: "Protection",
      },
      {
        title: "Product Boxes",
        description: "Useful where presentation packaging also needs to survive outer shipping.",
        categorySlug: "product-boxes",
        image: "/images/zee/product-rigid-box.jpg",
        badge: "Hybrid",
      },
      {
        title: "Sustainable Packaging",
        description: "Lower-impact routes for online brands that want more restrained packaging systems.",
        categorySlug: "sustainable-packaging",
        image: "/images/zee/sustainable-kraft-box.jpg",
        badge: "Eco",
      },
    ],
    relatedIndustrySlugs: ["fashion", "candles", "cosmetics"],
    relatedCategorySlugs: ["mailer-boxes", "custom-tissue-paper", "inserts"],
  },
};

export function getIndustryPageContent(industry: Industry) {
  return industryPageContent[industry.slug];
}

export function getIndustryRelatedCategories(
  content: IndustryPageContent,
  categories: Category[],
) {
  return categories.filter((category) =>
    content.relatedCategorySlugs.includes(category.slug),
  );
}

export function getRelatedIndustries(
  content: IndustryPageContent,
  industries: Industry[],
) {
  return industries.filter((industry) =>
    content.relatedIndustrySlugs.includes(industry.slug),
  );
}

function makeIndustryContent(params: {
  name: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  priorityCards: string[];
  seoParagraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
  image: string;
  gallery: string[];
  relatedCategorySlugs: string[];
  relatedIndustrySlugs: string[];
  trustPills?: string[];
}): IndustryPageContent {
  return {
    eyebrow: `Packaging for ${params.name}`,
    heroTitle: params.heroTitle,
    heroDescription: params.heroDescription,
    trustPills: params.trustPills ?? ["Custom Sizes", "Premium Finishes", "Low Minimums", "Insert Options"],
    supportImage: params.image,
    priorityCards: params.priorityCards,
    materialsCopy: [
      `${params.name} packaging works best when materials are chosen around the product format, retail environment, and the experience you want to create at first touch.`,
      `We help ${params.category} brands identify the right structural direction, material route, and finish combination to match their product positioning and customer expectations.`,
    ],
    finishCards: defaultFinishes,
    gallery: params.gallery,
    audience: [
      { title: `Established ${params.name.toLowerCase()} brands`, description: `For brands seeking stronger packaging consistency and more refined presentation across their product range.` },
      { title: `Growing ${params.name.toLowerCase()} brands`, description: `Low-minimum premium packaging for brands building their ${params.category} presence.` },
      { title: `Boutique ${params.name.toLowerCase()} producers`, description: `Artisan and specialty producers that need packaging which reflects their product's quality.` },
      { title: `E-commerce ${params.name.toLowerCase()} brands`, description: `Packaging systems for online ${params.category} brands focused on DTC delivery and unboxing.` },
      { title: `Seasonal ${params.name.toLowerCase()} launches`, description: `Campaign packaging for limited drops and seasonal collections in the ${params.category} space.` },
    ],
    valueProps: [
      { title: "Premium presentation", description: `Helps ${params.category} products make a stronger impression across retail, gifting, and direct-to-consumer delivery.`, icon: Sparkles },
      { title: "Custom sizing", description: "Every format is built around your product dimensions, not generic stock measurements.", icon: Boxes },
      { title: "Finish flexibility", description: "Foil, embossing, matte, and soft-touch options can be aligned to your specific brand direction.", icon: Palette },
      { title: "Low minimum options", description: `${params.name} brands at any scale can access premium packaging formats with flexible quantities.`, icon: CircleGauge },
      { title: "Insert support", description: "Custom inserts improve product fit, protection, and the quality of the opening experience.", icon: BadgeCheck },
      { title: "USA delivery", description: `Structured production and delivery planning for ${params.category} brands shipping across the USA.`, icon: Truck },
    ],
    seoParagraphs: params.seoParagraphs,
    faqs: params.faqs,
    recommendedSolutions: [],
    relatedIndustrySlugs: params.relatedIndustrySlugs,
    relatedCategorySlugs: params.relatedCategorySlugs,
  };
}

const generatedIndustryContent: Record<string, IndustryPageContent> = {
  perfume: makeIndustryContent({
    name: "Perfume & Fragrance",
    category: "fragrance",
    heroTitle: "Custom Perfume Boxes & Fragrance Packaging for Premium Brands",
    heroDescription: "Developed for perfume brands, cologne producers, and fragrance houses that need luxury bottle presentation, insert-led support, and premium gifting formats that reflect the value of what's inside.",
    priorityCards: ["Rigid box formats for single and gift-set bottles", "Custom inserts for secure, precise bottle positioning", "Foil, embossing, and soft-touch finish options", "Luxury gifting and retail display formats"],
    seoParagraphs: [
      "ZEEPACK develops custom perfume packaging for fragrance brands that need more than a basic carton. From rigid magnetic gift boxes to printed folding cartons, each format is shaped around the bottle dimensions, the insert requirements, and the brand's position in the market.",
      "Premium perfume packaging combines structural precision with finish quality. The right insert keeps the bottle secure during transit and gifting. The right outer box communicates value before the product is even seen. We help fragrance brands align both elements.",
      "Whether you need luxury perfume boxes for retail, collector-edition formats, or travel-size cartons for discovery sets, our team supports the full range of fragrance packaging needs — including low minimums for emerging brands and scaled production for established fragrance houses.",
    ],
    faqs: [
      { question: "What is the best packaging for perfume bottles?", answer: "Rigid boxes with custom inserts are the most premium option, providing secure bottle fit and an elevated reveal. Folding cartons are also popular for retail shelf packaging." },
      { question: "Can perfume boxes include inserts?", answer: "Yes. Custom inserts ensure the bottle sits securely, reduces movement during transit, and creates a more premium opening experience." },
      { question: "What finishes work best for luxury perfume packaging?", answer: "Foil stamping, soft-touch lamination, embossing, and spot UV are all popular choices for luxury fragrance brands." },
      { question: "Can I order perfume packaging in low minimums?", answer: "Yes. We support low minimum perfume packaging for new launches, campaign drops, and boutique fragrance brands." },
    ],
    image: "/images/industries/perfume.webp",
    gallery: ["/images/zee/perfume-sleeve-box.jpg", "/images/zee/perfume-sleeve-box.jpg", "/images/zee/rigid-lid-box.jpg"],
    relatedCategorySlugs: ["perfume-boxes", "rigid-boxes", "inserts"],
    relatedIndustrySlugs: ["cosmetics", "luxury-gifts", "jewelry"],
  }),
  "subscription-boxes": makeIndustryContent({
    name: "Subscription Boxes",
    category: "subscription",
    heroTitle: "Custom Subscription Box Packaging for DTC Brands",
    heroDescription: "Built for subscription brands that need consistent, memorable packaging on every monthly drop — mailer formats with interior print, tissue wrapping, inserts, and brand-consistent systems that scale with your subscriber count.",
    priorityCards: ["Corrugated mailer formats with interior print options", "Tissue wrapping systems for premium unboxing", "Branded sleeve and insert layers", "Scalable packaging programs for growing subscriber counts"],
    seoParagraphs: [
      "ZEEPACK develops subscription box packaging for DTC brands that want every delivery to feel like a moment. From exterior mailer print to interior tissue, inserts, and card layers, we help build the unboxing sequence that keeps subscribers sharing and coming back.",
      "Subscription packaging needs to scale. As order volumes grow, the packaging structure, print system, and supplier relationship all need to work together consistently. We support brands at launch stage and at scale with the same attention to structural quality.",
      "Whether you're building a beauty box, wellness subscription, or specialty food delivery brand, premium subscription packaging creates a tangible brand moment that digital channels alone can't replicate.",
    ],
    faqs: [
      { question: "What makes good subscription box packaging?", answer: "Strong mailer structure, branded interior print, tissue wrapping, and thoughtful inserts all contribute to a memorable unboxing that subscribers share and remember." },
      { question: "Can subscription packaging be customized each month?", answer: "Yes. Sleeve systems, sticker campaigns, and tissue variations allow for monthly changes without requiring a full packaging redesign." },
      { question: "What is the best mailer format for subscription boxes?", answer: "Roll-end tuck-front and auto-lock mailers are both popular. The right choice depends on product size, weight, and how much interior print you want." },
    ],
    image: "/images/industries/subscription-boxes.webp",
    gallery: ["/images/zee/mailer-custom-design.jpg", "/images/zee/mailer-blank.jpg", "/images/zee/tissue-paper-custom.jpg"],
    relatedCategorySlugs: ["mailer-boxes", "custom-tissue-paper", "inserts"],
    relatedIndustrySlugs: ["ecommerce", "cosmetics", "health-wellness"],
  }),
  cbd: makeIndustryContent({
    name: "CBD & Cannabis",
    category: "CBD and cannabis",
    heroTitle: "Custom CBD Packaging & Cannabis Product Boxes for Retail and DTC",
    heroDescription: "Designed for CBD brands, hemp companies, and cannabis product lines that need compliant packaging with strong retail presence — including tincture boxes, gummy packaging, display formats, and mylar bags.",
    priorityCards: ["Compliant panel sizing for required label information", "Child-resistant closure options available", "Premium retail finish for dispensary and wellness channels", "Display box formats for counter retail placement"],
    seoParagraphs: [
      "ZEEPACK creates custom CBD packaging for tincture brands, gummy companies, topical wellness products, and cannabis accessories. Each format is developed with both compliance requirements and retail shelf impact in mind.",
      "CBD packaging has to do two things simultaneously: communicate trust and communicate quality. Clean print direction, correct panel sizing, and premium finishes help CBD brands stand out in competitive dispensary and wellness retail environments.",
      "From single tincture cartons to full display boxes, mylar bags for edibles, and branded DTC mailers, we support the full range of CBD and cannabis packaging needs — including low minimums for new product launches.",
    ],
    faqs: [
      { question: "Does CBD packaging need to be child-resistant?", answer: "This depends on your state and product regulations. We offer child-resistant closure options for brands where regulations require them." },
      { question: "What packaging is best for CBD tincture bottles?", answer: "Folding cartons with proper panel space are standard for tincture bottles. Rigid boxes are a premium option for gift-tier CBD products." },
      { question: "Can CBD packaging include mylar bags?", answer: "Yes. Mylar pouches are popular for CBD gummies and edibles where barrier protection and child-resistant features are needed." },
    ],
    image: "/images/industries/cbd.png",
    gallery: ["/images/zee/product-rigid-box.jpg", "/images/zee/product-rigid-box.jpg", "/images/zee/product-rigid-box.jpg"],
    relatedCategorySlugs: ["cbd-packaging", "display-boxes", "mylar-bags"],
    relatedIndustrySlugs: ["health-wellness", "supplements", "wellness"],
  }),
  electronics: makeIndustryContent({
    name: "Electronics & Tech",
    category: "electronics and tech",
    heroTitle: "Custom Electronics Packaging for Tech Brands and Accessories",
    heroDescription: "Packaging for electronics brands, tech accessory companies, and consumer gadget retailers that need protective insert formats, clean retail presence, and strong brand positioning on shelf.",
    priorityCards: ["Protective foam and paper inserts for secure product fit", "Retail-ready display box formats", "Premium print for shelf impact in tech retail", "Custom box shapes around product dimensions"],
    seoParagraphs: [
      "ZEEPACK develops electronics packaging for tech accessories, consumer gadgets, and electronic product brands. From retail display boxes with header cards to rigid gift boxes with protective inserts, we build packaging around the product's shape, weight, and shelf environment.",
      "Tech packaging has to communicate innovation and quality quickly. Strong print, clean finishes, and precise product fit all contribute to how a consumer perceives a tech brand at first interaction — both at retail and during unboxing.",
      "Whether you need display-ready packaging for phone accessories, corrugated shipping for larger electronics, or premium rigid gift boxes for high-value tech products, our team helps find the right structure and presentation direction.",
    ],
    faqs: [
      { question: "What inserts are best for electronics packaging?", answer: "Foam, molded paper pulp, and die-cut corrugated inserts are all used for electronics depending on fragility, weight, and premium positioning." },
      { question: "Can electronics packaging be retail-ready from shipping?", answer: "Yes. Corrugated display shippers and PDQ formats are designed to convert from shipping to retail display without additional setup." },
      { question: "What finishes are popular for premium tech packaging?", answer: "Matte lamination, soft-touch, spot UV, and foil accents are all used for premium tech packaging to communicate quality and innovation." },
    ],
    image: "/images/industries/electronics.webp",
    gallery: ["/images/zee/product-rigid-box.jpg", "/images/zee/product-rigid-box.jpg", "/images/zee/rigid-lid-box.jpg"],
    relatedCategorySlugs: ["display-boxes", "rigid-boxes", "inserts"],
    relatedIndustrySlugs: ["tech-accessories", "gaming", "corporate-gifts"],
  }),
  "luxury-gifts": makeIndustryContent({
    name: "Luxury Gifts",
    category: "luxury gifting",
    heroTitle: "Custom Luxury Gift Boxes & Premium Gifting Packaging",
    heroDescription: "Premium rigid box packaging for luxury gifting programs, high-end hampers, corporate gift sets, and occasion-based gifting where the packaging itself is part of the gift.",
    priorityCards: ["Magnetic closure and ribbon-tie rigid formats", "Custom inserts for multi-product gift sets", "Premium wrap and specialty paper options", "Foil, embossing, and soft-touch finishing"],
    seoParagraphs: [
      "ZEEPACK creates luxury gift packaging for brands, corporate gifting programs, and premium occasion-based gifting. From single-product magnetic boxes to deep hamper formats with custom inserts, we build around the gifting experience as much as the product.",
      "Premium gift packaging communicates value before the recipient even opens the box. Material quality, closure format, finish texture, and interior presentation all contribute to how a luxury gift is received — and how likely it is to be remembered.",
      "Whether you need seasonal gift boxes, custom corporate gifting sets, or ongoing premium packaging for a luxury brand's gifting line, we support the full range of luxury gift packaging with low minimum flexibility for smaller programs.",
    ],
    faqs: [
      { question: "What makes luxury gift packaging premium?", answer: "Material quality, closure format (magnetic, ribbon), interior finish, and structural precision all contribute to premium gift packaging positioning." },
      { question: "Can luxury gift boxes include custom inserts?", answer: "Yes. Custom inserts are often central to luxury gift packaging — they organize products, improve fit, and elevate the reveal." },
      { question: "Are low minimums available for luxury gift boxes?", answer: "Yes. We support smaller luxury gifting programs and new gift range launches with flexible minimum quantities." },
    ],
    image: "/images/industries/luxury-gifts.jpg",
    gallery: ["/images/zee/rigid-lid-box.jpg", "/images/zee/rigid-shoulder-box.jpg", "/images/zee/rigid-shoulder-box.jpg"],
    relatedCategorySlugs: ["gift-boxes", "rigid-boxes", "inserts"],
    relatedIndustrySlugs: ["corporate-gifts", "jewelry", "cosmetics"],
  }),
  "health-wellness": makeIndustryContent({
    name: "Health & Wellness",
    category: "health and wellness",
    heroTitle: "Custom Health & Wellness Packaging for Supplement and Wellness Brands",
    heroDescription: "Clean, trusted packaging for wellness supplement brands, functional health products, and holistic wellness companies that need professional retail presentation and strong DTC packaging systems.",
    priorityCards: ["Clean, clinical brand direction for trusted positioning", "Retail shelf-ready carton and display formats", "Premium rigid box options for gift-tier wellness sets", "Low minimum options for new wellness product launches"],
    seoParagraphs: [
      "ZEEPACK develops health and wellness packaging for supplement brands, functional food companies, sleep health products, immune support lines, and the broader wellness category. Each format is developed to communicate trust, efficacy, and brand quality.",
      "Wellness packaging must balance clinical credibility with premium brand appeal. Clean print direction, proper panel sizing for compliance information, and quality finishes all help wellness brands stand out in competitive health retail environments.",
      "From vitamin cartons and supplement display boxes to premium rigid gift sets for wellness hampers, we support the full range of health packaging needs — including low minimums for emerging wellness brands.",
    ],
    faqs: [
      { question: "What packaging works best for wellness supplements?", answer: "Folding cartons with auto-lock bases are standard. Rigid boxes work for premium gift tiers. Display boxes are ideal for retail counter placement." },
      { question: "Can wellness packaging be eco-friendly?", answer: "Yes. Recycled content, FSC-certified board, and water-based inks are all available for wellness brands pursuing sustainable packaging." },
      { question: "What finish direction works for wellness brands?", answer: "Matte lamination with clean typography communicates clinical trust. Soft-touch with foil accents works for premium positioning. The right choice depends on brand direction." },
    ],
    image: "/images/industries/health-wellness.webp",
    gallery: ["/images/zee/folding-carton-corrugated.jpg", "/images/zee/product-rigid-box.jpg", "/images/zee/folding-carton-corrugated.jpg"],
    relatedCategorySlugs: ["supplement-packaging", "display-boxes", "folding-cartons"],
    relatedIndustrySlugs: ["supplements", "wellness", "fitness"],
  }),
  supplements: makeIndustryContent({
    name: "Supplements & Vitamins",
    category: "supplement and vitamin",
    heroTitle: "Custom Supplement Packaging & Vitamin Boxes for Health Brands",
    heroDescription: "Professional packaging for supplement brands, vitamin companies, and nutraceutical producers that need strong retail shelf presence, compliant label panels, and packaging formats that position health products with trust and quality.",
    priorityCards: ["Retail-ready folding carton and auto-lock formats", "Display box systems for pharmacy and wellness retail", "Premium rigid gift box options for supplement sets", "Mylar pouch formats for powders and loose supplements"],
    seoParagraphs: [
      "ZEEPACK creates custom supplement packaging for vitamin brands, protein companies, probiotic producers, and nutraceutical brands. Each packaging direction is developed around the product format, retail channel, and the brand positioning goals.",
      "Supplement packaging needs to communicate efficacy and trust. Clean, organized print direction, proper compliance panel space, and a quality finish all contribute to how a supplement product is perceived at pharmacy, health store, and online retail.",
      "From individual vitamin cartons to full-range supplement display systems, mylar pouches for protein powder, and premium gift box sets for wellness gifting, we support the full range of supplement packaging needs across all brand stages.",
    ],
    faqs: [
      { question: "What is the best supplement box structure?", answer: "Reverse tuck end and auto-lock bottom cartons are most popular for supplement bottles. Rigid boxes work for premium gift tiers or launch sets." },
      { question: "Can supplement packaging include window cutouts?", answer: "Yes. Window cartons allow consumers to see the bottle or product inside, which can be effective for retail display." },
      { question: "Do supplement boxes need specific panel space?", answer: "Yes. Supplement packaging must accommodate supplement facts panels, directions, and regulatory information. We build panel space into each layout." },
    ],
    image: "/images/industries/supplements.webp",
    gallery: ["/images/zee/folding-carton-corrugated.jpg", "/images/zee/folding-carton-cosmetic.jpg", "/images/zee/product-rigid-box.jpg"],
    relatedCategorySlugs: ["supplement-packaging", "mylar-bags", "display-boxes"],
    relatedIndustrySlugs: ["health-wellness", "wellness", "fitness"],
  }),
  "pet-products": makeIndustryContent({
    name: "Pet Products",
    category: "pet product",
    heroTitle: "Custom Pet Packaging for Pet Food, Treats, and Accessory Brands",
    heroDescription: "Packaging for pet food brands, dog treat companies, cat product retailers, and pet accessory businesses that need food-safe, durable formats with engaging brand presentation for retail and DTC.",
    priorityCards: ["Food-grade materials for direct food contact compliance", "Stand-up mylar pouch formats for treats and food", "Retail display box options for accessories", "Durable corrugated for shipping larger pet products"],
    seoParagraphs: [
      "ZEEPACK develops pet packaging for pet food brands, treat companies, and pet accessory retailers. From high-barrier mylar pouches for pet treats to corrugated retail display boxes for accessories, each format is built around food safety, product durability, and brand appeal.",
      "Pet product packaging needs to engage pet owners as consumers. Strong photography, clear brand messaging, and quality finishes all help pet brands stand out in competitive pet retail environments — from independent pet stores to large chain retailers.",
      "Whether you're packaging premium dog food, artisan cat treats, or a growing line of pet wellness supplements, we help pet brands find the right packaging direction for their specific product and channel.",
    ],
    faqs: [
      { question: "What packaging is best for dog treats?", answer: "Stand-up mylar bags are the most popular format for dog treats due to their barrier protection, resealable closure, and print quality." },
      { question: "Are pet food packaging materials food-safe?", answer: "Yes. All materials we use for pet food packaging are food-grade and compliant with relevant food safety standards." },
      { question: "Can pet packaging include window cutouts?", answer: "Yes. Window options are popular for pet treat bags and boxes where product visibility increases purchase intent." },
    ],
    image: "/images/industries/pet-products.webp",
    gallery: ["/images/zee/folding-carton-corrugated.jpg", "/images/zee/product-rigid-box.jpg", "/images/zee/product-rigid-box.jpg"],
    relatedCategorySlugs: ["mylar-bags", "display-boxes", "food-boxes"],
    relatedIndustrySlugs: ["pet-treats", "veterinary", "natural-organic"],
  }),
  "corporate-gifts": makeIndustryContent({
    name: "Corporate Gifts",
    category: "corporate gifting",
    heroTitle: "Custom Corporate Gift Packaging for Branded Gifting Programs",
    heroDescription: "Professional branded gift packaging for corporate client appreciation programs, employee gifts, event giveaways, and executive gifting sets that reflect company values and brand quality.",
    priorityCards: ["Premium rigid box formats for executive gifting", "Multi-product insert systems for curated gift sets", "Professional brand print with company identity", "Scalable programs for large corporate gift orders"],
    seoParagraphs: [
      "ZEEPACK develops custom corporate gift packaging for businesses that need professional, branded gifting formats. From single-product premium boxes to multi-item curated gift sets with custom inserts, we build corporate gift packaging that reflects the company's standards.",
      "Corporate gift packaging communicates brand values. The quality of the box, the precision of the insert, and the finish of the print all send a message about the company before the gift is even unwrapped. Premium packaging makes corporate gifts feel considered.",
      "Whether you need year-end client gifts, employee appreciation kits, event giveaway packaging, or a scalable program for an ongoing corporate gifting strategy, we support all levels of corporate gift packaging with flexible quantities.",
    ],
    faqs: [
      { question: "What box formats work best for corporate gifts?", answer: "Magnetic rigid boxes, two-piece lid-and-base boxes, and deep hamper boxes are all popular for corporate gifting depending on the number of items." },
      { question: "Can corporate gift boxes include company branding?", answer: "Yes. Full-color print, foil logo stamping, and embossed branding are all available for corporate gift packaging." },
      { question: "Are low minimums available for corporate gift boxes?", answer: "Yes. We support smaller corporate gifting programs as well as large-scale branded gift orders." },
    ],
    image: "/images/industries/corporate-gifts.webp",
    gallery: ["/images/zee/rigid-shoulder-box.jpg", "/images/zee/rigid-shoulder-box.jpg", "/images/zee/rigid-shoulder-box.jpg"],
    relatedCategorySlugs: ["gift-boxes", "rigid-boxes", "inserts"],
    relatedIndustrySlugs: ["luxury-gifts", "corporate-events", "ecommerce"],
  }),
  confectionery: makeIndustryContent({
    name: "Confectionery & Chocolate",
    category: "confectionery and chocolate",
    heroTitle: "Custom Confectionery Packaging & Chocolate Boxes for Gifting and Retail",
    heroDescription: "Food-safe, premium packaging for chocolatiers, candy brands, and confectionery retailers that need elegant gifting formats, retail cartons with insert cavities, and seasonal packaging for holiday collections.",
    priorityCards: ["Food-grade materials throughout all packaging formats", "Rigid gift box formats with insert cavities for individual pieces", "Window options for confectionery product visibility", "Seasonal and limited-edition packaging for holiday gifting"],
    seoParagraphs: [
      "ZEEPACK creates confectionery packaging for chocolate brands, candy companies, and specialty sweet makers. From luxury chocolate gift boxes with individual insert cavities to printed candy cartons and seasonal window boxes, each format is developed around food safety and premium presentation.",
      "Confectionery packaging plays a major role in purchase decisions. The box communicates the quality of what's inside before the first piece is tasted. Premium rigid boxes, clean print direction, and elegant finishes help confectionery brands charge more and sell more.",
      "Whether you need chocolate truffle boxes, seasonal candy packaging, wedding favor boxes, or retail display cartons for a confectionery range, we support all formats with food-grade materials and premium finish options.",
    ],
    faqs: [
      { question: "What are the best chocolate box formats?", answer: "Rigid two-piece boxes with insert cavities are the most premium option. Folding cartons with window options are popular for retail. Both can be made food-safe." },
      { question: "Can confectionery inserts hold individual pieces?", answer: "Yes. Custom insert cavities can be designed to hold individual chocolates, truffles, or confections in precise, secure positions." },
      { question: "Is confectionery packaging food-safe?", answer: "Yes. We use food-grade materials and coatings across all confectionery packaging formats." },
    ],
    image: "/images/industries/confectionery.webp",
    gallery: ["/images/zee/folding-carton-cosmetic.jpg", "/images/zee/folding-carton-cosmetic.jpg", "/images/zee/folding-carton-corrugated.jpg"],
    relatedCategorySlugs: ["candy-boxes", "food-boxes", "window-boxes"],
    relatedIndustrySlugs: ["food", "bakery", "chocolate"],
  }),
};

const simpleIndustries = [
  { slug: "bakery", name: "Bakery", category: "bakery", image: "/images/zee/folding-carton-corrugated.jpg", related: ["bakery-boxes", "window-boxes", "food-boxes"], industries: ["food", "confectionery", "cafe"] },
  { slug: "coffee-tea", name: "Coffee & Tea", category: "coffee and tea", image: "/images/zee/folding-carton-corrugated.jpg", related: ["coffee-tea-boxes", "mylar-bags", "labels-and-stickers"], industries: ["cafe", "gourmet-food", "subscription-boxes"] },
  { slug: "skincare", name: "Skincare", category: "skincare", image: "/images/zee/cosmetic-serum-box.jpg", related: ["cosmetic-boxes", "rigid-boxes", "folding-cartons"], industries: ["cosmetics", "health-wellness", "vegan-beauty"] },
  { slug: "hair-care", name: "Hair Care", category: "hair care", image: "/images/zee/cosmetic-serum-box.jpg", related: ["cosmetic-boxes", "folding-cartons", "labels-and-stickers"], industries: ["cosmetics", "wellness", "mens-grooming"] },
  { slug: "mens-grooming", name: "Men's Grooming", category: "men's grooming", image: "/images/zee/product-rigid-box.jpg", related: ["product-boxes", "rigid-boxes", "cosmetic-boxes"], industries: ["cosmetics", "skincare", "wellness"] },
  { slug: "soap-bath", name: "Soap & Bath", category: "soap and bath", image: "/images/zee/candle-boxes.jpg", related: ["soap-boxes", "window-boxes", "kraft-boxes"], industries: ["wellness", "organic-products", "aromatherapy"] },
  { slug: "wellness", name: "Wellness", category: "wellness", image: "/images/industries/health-wellness.webp", related: ["supplement-packaging", "folding-cartons", "rigid-boxes"], industries: ["health-wellness", "supplements", "fitness"] },
  { slug: "fitness", name: "Fitness", category: "fitness and sports nutrition", image: "/images/zee/folding-carton-corrugated.jpg", related: ["supplement-packaging", "mylar-bags", "display-boxes"], industries: ["supplements", "health-wellness", "protein-fitness"] },
  { slug: "organic-products", name: "Organic Products", category: "organic", image: "/images/zee/sustainable-kraft-box.jpg", related: ["kraft-boxes", "sustainable-packaging", "window-boxes"], industries: ["natural-organic", "vegan-beauty", "artisan-food"] },
  { slug: "aromatherapy", name: "Aromatherapy", category: "aromatherapy", image: "/images/industries/perfume.webp", related: ["cosmetic-boxes", "inserts", "gift-boxes"], industries: ["essential-oils", "wellness", "spa-wellness"] },
  { slug: "essential-oils", name: "Essential Oils", category: "essential oil", image: "/images/industries/perfume.webp", related: ["cosmetic-boxes", "inserts", "rigid-boxes"], industries: ["aromatherapy", "wellness", "soap-bath"] },
  { slug: "baby-products", name: "Baby Products", category: "baby and infant", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["maternity", "kids-toys", "wellness"] },
  { slug: "kids-toys", name: "Kids & Toys", category: "children's products", image: "/images/zee/product-rigid-box.jpg", related: ["product-boxes", "window-boxes", "display-boxes"], industries: ["baby-products", "holiday-seasonal", "art-craft"] },
  { slug: "home-decor", name: "Home Décor", category: "home décor", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["luxury-fashion", "boutique-retail", "wedding-events"] },
  { slug: "wine-spirits", name: "Wine & Spirits", category: "wine and spirits", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "inserts"], industries: ["luxury-spirits", "craft-beverage", "corporate-gifts"] },
  { slug: "restaurant", name: "Restaurant", category: "restaurant and foodservice", image: "/images/zee/folding-carton-corrugated.jpg", related: ["food-boxes", "bakery-boxes", "labels-and-stickers"], industries: ["cafe", "gourmet-food", "artisan-food"] },
  { slug: "cafe", name: "Café & Coffee Shop", category: "café", image: "/images/zee/folding-carton-corrugated.jpg", related: ["coffee-tea-boxes", "sleeves", "bakery-boxes"], industries: ["restaurant", "coffee-tea", "specialty-coffee"] },
  { slug: "boutique-retail", name: "Boutique Retail", category: "boutique retail", image: "/images/zee/paper-bag-bakery.jpg", related: ["paper-bags", "tissue-paper", "rigid-boxes"], industries: ["luxury-fashion", "jewelry", "home-decor"] },
  { slug: "wedding-events", name: "Wedding & Events", category: "wedding and event", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["luxury-gifts", "confectionery", "jewelry"] },
  { slug: "holiday-seasonal", name: "Holiday & Seasonal", category: "holiday and seasonal", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "mailer-boxes", "tissue-paper"], industries: ["christmas", "confectionery", "corporate-gifts"] },
  { slug: "luxury-fashion", name: "Luxury Fashion", category: "luxury fashion", image: "/images/industries/apparel.webp", related: ["paper-bags", "tissue-paper", "rigid-boxes"], industries: ["boutique-retail", "jewelry", "accessories"] },
  { slug: "footwear", name: "Footwear", category: "footwear", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "tissue-paper", "paper-bags"], industries: ["luxury-fashion", "accessories", "boutique-retail"] },
  { slug: "accessories", name: "Accessories", category: "accessories", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "rigid-boxes", "inserts"], industries: ["jewelry", "luxury-fashion", "boutique-retail"] },
  { slug: "chocolate", name: "Chocolate", category: "chocolate", image: "/images/zee/folding-carton-cosmetic.jpg", related: ["candy-boxes", "food-boxes", "gift-boxes"], industries: ["confectionery", "gourmet-food", "bakery"] },
  { slug: "tea-brands", name: "Tea Brands", category: "specialty tea", image: "/images/zee/sustainable-kraft-box.jpg", related: ["coffee-tea-boxes", "mylar-bags", "rigid-boxes"], industries: ["coffee-tea", "wellness", "gourmet-food"] },
  { slug: "gourmet-food", name: "Gourmet Food", category: "gourmet and specialty food", image: "/images/zee/folding-carton-corrugated.jpg", related: ["food-boxes", "gift-boxes", "window-boxes"], industries: ["artisan-food", "chocolate", "confectionery"] },
  { slug: "craft-beverage", name: "Craft Beverage", category: "craft beverage", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "labels-and-stickers", "paper-bags"], industries: ["wine-spirits", "luxury-spirits", "kombucha"] },
  { slug: "spa-wellness", name: "Spa & Wellness", category: "spa and wellness", image: "/images/zee/candle-boxes.jpg", related: ["gift-boxes", "soap-boxes", "rigid-boxes"], industries: ["wellness", "yoga-meditation", "aromatherapy"] },
  { slug: "corporate-events", name: "Corporate Events", category: "corporate events", image: "/images/industries/corporate-gifts.webp", related: ["gift-boxes", "mailer-boxes", "labels-and-stickers"], industries: ["corporate-gifts", "ecommerce", "luxury-gifts"] },
  { slug: "influencer-brands", name: "Influencer Brands", category: "influencer and creator", image: "/images/zee/mailer-blank.jpg", related: ["mailer-boxes", "tissue-paper", "gift-boxes"], industries: ["ecommerce", "subscription-boxes", "social-commerce"] },
  { slug: "tech-accessories", name: "Tech Accessories", category: "tech accessories", image: "/images/industries/electronics.webp", related: ["display-boxes", "product-boxes", "inserts"], industries: ["electronics", "gaming", "corporate-gifts"] },
  { slug: "vegan-beauty", name: "Vegan Beauty", category: "vegan and clean beauty", image: "/images/zee/cosmetic-serum-box.jpg", related: ["sustainable-packaging", "kraft-boxes", "folding-cartons"], industries: ["organic-products", "cosmetics", "skincare"] },
  { slug: "pharmacy", name: "Pharmacy & OTC", category: "pharmacy and OTC health", image: "/images/zee/folding-carton-corrugated.jpg", related: ["folding-cartons", "display-boxes", "supplement-packaging"], industries: ["health-wellness", "supplements", "dental"] },
  { slug: "natural-organic", name: "Natural & Organic", category: "natural and organic", image: "/images/zee/sustainable-kraft-box.jpg", related: ["kraft-boxes", "sustainable-packaging", "window-boxes"], industries: ["organic-products", "vegan-beauty", "soap-bath"] },
  { slug: "stationery", name: "Stationery", category: "stationery and paper goods", image: "/images/zee/folding-carton-corrugated.jpg", related: ["sleeves", "folding-cartons", "gift-boxes"], industries: ["boutique-retail", "wedding-events", "art-craft"] },
  { slug: "gift-baskets", name: "Gift Baskets", category: "gift baskets and hampers", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["luxury-gifts", "corporate-gifts", "holiday-seasonal"] },
  { slug: "protein-fitness", name: "Protein & Sports Nutrition", category: "protein and sports nutrition", image: "/images/zee/folding-carton-corrugated.jpg", related: ["mylar-bags", "supplement-packaging", "display-boxes"], industries: ["fitness", "supplements", "health-wellness"] },
  { slug: "sleep-health", name: "Sleep Health", category: "sleep health", image: "/images/zee/folding-carton-corrugated.jpg", related: ["supplement-packaging", "folding-cartons", "rigid-boxes"], industries: ["wellness", "health-wellness", "immune-health"] },
  { slug: "immune-health", name: "Immune Health", category: "immune health", image: "/images/industries/health-wellness.webp", related: ["supplement-packaging", "display-boxes", "folding-cartons"], industries: ["health-wellness", "supplements", "wellness"] },
  { slug: "probiotics", name: "Probiotics & Gut Health", category: "probiotics and gut health", image: "/images/industries/supplements.webp", related: ["supplement-packaging", "folding-cartons", "display-boxes"], industries: ["health-wellness", "supplements", "sleep-health"] },
  { slug: "maternity", name: "Maternity & New Parents", category: "maternity", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["baby-products", "wellness", "luxury-gifts"] },
  { slug: "yoga-meditation", name: "Yoga & Meditation", category: "yoga and meditation", image: "/images/zee/sustainable-kraft-box.jpg", related: ["sustainable-packaging", "kraft-boxes", "labels-and-stickers"], industries: ["wellness", "spa-wellness", "organic-products"] },
  { slug: "art-craft", name: "Art & Craft", category: "art and craft supplies", image: "/images/zee/product-rigid-box.jpg", related: ["display-boxes", "product-boxes", "gift-boxes"], industries: ["stationery", "kids-toys", "boutique-retail"] },
  { slug: "outdoor-adventure", name: "Outdoor & Adventure", category: "outdoor and adventure", image: "/images/zee/mailer-blank.jpg", related: ["corrugated-boxes", "display-boxes", "product-boxes"], industries: ["fitness", "cycling", "gaming"] },
  { slug: "gaming", name: "Gaming", category: "gaming", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "display-boxes", "product-boxes"], industries: ["electronics", "tech-accessories", "outdoor-adventure"] },
  { slug: "christmas", name: "Christmas", category: "Christmas holiday", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["holiday-seasonal", "luxury-gifts", "confectionery"] },
  { slug: "mothers-day", name: "Mother's Day", category: "Mother's Day", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "tissue-paper"], industries: ["holiday-seasonal", "cosmetics", "luxury-gifts"] },
  { slug: "graduation", name: "Graduation", category: "graduation gifting", image: "/images/zee/rigid-lid-box.jpg", related: ["gift-boxes", "rigid-boxes", "labels-and-stickers"], industries: ["corporate-gifts", "luxury-gifts", "stationery"] },
  { slug: "artisan-food", name: "Artisan Food", category: "artisan and small-batch food", image: "/images/zee/sustainable-kraft-box.jpg", related: ["food-boxes", "kraft-boxes", "window-boxes"], industries: ["gourmet-food", "bakery", "farmers-market"] },
  { slug: "meal-prep", name: "Meal Prep", category: "meal prep and health food", image: "/images/zee/folding-carton-corrugated.jpg", related: ["food-boxes", "labels-and-stickers", "corrugated-boxes"], industries: ["restaurant", "gourmet-food", "vegan-food"] },
  { slug: "vegan-food", name: "Vegan Food", category: "vegan and plant-based food", image: "/images/zee/sustainable-kraft-box.jpg", related: ["food-boxes", "kraft-boxes", "sustainable-packaging"], industries: ["natural-organic", "artisan-food", "gluten-free"] },
  { slug: "pop-up-retail", name: "Pop-Up Retail", category: "pop-up retail", image: "/images/zee/paper-bag-bakery.jpg", related: ["paper-bags", "tissue-paper", "labels-and-stickers"], industries: ["boutique-retail", "farmers-market", "holiday-seasonal"] },
  { slug: "hospitality", name: "Hospitality", category: "hospitality", image: "/images/zee/rigid-shoulder-box.jpg", related: ["gift-boxes", "rigid-boxes", "soap-boxes"], industries: ["spa-wellness", "luxury-gifts", "corporate-gifts"] },
  { slug: "dental", name: "Dental & Oral Health", category: "dental and oral health", image: "/images/zee/folding-carton-corrugated.jpg", related: ["folding-cartons", "display-boxes", "labels-and-stickers"], industries: ["pharmacy", "health-wellness", "wellness"] },
  { slug: "veterinary", name: "Veterinary & Pet Health", category: "veterinary and pet health", image: "/images/industries/pet-products.webp", related: ["supplement-packaging", "folding-cartons", "display-boxes"], industries: ["pet-products", "pet-treats", "health-wellness"] },
  { slug: "keto-diet", name: "Keto & Low-Carb", category: "keto and low-carb", image: "/images/zee/folding-carton-corrugated.jpg", related: ["food-boxes", "mylar-bags", "supplement-packaging"], industries: ["vegan-food", "meal-prep", "health-wellness"] },
  { slug: "gluten-free", name: "Gluten-Free", category: "gluten-free food", image: "/images/zee/folding-carton-cosmetic.jpg", related: ["food-boxes", "folding-cartons", "labels-and-stickers"], industries: ["artisan-food", "vegan-food", "bakery"] },
  { slug: "energy-drinks", name: "Energy Drinks", category: "energy and functional drinks", image: "/images/zee/product-rigid-box.jpg", related: ["sleeves", "display-boxes", "labels-and-stickers"], industries: ["craft-beverage", "fitness", "protein-fitness"] },
  { slug: "sexual-wellness", name: "Sexual Wellness", category: "sexual wellness", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "mailer-boxes", "product-boxes"], industries: ["wellness", "health-wellness", "luxury-gifts"] },
  { slug: "photography", name: "Photography", category: "photography and creative", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "product-boxes", "tissue-paper"], industries: ["art-craft", "stationery", "boutique-retail"] },
  { slug: "watches", name: "Watches", category: "watches and timepieces", image: "/images/zee/jewelry-cotton-box.jpg", related: ["rigid-boxes", "jewelry-boxes", "inserts"], industries: ["jewelry", "luxury-fashion", "accessories"] },
  { slug: "cycling", name: "Cycling", category: "cycling and bike accessories", image: "/images/zee/mailer-blank.jpg", related: ["corrugated-boxes", "display-boxes", "product-boxes"], industries: ["outdoor-adventure", "fitness", "gaming"] },
  { slug: "music", name: "Music & Instruments", category: "music and instruments", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "product-boxes", "inserts"], industries: ["art-craft", "kids-toys", "stationery"] },
  { slug: "kombucha", name: "Kombucha", category: "kombucha and fermented drinks", image: "/images/zee/folding-carton-corrugated.jpg", related: ["labels-and-stickers", "sleeves", "gift-boxes"], industries: ["craft-beverage", "wellness", "tea-brands"] },
  { slug: "farmers-market", name: "Farmer's Market", category: "farmer's market", image: "/images/zee/sustainable-kraft-box.jpg", related: ["kraft-boxes", "labels-and-stickers", "paper-bags"], industries: ["artisan-food", "natural-organic", "pop-up-retail"] },
  { slug: "luxury-spirits", name: "Luxury Spirits", category: "luxury spirits", image: "/images/zee/rigid-shoulder-box.jpg", related: ["rigid-boxes", "gift-boxes", "inserts"], industries: ["wine-spirits", "craft-beverage", "corporate-gifts"] },
  { slug: "collagen-beauty", name: "Collagen & Beauty Supplements", category: "collagen and beauty supplements", image: "/images/industries/supplements.webp", related: ["supplement-packaging", "rigid-boxes", "gift-boxes"], industries: ["supplements", "skincare", "health-wellness"] },
  { slug: "pet-treats", name: "Pet Treats", category: "pet treats and snacks", image: "/images/industries/pet-products.webp", related: ["mylar-bags", "food-boxes", "display-boxes"], industries: ["pet-products", "veterinary", "natural-organic"] },
  { slug: "eyewear", name: "Eyewear", category: "eyewear and sunglasses", image: "/images/zee/rigid-lid-box.jpg", related: ["rigid-boxes", "inserts", "product-boxes"], industries: ["accessories", "luxury-fashion", "boutique-retail"] },
  { slug: "spices-herbs", name: "Spices & Herbs", category: "spices and herbs", image: "/images/zee/folding-carton-cosmetic.jpg", related: ["labels-and-stickers", "food-boxes", "gift-boxes"], industries: ["gourmet-food", "artisan-food", "farmers-market"] },
  { slug: "specialty-coffee", name: "Specialty Coffee", category: "specialty coffee", image: "/images/zee/folding-carton-corrugated.jpg", related: ["coffee-tea-boxes", "mylar-bags", "gift-boxes"], industries: ["coffee-tea", "cafe", "gourmet-food"] },
  { slug: "social-commerce", name: "Social Commerce", category: "social commerce and creator brands", image: "/images/zee/mailer-blank.jpg", related: ["mailer-boxes", "tissue-paper", "gift-boxes"], industries: ["influencer-brands", "ecommerce", "subscription-boxes"] },
];

simpleIndustries.forEach(({ slug, name, category, image, related, industries: relatedIndustries }) => {
  if (!generatedIndustryContent[slug]) {
    generatedIndustryContent[slug] = makeIndustryContent({
      name,
      category,
      heroTitle: `Custom ${name} Packaging for Brands That Need Premium Presentation`,
      heroDescription: `Developed for ${category} brands that need stronger packaging — structures, materials, and finishes that work for your product, your retail context, and your brand direction.`,
      priorityCards: [
        `Premium packaging formats suited to ${category} products`,
        "Custom sizes and insert options for precise product fit",
        "Finish options including foil, matte, soft-touch, and embossing",
        "Low minimum flexibility for launches and growing brands",
      ],
      seoParagraphs: [
        `ZEEPACK develops custom packaging for ${category} brands that need stronger presentation across retail, gifting, and direct-to-consumer channels. Each format is built around the product dimensions, material requirements, and the brand's positioning.`,
        `${name} packaging has to communicate quality clearly and quickly. The right structure, material direction, and finish combination helps ${category} products stand out in competitive retail environments and create a more memorable customer experience.`,
        `Whether you're launching a new ${category} product, scaling an existing line, or refreshing your packaging direction, our team helps identify the right format for your product and channel — with low minimums available for most premium formats.`,
      ],
      faqs: [
        { question: `What packaging formats work best for ${name.toLowerCase()} products?`, answer: `The best packaging depends on your specific product format, retail channel, and brand positioning. We help ${category} brands identify the right structure based on product dimensions and presentation goals.` },
        { question: `Can ${name.toLowerCase()} packaging include custom finishes?`, answer: `Yes. Foil stamping, embossing, matte lamination, soft-touch, and spot UV are all available depending on the format and brand direction.` },
        { question: `Are low minimums available for ${name.toLowerCase()} packaging?`, answer: `Yes. We support lower minimum quantities for many premium formats, making it accessible for ${category} brand launches and growing businesses.` },
      ],
      image,
      gallery: [image, "/images/zee/rigid-lid-box.jpg", "/images/zee/mailer-blank.jpg"],
      relatedCategorySlugs: related,
      relatedIndustrySlugs: relatedIndustries,
    });
  }
});

Object.assign(industryPageContent, generatedIndustryContent);
