import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Layers3,
  Mail,
  Package2,
  Palette,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Hero } from "@/components/ui/hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsGrid } from "@/components/ui/testimonials-grid";
import { homeFaqs } from "@/data/faqs";
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  createMetadata,
} from "@/lib/seo";

export const metadata = createMetadata({
  title: "Premium Custom Packaging Boxes | ZEEPACK",
  description:
    "Create premium custom packaging boxes with ZEEPACK. Explore luxury boxes, mailers, cartons, tissue paper, labels, and packaging for modern brands.",
  keywords: [
    "premium custom packaging boxes",
    "custom packaging boxes",
    "luxury packaging",
    "custom printed boxes",
    "mailer boxes",
    "rigid boxes",
  ],
  path: "/",
});

const industryCategories = [
  { label: "Cosmetics", icon: "✦" },
  { label: "Candles", icon: "✦" },
  { label: "Jewelry", icon: "✦" },
  { label: "Fashion", icon: "✦" },
  { label: "Food & Gifting", icon: "✦" },
  { label: "E-commerce", icon: "✦" },
];

const productCards = [
  {
    title: "Luxury Rigid Boxes",
    href: "/products/rigid-boxes",
    image: "/images/curated/rigid-setup-box.webp",
    alt: "Luxury rigid box packaging for premium custom packaging.",
    badge: "Best Seller",
    description:
      "Presentation-led packaging with strong structure, tactile wraps, and a more elevated unboxing reveal.",
  },
  {
    title: "Custom Mailer Boxes",
    href: "/products/mailer-boxes",
    image: "/images/curated/foldable-mailer-box.webp",
    alt: "Custom printed mailer box for direct-to-consumer delivery.",
    badge: "DTC Ready",
    description:
      "Shipping-ready packaging that protects the product while carrying a polished brand presence.",
  },
  {
    title: "Folding Cartons",
    href: "/products/folding-cartons",
    image: "/images/curated/skin-care-oil-box.webp",
    alt: "Folding carton packaging for retail product presentation.",
    description:
      "Retail-friendly cartons designed for shelf clarity, efficient production, and clean print execution.",
  },
  {
    title: "Candle Packaging",
    href: "/products/candle-boxes",
    image: "/images/curated/magnetic-candle-box.webp",
    alt: "Premium candle packaging box for gifting and retail.",
    badge: "Premium",
    description:
      "Boutique packaging for candles and home fragrance collections with protection and gifting appeal.",
  },
  {
    title: "Cosmetic Packaging",
    href: "/products/cosmetic-boxes",
    image: "/images/clean/cosmetic-boxes.webp",
    alt: "Cosmetic packaging boxes for beauty and skincare.",
    description:
      "Custom printed boxes for skincare, beauty, and wellness products where precision and shelf appeal matter.",
  },
  {
    title: "Jewelry Packaging",
    href: "/products/jewelry-boxes",
    image: "/images/curated/bracelet-packaging.webp",
    alt: "Luxury jewelry packaging for compact premium presentation.",
    description:
      "Compact luxury packaging designed to support softness, fit, and higher perceived value for fine jewelry.",
  },
];

