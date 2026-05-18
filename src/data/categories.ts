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
    image: "/images/products/rigid-setup-boxes.jpg",
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
    image: "/images/products/mailer-boxes.jpg",
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
    image: "/images/products/folding-cartons.webp",
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
    image: "/images/products/candle-boxes-1.webp",
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
    image: "/images/products/serum-boxes.jpg",
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
    image: "/images/products/perfume-boxes.png",
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
    image: "/images/products/jewelry-boxes.webp",
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
    image: "/images/products/paper-bags.webp",
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
    image: "/images/products/display-boxes.jpg",
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
    image: "/images/products/eco-friendly-packaging.png",
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
  {
    slug: "gift-boxes",
    name: "Custom Gift Boxes",
    shortDescription: "Premium gift packaging with magnetic closures, ribbon finishes, and elevated presentation for any occasion.",
    intro: "Custom gift boxes are designed for brands and retailers that need a more considered arrival experience. From magnetic lid formats to ribbon-tie closures, each structure is shaped around the gifting moment.",
    image: "/images/products/gift-boxes.webp",
    type: "boxes",
    heroLabel: "Gifting packaging",
    keyFeatures: [
      "Magnetic, ribbon, and lift-off closure formats",
      "Custom inserts for neat product positioning",
      "Premium wraps and specialty papers",
      "Interior print for a stronger unboxing reveal",
    ],
    materials: ["Rigid chipboard", "Art paper wraps", "Specialty textured paper", "Recycled-content board"],
    finishes: ["Foil stamping", "Embossing", "Soft-touch lamination", "Spot UV", "Matte finish"],
    variants: ["Magnetic gift box", "Ribbon closure box", "Lift-off lid gift box", "Nested gift box"],
    industries: ["Luxury gifting", "Corporate gifts", "Jewelry", "Cosmetics"],
    seoHeading: "Custom gift boxes for premium brand presentation",
    seoBody: "ZEEPACK develops custom gift boxes for brands that want a stronger gifting experience. From compact jewelry formats to large presentation sets, each box is built around fit, finish, and perceived value.",
    faq: [
      { question: "Can gift boxes be made in custom sizes?", answer: "Yes. We build gift boxes to custom dimensions so the fit is precise and the presentation feels intentional." },
      { question: "What closures are available for gift boxes?", answer: "Magnetic, ribbon, lift-off lid, and hinged formats are all available depending on the product and gifting context." },
    ],
  },
  {
    slug: "window-boxes",
    name: "Custom Window Boxes",
    shortDescription: "Folding carton and rigid packaging with clear window cutouts for visible product display on retail shelves.",
    intro: "Window boxes combine retail display visibility with clean brand presentation. The clear window format lets customers see the product while maintaining a premium structured exterior.",
    image: "/images/products/window-boxes.webp",
    type: "boxes",
    heroLabel: "Display packaging",
    keyFeatures: [
      "Clear PET or acetate window panels",
      "Custom window shapes and positioning",
      "Kraft, white, and printed exterior options",
      "Suitable for retail shelf and counter display",
    ],
    materials: ["SBS board", "Kraft paperboard", "Corrugated E-flute", "Recycled content board"],
    finishes: ["Matte lamination", "Gloss lamination", "Spot UV", "Foil stamping", "Embossing"],
    variants: ["Tuck-end window box", "Pillow window box", "Rigid window box", "Gable window box"],
    industries: ["Bakery", "Soap & Bath", "Confectionery", "Candles"],
    seoHeading: "Custom window boxes for retail product display",
    seoBody: "ZEEPACK designs custom window boxes that let products speak for themselves. Clear window cutouts combined with premium exterior print make these ideal for bakeries, soap brands, and retail-first products.",
    faq: [
      { question: "What materials are used for the window panel?", answer: "We use clear PET or acetate panels that are clean, durable, and food-safe where required." },
      { question: "Can window boxes be custom-shaped?", answer: "Yes. The window cutout shape, size, and position can all be customized around your product and brand direction." },
    ],
  },
  {
    slug: "kraft-boxes",
    name: "Custom Kraft Boxes",
    shortDescription: "Natural kraft packaging with an earthy, minimal aesthetic suited to organic, artisan, and eco-conscious brands.",
    intro: "Kraft boxes deliver a clean, natural look that resonates with eco-conscious consumers. The unbleached material can be printed or left natural, making them versatile for artisan, food, beauty, and sustainable product ranges.",
    image: "/images/products/kraft-boxes.jpg",
    type: "boxes",
    heroLabel: "Eco packaging",
    keyFeatures: [
      "Natural brown and white kraft stocks",
      "Recyclable and FSC-certified options",
      "Compatible with minimal and eco-brand aesthetics",
      "Strong print quality on kraft surfaces",
    ],
    materials: ["Natural brown kraft", "White kraft board", "Recycled kraft", "Unbleached paperboard"],
    finishes: ["Kraft natural finish", "Matte lamination", "Water-based inks", "Spot varnish", "Debossing"],
    variants: ["Kraft tuck-end box", "Kraft gift box", "Kraft mailer box", "Kraft window box"],
    industries: ["Organic products", "Artisan food", "Soap & Bath", "Sustainable brands"],
    seoHeading: "Custom kraft boxes for natural and organic brands",
    seoBody: "ZEEPACK creates custom kraft boxes that balance natural aesthetics with premium print quality. Whether you need kraft gift boxes, mailers, or display formats, we build each piece around the brand's visual tone.",
    faq: [
      { question: "Can kraft boxes have full-color printing?", answer: "Yes. Full-color CMYK printing works well on white kraft surfaces and creates a warmer tone on natural brown kraft." },
      { question: "Are kraft boxes recyclable?", answer: "Yes. Kraft paperboard is naturally recyclable and a popular choice for brands pursuing more responsible packaging." },
    ],
  },
  {
    slug: "display-boxes",
    name: "Counter Display Boxes",
    shortDescription: "Point-of-sale counter and shelf display packaging that presents multiple units in one clean retail-ready format.",
    intro: "Counter display boxes organize multiple product units in a single retail-ready structure. They are ideal for high-traffic retail placements where visibility, brand consistency, and fast customer access all matter.",
    image: "/images/products/display-boxes.jpg",
    type: "boxes",
    heroLabel: "Retail display",
    keyFeatures: [
      "Header card and no-header configurations",
      "Corrugated and SBS display structures",
      "Custom compartment depths",
      "Full-color print for retail visibility",
    ],
    materials: ["Corrugated E-flute", "SBS board", "White bux board", "Recycled corrugated"],
    finishes: ["Gloss lamination", "Matte lamination", "Full-color print", "Spot UV"],
    variants: ["Counter display box", "PDQ display box", "Header card display", "Floor display shipper"],
    industries: ["Cosmetics", "Supplements", "Confectionery", "CBD"],
    seoHeading: "Counter display boxes for retail and point-of-sale",
    seoBody: "ZEEPACK develops counter display boxes built for retail visibility and brand consistency. Each format can be customized for product count, tier height, header card design, and finish direction.",
    faq: [
      { question: "What is a PDQ display box?", answer: "A PDQ (Pretty Damn Quick) display box is a shipper that doubles as a point-of-sale display, minimizing setup time at retail." },
      { question: "Can display boxes support multiple product sizes?", answer: "Yes. We build display boxes around specific product dimensions and can include dividers or adjustable compartments." },
    ],
  },
  {
    slug: "corrugated-boxes",
    name: "Custom Corrugated Boxes",
    shortDescription: "Durable corrugated shipping and retail packaging with full-color print capability and custom structural options.",
    intro: "Corrugated boxes provide strong protection for shipping, storage, and retail. Available in single-wall, double-wall, and custom die-cut formats, they can be printed with full branding for a more consistent customer-facing experience.",
    image: "/images/products/corrugated-boxes.jpg",
    type: "boxes",
    heroLabel: "Shipping & retail",
    keyFeatures: [
      "Single-wall and double-wall construction",
      "Custom die-cut formats",
      "Full-color exterior and interior print",
      "Suitable for shipping, storage, and retail display",
    ],
    materials: ["B-flute corrugated", "E-flute corrugated", "C-flute corrugated", "Double-wall corrugated"],
    finishes: ["Flexo print", "Litho label", "Full-color digital", "Matte lamination"],
    variants: ["RSC corrugated box", "Die-cut corrugated box", "Corrugated mailer", "Retail-ready corrugated"],
    industries: ["E-commerce", "Food & Beverage", "Electronics", "Subscription brands"],
    seoHeading: "Custom corrugated boxes for shipping and retail",
    seoBody: "ZEEPACK builds custom corrugated boxes that protect products in transit while carrying brand visuals cleanly. From plain shipping boxes to fully printed retail-ready formats, each structure is built around the product and delivery requirements.",
    faq: [
      { question: "What flute type should I choose for my corrugated box?", answer: "E-flute is ideal for retail packaging and mailers, B-flute for standard shipping, and C-flute for heavier items. We can advise based on your product." },
      { question: "Can corrugated boxes be printed on the inside?", answer: "Yes. Interior print is possible and creates a stronger unboxing experience for e-commerce and subscription brands." },
    ],
  },
  {
    slug: "soap-boxes",
    name: "Custom Soap Boxes",
    shortDescription: "Elegant soap packaging with window cutouts, kraft finishes, and premium label integration for handmade and boutique brands.",
    intro: "Custom soap boxes are designed for artisan, organic, and boutique soap brands that need packaging which reflects the quality of the product. From kraft sleeves to windowed cartons and luxury rigid formats, each style can be built around your bar size and brand aesthetic.",
    image: "/images/products/soap-boxes.jpg",
    type: "boxes",
    heroLabel: "Artisan packaging",
    keyFeatures: [
      "Kraft, white, and specialty paper stocks",
      "Window cutout options for product visibility",
      "Sleeve and tuck-end formats",
      "Compatible with natural, organic, and luxury brand directions",
    ],
    materials: ["Kraft paperboard", "SBS white board", "Recycled content board", "Rigid chipboard for luxury"],
    finishes: ["Kraft natural", "Matte lamination", "Spot UV", "Embossing", "Foil stamping"],
    variants: ["Kraft soap sleeve", "Window soap box", "Luxury soap box", "Naked soap wrap"],
    industries: ["Soap & Bath", "Organic products", "Wellness", "Boutique retail"],
    seoHeading: "Custom soap boxes for artisan and boutique brands",
    seoBody: "ZEEPACK creates custom soap boxes for handmade, organic, and boutique soap brands. From simple kraft sleeves to premium rigid gift formats, each soap packaging direction is built around the bar size, brand aesthetic, and retail context.",
    faq: [
      { question: "What are the most popular soap box styles?", answer: "Kraft tuck-end boxes, window cartons, and sleeve wraps are the most popular formats for artisan and boutique soap brands." },
      { question: "Can soap boxes be made for different bar sizes?", answer: "Yes. Soap boxes are always made to custom dimensions so the fit is clean and the packaging doesn't feel oversized." },
    ],
  },
  {
    slug: "mylar-bags",
    name: "Custom Mylar Bags & Pouches",
    shortDescription: "High-barrier mylar bags and stand-up pouches for food, supplements, CBD, cannabis, coffee, tea, and specialty products.",
    intro: "Mylar bags and stand-up pouches provide superior barrier protection for moisture, oxygen, and light. They are used across food, supplement, cannabis, coffee, tea, and pet food categories where freshness and shelf life are critical.",
    image: "/images/products/mylar-bags.webp",
    type: "accessories",
    heroLabel: "Barrier packaging",
    keyFeatures: [
      "Oxygen, moisture, and light barrier",
      "Resealable zipper closures",
      "Child-resistant options available",
      "Custom print on all panel surfaces",
    ],
    materials: ["Multi-layer mylar film", "Kraft-backed mylar", "Clear front mylar", "Foil laminate"],
    finishes: ["Matte finish", "Gloss finish", "Soft-touch", "Full-color CMYK", "Spot UV"],
    variants: ["Stand-up pouch", "Flat bottom bag", "3.5g mylar bag", "1 lb mylar bag"],
    industries: ["CBD & Cannabis", "Coffee & Tea", "Supplements", "Pet food"],
    seoHeading: "Custom mylar bags and stand-up pouches",
    seoBody: "ZEEPACK supplies custom mylar bags and stand-up pouches built for high-barrier protection and premium brand presentation. From cannabis and CBD packaging to coffee, tea, and supplement pouches, each bag is built around your product's freshness and shelf-life requirements.",
    faq: [
      { question: "Are mylar bags food-safe?", answer: "Yes. Our mylar bags are made from food-grade materials suitable for direct food contact." },
      { question: "Can mylar bags have child-resistant closures?", answer: "Yes. Child-resistant zipper closures are available for cannabis, CBD, and supplement products where regulations require them." },
    ],
  },
  {
    slug: "wax-melt-boxes",
    name: "Wax Melt Packaging",
    shortDescription: "Clamshell, gift box, and custom packaging formats designed specifically for wax melts, snap bars, and home fragrance products.",
    intro: "Wax melt packaging needs to protect the product during transit, display it cleanly at retail, and communicate the fragrance story. From clamshell formats to premium gift boxes, we build wax melt packaging around the product size, scent presentation, and brand direction.",
    image: "/images/products/wax-melt-boxes.webp",
    type: "boxes",
    heroLabel: "Home fragrance",
    keyFeatures: [
      "Clamshell and tray formats for snap bars",
      "Gift box structures for premium presentation",
      "Window cutouts for product visibility",
      "Custom inserts for secure positioning",
    ],
    materials: ["SBS board", "Kraft paperboard", "Rigid chipboard for luxury", "Corrugated for shipping"],
    finishes: ["Matte lamination", "Soft-touch", "Foil stamping", "Embossing", "Spot UV"],
    variants: ["Wax melt clamshell", "Wax melt gift box", "Wax melt drawer box", "Snap bar window box"],
    industries: ["Home fragrance", "Candles", "Gifting", "Boutique retail"],
    seoHeading: "Wax melt packaging for home fragrance brands",
    seoBody: "ZEEPACK designs wax melt packaging for boutique home fragrance brands, candle makers, and gift product lines. Clamshell, gift box, and window formats are all available in custom sizes with premium finish options.",
    faq: [
      { question: "What packaging is best for wax melts?", answer: "Clamshell packaging is standard for retail wax melts, while gift boxes and window cartons work well for premium and gifting formats." },
      { question: "Can wax melt packaging show the product through a window?", answer: "Yes. Window cutouts with clear acetate panels are a popular option for wax melt packaging across retail and direct-to-consumer channels." },
    ],
  },
  {
    slug: "food-boxes",
    name: "Food Packaging Boxes",
    shortDescription: "Custom food packaging for bakeries, restaurants, confectionery, and specialty food brands including boxes, bags, and cartons.",
    intro: "Food packaging boxes need to balance presentation, food safety, and brand consistency. From bakery cartons to premium chocolate gift boxes, we develop food packaging around the product type, retail environment, and the brand story.",
    image: "/images/products/food-packaging-boxes.webp",
    type: "boxes",
    heroLabel: "Food & beverage",
    keyFeatures: [
      "Food-grade materials and inks",
      "Grease-resistant coatings where required",
      "Custom sizes for every food format",
      "Retail, gifting, and foodservice structures",
    ],
    materials: ["SBS food-grade board", "Kraft paperboard", "Corrugated E-flute", "Coated art board"],
    finishes: ["Gloss lamination", "Matte lamination", "Spot UV", "Aqueous coating", "Foil stamping"],
    variants: ["Bakery gift box", "Gable box", "Window food box", "Premium food gift box"],
    industries: ["Bakery", "Confectionery", "Restaurant & Foodservice", "Specialty food brands"],
    seoHeading: "Custom food packaging boxes for bakeries and specialty brands",
    seoBody: "ZEEPACK develops custom food packaging boxes for bakeries, chocolatiers, specialty food brands, and restaurant operations. Every format is built around food safety, visual presentation, and the product's retail or gifting context.",
    faq: [
      { question: "Are food packaging boxes food-safe?", answer: "Yes. We use food-grade materials and inks that meet safety standards for direct and indirect food contact." },
      { question: "Can food boxes be printed with full branding?", answer: "Yes. Full-color CMYK printing is available on all food packaging formats, including custom logos, product descriptions, and regulatory information." },
    ],
  },
  {
    slug: "bakery-boxes",
    name: "Custom Bakery Boxes",
    shortDescription: "Stylish bakery packaging for cakes, cookies, pastries, bread, and specialty baked goods with custom print and window options.",
    intro: "Custom bakery boxes present baked goods at their best. Window cutouts for visibility, grease-resistant coatings for protection, and premium print for brand consistency make them ideal for patisseries, artisan bakers, and specialty food retailers.",
    image: "/images/products/bakery-boxes.jpg",
    type: "boxes",
    heroLabel: "Artisan bakery",
    keyFeatures: [
      "Window cutout options for product visibility",
      "Grease-resistant coatings",
      "Kraft and white board options",
      "Custom sizes for cakes, cookies, pastries, and bread",
    ],
    materials: ["SBS food-grade board", "Kraft paperboard", "Grease-resistant coated board", "Recycled content board"],
    finishes: ["Gloss aqueous coating", "Matte finish", "Spot UV", "Foil details"],
    variants: ["Cake box", "Cookie box", "Pastry window box", "Kraft bakery bag"],
    industries: ["Bakery & Patisserie", "Specialty food", "Gifting", "Café & coffee shop"],
    seoHeading: "Custom bakery boxes for artisan bakers and specialty food brands",
    seoBody: "ZEEPACK creates custom bakery boxes for cakes, cookies, pastries, and specialty baked goods. Window options, grease-resistant coatings, and premium print make each format practical for retail display and direct sales.",
    faq: [
      { question: "Can bakery boxes have window cutouts?", answer: "Yes. Window cutouts with clear acetate are available and very popular for bakery display packaging." },
      { question: "Are bakery boxes grease-resistant?", answer: "Yes. Grease-resistant coatings are available for pastries, cakes, and other high-fat baked goods." },
    ],
  },
  {
    slug: "cake-boxes",
    name: "Custom Cake Boxes",
    shortDescription: "Strong, food-safe cake packaging in standard and custom sizes for single tiers, multi-tier cakes, and premium patisserie presentation.",
    intro: "Custom cake boxes protect delicate cakes during transport while presenting them in a way that reflects the care and craft behind them. Available in kraft, white, and premium printed finishes for every bakery and patisserie.",
    image: "/images/products/cake-boxes.jpg",
    type: "boxes",
    heroLabel: "Cake packaging",
    keyFeatures: [
      "Strong base and wall construction",
      "Window options for cake visibility",
      "Custom heights for tiered and specialty cakes",
      "Food-grade materials throughout",
    ],
    materials: ["SBS food-grade board", "Kraft board", "White bux board", "Corrugated for shipping"],
    finishes: ["Gloss lamination", "Matte finish", "Aqueous coating", "Custom print"],
    variants: ["Standard cake box", "Window cake box", "Tall tier cake box", "Custom printed cake box"],
    industries: ["Bakery & Patisserie", "Wedding cakes", "Custom cakes", "Gifting"],
    seoHeading: "Custom cake boxes for bakeries and specialty patisseries",
    seoBody: "ZEEPACK designs custom cake boxes for bakeries, pastry chefs, and specialty patisseries. Each box is built to the exact dimensions of the cake, with food-safe materials and optional window cutouts for product visibility.",
    faq: [
      { question: "Can cake boxes be made in custom heights?", answer: "Yes. Custom box heights are available for single-tier, multi-tier, and specialty cake formats." },
      { question: "What base thickness is recommended for cake boxes?", answer: "A stronger base is important for heavier cakes. We can advise on board weight and structure based on your cake type." },
    ],
  },
  {
    slug: "coffee-tea-boxes",
    name: "Coffee & Tea Packaging",
    shortDescription: "Premium coffee bag, tea pouch, and specialty beverage packaging with barrier protection, custom print, and sustainable material options.",
    intro: "Coffee and tea packaging needs to protect freshness, communicate quality, and look good on a shelf. From stand-up pouches with degassing valves to premium rigid gift boxes for specialty blends, we build coffee and tea packaging around the product's story.",
    image: "/images/products/coffee-boxes.webp",
    type: "boxes",
    heroLabel: "Beverage packaging",
    keyFeatures: [
      "Oxygen and moisture barrier options",
      "Degassing valve compatibility",
      "Stand-up, flat-bottom, and rigid formats",
      "Compostable material routes available",
    ],
    materials: ["Multi-layer barrier film", "Kraft-backed pouches", "SBS board for gift boxes", "Compostable PLA film"],
    finishes: ["Matte finish", "Soft-touch", "Foil stamping", "Full-color CMYK", "Spot UV"],
    variants: ["Coffee stand-up pouch", "Tea pyramid bag box", "Coffee gift box", "Flat-bottom coffee bag"],
    industries: ["Coffee brands", "Tea brands", "Specialty beverage", "Gifting"],
    seoHeading: "Coffee and tea packaging for specialty beverage brands",
    seoBody: "ZEEPACK develops coffee and tea packaging for specialty roasters, tea blenders, and premium beverage brands. Stand-up pouches, flat-bottom bags, and rigid gift box formats are all available with premium print and barrier protection.",
    faq: [
      { question: "Do coffee bags need a one-way degassing valve?", answer: "Freshly roasted coffee releases CO2, so a one-way degassing valve is recommended to maintain bag integrity and freshness." },
      { question: "Can coffee and tea packaging be compostable?", answer: "Yes. Compostable barrier film options are available for brands pursuing more sustainable packaging." },
    ],
  },
  {
    slug: "candy-boxes",
    name: "Candy & Confectionery Boxes",
    shortDescription: "Custom candy boxes, chocolate boxes, and confectionery packaging with elegant presentation finishes and food-safe materials.",
    intro: "Candy and confectionery packaging is as much about presentation as protection. From ribbon-tied chocolate boxes to printed candy cartons, we build confectionery packaging that makes the product feel worth the moment.",
    image: "/images/products/candy-boxes.webp",
    type: "boxes",
    heroLabel: "Confectionery",
    keyFeatures: [
      "Food-grade materials throughout",
      "Rigid and carton formats for gifting and retail",
      "Custom inserts and dividers for individual pieces",
      "Window options for product display",
    ],
    materials: ["SBS food-grade board", "Rigid chipboard for gift boxes", "Kraft paperboard", "Art paper wraps"],
    finishes: ["Foil stamping", "Embossing", "Matte lamination", "Soft-touch", "Spot UV"],
    variants: ["Chocolate gift box", "Candy carton", "Window candy box", "Seasonal confectionery box"],
    industries: ["Confectionery", "Chocolate", "Gifting", "Holiday seasonal"],
    seoHeading: "Custom candy and confectionery packaging for gifting and retail",
    seoBody: "ZEEPACK creates custom candy boxes and confectionery packaging for chocolatiers, candy brands, and seasonal gift collections. Rigid gift formats, windowed cartons, and premium print options are all available.",
    faq: [
      { question: "Can confectionery boxes include inserts for individual pieces?", answer: "Yes. Custom inserts with individual cavities are available for chocolates, truffles, and other confectionery formats." },
      { question: "Are confectionery boxes food-safe?", answer: "Yes. All materials and coatings are food-grade and suitable for direct or indirect contact with confectionery products." },
    ],
  },
  {
    slug: "cbd-packaging",
    name: "CBD & Cannabis Packaging",
    shortDescription: "Compliant, premium CBD and cannabis packaging including tincture boxes, gummy packaging, cartridge boxes, and display formats.",
    intro: "CBD and cannabis packaging must balance regulatory compliance, product protection, and strong brand presentation. From child-resistant tincture boxes to premium retail displays, we build CBD packaging around the product format and market channel.",
    image: "/images/products/cbd-packaging.jpg",
    type: "boxes",
    heroLabel: "CBD packaging",
    keyFeatures: [
      "Child-resistant structure options",
      "Compliant label panel sizing",
      "Premium finishes for retail shelf impact",
      "Mylar bag and rigid box formats",
    ],
    materials: ["SBS board", "Rigid chipboard", "Kraft paperboard", "Mylar film for pouches"],
    finishes: ["Matte lamination", "Soft-touch", "Foil stamping", "Spot UV", "Embossing"],
    variants: ["CBD tincture box", "CBD gummy packaging", "CBD oil box", "CBD display box"],
    industries: ["CBD", "Cannabis", "Health & Wellness", "Supplements"],
    seoHeading: "Custom CBD and cannabis packaging boxes",
    seoBody: "ZEEPACK develops custom CBD packaging and cannabis product boxes for tinctures, gummies, oils, capsules, and retail display. Each format is built around product compliance requirements, retail shelf presence, and brand positioning.",
    faq: [
      { question: "Can CBD packaging include child-resistant features?", answer: "Yes. Child-resistant closures and structural features are available for CBD and cannabis packaging formats." },
      { question: "What finishes work best for CBD packaging?", answer: "Matte soft-touch, foil stamping, and spot UV are popular for CBD brands that want a premium, clinical, or luxury feel." },
    ],
  },
  {
    slug: "supplement-packaging",
    name: "Supplement & Vitamin Boxes",
    shortDescription: "Professional supplement packaging for vitamins, capsules, powder tubs, gummies, and health product ranges with strong retail appeal.",
    intro: "Supplement and vitamin packaging needs to communicate trust, efficacy, and brand quality. From clean carton formats to premium rigid box sets, we develop supplement packaging that positions health products effectively on retail shelves and in direct-to-consumer channels.",
    image: "/images/products/supplement-boxes.webp",
    type: "boxes",
    heroLabel: "Health packaging",
    keyFeatures: [
      "Clean, clinical, and premium direction options",
      "Compliant label panel sizing",
      "Custom inserts for bottles and pouches",
      "Retail and DTC format support",
    ],
    materials: ["SBS board", "Kraft paperboard", "Rigid chipboard for premium sets", "Mylar film for pouches"],
    finishes: ["Matte lamination", "Soft-touch", "Foil stamping", "Spot UV", "Embossing"],
    variants: ["Vitamin carton", "Supplement rigid box", "Protein powder bag", "Health gift set box"],
    industries: ["Supplements", "Health & Wellness", "Fitness", "Pharmacy"],
    seoHeading: "Custom supplement and vitamin packaging for health brands",
    seoBody: "ZEEPACK creates supplement packaging for vitamins, capsules, gummies, protein powders, and health product lines. Each format is developed to communicate product quality and brand positioning across retail and direct-to-consumer channels.",
    faq: [
      { question: "What box styles work best for supplement capsules?", answer: "Reverse tuck end cartons, auto-lock bottom boxes, and rigid set boxes are all popular for supplement capsule packaging." },
      { question: "Can supplement packaging include a window for product visibility?", answer: "Yes. Window cartons are available for supplement formats where product visibility adds retail appeal." },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
