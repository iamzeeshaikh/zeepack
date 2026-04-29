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
    heroTitle: "Luxury Packaging for Cosmetic Brands",
    heroDescription:
      "Developed for skincare, makeup, fragrance, and wellness brands that need shelf presence, premium perception, and cleaner product support across retail and direct-to-consumer channels.",
    trustPills: [
      "Custom Sizes",
      "Premium Finishes",
      "Low Minimums",
      "Insert Options",
    ],
    supportImage: "/images/clean/perfume-boxes.png",
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
      "/images/clean/cosmetic-boxes.webp",
      "/images/clean/perfume-boxes.png",
      "/images/clean/inserts.jpg",
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
        title: "Insert-ready structures",
        description: "Supports bottles, jars, and multi-piece sets with cleaner internal organization.",
        icon: Boxes,
      },
      {
        title: "Finish flexibility",
        description: "Makes it easier to align foil, embossing, and matte routes to beauty brand positioning.",
        icon: Palette,
      },
      {
        title: "Launch and gifting support",
        description: "Strong for campaign kits, influencer mailers, and higher-value presentation sets.",
        icon: BadgeCheck,
      },
      {
        title: "Low minimum options",
        description: "Useful for beauty startups, smaller runs, and premium test launches.",
        icon: CircleGauge,
      },
      {
        title: "Retail and DTC alignment",
        description: "A single packaging system can be shaped for both shelf appeal and shipping needs.",
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
        image: "/images/clean/rigid-boxes.jpg",
        badge: "Launch Kits",
      },
      {
        title: "Folding Cartons",
        description: "Shelf-ready skincare, makeup, and personal care packaging.",
        categorySlug: "folding-cartons",
        image: "/images/clean/folding-cartons.webp",
        badge: "Shelf Ready",
      },
      {
        title: "Sleeve Packaging",
        description: "A clean wrap layer for jars, kits, and seasonal beauty lines.",
        categorySlug: "sleeves",
        image: "/images/clean/sleeves.webp",
        badge: "Seasonal",
      },
      {
        title: "Insert Boxes",
        description: "Added support and better organization for jars, bottles, and sets.",
        categorySlug: "inserts",
        image: "/images/clean/inserts.jpg",
        badge: "Protection",
      },
      {
        title: "Paper Bags",
        description: "Retail-ready carry presentation for beauty counters and events.",
        categorySlug: "paper-bags",
        image: "/images/clean/paper-bags.webp",
        badge: "Retail",
      },
      {
        title: "Tissue Paper",
        description: "A softer premium layer inside beauty mailers and boutique packaging.",
        categorySlug: "custom-tissue-paper",
        image: "/images/clean/tissue-paper.webp",
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
    supportImage: "/images/clean/inserts.jpg",
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
      "/images/clean/candle-boxes.webp",
      "/images/clean/inserts.jpg",
      "/images/clean/mailer-boxes.webp",
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
        image: "/images/clean/rigid-boxes.jpg",
        badge: "Gifting",
      },
      {
        title: "Mailer Boxes",
        description: "Shipping-aware structures with better branded arrival.",
        categorySlug: "mailer-boxes",
        image: "/images/clean/mailer-boxes.webp",
        badge: "DTC",
      },
      {
        title: "Candle Jar Boxes",
        description: "Retail and gifting formats tailored around vessel support.",
        categorySlug: "candle-boxes",
        image: "/images/clean/candle-boxes.webp",
        badge: "Jar Fit",
      },
      {
        title: "Insert Packaging",
        description: "Cleaner product positioning and reduced movement for fragile jars.",
        categorySlug: "inserts",
        image: "/images/clean/inserts.jpg",
        badge: "Protection",
      },
      {
        title: "Gift Sets",
        description: "Structured presentation for candles, accessories, and seasonal bundles.",
        categorySlug: "product-boxes",
        image: "/images/clean/product-boxes.webp",
        badge: "Seasonal",
      },
      {
        title: "Shipping Boxes",
        description: "Practical support for direct-to-consumer candle delivery.",
        categorySlug: "mailer-boxes",
        image: "/images/clean/mailer-boxes.webp",
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
    supportImage: "/images/clean/inserts.jpg",
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
      "/images/clean/jewelry-boxes.webp",
      "/images/clean/inserts.jpg",
      "/images/clean/rigid-boxes.jpg",
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
        image: "/images/clean/rigid-boxes.jpg",
        badge: "Keepsake",
      },
      {
        title: "Drawer Boxes",
        description: "A refined reveal format for collectible and premium jewelry moments.",
        categorySlug: "jewelry-boxes",
        image: "/images/clean/jewelry-boxes.webp",
        badge: "Reveal",
      },
      {
        title: "Magnetic Closure Boxes",
        description: "Luxury opening experience for premium sets and higher-value presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/clean/rigid-boxes.jpg",
        badge: "Closure",
      },
      {
        title: "Precision Inserts",
        description: "Soft support for rings, necklaces, bracelets, and multi-piece arrangements.",
        categorySlug: "inserts",
        image: "/images/clean/inserts.jpg",
        badge: "Fit",
      },
      {
        title: "Premium Pouches + Boxes",
        description: "Layered presentation systems that feel more complete and gift-ready.",
        categorySlug: "jewelry-boxes",
        image: "/images/clean/jewelry-boxes.webp",
        badge: "Boutique",
      },
      {
        title: "Gift Packaging",
        description: "Premium structures for gifting-driven collections and boutique launches.",
        categorySlug: "product-boxes",
        image: "/images/clean/product-boxes.webp",
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
    supportImage: "/images/clean/tissue-paper.webp",
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
      "/images/clean/paper-bags.webp",
      "/images/clean/tissue-paper.webp",
      "/images/clean/mailer-boxes.webp",
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
        image: "/images/clean/mailer-boxes.webp",
        badge: "DTC",
      },
      {
        title: "Paper Bags",
        description: "Boutique retail carry presentation for premium fashion counters and events.",
        categorySlug: "paper-bags",
        image: "/images/clean/paper-bags.webp",
        badge: "Retail",
      },
      {
        title: "Tissue Paper",
        description: "A softer, more layered unboxing experience for apparel and accessories.",
        categorySlug: "custom-tissue-paper",
        image: "/images/clean/tissue-paper.webp",
        badge: "Unboxing",
      },
      {
        title: "Sleeves",
        description: "A refined wrap layer for folded sets, seasonal edits, and premium collections.",
        categorySlug: "sleeves",
        image: "/images/clean/sleeves.webp",
        badge: "Collection",
      },
      {
        title: "Product Boxes",
        description: "Stronger structure for accessories, gifting formats, and limited-edition packaging.",
        categorySlug: "product-boxes",
        image: "/images/clean/product-boxes.webp",
        badge: "Gifting",
      },
      {
        title: "Labels & Stickers",
        description: "Flexible detailing for wraps, seals, product information, and seasonal updates.",
        categorySlug: "labels-and-stickers",
        image: "/images/clean/labels-stickers.webp",
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
    supportImage: "/images/clean/product-boxes.webp",
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
      "/images/clean/folding-cartons.webp",
      "/images/clean/product-boxes.webp",
      "/images/clean/labels-stickers.webp",
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
        image: "/images/clean/folding-cartons.webp",
        badge: "Shelf Ready",
      },
      {
        title: "Rigid Boxes",
        description: "Premium gifting formats for elevated food and confectionery presentation.",
        categorySlug: "rigid-boxes",
        image: "/images/clean/rigid-boxes.jpg",
        badge: "Gifting",
      },
      {
        title: "Labels & Stickers",
        description: "Useful for premium seals, product details, and smaller-run updates.",
        categorySlug: "labels-and-stickers",
        image: "/images/clean/labels-stickers.webp",
        badge: "Details",
      },
      {
        title: "Sleeves",
        description: "A refined outer layer for cartons, sets, and premium seasonal releases.",
        categorySlug: "sleeves",
        image: "/images/clean/sleeves.webp",
        badge: "Seasonal",
      },
      {
        title: "Product Boxes",
        description: "Flexible premium structures for presentation and gifting use cases.",
        categorySlug: "product-boxes",
        image: "/images/clean/product-boxes.webp",
        badge: "Presentation",
      },
      {
        title: "Paper Bags",
        description: "Carry-ready premium packaging for retail gifting and specialty presentation.",
        categorySlug: "paper-bags",
        image: "/images/clean/paper-bags.webp",
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
    supportImage: "/images/clean/tissue-paper.webp",
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
      "/images/clean/mailer-boxes.webp",
      "/images/clean/tissue-paper.webp",
      "/images/clean/inserts.jpg",
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
        image: "/images/clean/mailer-boxes.webp",
        badge: "DTC",
      },
      {
        title: "Tissue Paper",
        description: "Adds softness and brand layering inside mailers and shipping boxes.",
        categorySlug: "custom-tissue-paper",
        image: "/images/clean/tissue-paper.webp",
        badge: "Unboxing",
      },
      {
        title: "Labels & Stickers",
        description: "Useful for branded seals, shipping touches, and lower-run customization.",
        categorySlug: "labels-and-stickers",
        image: "/images/clean/labels-stickers.webp",
        badge: "Seals",
      },
      {
        title: "Custom Inserts",
        description: "Improves protection and organization for fragile or premium products.",
        categorySlug: "inserts",
        image: "/images/clean/inserts.jpg",
        badge: "Protection",
      },
      {
        title: "Product Boxes",
        description: "Useful where presentation packaging also needs to survive outer shipping.",
        categorySlug: "product-boxes",
        image: "/images/clean/product-boxes.webp",
        badge: "Hybrid",
      },
      {
        title: "Sustainable Packaging",
        description: "Lower-impact routes for online brands that want more restrained packaging systems.",
        categorySlug: "sustainable-packaging",
        image: "/images/clean/sustainable-packaging.png",
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
