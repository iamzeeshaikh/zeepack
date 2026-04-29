import { QuoteForm } from "@/components/forms/quote-form";
import {
  EditorialHero,
  EditorialListSection,
  IconFeatureGrid,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { quoteFaqs } from "@/data/faqs";
import { buildFaqSchema, createMetadata } from "@/lib/seo";
import {
  Boxes,
  CircleGauge,
  Palette,
  Sparkles,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Get a Quote | Premium Custom Packaging by ZEEPACK",
  description:
    "Request a premium packaging quote for rigid boxes, mailers, cartons, inserts, paper bags, tissue paper, and other custom packaging formats.",
  path: "/quote",
  keywords: [
    "custom packaging quote",
    "rigid boxes quote",
    "mailer boxes quote",
    "luxury packaging pricing",
  ],
});

export default function QuotePage() {
  const faqSchema = buildFaqSchema(quoteFaqs);

  return (
    <>
      <EditorialHero
        eyebrow="Custom Quote"
        title="Tell us what you need and let’s shape the right packaging direction."
        description="The strongest quote requests do more than ask for a price. They define the kind of packaging experience your brand needs so structure, materials, and finishing can be evaluated more clearly."
        image={{
          src: "/images/real/rigid-boxes.webp",
          alt: "Premium packaging quote page visual.",
        }}
        highlights={["Low minimums", "Custom sizing", "Premium finishes", "Insert options"]}
        metrics={[
          { value: "48 hrs", label: "Typical first response" },
          { value: "Low MOQ", label: "Flexible entry point" },
          { value: "USA", label: "Support nationwide" },
        ]}
      />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,245,239,0.82))]">
        <Container className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <Reveal>
            <div className="surface-card p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-taupe)]">
                Project Planning
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl">
                A better quote usually starts with a better brief.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                Pricing only makes sense when the packaging direction is clear enough to evaluate properly. This form is designed to gather the details that shape cost and outcome: structure, material, quantity, print coverage, finishing, inserts, and the level of presentation you need.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Product type and intended packaging format",
                  "Estimated quantity or quantity range",
                  "Approximate dimensions",
                  "Material direction or preferences",
                  "Printing, finishing, or insert requirements",
                  "Timing, launch context, and artwork status",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </Container>
      </section>

      <IconFeatureGrid
        eyebrow="What Shapes a Quote"
        title="The cost of premium packaging usually comes down to a few core decisions."
        description="These are the areas that influence material usage, complexity, production planning, and the final level of presentation."
        items={[
          { title: "Structure", description: "Rigid, carton, mailer, sleeve, or insert-led systems all carry different production implications.", icon: Boxes },
          { title: "Quantity", description: "Estimated order volume helps determine the most realistic production route and unit economics.", icon: CircleGauge },
          { title: "Printing", description: "Coverage, interior print, and the level of decorative detail influence both cost and visual impact.", icon: Palette },
          { title: "Finishing", description: "Foil, embossing, matte, soft-touch, and premium closures all affect presentation and complexity.", icon: Sparkles },
        ]}
      />

      <VisualSpotlight
        eyebrow="Quote Perspective"
        title="The cleanest quote handoff comes from clearer packaging priorities."
        description="Some brands need a launch-ready presentation box. Others need a retail carton that scales well, a direct-to-consumer mailer that feels stronger on arrival, or a supporting layer like tissue, sleeves, or inserts. The more clearly the packaging role is defined, the more useful the quote becomes."
        image={{
          src: "/images/real/mailer-boxes.webp",
          alt: "Premium packaging quote planning visual.",
        }}
        reverse
        stats={[
          "Launch packaging",
          "Retail packaging",
          "Direct-to-consumer systems",
          "Supporting layers and inserts",
        ]}
      />

      <EditorialListSection
        eyebrow="Common Quote Goals"
        title="Most quote requests are really trying to solve one or more of these problems."
        items={[
          { title: "Cleaner presentation", body: "The packaging needs to feel more premium, better structured, or more aligned with the product." },
          { title: "Better protection", body: "The format needs inserts, stronger board choice, or a packaging system that holds up better in transit." },
          { title: "Launch readiness", body: "The brand needs a packaging route that feels polished enough for a first impression." },
          { title: "Retail clarity", body: "The packaging needs stronger shelf presence, clearer hierarchy, or a more refined surface treatment." },
          { title: "Repeat supply", body: "The goal is to move from a one-off packaging idea to a more stable and repeatable system." },
          { title: "Material direction", body: "The team needs help choosing between rigid, carton, kraft, corrugated, or more sustainable routes." },
        ]}
        columns={3}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Questions that usually come up before submitting a quote."
              description="These answers help clarify what information matters most and how we use it to shape a better quote conversation."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={quoteFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Start the quote with the details that matter most."
        description="Once the product, structure, quantity, and presentation goals are clearer, the packaging conversation becomes much more useful."
        primaryLabel="Submit Your Brief"
        primaryHref="/quote"
        secondaryLabel="Contact ZEEPACK"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
