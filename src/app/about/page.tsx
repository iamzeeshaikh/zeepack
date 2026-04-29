import {
  BadgeCheck,
  Boxes,
  Layers3,
  Sparkles,
} from "lucide-react";

import {
  EditorialHero,
  EditorialListSection,
  IconFeatureGrid,
  NumberedStepsSection,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutFaqs } from "@/data/faqs";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About ZEEPACK | Premium Packaging Built Around Detail",
  description:
    "Learn how ZEEPACK approaches premium custom packaging through structure, materials, presentation, and a more considered project process.",
  path: "/about",
  keywords: [
    "about zeepack",
    "premium packaging company",
    "custom packaging team",
    "luxury packaging supplier",
  ],
});

const focusItems = [
  {
    title: "Presentation",
    description:
      "We pay close attention to proportion, finish restraint, and the first impression the packaging creates.",
    icon: Sparkles,
  },
  {
    title: "Structure",
    description:
      "The format has to fit the product properly, reveal it cleanly, and stay practical through production and delivery.",
    icon: Boxes,
  },
  {
    title: "Materials",
    description:
      "Board, wrap, insert, and print decisions are shaped around the level of tactility and durability the brand actually needs.",
    icon: Layers3,
  },
  {
    title: "Responsiveness",
    description:
      "The process stays clearer when questions around quantity, finish, and direction are answered early and directly.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  const faqSchema = buildFaqSchema(aboutFaqs);

  return (
    <>
      <EditorialHero
        eyebrow="About ZEEPACK"
        title="Packaging Built for Brands That Care About Detail"
        description="ZEEPACK works with modern brands that understand the value of presentation, structure, and consistency. We approach packaging as part of the product experience, not as a generic afterthought."
        image={{
          src: "/images/real/rigid-boxes.webp",
          alt: "Premium ZEEPACK rigid packaging presentation.",
        }}
        highlights={["Low minimums", "Custom sizes", "Premium finishes", "Insert support"]}
        metrics={[
          { value: "250+", label: "Packaging directions shaped" },
          { value: "Low MOQ", label: "Flexible premium entry" },
          { value: "USA", label: "Support nationwide" },
        ]}
      />

      <VisualSpotlight
        eyebrow="Our Approach"
        title="We do not treat packaging like a basic requirement."
        description="Every project is approached with attention to structure, materials, finishing, and the way the packaging should be perceived when it is opened, carried, gifted, or displayed. The goal is to create packaging that feels more intentional, more premium, and more aligned with the brand it represents."
        image={{
          src: "/images/real/product-boxes.webp",
          alt: "Premium product packaging detail.",
        }}
        stats={[
          "Built around real product dimensions",
          "Aligned to presentation and protection",
          "Shaped for launch, retail, and repeat supply",
          "Developed with finish and material discipline",
        ]}
      />

      <IconFeatureGrid
        eyebrow="What We Focus On"
        title="A premium packaging process is built on a few details done properly."
        description="These are the areas we pay the most attention to when shaping a cleaner packaging result."
        items={focusItems}
      />

      <EditorialListSection
        eyebrow="Who We Work With"
        title="Packaging for brands where detail influences perception."
        description="We commonly support categories where the packaging has to communicate value clearly, not just hold the product."
        items={[
          { title: "Cosmetics", body: "Skincare, beauty, and personal care lines that need retail clarity and premium detail." },
          { title: "Candles", body: "Boutique fragrance and candle collections where gifting and shelf presence both matter." },
          { title: "Jewelry", body: "Compact premium packaging where fit, softness, and keepsake presentation elevate the product." },
          { title: "Fashion", body: "Apparel and accessory brands that want a stronger arrival experience across retail and e-commerce." },
          { title: "Food", body: "Confectionery and gourmet products that need better structure, story, and presentation." },
          { title: "E-commerce", body: "Online brands that need shipping-ready packaging without losing premium perception." },
        ]}
        columns={3}
      />

      <EditorialListSection
        eyebrow="Why Brands Choose ZEEPACK"
        title="The difference is usually felt in consistency, finish, and guidance."
        items={[
          { title: "Low minimums", body: "Useful for launches, seasonal projects, and growing brands that still want a premium result." },
          { title: "Custom sizes", body: "Packaging is developed around the product, not forced into a stock format that feels off." },
          { title: "Premium finishes", body: "Foil, embossing, soft-touch, matte, and other finish routes can be aligned to the brand." },
          { title: "Inserts", body: "Internal support improves both product protection and the overall reveal when the box opens." },
          { title: "Guidance", body: "We help refine structure, materials, finishing, and what information is most useful for quoting." },
          { title: "Consistent quality", body: "A more considered process helps repeat production feel cleaner and more dependable over time." },
        ]}
        columns={3}
      />

      <NumberedStepsSection
        eyebrow="How It Works"
        title="A better packaging experience usually comes from a simpler process."
        description="The goal is not to make packaging feel complicated. It is to make the important decisions clearer."
        steps={[
          { title: "Share requirements", description: "Start with the product, quantity, timing, and the level of presentation you want to achieve." },
          { title: "Choose materials", description: "We review suitable structures, material routes, inserts, and finish directions around the brief." },
          { title: "Approve direction", description: "Sizing, artwork logic, and finishing details are aligned before production moves ahead." },
          { title: "Production", description: "Once approved, the packaging moves into production with a cleaner and more accurate handoff." },
        ]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="A Better Packaging Experience"
              title="We focus on making the process clear and structured from start to finish."
              description="Premium packaging should not come from guesswork. It comes from cleaner decisions around structure, materials, fit, and the level of finish the brand actually needs."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={aboutFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Start building packaging that reflects your brand properly."
        description="If the product deserves better presentation, stronger structure, or a cleaner premium direction, we can help shape the next step."
        primaryLabel="Get a Quote"
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
