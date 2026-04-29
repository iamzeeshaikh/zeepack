import { categories } from "@/data/categories";
import { homeFaqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { homeTrustBadges, homeStats, trustHighlights } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Hero } from "@/components/ui/hero";
import { IndustryCard } from "@/components/ui/industry-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ProductsExplorer } from "@/components/sections/products-explorer";

export const metadata = createMetadata({
  title: "ZEEPACK | Premium Custom Packaging For Modern Brands",
  description:
    "Premium custom packaging for retail, gifting, and e-commerce, including rigid boxes, mailers, cartons, inserts, tissue paper, sleeves, and paper bags.",
  keywords: [
    "premium custom packaging",
    "luxury rigid boxes",
    "custom mailer boxes",
    "cosmetic packaging",
    "jewelry boxes",
    "paper bags packaging",
  ],
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero trustCues={homeTrustBadges} />

      <section className="section-space pt-8">
        <Container>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {homeStats.map((stat) => (
                <div key={stat.label} className="surface-card px-6 py-6">
                  <p className="font-display text-4xl leading-none text-[var(--color-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Packaging Collection"
              title="Explore premium packaging formats shaped around presentation, structure, and brand perception."
              description="From rigid boxes and retail cartons to tissue, sleeves, inserts, and paper bags, our collection is built for modern products that need packaging to feel as considered as the item inside."
            />
          </Reveal>
          <div className="mt-10">
            <ProductsExplorer categories={categories} />
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(248,245,239,0.82))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why ZEEPACK"
              title="Packaging systems built with more discipline at every layer."
              description="The strongest packaging outcomes come from proportion, materials, print restraint, and finishing discipline. We focus on the areas that shape premium perception rather than adding noise."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="surface-card h-full p-6">
                  <item.icon className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Industry Direction"
              title="Packaging shaped around the way your category is sold, shipped, gifted, and remembered."
              description="Beauty, candles, jewelry, fashion, food, and e-commerce brands all ask different things from packaging. We align the structure and finish route to that real context."
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

      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Client Perspective"
              title="A better packaging result usually comes from better decisions earlier in the process."
              description="Brands come to ZEEPACK when they want packaging to look cleaner, feel more premium, and behave more consistently across launches, gifting, and direct-to-consumer delivery."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Common Questions"
              title="What brands usually want to know before starting."
              description="These questions come up most often when a brand is refining its packaging direction, comparing formats, or preparing a more accurate quote request."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Build packaging that feels as strong as the brand behind it."
        description="Whether you are preparing a launch, refining a premium retail product, or improving the direct-to-consumer arrival experience, we can help shape the right packaging direction."
        primaryLabel="Get a Custom Quote"
        primaryHref="/quote"
        secondaryLabel="Talk to Packaging Team"
        secondaryHref="/contact"
      />
    </>
  );
}
