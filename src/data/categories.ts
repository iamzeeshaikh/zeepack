export type Category = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  image: string;
  type: "boxes" | "accessories" | "sustainable";
  heroLabel: string;
  keyFeatures: string[];
  materials: string[];
  finishes: string[];
  variants: string[];
  industries: string[];
  seoHeading: string;
  seoBody: string;
  faq: Array<{ question: string; answer: string }>;
};

export const categories: Category[] = [
  {
    slug: "rigid-boxes",
    name: "Luxury Rigid Boxes",
    shortDescription:
      "Premium presentation boxes with refined structure, tactile finishes, and elevated unboxing impact.",
    intro:
      "Luxury rigid boxes are designed for brands that need presence, precision, and a memorable reveal. They are ideal for gifting, product launches, and premium retail presentation.",
    image: "/images/curated/rigid-setup-box.webp",
    type: "boxes",
    heroLabel: "Signature packaging",
    keyFeatures: [
      "Heavy-duty board construction",
      "Lift-off, hinged, and magnetic closure formats",
      "Custom inserts for secure product positioning",
      "High-end wraps for refined shelf presence",
    ],
    materials: [
      "Rigid chipboard",
      "Art paper wraps",
      "Textured specialty paper",
      "Recycled-content board options",
    ],
    finishes: [
      "Foil stamping",
      "Embossing",
      "Debossing",
      "Soft-touch lamination",
      "Spot UV",
    ],
    variants: [
      "Magnetic rigid box",
      "Drawer rigid box",
      "Shoulder neck box",
      "Lift-off lid box",
    ],
    industries: ["Cosmetics", "Jewelry", "Fashion", "Premium gifting"],
    seoHeading: "Rigid boxes for premium product presentation",
    seoBody:
      "ZEEPACK develops custom rigid boxes that balance protective structure with elevated brand presentation. From jewelry collections to luxury cosmetics, each format is designed around fit, tactility, and a stronger first impression.",
    faq: [
      {
        question: "Can rigid boxes be made in custom depths and internal layouts?",
        answer:
          "Yes. We build rigid boxes to custom dimensions and can include inserts, trays, or compartments shaped around your product.",
      },
      {
        question: "Are rigid boxes suitable for premium gifting and PR kits?",
        answer:
          "They are one of the strongest options for gifting, launch kits, and elevated product reveals because of their structure and finish flexibility.",
      },
    ],
  },
  {
    slug: "mailer-boxes",
    name: "Mailer Boxes",
    shortDescription:
      "Durable shipping-ready mailers with premium print treatment for subscription, e-commerce, and launches.",
    intro:
      "Mailer boxes bring together protective performance and premium brand presentation. They are ideal for direct-to-consumer brands that want a stronger arrival experience without sacrificing utility.",
    image: "/images/curated/foldable-mailer-box.webp",
    type: "boxes",
    heroLabel: "DTC-ready packaging",
    keyFeatures: [
      "Protective self-locking structures",
      "Strong exterior branding surfaces",
      "Interior print opportunities",
      "Efficient format for fulfillment workflows",
    ],
    materials: [
      "Corrugated board",
      "Kraft stocks",
      "White-lined corrugated",
      "Recycled paper options",
    ],
    finishes: [
      "Exterior CMYK print",
      "Interior pattern printing",
      "Soft matte coatings",
      "Minimal foil accents",
    ],
    variants: [
      "Roll-end tuck front",
      "Subscription mailer",
      "Launch kit mailer",
      "Gift mailer",
    ],
    industries: ["E-commerce", "Fashion", "Candles", "Agencies"],
    seoHeading: "Custom mailer boxes with a premium arrival experience",
    seoBody:
      "Mailer boxes from ZEEPACK are built to protect products while extending your brand story beyond checkout. They combine structure, print quality, and thoughtful inside-out branding for a more considered unboxing.",
    faq: [
      {
        question: "Can mailers include interior printing?",
        answer:
          "Yes. Interior branding, messaging, or repeating patterns can be added to strengthen the reveal when the box is opened.",
      },
      {
        question: "Do you offer low minimums for branded mailers?",
        answer:
          "Yes. We support lower starting runs for growing brands, product launches, and seasonal collections.",
      },
    ],
  },
  {
    slug: "folding-cartons",
    name: "Folding Cartons",
    shortDescription:
      "Clean, efficient carton packaging for retail products that still feels elevated and design-led.",
    intro:
      "Folding cartons suit brands that need strong visual branding, efficient storage, and versatile finishing. They work especially well in cosmetics, confectionery, wellness, and retail packaging programs.",
    image: "/images/curated/skin-care-oil-box.webp",
    type: "boxes",
    heroLabel: "Retail-ready packaging",
    keyFeatures: [
      "Flat-shipping efficiency",
      "Excellent print clarity",
      "Strong shelf impact",
      "Flexible closure and panel layouts",
    ],
    materials: [
      "SBS paperboard",
      "Kraft paperboard",
      "Recycled board",
      "Textured carton stocks",
    ],
    finishes: [
      "Matte and gloss lamination",
      "Foil details",
      "Embossed logo areas",
      "Aqueous coatings",
    ],
    variants: [
      "Reverse tuck end",
      "Straight tuck end",
      "Auto-lock bottom",
      "Sleeve carton",
    ],
    industries: ["Cosmetics", "Food", "Confectionery", "Wellness"],
    seoHeading: "Folding cartons for premium retail packaging",
    seoBody:
      "Our custom folding cartons are engineered for efficient production and elevated shelf presence. ZEEPACK helps brands balance practicality, structure, and high-end print finishes in one clean format.",
    faq: [
      {
        question: "Are folding cartons suitable for food and confectionery?",
        answer:
          "Yes. They are commonly used for dry goods, confectionery, and secondary packaging, subject to material and regulatory needs.",
      },
      {
        question: "Can cartons be finished to feel more premium?",
        answer:
          "Absolutely. Textured stocks, foil, embossing, and soft matte surfaces can significantly elevate the finished look.",
      },
    ],
  },
  {
    slug: "product-boxes",
    name: "Product Boxes",
    shortDescription:
      "Versatile premium product boxes designed for modern retail, gifting, and direct-to-consumer presentation.",
    intro:
      "Product boxes give brands a flexible foundation for packaging across multiple SKUs. They can be engineered for presentation, shipping support, or a cleaner shelf-ready format depending on the product.",
    image: "/images/real/product-boxes.webp",
    type: "boxes",
    heroLabel: "Flexible premium packaging",
    keyFeatures: [
      "Tailored sizing around your product",
      "Balanced for protection and brand presentation",
      "Adaptable across retail, gifting, and e-commerce",
      "Supports clean premium print direction",
    ],
    materials: [
      "Paperboard",
      "Rigid board",
      "Kraft and recycled options",
      "Corrugated support layers",
    ],
    finishes: [
      "Matte coatings",
      "Foil stamping",
      "Embossed logos",
      "Soft-touch lamination",
    ],
    variants: [
      "Retail product box",
      "Gift-ready box",
      "Launch set box",
      "Protective branded box",
    ],
    industries: ["Cosmetics", "Food", "Fashion", "E-commerce"],
    seoHeading: "Custom product boxes for premium presentation and protection",
    seoBody:
      "ZEEPACK product boxes bring together structure, finish, and scalability for brands that need flexible premium packaging across launches, collections, and evergreen products.",
    faq: [
      {
        question: "Can product boxes be created for multiple SKU sizes?",
        answer:
          "Yes. We can design a packaging family that keeps branding consistent while adjusting dimensions for multiple products.",
      },
      {
        question: "Are product boxes suitable for both retail and shipping support?",
        answer:
          "Yes. Depending on structure and board choice, product boxes can be optimized for retail presentation, direct-to-consumer use, or both.",
      },
    ],
  },
  {
    slug: "candle-boxes",
    name: "Candle Packaging",
    shortDescription:
      "Refined packaging for candles, gift sets, and home fragrance collections with boutique presentation.",
    intro:
      "Candle packaging should protect glassware, communicate fragrance quality, and feel worthy of display. We create structures that support both brand perception and practical shipment needs.",
    image: "/images/curated/magnetic-candle-box.webp",
    type: "boxes",
    heroLabel: "Boutique presentation",
    keyFeatures: [
      "Protective inserts for jars and vessels",
      "Elegant gifting presentation",
      "Fragrance-led visual storytelling",
      "Retail and e-commerce compatibility",
    ],
    materials: [
      "Rigid board",
      "Carton board",
      "Corrugated support layers",
      "Recycled paper options",
    ],
    finishes: [
      "Warm foil accents",
      "Debossed logo detailing",
      "Soft-touch outer wraps",
      "Minimalist matte coatings",
    ],
    variants: [
      "Single candle box",
      "Gift set box",
      "Seasonal collection packaging",
      "Mailer-ready candle box",
    ],
    industries: ["Candles", "Home fragrance", "Gifting"],
    seoHeading: "Candle packaging designed for protection and presentation",
    seoBody:
      "ZEEPACK creates candle boxes that protect fragile vessels while elevating the product story. We blend structure, insert design, and premium finishes for stronger retail and direct-to-consumer presentation.",
    faq: [
      {
        question: "Can candle boxes include custom inserts?",
        answer:
          "Yes. Inserts can be built to hold candles securely, reduce movement, and improve the unboxing experience.",
      },
      {
        question: "Do you support seasonal or limited-edition candle runs?",
        answer:
          "Yes. We can support capsule collections, holiday gifting, and boutique launch volumes with flexible packaging formats.",
      },
    ],
  },
  {
    slug: "cosmetic-boxes",
    name: "Cosmetic Packaging",
    shortDescription:
      "Luxury cosmetic boxes for skincare, makeup, and wellness products that need precision and shelf appeal.",
    intro:
      "Cosmetic packaging needs to balance visual clarity, structural consistency, and tactile quality. We help premium beauty brands develop boxes that feel polished across every customer touchpoint.",
    image: "/images/curated/skin-care-oil-box.webp",
    type: "boxes",
    heroLabel: "Beauty-ready packaging",
    keyFeatures: [
      "Fine detail printing",
      "Precision sizing for bottles and jars",
      "Elegant finish combinations",
      "Retail and influencer mailer compatibility",
    ],
    materials: [
      "SBS board",
      "Textured paperboard",
      "Rigid board for gifting",
      "Recycled-content options",
    ],
    finishes: [
      "Foil logos",
      "Embossed branding",
      "Spot UV details",
      "Soft matte lamination",
    ],
    variants: [
      "Serum carton",
      "Skincare set box",
      "Perfume-style presentation box",
      "Lipstick and makeup carton",
    ],
    industries: ["Cosmetics", "Skincare", "Wellness"],
    seoHeading: "Cosmetic packaging for modern premium beauty brands",
    seoBody:
      "From skincare launches to elevated beauty gift sets, ZEEPACK develops custom cosmetic packaging that feels refined, accurate, and ready for premium retail or direct shipping.",
    faq: [
      {
        question: "Can cosmetic boxes be matched to exact bottle or jar dimensions?",
        answer:
          "Yes. We create packaging around your product dimensions to improve fit, protection, and visual balance.",
      },
      {
        question: "What finishes work well for premium beauty packaging?",
        answer:
          "Soft-touch surfaces, foil accents, subtle embossing, and clean matte coatings are all strong options for upscale beauty brands.",
      },
    ],
  },
  {
    slug: "perfume-boxes",
    name: "Perfume Boxes",
    shortDescription:
      "Elegant fragrance packaging with strong structure, detailed finishing, and collector-level presentation.",
    intro:
      "Perfume packaging deserves a sense of ceremony. We create fragrance boxes with premium materials, secure inserts, and high-end surface finishes that strengthen perception at first touch.",
    image: "/images/clean/perfume-boxes.png",
    type: "boxes",
    heroLabel: "Fragrance presentation",
    keyFeatures: [
      "Secure bottle support",
      "Luxury gifting feel",
      "High-detail decorative finishes",
      "Presentation tailored to premium pricing",
    ],
    materials: [
      "Rigid board",
      "Specialty wraps",
      "SBS board",
      "Velvet-touch insert materials",
    ],
    finishes: [
      "Hot foil stamping",
      "Embossing",
      "Textured wraps",
      "Soft-touch lamination",
    ],
    variants: [
      "Single bottle rigid box",
      "Perfume gift set",
      "Collector edition box",
      "Magnetic closure fragrance box",
    ],
    industries: ["Fragrance", "Cosmetics", "Gifting"],
    seoHeading: "Perfume boxes with premium structure and finish detail",
    seoBody:
      "ZEEPACK crafts custom perfume boxes that support delicate bottles while expressing fragrance identity through materials, closure styles, and carefully considered finishing.",
    faq: [
      {
        question: "Can perfume boxes use magnetic closure styles?",
        answer:
          "Yes. Magnetic rigid formats are a strong choice for premium fragrances, gift sets, and collector-style presentations.",
      },
      {
        question: "Do you support custom insert design for perfume bottles?",
        answer:
          "Yes. Inserts can be tailored to bottle shapes, caps, and sample components for a more secure and elevated presentation.",
      },
    ],
  },
  {
    slug: "jewelry-boxes",
    name: "Jewelry Boxes",
    shortDescription:
      "Refined jewelry presentation boxes designed for tactility, protection, and an elevated gifting moment.",
    intro:
      "Jewelry packaging must feel intimate, precise, and unmistakably premium. We develop compact, detail-rich formats that support gifting, keepsake presentation, and retail display.",
    image: "/images/curated/bracelet-packaging.webp",
    type: "boxes",
    heroLabel: "Presentation-first packaging",
    keyFeatures: [
      "Compact premium formats",
      "Soft insert protection",
      "Keepsake presentation value",
      "Tailored structure for rings, necklaces, and sets",
    ],
    materials: [
      "Rigid board",
      "Velvet-touch inserts",
      "Textured paper wraps",
      "Recycled paperboard options",
    ],
    finishes: [
      "Gold foil",
      "Blind embossing",
      "Soft matte wraps",
      "Ribbon detailing",
    ],
    variants: [
      "Ring box",
      "Necklace box",
      "Bracelet box",
      "Jewelry set presentation box",
    ],
    industries: ["Jewelry", "Gifting", "Fashion accessories"],
    seoHeading: "Jewelry boxes with keepsake-level presentation",
    seoBody:
      "ZEEPACK designs custom jewelry boxes that strengthen perceived value through tactility, fit, and elegant presentation. Each format is tailored for gifting moments and premium retail display.",
    faq: [
      {
        question: "Can jewelry boxes be developed for small-batch premium collections?",
        answer:
          "Yes. We support boutique collections, capsule drops, and premium launches with low minimum options.",
      },
      {
        question: "What insert styles work well for jewelry?",
        answer:
          "Soft-touch pads, foam-backed holders, and custom-cut presentation inserts work well depending on the piece and presentation angle.",
      },
    ],
  },
  {
    slug: "custom-tissue-paper",
    name: "Custom Tissue Paper",
    shortDescription:
      "Soft branded wrapping layers that add texture, elegance, and a stronger inside-the-box experience.",
    intro:
      "Custom tissue paper adds softness and ritual to an unboxing experience. It is an efficient way to extend brand identity inside mailers, rigid boxes, and boutique bags.",
    image: "/images/real/tissue-paper.webp",
    type: "accessories",
    heroLabel: "Unboxing details",
    keyFeatures: [
      "Repeating logo or pattern print",
      "Lightweight premium wrapping",
      "Supports a more layered reveal",
      "Works across boxes and bag programs",
    ],
    materials: [
      "Virgin tissue paper",
      "Recycled tissue",
      "Lightweight wrapping paper",
    ],
    finishes: [
      "Single-color print",
      "Two-color print",
      "Minimal all-over patterning",
    ],
    variants: [
      "Logo repeat tissue",
      "Seasonal printed tissue",
      "Luxury wrap sheets",
    ],
    industries: ["Fashion", "Jewelry", "Cosmetics", "E-commerce"],
    seoHeading: "Custom tissue paper for a softer premium unboxing layer",
    seoBody:
      "ZEEPACK custom tissue paper adds elegance and continuity inside premium packaging systems. It is ideal for fashion, beauty, gifting, and boutique e-commerce brands that want a more complete reveal.",
    faq: [
      {
        question: "Can tissue paper match our packaging color direction?",
        answer:
          "Yes. Tissue programs can be aligned with your brand palette and overall packaging finish strategy.",
      },
      {
        question: "Is recycled tissue available?",
        answer:
          "Yes. We can explore recycled-content tissue and lower-impact print options depending on the look you want.",
      },
    ],
  },
  {
    slug: "paper-bags",
    name: "Paper Bags",
    shortDescription:
      "Retail-ready paper bags with elegant construction, premium handles, and refined brand presence.",
    intro:
      "Paper bags should feel as considered as the packaging inside them. We create premium bag formats for boutiques, gifting, retail counters, and event packaging.",
    image: "/images/curated/paper-lunch-bag.webp",
    type: "accessories",
    heroLabel: "Retail finishing touch",
    keyFeatures: [
      "Premium handles and reinforced structures",
      "Luxury matte and textured finishes",
      "Brand-consistent presentation for retail",
      "Available in custom sizes",
    ],
    materials: [
      "Art paper",
      "Kraft paper",
      "Textured paper stocks",
      "Recycled-content paper",
    ],
    finishes: [
      "Foil details",
      "Embossing",
      "Matte lamination",
      "Cotton and ribbon handles",
    ],
    variants: [
      "Boutique retail bag",
      "Gift bag",
      "Event and launch bag",
      "Luxury carry bag",
    ],
    industries: ["Fashion", "Jewelry", "Cosmetics", "Retail"],
    seoHeading: "Luxury paper bags for premium retail presentation",
    seoBody:
      "Our custom paper bags are designed for premium carry experience, stronger retail presence, and visual consistency across every customer interaction.",
    faq: [
      {
        question: "Can paper bags include rope or ribbon handles?",
        answer:
          "Yes. We offer handle styles that support a more refined retail and gifting experience.",
      },
      {
        question: "Are eco-conscious paper bag options available?",
        answer:
          "Yes. We can explore recycled papers, lower-ink designs, and recyclable structures based on your requirements.",
      },
    ],
  },
  {
    slug: "sleeves",
    name: "Sleeves",
    shortDescription:
      "Minimal, elegant sleeves that wrap cartons, gift boxes, trays, and multipacks with refined branding.",
    intro:
      "Packaging sleeves are a subtle way to add brand presence, hierarchy, or campaign storytelling without redesigning the full structure. They work well across luxury cartons, gift sets, and seasonal releases.",
    image: "/images/real/sleeves.webp",
    type: "accessories",
    heroLabel: "Editorial finishing layer",
    keyFeatures: [
      "Clean outer branding",
      "Flexible way to update packaging systems",
      "Works with gift sets, cartons, and trays",
      "Efficient for seasonal or campaign-led releases",
    ],
    materials: [
      "Paperboard",
      "Textured wrap stocks",
      "Recycled paperboard",
    ],
    finishes: [
      "Foil accents",
      "Embossed brand marks",
      "Matte coatings",
      "Low-ink minimalist print",
    ],
    variants: [
      "Box sleeves",
      "Jar set sleeves",
      "Retail carton sleeves",
      "Seasonal collection wraps",
    ],
    industries: ["Food", "Cosmetics", "Candles", "Retail gifting"],
    seoHeading: "Custom sleeves for clean premium brand layering",
    seoBody:
      "ZEEPACK sleeves offer a flexible way to add narrative, hierarchy, and premium surface treatment to an existing packaging structure while keeping the system elegant and efficient.",
    faq: [
      {
        question: "Can sleeves be used for limited editions or seasonal collections?",
        answer:
          "Yes. Sleeves are one of the most flexible ways to update presentation without changing the base packaging structure.",
      },
      {
        question: "Do sleeves work with rigid boxes and cartons?",
        answer:
          "Yes. Sleeves can be developed for rigid boxes, folding cartons, trays, and bundled product sets.",
      },
    ],
  },
  {
    slug: "labels-and-stickers",
    name: "Labels & Stickers",
    shortDescription:
      "Premium branded labels and seals that complete the packaging system with sharp detail and flexibility.",
    intro:
      "Labels and stickers can reinforce premium branding across boxes, tissue, sleeves, jars, and shipping touchpoints. They are especially useful for short-run personalization, sealing, and seasonal updates.",
    image: "/images/real/labels-stickers.webp",
    type: "accessories",
    heroLabel: "Flexible brand detailing",
    keyFeatures: [
      "Sharp print detail",
      "Seal, brand, and informational formats",
      "Suitable for short-run customization",
      "Supports layered packaging systems",
    ],
    materials: [
      "Paper label stock",
      "Textured label stock",
      "Premium adhesive paper",
    ],
    finishes: [
      "Matte finish",
      "Gloss finish",
      "Foil details",
      "Embossed label effects",
    ],
    variants: [
      "Brand seals",
      "Product labels",
      "Closure stickers",
      "Seasonal campaign stickers",
    ],
    industries: ["Food", "Cosmetics", "Candles", "E-commerce"],
    seoHeading: "Custom labels and stickers for premium packaging systems",
    seoBody:
      "ZEEPACK labels and stickers help brands add polish, flexibility, and finishing detail across a broader packaging system without overcomplicating production.",
    faq: [
      {
        question: "Can stickers be used as premium box seals?",
        answer:
          "Yes. Branded seals are a simple way to add elegance and closure detail to tissue wraps, sleeves, and boxes.",
      },
      {
        question: "Do you offer textured or foil label options?",
        answer:
          "Yes. We can develop label directions with tactile stocks or metallic detailing for a more premium feel.",
      },
    ],
  },
  {
    slug: "inserts",
    name: "Custom Inserts",
    shortDescription:
      "Protective and presentation-focused inserts tailored to product fit, organization, and premium reveal.",
    intro:
      "Inserts help packaging feel precise. They improve product security, add order to the reveal, and elevate perceived value when developed as part of the full packaging system.",
    image: "/images/curated/retail-insert-tray.webp",
    type: "sustainable",
    heroLabel: "Structure and protection",
    keyFeatures: [
      "Product-fit precision",
      "Cleaner premium presentation",
      "Protection during shipping and handling",
      "Supports multi-item arrangements",
    ],
    materials: [
      "Paperboard inserts",
      "Molded pulp options",
      "Foam-backed structures",
      "Recyclable board formats",
    ],
    finishes: [
      "Wrapped board inserts",
      "Printed insert layers",
      "Velvet-touch presentation surfaces",
    ],
    variants: [
      "Bottle inserts",
      "Jar inserts",
      "Multi-product trays",
      "Gift set organizers",
    ],
    industries: ["Cosmetics", "Candles", "Jewelry", "Premium gifting"],
    seoHeading: "Custom inserts that improve fit, protection, and presentation",
    seoBody:
      "ZEEPACK develops custom inserts for boxes, kits, and gifting formats that need secure placement and a more polished unboxing moment.",
    faq: [
      {
        question: "Can inserts be made from recyclable paper-based materials?",
        answer:
          "Yes. Paperboard and molded pulp insert routes can often reduce plastic use while maintaining presentation quality.",
      },
      {
        question: "Do inserts need to be designed alongside the box?",
        answer:
          "That is usually the best approach because it ensures the fit, structure, and reveal all work together.",
      },
    ],
  },
  {
    slug: "sustainable-packaging",
    name: "Sustainable Packaging",
    shortDescription:
      "Lower-impact packaging strategies using recyclable structures, efficient materials, and elegant restraint.",
    intro:
      "Sustainable packaging at ZEEPACK is about smart decisions, not performative claims. We help brands reduce excess, choose more responsible materials, and build premium experiences with a lighter footprint.",
    image: "/images/curated/mycelium-box.webp",
    type: "sustainable",
    heroLabel: "Eco-conscious strategy",
    keyFeatures: [
      "Recyclable structures where suitable",
      "Recycled-content paper options",
      "Lower-ink, reduced-waste approaches",
      "Reusable packaging concepts",
    ],
    materials: [
      "Recycled paperboard",
      "FSC-style responsibly sourced paper options",
      "Kraft papers",
      "Molded pulp",
    ],
    finishes: [
      "Water-based inks",
      "Soy-based ink options",
      "Minimal coverage print strategies",
      "Uncoated tactile papers",
    ],
    variants: [
      "Recyclable mailers",
      "Paper-based inserts",
      "Low-ink luxury cartons",
      "Reusable rigid box concepts",
    ],
    industries: ["E-commerce", "Cosmetics", "Fashion", "Food"],
    seoHeading: "Sustainable packaging built with premium restraint",
    seoBody:
      "ZEEPACK helps brands pursue more eco-conscious packaging without losing refinement. We focus on recyclable structures, responsible material direction, and thoughtful reduction rather than vague promises.",
    faq: [
      {
        question: "Do you claim specific certifications by default?",
        answer:
          "No. We use careful, accurate sourcing language and can discuss certification pathways only where they are genuinely relevant.",
      },
      {
        question: "Can sustainable packaging still feel premium?",
        answer:
          "Yes. Premium packaging can come from texture, structure, clarity, and restraint as much as decorative finishes.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
