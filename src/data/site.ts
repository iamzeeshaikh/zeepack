import {
  BadgeCheck,
  Boxes,
  Factory,
  FileBadge2,
  Palette,
  PhoneCall,
  Printer,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "The Cereal Boxes",
  domain: "thecerealboxes.com",
  siteUrl: "https://thecerealboxes.com",
  email: "Info@thecerealboxes.com",
  phone: "(503) 358-0443",
  phoneHref: "tel:+15033580443",
  address: "2975 Coburn Hollow Road Bloomington, IL 61701 United States",
  city: "Bloomington",
  state: "IL",
  postalCode: "61701",
  country: "US",
  description:
    "The Cereal Boxes manufactures premium custom cereal boxes, printed cereal packaging, mini cereal boxes, blank cereal boxes, cereal mylar bags, and retail-ready food packaging for brands across the USA.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Cereal Boxes", href: "/cereal-boxes/" },
  { label: "Custom Printed", href: "/custom-printed-cereal-boxes/" },
  { label: "Blank / Plain", href: "/blank-cereal-boxes/" },
  { label: "Mini / Small", href: "/mini-cereal-boxes/" },
  { label: "Specialty / Theme", href: "/limited-edition-cereal-boxes/" },
  { label: "Mylar Bags", href: "/cereal-mylar-bags/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export const productMenuGroups = [
  {
    title: "Core Packaging",
    items: [
      {
        label: "Cereal Boxes",
        href: "/cereal-boxes/",
        description: "Cornerstone category for custom cereal packaging.",
      },
      {
        label: "Custom Printed",
        href: "/custom-printed-cereal-boxes/",
        description: "Retail-ready printed cereal box packaging.",
      },
      {
        label: "Custom Breakfast",
        href: "/custom-breakfast-cereal-boxes/",
        description: "Food-grade packaging for breakfast cereal brands.",
      },
      {
        label: "Wholesale",
        href: "/wholesale-cereal-boxes/",
        description: "Bulk ordering support for large production runs.",
      },
    ],
  },
  {
    title: "Sizes And Styles",
    items: [
      {
        label: "Mini Cereal Boxes",
        href: "/mini-cereal-boxes/",
        description: "Sampling, hotels, school packs, and promo formats.",
      },
      {
        label: "Small Cereal Boxes",
        href: "/small-cereal-boxes/",
        description: "Compact retail cartons with strong shelf appeal.",
      },
      {
        label: "12 oz Cereal Box",
        href: "/12-oz-cereal-box/",
        description: "A strong size page for common retail pack formats.",
      },
      {
        label: "Gable Cereal Box",
        href: "/gable-cereal-box/",
        description: "Handled cereal packaging for events and gift sets.",
      },
    ],
  },
  {
    title: "Materials And Looks",
    items: [
      {
        label: "Blank Cereal Boxes",
        href: "/blank-cereal-boxes/",
        description: "Plain cartons ready for labels, sleeves, or hand finishing.",
      },
      {
        label: "Cardboard Cereal Box",
        href: "/cardboard-cereal-box/",
        description: "Paperboard and SBS solutions for dry food packaging.",
      },
      {
        label: "Custom Colorful",
        href: "/custom-colorful-cereal-boxes/",
        description: "High-impact packaging with vibrant custom print.",
      },
      {
        label: "Cereal Mylar Bags",
        href: "/cereal-mylar-bags/",
        description: "Barrier bag packaging for freshness and flexibility.",
      },
    ],
  },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "HTML Sitemap", href: "/html-sitemap/" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
  { label: "Shipping Policy", href: "/shipping-policy/" },
  { label: "Refund / Returns Policy", href: "/refund-returns-policy/" },
];

export const homeTrustBadges = [
  "Low minimum order support",
  "Fast turnaround planning",
  "Food-grade material options",
  "Free design support",
  "Wholesale production capacity",
];

export const homeStats = [
  { value: "250+", label: "Custom cereal box concepts developed" },
  { value: "48 hrs", label: "Typical quote response window" },
  { value: "Low MOQ", label: "Flexible entry point for growing brands" },
  { value: "USA", label: "Nationwide packaging supply support" },
];

