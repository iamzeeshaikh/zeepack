import Link from "next/link";
import { Globe, Clock, Sparkles, CircleGauge, Leaf, Layers3, MapPin } from "lucide-react";

import {
  EditorialHero,
  EditorialListSection,
  IconFeatureGrid,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { allLocations } from "@/data/locations";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

export const metadata = createMetadata({
  title: "Custom Packaging USA | Premium Brand Packaging Nationwide by ZEEPACK",
  description:
    "ZEEPACK creates premium custom packaging for brands across the United States — rigid boxes, mailer boxes, folding cartons, and specialty packaging shipped nationwide with low minimum orders.",
  path: "/custom-packaging-usa",
  keywords: [
    "custom packaging USA",
    "custom boxes USA",
    "premium packaging United States",
    "nationwide custom packaging",
    "custom packaging company USA",
    "mailer boxes USA",
    "rigid boxes USA",
  ],
  image: "/images/zee/rigid-lid-box.jpg",
  imageAlt: "Custom packaging USA by ZEEPACK",
});

const stateLocations = allLocations.filter((l) => l.type === "state");

const faqs = [
  {
    question: "Does ZEEPACK ship custom packaging to all 50 states?",
    answer:
      "Yes. ZEEPACK ships nationwide across all 50 U.S. states. Custom packaging is produced to specification and delivered directly to your business location, regardless of where you operate.",
  },
  {
    question: "What types of custom packaging does ZEEPACK offer?",
    answer:
      "ZEEPACK develops rigid boxes, mailer boxes, folding cartons, product boxes, gift boxes, display boxes, kraft boxes, corrugated boxes, candle packaging, cosmetic packaging, jewelry boxes, CBD packaging, supplement packaging, food boxes, tissue paper, paper bags, sleeves, inserts, labels, and sustainable packaging options.",
  },
  {
    question: "What is the minimum order quantity for custom packaging?",
    answer:
      "Minimum order quantities vary by product type and structure. Many premium formats — including rigid boxes, mailer boxes, and folding cartons — are available in lower minimum quantities suitable for growing brands, product launches, and boutique operations nationwide.",
  },
  {
    question: "How long does custom packaging production take?",
    answer:
      "Production timelines depend on the product type, quantity, finishing complexity, and whether custom artwork or structural dielines are required. Most projects move forward within a few weeks after design approvals. Contact us for project-specific timelines.",
  },
  {
    question: "Does ZEEPACK offer sustainable or eco-friendly packaging?",
    answer:
      "Yes. Recyclable boards, kraft stocks, reduced-plastic directions, and more efficient structures can all be explored. Sustainable packaging options are available across most product categories without sacrificing finish quality or brand presentation.",
  },
  {
    question: "How do I start a custom packaging project with ZEEPACK?",
    answer:
      "Use the quote page or contact us directly with your product type, approximate dimensions, quantity estimate, and any structure or finish preferences. An initial response typically comes within 24 hours.",
  },
  {
    question: "What finishing options are available for custom packaging in the USA?",
    answer:
      "Finishing options available across most custom packaging formats include foil stamping, embossing, debossing, soft-touch lamination, matte lamination, gloss lamination, and spot UV coating. The right finishing direction depends on the product category, brand aesthetic, and material route selected.",
  },
  {
    question: "Can ZEEPACK produce packaging for both retail and e-commerce brands in the USA?",
    answer:
      "Yes. ZEEPACK develops packaging suited to both retail shelf presentation and direct-to-consumer e-commerce delivery. Mailer formats, rigid boxes, folding cartons, and supporting layers like tissue paper and inserts can all be shaped around the specific channel requirements of your U.S. brand.",
  },
  {
    question: "What industries does ZEEPACK serve in the United States?",
    answer:
      "ZEEPACK serves brands across beauty and cosmetics, fashion and apparel, food and beverage, health and wellness, jewelry, CBD and cannabis, supplements, home décor, gifting, subscription boxes, e-commerce, and many other product categories throughout all 50 U.S. states.",
  },
  {
    question: "Can I order custom packaging samples before committing to a full production run?",
    answer:
      "Sample and prototype options can be discussed depending on the structure type and project scope. Reach out through the quote or contact page with your project details to understand what pre-production options are available for your specific packaging format.",
  },
];

const productLinks = [
  { label: "Luxury Rigid Boxes", href: "/products/rigid-boxes" },
  { label: "Mailer Boxes", href: "/products/mailer-boxes" },
  { label: "Folding Cartons", href: "/products/folding-cartons" },
  { label: "Gift Boxes", href: "/products/gift-boxes" },
  { label: "Display Boxes", href: "/products/display-boxes" },
  { label: "Corrugated Boxes", href: "/products/corrugated-boxes" },
  { label: "Cosmetic Packaging", href: "/products/cosmetic-boxes" },
  { label: "CBD Packaging", href: "/products/cbd-packaging" },
  { label: "Supplement Packaging", href: "/products/supplement-packaging" },
  { label: "Candle Packaging", href: "/products/candle-boxes" },
  { label: "Food & Bakery Boxes", href: "/products/food-boxes" },
  { label: "Sustainable Packaging", href: "/products/sustainable-packaging" },
];

const faqSchema = buildFaqSchema(faqs);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Custom Packaging USA", path: "/custom-packaging-usa" },
]);
const serviceSchema = buildServiceSchema({
  name: "Custom Packaging USA",
  description:
    "ZEEPACK creates premium custom packaging for brands across the United States — rigid boxes, mailer boxes, folding cartons, and specialty packaging shipped nationwide.",
  path: "/custom-packaging-usa",
});

