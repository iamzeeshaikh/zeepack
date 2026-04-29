import {
  Boxes,
  Layers3,
  Palette,
  Sparkles,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
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
import { contactFaqs } from "@/data/faqs";
import { contactCards, siteConfig } from "@/data/site";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact ZEEPACK | Let’s Talk About Your Packaging Project",
  description:
    "Contact ZEEPACK to discuss custom packaging sizes, materials, finishes, inserts, launch packaging, and ongoing supply needs.",
  path: "/contact",
  keywords: [
    "contact zeepack",
    "custom packaging quote",
    "packaging consultation",
    "luxury packaging contact",
  ],
});

const helpItems = [
  {
    title: "Custom sizes",
    description: "Packaging shaped around the product rather than pushed into a stock format.",
    icon: Boxes,
  },
  {
    title: "Materials",
    description: "Board, wrap, insert, and sustainability direction based on the actual use case.",
    icon: Layers3,
  },
  {
    title: "Finishes",
    description: "Guidance on foil, embossing, matte, soft-touch, and other premium finish routes.",
    icon: Palette,
  },
  {
    title: "Launch packaging",
    description: "Support for launch kits, gifting, seasonal drops, and boutique first runs.",
    icon: Sparkles,
  },
];

export default function ContactPage() {
  const faqSchema = buildFaqSchema(contactFaqs);

  return (
    <>
      <EditorialHero
        eyebrow="Contact ZEEPACK"
        title="Let’s Talk About Your Packaging Project"
        description="Whether you are launching something new or refining an existing product, we are here to help shape the packaging direction with clearer structure, material guidance, and presentation logic."
        image={{
          src: "/images/real/cosmetic-boxes.webp",
          alt: "ZEEPACK contact page premium packaging visual.",
        }}
        highlights={["Custom sizes", "Materials", "Finishes", "Launch packaging"]}
        aside={
          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm text-[var(--color-primary)] transition hover:bg-white"
              >
                <card.icon className="size-4 text-[var(--color-gold)]" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {card.title}
                </p>
                <p className="mt-2 leading-6">{card.value}</p>
              </a>
            ))}
          </div>
        }
      />

      <IconFeatureGrid
        eyebrow="What We Can Help With"
        title="Start your packaging request with the details that matter most."
        description="If your requirements are still taking shape, that is fine. We can still help organize the brief around the right next step."
        items={helpItems}
      />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,245,239,0.82))]">
        <Container className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <div className="surface-card p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-taupe)]">
                Start Your Packaging Request
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl">
                Tell us what you are working on.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                Fill out the form and share your requirements. The more detail you can provide around product type, quantity, dimensions, material direction, and finish expectations, the easier it is to shape a more useful response.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Custom sizes",
                  "Materials",
                  "Finishes",
                  "Inserts",
                  "Launch packaging",
                  "Ongoing supply",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/86 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                  Contact Information
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.address}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.phone}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.email}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <EditorialListSection
        eyebrow="Why Reach Out"
        title="A useful packaging conversation usually starts before every detail is finalized."
        items={[
          { title: "Packaging direction", body: "Clarify whether the project should lean toward rigid, carton, mailer, sleeve, insert, or a wider packaging system." },
          { title: "Material options", body: "Compare paperboard, rigid board, kraft, textured wraps, and lower-impact routes based on the product and brand." },
          { title: "Pricing guidance", body: "A cleaner brief helps shape more realistic expectations around quantity, finish, and structure." },
          { title: "Structure planning", body: "Determine how the packaging should open, protect, carry, or present the product." },
          { title: "Launch support", body: "Useful for new launches, campaign kits, gifting programs, and premium first runs." },
        ]}
        columns={3}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions before getting in touch."
              description="If you are still shaping the project, these answers cover the most common things brands ask before starting the conversation."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Tell us what you are working on and we will help shape it."
        description="Packaging gets easier to evaluate when the product, quantity, materials, and presentation goals are all part of the same conversation."
        primaryLabel="Start Your Quote"
        primaryHref="/quote"
        secondaryLabel="Email ZEEPACK"
        secondaryHref={`mailto:${siteConfig.email}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
