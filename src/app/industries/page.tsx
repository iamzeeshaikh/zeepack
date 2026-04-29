import { industries } from "@/data/industries";
import { createMetadata } from "@/lib/seo";
import { EditorialHero } from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { IndustryCard } from "@/components/ui/industry-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = createMetadata({
  title: "Industries | Premium Packaging by Category",
  description:
    "See how ZEEPACK approaches premium packaging for cosmetics, candles, fashion, jewelry, food, and e-commerce brands.",
  path: "/industries",
  keywords: [
    "cosmetic packaging",
    "candle packaging",
    "jewelry packaging",
    "ecommerce packaging",
    "fashion packaging",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Industries"
        title="Packaging Shaped Around the Way Your Category Sells, Ships, and Presents Itself"
        description="Different products ask different things from packaging. We align structure, finishing, and materials to the category context rather than treating every brand the same."
        image={{
          src: "/images/real/cosmetic-boxes.webp",
          alt: "Industry-focused premium packaging by ZEEPACK.",
        }}
        highlights={["Cosmetics", "Candles", "Jewelry", "E-commerce"]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Industry Solutions"
              title="Explore packaging priorities by product category."
              description="Each industry page focuses on the packaging systems, materials, finishes, and support layers that most often matter for that category."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.05}>
                <IndustryCard
                  name={industry.name}
                  description={industry.description}
                  image={industry.image}
                  href={`/industries/${industry.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need packaging designed around your exact industry context?"
        description="If the product category, launch channel, or retail environment is shaping the packaging decision, we can help narrow the right route."
        primaryLabel="Start a Quote"
        primaryHref="/quote"
        secondaryLabel="Talk to ZEEPACK"
        secondaryHref="/contact"
      />
    </>
  );
}