export default function CustomPackagingUSAPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Custom Packaging · United States"
        title="Custom Packaging for Brands Across the USA"
        description="ZEEPACK creates premium custom packaging for modern brands across the United States — from rigid luxury boxes and mailer solutions to folding cartons, specialty formats, and sustainable packaging. Low minimum orders, premium finishes, and nationwide delivery."
        image={{
          src: "/images/zee/rigid-lid-box.jpg",
          alt: "Custom packaging for U.S. brands by ZEEPACK",
        }}
        highlights={[
          "All 50 States Served",
          "Low Minimum Orders",
          "Premium Finishes",
          "24-hr Quote Response",
        ]}
      />

      <EditorialListSection
        eyebrow="Product Categories"
        title="Custom packaging formats for every product category."
        items={[
          {
            title: "Luxury Rigid Boxes",
            body: "Premium structured boxes with elevated finishes for retail, gifting, and luxury brand presentation across all U.S. markets.",
          },
          {
            title: "Mailer Boxes",
            body: "Durable branded mailer boxes built for e-commerce, subscription fulfillment, and direct-to-consumer delivery nationwide.",
          },
          {
            title: "Folding Cartons",
            body: "Versatile shelf-ready carton formats for retail launches, consumer brands, and high-volume product packaging.",
          },
          {
            title: "Specialty & Industry Packaging",
            body: "Dedicated formats for cosmetics, cannabis, supplements, food, candles, jewelry, and more — built to category requirements.",
          },
          {
            title: "Sustainable Packaging",
            body: "Eco-responsible directions using recyclable boards, kraft stocks, and reduced-material structures without sacrificing brand quality.",
          },
          {
            title: "Supporting Layers",
            body: "Tissue paper, paper bags, custom sleeves, inserts, and labels that complete the branded unboxing experience.",
          },
        ]}
        columns={3}
      />

      <IconFeatureGrid
        eyebrow="Why ZEEPACK"
        title="What makes ZEEPACK the right partner for U.S. brands."
        description="These are the practical advantages that matter most when evaluating a custom packaging partner for your business."
        items={[
          {
            icon: MapPin,
            title: "Nationwide Coverage",
            description: "Custom packaging shipped to all 50 states. Your location is never a limitation.",
          },
          {
            icon: CircleGauge,
            title: "Low Minimums",
            description: "Launch runs, boutique brands, and growing businesses can pursue premium packaging at practical quantities.",
          },
          {
            icon: Clock,
            title: "24-hr Quote Response",
            description: "Most standard project inquiries receive initial pricing within one business day.",
          },
          {
            icon: Sparkles,
            title: "Premium Finishes",
            description: "Foil stamping, embossing, soft-touch lamination, spot UV, and matte or gloss systems across product lines.",
          },
          {
            icon: Leaf,
            title: "Sustainable Options",
            description: "Recyclable boards, kraft stocks, and reduced-material directions available without losing refinement.",
          },
          {
            icon: Layers3,
            title: "Custom Structures",
            description: "Rigid boxes, mailers, cartons, sleeves, and inserts tailored to exact product dimensions and brand requirements.",
          },
        ]}
      />

      {/* State index */}
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="All States"
              title="Custom packaging resources for every U.S. state."
              description="Find local packaging information, popular product formats, and industry-specific solutions for businesses in your state."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {stateLocations.map((state) => (
              <Reveal key={state.slug}>
                <Link
                  href={`/${state.slug}`}
                  className="inline-flex items-center rounded-full border border-[var(--color-shell)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-shell)]"
                >
                  {state.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Product links */}
      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))] pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Formats"
              title="Browse packaging formats for your product category."
              description="Explore the specific packaging structures most relevant to your industry, distribution channel, and brand presentation goals."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {productLinks.map((p) => (
              <Reveal key={p.href}>
                <Link
                  href={p.href}
                  className="inline-flex items-center rounded-full border border-[var(--color-shell)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-shell)]"
                >
                  {p.label}
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions about custom packaging in the USA."
              description="These answers cover the questions brands most often have when evaluating ZEEPACK for their packaging needs."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to build premium packaging for your U.S. brand?"
        description="Share your product type, quantity, and presentation goals. We'll help shape the right structure, material, and finish direction."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="Customize Your Box"
        secondaryHref="/customize"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
