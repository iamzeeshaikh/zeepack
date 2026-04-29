import {
  Boxes,
  Leaf,
  Paintbrush2,
  Recycle,
} from "lucide-react";

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
import { sustainabilityFaqs } from "@/data/faqs";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sustainable Packaging | Premium Packaging With Smarter Choices",
  description:
    "Explore sustainable packaging approaches from ZEEPACK, including recyclable materials, reduced plastic use, efficient inserts, and premium packaging that still feels elevated.",
  path: "/sustainability",
  keywords: [
    "sustainable premium packaging",
    "recyclable packaging",
    "kraft packaging",
    "eco friendly luxury packaging",
  ],
});

export default function SustainabilityPage() {
  const faqSchema = buildFaqSchema(sustainabilityFaqs);

  return (
    <>
      <EditorialHero
        eyebrow="Sustainability"
        title="Sustainable Packaging That Still Feels Premium"
        description="Modern brands expect more from packaging not just in presentation, but in responsibility. At ZEEPACK, we focus on packaging solutions that balance refined design with smarter material choices and reduced waste wherever possible."
        image={{
          src: "/images/real/sustainable-packaging.webp",
          alt: "Sustainable premium packaging by ZEEPACK.",
        }}
        highlights={["Recyclable options", "Kraft finishes", "Reduced plastic", "Efficient structures"]}
        metrics={[
          { value: "Smarter", label: "Material direction" },
          { value: "Cleaner", label: "Structural choices" },
          { value: "Premium", label: "Brand perception" },
        ]}
      />

      <VisualSpotlight
        eyebrow="A More Considered Approach"
        title="Sustainability should support great packaging, not limit it."
        description="Our approach focuses on material selection, efficient structures, and thoughtful production without compromising the premium look and feel your brand needs. The goal is not to make every package look natural or stripped back. It is to make packaging decisions more disciplined and more responsible where they can be."
        image={{
          src: "/images/curated/mycelium-box.webp",
          alt: "Considered sustainable packaging materials.",
        }}
        stats={[
          "Material restraint",
          "Reusable rigid structures",
          "Lower-impact print choices",
          "Reduced excess and bulk",
        ]}
      />

      <IconFeatureGrid
        eyebrow="Materials That Support Better Packaging"
        title="Premium packaging can still move toward better material choices."
        description="These are some of the material and production directions brands most often ask about when exploring more responsible packaging."
        items={[
          { title: "Recyclable Board Options", description: "Paper-based structures often create a cleaner route for retail, gifting, and secondary packaging formats.", icon: Recycle },
          { title: "Kraft and Natural Finishes", description: "Natural stocks can still feel premium when paired with restraint, proportion, and strong typography.", icon: Leaf },
          { title: "Smarter Ink Choices", description: "More selective print coverage and cleaner color systems often reduce excess while improving clarity.", icon: Paintbrush2 },
          { title: "Reduced Plastic Use", description: "Paper-led inserts, simpler wraps, and cleaner structural solutions can reduce unnecessary plastic components.", icon: Boxes },
        ]}
      />

      <EditorialListSection
        eyebrow="Smarter Packaging Choices"
        title="A more responsible route often comes from several small decisions made well."
        items={[
          { title: "Right-sized packaging", body: "Structures developed around the actual product help reduce excess board, void space, and unnecessary material use." },
          { title: "Reusable rigid structures", body: "In some cases, a durable premium format can create a more lasting value than a weaker disposable alternative." },
          { title: "Minimalist design approaches", body: "Reduced visual noise, lower ink coverage, and stronger hierarchy often improve both sustainability and perception." },
          { title: "Efficient inserts", body: "Simplified insert systems can still provide support, fit, and product organization without overbuilding the package." },
        ]}
      />

      <EditorialListSection
        eyebrow="Sustainable Options Across Packaging Types"
        title="Responsible choices can be explored across the wider packaging system."
        items={[
          { title: "Rigid boxes", body: "Reusable structures, cleaner wraps, and lower-ink approaches can support a more responsible premium route." },
          { title: "Folding cartons", body: "Paper-based retail cartons are often one of the clearest recyclable packaging directions." },
          { title: "Mailers", body: "Right-sized corrugated or kraft mailers can reduce waste while still protecting the product." },
          { title: "Tissue paper", body: "Lower-coverage print and recycled-content tissue can still support a polished reveal." },
          { title: "Sleeves", body: "A sleeve can add hierarchy and campaign flexibility without overbuilding the full packaging structure." },
          { title: "Paper bags", body: "Paper carry formats can be specified with smarter print and material direction for better retail sustainability." },
        ]}
        columns={3}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Premium Still Matters"
              title="Sustainable packaging should never feel like a downgrade."
              description="For many brands, packaging is part of the product experience. The best sustainable packaging directions preserve brand value through structure, tactility, and visual discipline rather than through excess."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={sustainabilityFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Build packaging that aligns with both your brand and your values."
        description="If you want the packaging to feel more refined and more responsible at the same time, we can help shape the right balance."
        primaryLabel="Explore a Quote"
        primaryHref="/quote"
        secondaryLabel="Talk to ZEEPACK"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
