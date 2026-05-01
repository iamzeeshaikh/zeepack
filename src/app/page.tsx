import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Layers3,
  Mail,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Hero } from "@/components/ui/hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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

const trustItems = [
  "Low minimums available",
  "Custom sizes",
  "Premium finishes",
  "Material guidance",
  "Inserts and protection",
];

const offerCards = [
  {
    title: "Custom Sizes",
    description:
      "Each format can be built around the actual product, insert needs, and the way the packaging should open, carry, or present.",
    icon: Boxes,
  },
  {
    title: "Premium Materials",
    description:
      "Board grade, wraps, paper stocks, and structural layers are selected to support both perception and practical use.",
    icon: Layers3,
  },
  {
    title: "Finishing Options",
    description:
      "Foil, embossing, matte surfaces, soft-touch coatings, and restrained decorative details can all be aligned with the brand.",
    icon: Palette,
  },
  {
    title: "Inserts and Protection",
    description:
      "Insert systems help improve fit, reduce movement, and make the product reveal feel cleaner and more intentional.",
    icon: ShieldCheck,
  },
];

const productCards = [
  {
    title: "Luxury Rigid Boxes",
    href: "/products/rigid-boxes",
    image: "/images/curated/rigid-setup-box.webp",
    alt: "Luxury rigid box packaging for premium custom packaging boxes.",
    description:
      "Presentation-led custom packaging boxes with stronger structure, tactile materials, and a more elevated unboxing feel.",
  },
  {
    title: "Mailer Boxes",
    href: "/products/mailer-boxes",
    image: "/images/curated/foldable-mailer-box.webp",
    alt: "Custom printed mailer box packaging for direct-to-consumer delivery.",
    description:
      "Shipping-ready premium packaging that protects the product while still carrying a clearer, more polished brand presence.",
  },
  {
    title: "Folding Cartons",
    href: "/products/folding-cartons",
    image: "/images/curated/skin-care-oil-box.webp",
    alt: "Folding carton custom packaging for retail product presentation.",
    description:
      "Retail-friendly cartons designed for shelf clarity, efficient production, and clean print execution.",
  },
  {
    title: "Candle Packaging",
    href: "/products/candle-boxes",
    image: "/images/curated/magnetic-candle-box.webp",
    alt: "Premium candle packaging box for gifting and retail presentation.",
    description:
      "Packaging for candles and home fragrance collections that need protection, gifting appeal, and a boutique finish.",
  },
  {
    title: "Cosmetic Packaging",
    href: "/products/cosmetic-boxes",
    image: "/images/real/cosmetic-boxes.webp",
    alt: "Cosmetic packaging boxes for beauty and skincare products.",
    description:
      "Custom printed boxes for skincare, beauty, and wellness products where precision, consistency, and shelf appeal matter.",
  },
  {
    title: "Jewelry Packaging",
    href: "/products/jewelry-boxes",
    image: "/images/curated/bracelet-packaging.webp",
    alt: "Luxury jewelry packaging designed for compact premium presentation.",
    description:
      "Compact luxury packaging formats designed to support softness, fit, and higher perceived value for jewelry collections.",
  },
];

const industryCards = [
  {
    title: "Cosmetic Brands",
    href: "/industries/cosmetics",
    image: "/images/real/cosmetic-boxes.webp",
    description:
      "Beauty packaging that supports clarity, premium finishing, and stronger retail presentation across multiple SKUs.",
  },
  {
    title: "Candle Brands",
    href: "/industries/candles",
    image: "/images/curated/magnetic-candle-box.webp",
    description:
      "Packaging for jars, gift sets, and fragrance collections that balances protection with a boutique unboxing feel.",
  },
  {
    title: "Jewelry Brands",
    href: "/industries/jewelry",
    image: "/images/curated/bracelet-packaging.webp",
    description:
      "Compact box systems and supporting layers for jewelry presentation where fit and material feel shape perception.",
  },
  {
    title: "Fashion Brands",
    href: "/industries/fashion",
    image: "/images/curated/paper-lunch-bag.webp",
    description:
      "Retail and ecommerce packaging that helps fashion products arrive with a cleaner, more considered brand presence.",
  },
  {
    title: "Food and Gifting Brands",
    href: "/industries/food",
    image: "/images/curated/bon-bon-box.webp",
    description:
      "Refined packaging for confectionery, gourmet products, and gift-ready collections that need structure and shelf appeal.",
  },
  {
    title: "Ecommerce Brands",
    href: "/industries/ecommerce",
    image: "/images/curated/foldable-mailer-box.webp",
    description:
      "Direct-to-consumer packaging systems designed to protect products and improve the arrival experience.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Start with the product type, quantity, dimensions, timing, and the level of presentation you want the packaging to achieve.",
    icon: Mail,
  },
  {
    step: "02",
    title: "Choose Materials and Structure",
    description:
      "We help narrow the right format, board direction, inserts, and finishing route around the real use case.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Approve Your Packaging Direction",
    description:
      "Structure, material feel, print coverage, and finishing details are aligned before production moves forward.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Production and Delivery",
    description:
      "Once approved, the packaging moves into production with a clearer plan for consistency, output quality, and delivery.",
    icon: Truck,
  },
];