const industryCards = [
  {
    title: "Cosmetic Brands",
    href: "/industries/cosmetics",
    image: "/images/real/cosmetic-boxes.webp",
    description: "Beauty packaging that supports clarity and stronger retail presentation across multiple SKUs.",
  },
  {
    title: "Candle Brands",
    href: "/industries/candles",
    image: "/images/curated/magnetic-candle-box.webp",
    description: "Packaging for jars, gift sets, and fragrance collections that balances protection with boutique feel.",
  },
  {
    title: "Jewelry Brands",
    href: "/industries/jewelry",
    image: "/images/curated/bracelet-packaging.webp",
    description: "Compact box systems and supporting layers for jewelry where fit and material feel shape perception.",
  },
  {
    title: "Fashion Brands",
    href: "/industries/fashion",
    image: "/images/curated/paper-lunch-bag.webp",
    description: "Retail and e-commerce packaging that helps fashion products arrive with a more considered presence.",
  },
  {
    title: "Food & Gifting",
    href: "/industries/food",
    image: "/images/curated/bon-bon-box.webp",
    description: "Refined packaging for confectionery, gourmet products, and gift-ready collections.",
  },
  {
    title: "E-commerce Brands",
    href: "/industries/ecommerce",
    image: "/images/curated/foldable-mailer-box.webp",
    description: "Direct-to-consumer packaging systems designed to protect products and improve the arrival experience.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Brief",
    description:
      "Tell us the product type, quantity, dimensions, and the level of presentation you want the packaging to achieve.",
    icon: Mail,
  },
  {
    step: "02",
    title: "Shape the Direction",
    description:
      "We help narrow the right format, board direction, inserts, and finishing route around your real use case.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Approve the Details",
    description:
      "Structure, material feel, print coverage, and finishing details are aligned before production moves forward.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Produce and Deliver",
    description:
      "Once approved, packaging moves into production with clearer planning for consistency, quality, and delivery.",
    icon: Truck,
  },
];