export const trustHighlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Retail-Ready Engineering",
    description:
      "Structures developed for shelf presentation, shipping protection, and strong front-panel branding.",
    icon: Store,
  },
  {
    title: "Premium Printing",
    description:
      "CMYK, Pantone, foil, spot UV, matte, gloss, and tactile finishes for stronger shelf impact.",
    icon: Printer,
  },
  {
    title: "Custom Structures",
    description:
      "Standard tuck cartons, gable styles, inserts, promotional mini cartons, and subscription-ready formats.",
    icon: Boxes,
  },
  {
    title: "Low Minimums",
    description:
      "Support for launches, pilot runs, seasonal concepts, and scaling orders without forcing oversized commitments.",
    icon: FileBadge2,
  },
  {
    title: "Food Packaging Suitability",
    description:
      "Paperboard and barrier solutions selected around dry food packaging requirements and product freshness goals.",
    icon: ShieldCheck,
  },
  {
    title: "Wholesale Capacity",
    description:
      "Built to support regional grocery launches, club store programs, and larger recurring production schedules.",
    icon: Factory,
  },
  {
    title: "Design Support",
    description:
      "We help refine artwork zones, panel hierarchy, dielines, barcode placement, and finish strategy before production.",
    icon: Palette,
  },
  {
    title: "Nationwide Delivery",
    description:
      "Reliable quote handling and project coordination for cereal brands, co-packers, and retailers across the USA.",
    icon: Truck,
  },
];

export const customizationOptions = [
  "Custom sizes and panel depths",
  "Reverse tuck, straight tuck, auto-lock, and gable structures",
  "Inside printing and inserts for premium presentation",
  "Kraft, SBS, corrugated, and recyclable paperboard",
  "Matte, gloss, AQ, soft-touch, emboss, deboss, and foil finishes",
  "Window patching, perforations, and promotional add-ons",
];

export const materialOptions = [
  "SBS paperboard for high-quality retail print",
  "Natural kraft for eco-forward or artisanal shelf presence",
  "Cardboard and paperboard layers for lightweight protection",
  "Barrier-compatible cereal bag and carton combinations",
];

export const processSteps = [
  {
    title: "Share Your Specs",
    description:
      "Send your product size, quantity, artwork status, and any packaging goals through the quote form.",
  },
  {
    title: "Review Structure",
    description:
      "We recommend the right cereal box style, board grade, print method, and finish package for your use case.",
  },
  {
    title: "Approve Artwork",
    description:
      "Dielines, print zones, barcodes, nutrition panels, and messaging hierarchy are aligned before production.",
  },
  {
    title: "Produce And Deliver",
    description:
      "Your custom cereal boxes move into production and ship with timeline coordination based on project scope.",
  },
];

export const industries = [
  {
    title: "Breakfast Brands",
    description: "Retail cereal launches, organic lines, and family-focused food brands.",
  },
  {
    title: "Private Label",
    description: "Cost-aware packaging systems for store brands and multi-SKU programs.",
  },
  {
    title: "Promotional Campaigns",
    description: "Limited-edition cereal box graphics for seasonal launches and collaborations.",
  },
  {
    title: "Hospitality And Sample Packs",
    description: "Mini cereal boxes for hotels, schools, travel packs, and trial sizes.",
  },
];

export const homepageFaqs = [
  {
    question: "Do you offer custom cereal boxes in low minimum quantities?",
    answer:
      "Yes. We support low minimum order projects for launch runs, specialty products, and testing new retail concepts, while also supporting larger wholesale volumes.",
  },
  {
    question: "Can The Cereal Boxes help with custom sizes and dielines?",
    answer:
      "Yes. We can work from your exact dimensions or help define the right length, width, depth, panel layout, and insert approach for your cereal packaging.",
  },
  {
    question: "Are food-grade materials available for cereal packaging?",
    answer:
      "We offer packaging material options commonly used for dry food applications, including paperboard cartons and related bag-and-box packaging formats for freshness and compliance planning.",
  },
  {
    question: "Do you manufacture blank cereal boxes and printed cereal boxes?",
    answer:
      "Yes. We support blank, plain, and fully custom printed cereal boxes depending on whether you need unlabeled stock cartons or a complete branded retail package.",
  },
];

export const serviceReasons = [
  "Fast quote handling with a packaging expert",
  "Support for low MOQ and bulk ordering",
  "Premium finishes for standout shelf presence",
  "Custom inserts, windows, and promotional pack formats",
  "Consistent NAP and local business signals for trust",
  "Built for crawlability, indexation, and long-term SEO scale",
];

export const contactCards = [
  {
    title: "Call Now",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: PhoneCall,
  },
  {
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: BadgeCheck,
  },
  {
    title: "Office Address",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=2975+Coburn+Hollow+Road+Bloomington+IL+61701",
    icon: Sparkles,
  },
];
