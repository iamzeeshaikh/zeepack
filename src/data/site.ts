import {
  Boxes,
  CircleGauge,
  Layers3,
  Mail,
  MapPin,
  Palette,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "ZEEPACK",
  domain: "zeepack.co",
  siteUrl: "https://zeepack.co",
  email: "Info@zeepack.co",
  phone: "(503) 358-0443",
  phoneHref: "tel:+15033580443",
  address: "2975 Coburn Hollow Road Bloomington, IL 61701 United States",
  city: "Bloomington",
  state: "IL",
  postalCode: "61701",
  country: "US",
  description:
    "ZEEPACK creates premium custom packaging for modern brands across retail, gifting, and e-commerce with a focus on structure, materials, finishing, and refined presentation.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const productMenuGroups = [
  {
    title: "Core Packaging",
    items: [
      { label: "Rigid Boxes", href: "/products/rigid-boxes" },
      { label: "Mailer Boxes", href: "/products/mailer-boxes" },
      { label: "Folding Cartons", href: "/products/folding-cartons" },
      { label: "Product Boxes", href: "/products/product-boxes" },
    ],
  },
  {
    title: "Premium Categories",
    items: [
      { label: "Candle Packaging", href: "/products/candle-boxes" },
      { label: "Cosmetic Packaging", href: "/products/cosmetic-boxes" },
      { label: "Perfume Boxes", href: "/products/perfume-boxes" },
      { label: "Jewelry Boxes", href: "/products/jewelry-boxes" },
    ],
  },
  {
    title: "Supporting Layers",
    items: [
      { label: "Tissue Paper", href: "/products/custom-tissue-paper" },
      { label: "Paper Bags", href: "/products/paper-bags" },
      { label: "Sleeves", href: "/products/sleeves" },
      { label: "Inserts", href: "/products/inserts" },
    ],
  },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Quote", href: "/quote" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund / Returns Policy", href: "/refund-returns-policy" },
];

export const homeTrustBadges = [
  "Low minimums for many premium formats",
  "Custom sizes and structured guidance",
  "Finishing-led premium presentation",
  "Support across launch and repeat production",
];

export const homeStats = [
  { value: "250+", label: "Packaging directions shaped" },
  { value: "48 hrs", label: "Typical initial quote response" },
  { value: "Low MOQ", label: "Flexible entry for growing brands" },
  { value: "USA", label: "Packaging support nationwide" },
];

export const trustHighlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Presentation First",
    description:
      "Every structure is shaped around how the product should feel at first touch, on shelf, and during unboxing.",
    icon: Sparkles,
  },
  {
    title: "Structured Materials",
    description:
      "Board grade, wrap, insert, and print direction are selected to match both the product and the intended level of perception.",
    icon: Layers3,
  },
  {
    title: "Premium Finishing",
    description:
      "Foil, embossing, soft-touch, spot UV, and restrained finish systems can all be aligned with the brand aesthetic.",
    icon: Palette,
  },
  {
    title: "Low Minimum Flexibility",
    description:
      "Growing brands, launch kits, and boutique runs can still pursue premium packaging without overshooting practical quantities.",
    icon: CircleGauge,
  },
  {
    title: "Insert Support",
    description:
      "Protective and presentation-led inserts help improve fit, reduce movement, and create a cleaner reveal.",
    icon: Boxes,
  },
  {
    title: "Sustainable Direction",
    description:
      "Responsible material routes, lower-ink choices, and simplified structures can be explored without losing refinement.",
    icon: ShieldCheck,
  },
  {
    title: "Brand Consistency",
    description:
      "Packaging systems can be built across multiple SKUs, launches, and touchpoints with more cohesive visual logic.",
    icon: SwatchBook,
  },
  {
    title: "Delivery Planning",
    description:
      "Retail, gifting, and e-commerce requirements are considered early so structure and finish remain commercially practical.",
    icon: Truck,
  },
];

export const customizationOptions = [
  "Custom box sizes and panel depths",
  "Rigid, carton, mailer, sleeve, and insert systems",
  "Interior print and insert-led organization",
  "Foil, embossing, debossing, matte, gloss, and soft-touch finishes",
  "Paperboard, rigid board, kraft, corrugated, and recycled-content options",
  "Premium gifting, retail, and direct-to-consumer packaging directions",
];

export const materialOptions = [
  "Rigid chipboard and premium wraps",
  "SBS and carton board structures",
  "Kraft and natural-finish stocks",
  "Corrugated and shipping-support formats",
];

export const processSteps = [
  {
    title: "Share the brief",
    description:
      "Start with the product type, quantity, dimensions, and the level of presentation you want the packaging to deliver.",
  },
  {
    title: "Shape the direction",
    description:
      "We review suitable structures, material routes, inserts, and finishing options around the project goals.",
  },
  {
    title: "Approve the details",
    description:
      "Sizing, artwork placement, print logic, and finishing strategy are aligned before production moves forward.",
  },
  {
    title: "Produce and deliver",
    description:
      "Once approved, the packaging moves into production with clearer structure, expectation, and output quality.",
  },
];

export const homepageFaqs = [
  {
    question: "What kinds of packaging does ZEEPACK create?",
    answer:
      "ZEEPACK develops rigid boxes, folding cartons, mailers, product boxes, tissue paper, sleeves, paper bags, inserts, and related premium packaging layers for modern brands.",
  },
  {
    question: "Can you support low minimum custom packaging projects?",
    answer:
      "Yes. Many premium formats are available in lower minimum quantities depending on the structure, material route, and finishing complexity.",
  },
  {
    question: "Do you offer sustainable packaging options?",
    answer:
      "Yes. Recyclable boards, kraft stocks, reduced-plastic directions, and more efficient structures can all be explored where they suit the product and brand.",
  },
  {
    question: "How do I request a packaging quote?",
    answer:
      "You can use the quote page or contact us directly with your product type, quantity, approximate dimensions, material preferences, and any finishing notes.",
  },
];

export const serviceReasons = [
  "Packaging direction that feels more considered",
  "Low minimum options across many premium formats",
  "Guidance on materials, structure, and finishing",
  "Insert planning for protection and presentation",
  "Retail, gifting, and e-commerce packaging support",
  "Clearer quote conversations and project handoff",
];

export const contactCards = [
  {
    title: "Call",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: PhoneCall,
  },
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    title: "Address",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=2975+Coburn+Hollow+Road+Bloomington+IL+61701",
    icon: MapPin,
  },
];