const offerCards = [
  {
    title: "Custom Sizes",
    description:
      "Every format can be built around the actual product, insert needs, and the way packaging should open, carry, or present.",
    icon: Boxes,
  },
  {
    title: "Premium Materials",
    description:
      "Board grade, wraps, paper stocks, and structural layers selected to support both perception and practical use.",
    icon: Layers3,
  },
  {
    title: "Finishing Options",
    description:
      "Foil, embossing, matte surfaces, soft-touch coatings, and restrained decorative details aligned with the brand.",
    icon: Palette,
  },
  {
    title: "Inserts and Protection",
    description:
      "Insert systems improve fit, reduce movement, and make the product reveal feel cleaner and more intentional.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const faqSchema = buildFaqSchema(homeFaqs);
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <>
      <Hero />

      {/* ── Industries served strip ── */}
      <section className="py-14">
        <Container>
          <Reveal>
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Packaging for brands across
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {industryCategories.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.08)] bg-white/88 px-5 py-2.5 text-[13px] font-semibold text-[var(--color-primary)] shadow-[0_4px_12px_rgba(17,17,17,0.05)]"
                >
                  <span className="text-[var(--color-gold)] text-[8px]">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── What We Offer ── */}
      <section className="section-space border-t border-[rgba(17,17,17,0.06)]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Packaging Built Around Structure, Detail, and Presentation"
              description="The goal is not to make packaging louder. It is to make it clearer, better fitted, and more aligned with how your brand should be experienced."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offerCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <div className="surface-card h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[rgba(198,169,114,0.12)]">
                    <card.icon className="size-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="mt-5 text-[1.1rem] font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[var(--color-muted)]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Product Categories ── */}
      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.60),rgba(255,255,255,0.88))]">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Product Categories"
                title="Explore Custom Packaging Solutions"
                description="Browse premium packaging categories shaped for presentation, protection, and brand consistency across product lines."
              />
              <Link
                href="/products"
                className="hidden shrink-0 items-center gap-2 rounded-full border border-[rgba(17,17,17,0.10)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-cta)] hover:text-[var(--color-cta)] lg:inline-flex"
              >
                View All
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <Link href={card.href} className="product-card group">
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-[rgba(17,17,17,0.07)] bg-[linear-gradient(160deg,rgba(248,245,239,0.88),rgba(238,230,218,0.96))]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(17,17,17,0.08),transparent_50%)]" />
                    {card.badge ? (
                      <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-[0_6px_18px_rgba(17,17,17,0.10)] backdrop-blur-sm">
                        {card.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-[1.8] text-[var(--color-muted)]">
                      {card.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-cta)]">
                      Explore packaging
                      <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From Brief to Premium Packaging in Four Steps"
              description="A clear process helps brands move from a rough packaging idea to a production-ready direction without unnecessary back-and-forth."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="surface-card h-full p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[rgba(232,96,58,0.10)]">
                      <step.icon className="size-5 text-[var(--color-cta)]" />
                    </div>
                    <span className="font-display text-[2.2rem] leading-none tracking-[-0.04em] text-[rgba(17,17,17,0.06)]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.1rem] font-semibold text-[var(--color-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.70),rgba(255,255,255,0.92))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Client Feedback"
              title="Brands That Trust ZEEPACK"
              description="Premium brands across retail, gifting, and e-commerce share their experience working with ZEEPACK."
            />
          </Reveal>
          <TestimonialsGrid />
        </Container>
      </section>

      {/* ── Industries ── */}
      <section className="section-space">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Industries"
                title="Premium Packaging for Every Sector"
                description="Each industry asks something different from packaging. We align structure, materials, and finishing with how products are sold, shipped, gifted, or displayed."
              />
              <Link
                href="/industries"
                className="hidden shrink-0 items-center gap-2 rounded-full border border-[rgba(17,17,17,0.10)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-cta)] hover:text-[var(--color-cta)] lg:inline-flex"
              >
                All Industries
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <Link href={card.href} className="product-card group">
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-[rgba(17,17,17,0.07)] bg-[linear-gradient(160deg,rgba(248,245,239,0.88),rgba(238,230,218,0.96))]">
                    <Image
                      src={card.image}
                      alt={`${card.title} premium packaging`}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(17,17,17,0.08),transparent_50%)]" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-[1.8] text-[var(--color-muted)]">
                      {card.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-cta)]">
                      View industry packaging
                      <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Sustainability split ── */}
      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.60),rgba(248,245,239,0.88))]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center xl:gap-14">
            <Reveal>
              <div className="surface-card p-8 sm:p-10 xl:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                  Sustainability
                </p>
                <h2 className="mt-4 font-display text-[2.4rem] leading-[0.95] tracking-[-0.04em] text-[var(--color-primary)] sm:text-[3rem]">
                  Better Packaging Without Losing the Premium Feel
                </h2>
                <p className="mt-5 text-base leading-[1.85] text-[var(--color-muted)]">
                  Practical sustainability comes from better decisions about material use, structure, and packaging fit rather than exaggerated claims. We can help explore recyclable board options, kraft materials, reduced-waste structures, right-sized packaging, and reusable premium formats.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Recyclable board options",
                    "Kraft materials",
                    "Reduced-waste structures",
                    "Right-sized packaging",
                    "Reusable premium boxes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[18px] border border-[rgba(17,17,17,0.07)] bg-[var(--color-surface)] px-4 py-3.5 text-sm font-medium text-[var(--color-primary)]"
                    >
                      <Package2 className="size-4 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/sustainability"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-cta)] transition hover:text-[var(--color-primary)]"
                >
                  Explore Sustainable Packaging
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="hero-shell p-4">
                <div className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,rgba(248,245,239,0.98),rgba(238,230,218,0.90))] sm:min-h-[520px]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0.16)_32%,transparent_58%),radial-gradient(circle_at_18%_80%,rgba(198,169,114,0.16),transparent_28%)]" />
                  <Image
                    src="/images/curated/mycelium-box.webp"
                    alt="Sustainable premium packaging material example for modern brand"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-contain p-6 drop-shadow-[0_28px_56px_rgba(17,17,17,0.12)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Common Questions About Custom Packaging"
              description="These are the questions that usually come up first when a brand is comparing formats, refining a launch, or preparing a quote request."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Build packaging that reflects your brand from the first impression."
        description="Tell us what you are launching, shipping, or refining. We will help shape a packaging direction that feels premium, practical, and brand-aligned."
        primaryLabel="Get a Custom Quote"
        primaryHref="/quote"
        secondaryLabel="Talk to Packaging Team"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