const decisionCards = [
  {
    title: "Structure that protects the product",
    description:
      "The right packaging should secure the product in transit without making the unboxing feel bulky or overbuilt.",
    icon: ShieldCheck,
  },
  {
    title: "Materials that match the brand",
    description:
      "Board, wraps, texture, and weight all influence how premium the product feels before it is even opened.",
    icon: Layers3,
  },
  {
    title: "Finishes that improve presentation",
    description:
      "The strongest finishes support the brand identity rather than overpowering it, helping details land more cleanly.",
    icon: Sparkles,
  },
];

export default function HomePage() {
  const faqSchema = buildFaqSchema(homeFaqs);
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <>
      <Hero />

      <section className="pb-14 pt-2 sm:pb-16">
        <Container>
          <Reveal>
            <div className="surface-card overflow-hidden p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div>
                  <h2 className="font-display text-[2.2rem] leading-[0.98] tracking-[-0.04em] text-[var(--color-primary)] sm:text-[2.7rem]">
                    Trusted by growing and established brands
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    Packaging solutions designed for consistency across launches, retail moments, gifting, and direct-to-consumer delivery.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                  {trustItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-white/88 px-4 py-4 text-sm font-semibold text-[var(--color-primary)] shadow-[0_10px_24px_rgba(17,17,17,0.045)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Packaging Built Around Structure, Detail, and Presentation"
              description="The goal is not to make packaging louder. It is to make it clearer, better fitted, and more aligned with how your brand should be experienced."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {offerCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="surface-card h-full p-6">
                  <card.icon className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(248,245,239,0.82))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Categories"
              title="Explore Custom Packaging Solutions"
              description="Browse premium packaging categories shaped for presentation, protection, and clearer brand consistency across product lines."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-white/88 shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(17,17,17,0.09)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.82),rgba(238,230,218,0.96))]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                      {card.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Explore packaging
                      <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
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
              eyebrow="Industries"
              title="Premium Packaging for Every Industry"
              description="Each category asks something different from packaging. We help align structure, materials, and finishing with the way products are sold, shipped, gifted, or displayed."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-white/88 shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(17,17,17,0.09)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.82),rgba(238,230,218,0.96))]">
                    <Image
                      src={card.image}
                      alt={`${card.title} premium packaging category visual`}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                      {card.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      View industry packaging
                      <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.78),rgba(255,255,255,0.92))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="How the Custom Packaging Process Works"
              description="A clear process helps brands move from a rough packaging idea to a more useful, production-ready direction without unnecessary back-and-forth."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="surface-card h-full p-6">
                  <div className="flex items-center justify-between gap-4">
                    <step.icon className="size-6 text-[var(--color-gold)]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <Reveal>
              <div className="surface-card p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                  Sustainability
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl">
                  Better Packaging Choices Without Losing the Premium Feel
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                  Practical sustainability often comes from better decisions about material use, structure, and packaging fit rather than exaggerated claims. We can help explore recyclable board options, kraft materials, reduced-waste structures, right-sized packaging, and reusable premium boxes where they suit the product and brand.
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
                      className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/sustainability"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                >
                  Explore Sustainable Packaging
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[34px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,230,218,0.9))] p-4 shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
                <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(248,245,239,0.98),rgba(238,230,218,0.92))] sm:min-h-[520px]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0.16)_30%,transparent_60%),radial-gradient(circle_at_18%_82%,rgba(198,169,114,0.18),transparent_28%)]" />
                  <Image
                    src="/images/curated/mycelium-box.webp"
                    alt="Sustainable premium packaging material example for modern brand presentation"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-contain p-6 drop-shadow-[0_28px_60px_rgba(17,17,17,0.12)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(248,245,239,0.82))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Packaging Perspective"
              title="Packaging Decisions That Matter"
              description="The strongest packaging systems usually come from a few decisions made well: the structure, the material feel, and the finishing restraint around the brand."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {decisionCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="surface-card h-full p-6">
                  <card.icon className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {card.description}
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
              eyebrow="FAQs"
              title="Common Questions About Custom Packaging"
              description="These are the questions that usually come up first when a brand is comparing formats, refining a launch, or preparing a better quote request."
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
