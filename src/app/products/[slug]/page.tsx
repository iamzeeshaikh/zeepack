import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  Boxes,
  Flame,
  Gift,
  Layers3,
  Package2,
  Palette,
  ShieldCheck,
  Sparkles,
  SprayCan,
  SwatchBook,
} from "lucide-react";

import {
  EditorialHero,
  EditorialListSection,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CategoryCard } from "@/components/ui/category-card";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, type Category, getCategoryBySlug } from "@/data/categories";
import {
  getCategoryGallery,
  getCategorySeoKeywords,
  getCategorySeoParagraphs,
  getCategorySupportImage,
  getCategoryVariants,
  getRelatedCategories,
} from "@/data/category-page-content";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  createMetadata,
} from "@/lib/seo";

type LongSection = {
  title: string;
  paragraphs: ReactNode[];
};

type SpecItem = {
  label: string;
  value: string;
};

type UseCaseItem = {
  title: string;
  href: string;
  body: string;
};

type WhyChooseItem = {
  title: string;
  body: string;
};

const categoryMetaOverrides: Partial<Record<string, { title: string; description: string }>> = {
  "rigid-boxes": {
    title: "Luxury Rigid Boxes | Custom Premium Packaging | ZEEPACK",
    description:
      "Explore custom luxury rigid boxes with premium finishes, inserts, and full customization for modern brands.",
  },
  "candle-boxes": {
    title: "Candle Packaging | Custom Premium Packaging | ZEEPACK",
    description:
      "Explore custom candle packaging with premium finishes, inserts, and full customization for modern brands.",
  },
};

const categorySpecsOverrides: Partial<Record<string, SpecItem[]>> = {
  "rigid-boxes": [
    { label: "Box Styles", value: "Magnetic, lid and base, drawer, shoulder neck" },
    { label: "Material Types", value: "Rigid chipboard, art paper, kraft options" },
    { label: "Thickness", value: "1mm, 1.5mm, 2mm, and heavier board directions as needed" },
    { label: "Printing Options", value: "CMYK, Pantone" },
    { label: "Finishing", value: "Foil stamping, embossing, debossing, spot UV, lamination" },
    { label: "Inserts", value: "Foam, cardboard, EVA" },
    { label: "Sizes", value: "Fully custom" },
    { label: "Minimum Order Quantity", value: "Low minimum available" },
    { label: "Production Time", value: "10–20 days approx" },
  ],
  "candle-boxes": [
    { label: "Box Styles", value: "Tuck end, rigid, mailer, sleeve" },
    { label: "Materials", value: "Kraft, cardboard, rigid board" },
    { label: "Thickness", value: "300gsm board to heavier rigid directions" },
    { label: "Printing", value: "CMYK, Pantone" },
    { label: "Finishing", value: "Foil, embossing, spot UV" },
    { label: "Lamination Types", value: "Matte, gloss" },
    { label: "Inserts", value: "Foam, cardboard" },
    { label: "Sizes", value: "Custom" },
    { label: "MOQ", value: "Low minimum available" },
    { label: "Turnaround Time", value: "10–20 days approx, depending on structure and finish" },
    { label: "Usage", value: "Retail, ecommerce, gifting" },
  ],
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  const override = categoryMetaOverrides[category.slug];

  return createMetadata({
    title: override?.title ?? `${category.name} | Custom Premium Packaging | ZEEPACK`,
    description:
      override?.description ??
      `Explore custom ${category.name.toLowerCase()} with premium materials, finishes, and full customization for modern brands.`,
    path: `/products/${category.slug}`,
    keywords: getCategorySeoKeywords(category),
    image: category.image,
    imageAlt: `${category.name} premium packaging by ZEEPACK`,
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const supportImage = getCategorySupportImage(category);
  const variants = getCategoryVariants(category);
  const gallery = getCategoryGallery(category);
  const seoParagraphs = getCategorySeoParagraphs(category);
  const relatedCategories = getRelatedCategories(category, categories);
  const longSections = buildLongSections(category);
  const specificationItems = buildSpecifications(category);
  const customizationCards = buildCustomizationCards(category);
  const useCases = buildUseCases(category);
  const whyChooseItems = buildWhyChooseItems(category);
  const faqs = buildFaqs(category);
  const faqSchema = buildFaqSchema(faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category.name, path: `/products/${category.slug}` },
  ]);
  const productSchema = buildProductSchema({
    name: category.name,
    description: category.seoBody,
    path: `/products/${category.slug}`,
    image: category.image,
    category: "Premium custom packaging",
    additionalProperty: [
      { name: "Materials", value: category.materials.join(", ") },
      { name: "Finishes", value: category.finishes.join(", ") },
      { name: "Industries", value: category.industries.join(", ") },
    ],
  });

  return (
    <>
      <EditorialHero
        eyebrow={category.heroLabel}
        title={category.name}
        description={category.intro}
        image={{
          src: category.image,
          alt: `${category.name} by ZEEPACK.`,
        }}
        highlights={category.keyFeatures.map((text) => ({
          text,
          icon: pickFeatureIcon(text),
        }))}
      />

      <VisualSpotlight
        eyebrow="Intro"
        title={category.seoHeading}
        description={
          <>
            <p>{seoParagraphs[0]}</p>
            <p className="mt-4">{seoParagraphs[1]}</p>
            <p className="mt-4">{seoParagraphs[2]}</p>
          </>
        }
        image={{
          src: supportImage,
          alt: `${category.name} support packaging detail.`,
        }}
        reverse
        stats={
          category.slug === "candle-boxes"
            ? [
                {
                  title: "Candles",
                  description: "Packaging for retail and luxury candle brands",
                  icon: Flame,
                },
                {
                  title: "Home Fragrance",
                  description: "Packaging for diffusers and scent products",
                  icon: SprayCan,
                },
                {
                  title: "Gifting",
                  description: "Premium packaging for gift sets and seasonal launches",
                  icon: Gift,
                },
              ]
            : category.industries
        }
      />

      <EditorialListSection
        eyebrow="Variants / Styles"
        title={`${category.name} can be shaped into several premium directions.`}
        description="These formats reflect the kinds of structural and presentation routes brands often explore within this category."
        items={variants.map((variant) => ({
          title: variant.title,
          body: variant.description,
        }))}
        columns={3}
      />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(248,245,239,0.82))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Materials & Finishes"
              title={`The premium result in ${category.name.toLowerCase()} usually comes from the right combination of board, finish, and proportion.`}
              description="These are the most common material and finishing considerations within this packaging category."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Materials</h2>
              <div className="mt-5 grid gap-3">
                {category.materials.map((material) => (
                  <div
                    key={material}
                    className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                  >
                    {material}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Finishes</h2>
              <div className="mt-5 grid gap-3">
                {category.finishes.map((finish) => (
                  <div
                    key={finish}
                    className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-white px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                  >
                    {finish}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="space-y-6">
            {longSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <article className="surface-card p-7 sm:p-9">
                  <h2 className="font-display text-[2.2rem] leading-[0.98] tracking-[-0.04em] text-[var(--color-primary)] sm:text-[2.8rem]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-[var(--color-muted)]">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Specifications"
              title={buildSpecificationsHeading(category)}
              description="This section helps define the structure, material range, finishing routes, insert options, and production basics before a project moves into quotation or sampling."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {specificationItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.03}>
                <div className="surface-card flex h-full items-start justify-between gap-5 p-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-primary)]">
                      {item.value}
                    </p>
                  </div>
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-[var(--color-gold)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Customization"
              title={buildCustomizationHeading(category)}
              description="These are the areas most brands refine when shaping a packaging format around a product, a launch, or a longer-term packaging system."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {customizationCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <div className="surface-card h-full p-6">
                  <card.icon className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title={buildUseCaseHeading(category)}
              description="These are the product situations and industry directions where this packaging category is commonly used."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Link
                  href={item.href}
                  className="group surface-card block h-full p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(17,17,17,0.08)]"
                >
                  <Layers3 className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose"
              title={buildWhyChooseHeading(category)}
              description="These are the qualities brands usually prioritize when they want candle packaging to feel commercially practical and visually refined at the same time."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="surface-card h-full p-6">
                  <BadgeCheck className="size-6 text-[var(--color-gold)]" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.body}
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
              eyebrow="Gallery"
              title={`A closer look at the visual language around ${category.name.toLowerCase()}.`}
              description="These supporting visuals help show how the category can move across presentation, protection, and brand refinement."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((image, index) => (
              <Reveal key={image} delay={index * 0.05}>
                <div className="editorial-image-frame rounded-[28px] p-3">
                  <div className="relative min-h-[280px] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(248,245,239,0.96),rgba(238,230,218,0.92))]">
                    <Image
                      src={image}
                      alt={`${category.name} gallery visual ${index + 1}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {category.slug === "candle-boxes" ? (
            <Reveal>
              <p className="mt-6 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
                These visuals show how custom candle packaging boxes can move across retail display, ecommerce protection, and gifting presentation without losing a more premium brand feel.
              </p>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {relatedCategories.length ? (
        <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))]">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Related Categories"
                title="Explore adjacent packaging formats."
                description="Most premium packaging systems are not built around just one structure. These related categories often work alongside this format."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedCategories.slice(0, 6).map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <CategoryCard
                    title={getRelatedCardTitle(item.slug, item.name)}
                    description={item.shortDescription}
                    href={`/products/${item.slug}`}
                    image={item.image}
                    badge={getRelatedCardBadge(item.slug)}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title={`What brands usually ask about ${category.name.toLowerCase()}.`}
              description="These answers cover the most common questions that come up while evaluating this packaging route."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>

          {variants.some((variant) => variant.slug) ? (
            <div className="mt-12 flex flex-wrap gap-3">
              {variants
                .filter((variant): variant is typeof variant & { slug: string } => Boolean(variant.slug))
                .slice(0, 6)
                .map((variant) => (
                  <Link
                    key={variant.slug}
                    href={`/products/styles/${variant.slug}`}
                    className="rounded-full border border-[rgba(17,17,17,0.08)] bg-white/88 px-4 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-gold)] hover:bg-white"
                  >
                    {variant.title}
                  </Link>
                ))}
            </div>
          ) : null}
        </Container>
      </section>

      <CTASection
        title={`Need a quote for ${category.name.toLowerCase()}?`}
        description="Share your quantity, dimensions, material direction, and finish expectations so we can shape the right packaging route around the product."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="Talk to ZEEPACK"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}

function buildLongSections(category: Category): LongSection[] {
  switch (category.slug) {
    case "candle-boxes":
      return [
        {
          title: "Custom Candle Packaging for Modern Brands",
          paragraphs: [
            <>
              Custom candle packaging helps brands present fragrance products with more clarity, structure, and consistency across collections. For modern candle brands, the box often carries as much perception as the vessel itself, which is why the packaging needs to feel intentional rather than generic.
            </>,
            <>
              At ZEEPACK, candle packaging is shaped around the jar, the lid, the insert requirements, and the overall gifting or retail direction. Some brands also compare candle box formats with <Link href="/products/luxury-rigid-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">rigid boxes</Link> when they want stronger structure and a more elevated reveal for premium collections.
            </>,
          ],
        },
        {
          title: "Candle Packaging Designed for Protection and Presentation",
          paragraphs: [
            <>
              Candle packaging has to protect fragile vessels while still supporting a premium product story. The board direction, insert fit, and outer proportions all influence whether custom candle boxes feel polished, practical, and ready for display.
            </>,
            <>
              Printed candle boxes also benefit from controlled finishing. Foil details, embossing, matte coatings, and restrained color direction can help luxury candle packaging feel more refined on shelf and more memorable in hand. When a lighter secondary format is needed, some brands also compare candle cartons with <Link href="/products/folding-cartons" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">folding cartons</Link> to keep presentation strong while improving format efficiency.
            </>,
          ],
        },
        {
          title: "Packaging for Retail, Gifting, and Ecommerce Candle Brands",
          paragraphs: [
            <>
              Candle brands often need packaging that works across several moments at once: boutique retail shelves, gifting, influencer sends, and direct-to-consumer delivery. That means the structure has to feel premium while still remaining commercially practical.
            </>,
            <>
              Many collections also sit beside adjacent premium product categories, especially beauty and wellness. For that reason, some brands align their candle box direction with <Link href="/products/cosmetic-packaging" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">cosmetic packaging</Link> so launches, gift sets, and multi-category brand systems feel more consistent.
            </>,
            <>
              Brands shipping candles directly also compare protective formats such as <Link href="/products/mailer-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">mailer boxes</Link> when the arrival experience matters as much as the shelf-ready presentation.
            </>,
          ],
        },
      ];
    case "rigid-boxes":
      return [
        {
          title: "Custom Luxury Rigid Boxes for Premium Brands",
          paragraphs: [
            <>
              Luxury rigid boxes are built for brands that need more than functional packaging. They help shape a stronger first impression, a more considered unboxing sequence, and a clearer sense of product value. For premium collections, gifting programs, and launches, rigid structures are often chosen because they feel substantial, precise, and intentionally made.
            </>,
            <>
              At ZEEPACK, custom rigid boxes are developed around the product itself, the opening style, and the finish language the brand wants to communicate. Some brands compare them with <Link href="/products/mailer-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">mailer boxes</Link> when balancing shipping practicality with presentation, but rigid formats remain the stronger route when premium perception is the priority.
            </>,
          ],
        },
        {
          title: "Packaging That Enhances Product Presentation",
          paragraphs: [
            <>
              Premium packaging usually works best when structure and finish support one another. Board thickness, wrap material, insert fit, and outer proportions all influence whether the packaging feels polished or overworked. That is why rigid boxes are often used for high-value products where the reveal matters almost as much as the product itself.
            </>,
            <>
              Rigid structures also allow more controlled finishing details. Foil accents, embossing, debossing, and softer outer textures can create a more elevated result when used with restraint. Brands that need a lighter retail format for supporting SKUs may also pair rigid structures with <Link href="/products/folding-cartons" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">folding cartons</Link> while keeping a consistent premium design language across the packaging family.
            </>,
          ],
        },
        {
          title: "Built for Retail, Gifting, and Ecommerce",
          paragraphs: [
            <>
              Luxury rigid boxes work especially well in retail presentation, curated gifting, and premium ecommerce because they hold their shape, support inserts more effectively, and make the product reveal feel cleaner. This makes them a strong choice for collections that need structure, consistency, and stronger perceived value.
            </>,
            <>
              They are also widely used in beauty, fragrance, candles, jewelry, and launch sets where the packaging itself contributes to the brand experience. Brands building a broader packaging system often extend the same design direction into <Link href="/products/cosmetic-packaging" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">cosmetic packaging</Link> or supporting layers so the product line feels aligned across retail shelves, gifting moments, and direct-to-consumer delivery.
            </>,
            <>
              Rigid boxes also pair naturally with <Link href="/products/custom-inserts" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">custom inserts</Link> when brands need product fit, presentation control, and better support for fragile or premium items.
            </>,
          ],
        },
      ];
    default:
      return [
        {
          title: `Custom ${category.name} for Modern Brands`,
          paragraphs: [
            <>
              {category.name} should help a brand feel more consistent across retail, gifting, and shipping touchpoints. The strongest packaging directions usually come from clearer sizing, better structure, and a finish strategy that supports the product rather than overpowering it.
            </>,
            <>
              At ZEEPACK, each packaging format is shaped around the product, the brand tone, and the way the box or supporting layer should be experienced. Some brands also compare related formats such as <Link href="/products/luxury-rigid-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">luxury rigid boxes</Link> when they need stronger structure and a more elevated reveal.
            </>,
          ],
        },
        {
          title: `${category.name} Designed for Protection and Presentation`,
          paragraphs: [
            <>
              Premium packaging works best when structure, print clarity, and material choice all support one another. That balance helps the format feel more polished in hand, more useful in transit, and more aligned with long-term brand perception.
            </>,
            <>
              Depending on the product and retail context, brands may also compare adjacent structures such as <Link href="/products/folding-cartons" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">folding cartons</Link> when they want a more efficient secondary format without losing presentation quality.
            </>,
          ],
        },
        {
          title: `Packaging for Retail, Gifting, and Ecommerce ${category.name}`,
          paragraphs: [
            <>
              Many packaging systems need to work across several channels at once, from retail shelves to gifting moments to ecommerce delivery. That makes it important to choose a format that supports both presentation and practical use.
            </>,
            <>
              Brands often extend the same visual language across neighboring categories, especially when collections include beauty, fragrance, or lifestyle products. In those situations, aligning the packaging direction with <Link href="/products/cosmetic-packaging" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">cosmetic packaging</Link> or other premium formats can help the overall range feel more consistent.
            </>,
          ],
        },
      ];
  }
}

function buildSpecifications(category: Category): SpecItem[] {
  const override = categorySpecsOverrides[category.slug];
  if (override) return override;

  const thickness =
    category.type === "boxes"
      ? "1mm, 1.5mm, 2mm, and board directions suited to the format"
      : "Selected around the material and end use";

  return [
    { label: "Box Styles", value: category.variants.slice(0, 4).join(", ") || category.name },
    { label: "Material Types", value: category.materials.slice(0, 3).join(", ") },
    { label: "Thickness", value: thickness },
    { label: "Printing Options", value: "CMYK, Pantone" },
    { label: "Finishing", value: category.finishes.slice(0, 5).join(", ") },
    { label: "Inserts", value: "Foam, cardboard, EVA, or tailored support where needed" },
    { label: "Sizes", value: "Fully custom" },
    { label: "Minimum Order Quantity", value: "Low minimum available" },
    { label: "Production Time", value: "10–20 days approx" },
  ];
}

function buildCustomizationCards(category: Category) {
  return [
    {
      title: "Custom Sizes",
      body: `Each ${category.name.toLowerCase()} format can be built around the actual product dimensions, insert depth, and the way the packaging should be opened or presented.`,
      icon: Boxes,
    },
    {
      title: "Custom Printing",
      body: "CMYK and Pantone routes can be aligned with cleaner color consistency, stronger artwork control, and a more polished final result.",
      icon: Palette,
    },
    {
      title: "Finishes",
      body: `Popular finish routes include ${category.finishes.slice(0, 3).join(", ").toLowerCase()}, depending on the category and brand direction.`,
      icon: Sparkles,
    },
    {
      title: "Inserts",
      body: "Foam, cardboard, EVA, and product-support inserts can be shaped around fit, movement control, and premium reveal quality.",
      icon: ShieldCheck,
    },
    {
      title: "Branding",
      body: "Logo placement, wrap materials, inner print, and finishing details can all be aligned with the broader packaging system.",
      icon: SwatchBook,
    },
  ];
}

function buildUseCases(category: Category): UseCaseItem[] {
  switch (category.slug) {
    case "candle-boxes":
      return [
        { title: "Retail Candles", href: "/industries/candle-packaging", body: "Useful for candle lines that need a stronger shelf-ready presence and cleaner product story." },
        { title: "Luxury Candles", href: "/industries/candle-packaging", body: "A strong fit for premium fragrance collections where presentation and perceived value both matter." },
        { title: "Gift Sets", href: "/industries/food-packaging", body: "Suitable for seasonal gifting, curated bundles, and launch kits that need more structure." },
        { title: "Ecommerce Packaging", href: "/industries/ecommerce-packaging", body: "Helpful for brands shipping fragile vessels directly and needing a better arrival experience." },
      ];
    case "rigid-boxes":
      return [
        { title: "Cosmetic Packaging", href: "/industries/cosmetic-packaging", body: "Useful for skincare and beauty collections that need premium shelf presence and cleaner product fit." },
        { title: "Candle Packaging", href: "/industries/candle-packaging", body: "A strong option for candle jars and gift sets where protection and gifting appeal work together." },
        { title: "Jewelry Packaging", href: "/industries/jewelry-packaging", body: "Ideal for compact premium products that benefit from tactile wraps and more refined presentation." },
        { title: "Gift Packaging", href: "/industries/food-packaging", body: "Well suited to curated gift sets, seasonal launches, and presentation-led premium packaging." },
      ];
    default:
      return category.industries.slice(0, 4).map((industry) => ({
        title: industry,
        href: mapIndustryToHref(industry),
        body: `${category.name} can be adapted for ${industry.toLowerCase()} directions where structure, branding, and product presentation need to stay aligned.`,
      }));
  }
}

function buildWhyChooseItems(category: Category): WhyChooseItem[] {
  if (category.slug === "candle-boxes") {
    return [
      {
        title: "Premium Materials",
        body: "Board, wrap, and print choices can be aligned with fragrance positioning so the packaging feels refined from shelf to unboxing.",
      },
      {
        title: "Custom Sizes",
        body: "Each format can be built around jar dimensions, lid depth, insert needs, and the proportions that suit the candle collection.",
      },
      {
        title: "Strong Structure",
        body: "A better structural direction helps protect fragile vessels, improves fit, and keeps presentation cleaner through storage and delivery.",
      },
      {
        title: "Low Minimums",
        body: "Low minimum options can be explored for launches, seasonal drops, and developing candle brands that still need premium presentation.",
      },
    ];
  }

  return [
    {
      title: "Premium Feel",
      body: `${category.name} works best when materials, finish, and proportions feel intentional and aligned with the brand story.`,
    },
    {
      title: "Stronger Structure",
      body: "A more considered packaging structure helps with protection, product fit, and cleaner presentation across channels.",
    },
    {
      title: "Better Unboxing",
      body: "Opening experience matters when a product needs to feel more memorable, giftable, or elevated at first contact.",
    },
    {
      title: "Long-Term Perception",
      body: "Consistent packaging design helps products feel more established and more aligned over repeat orders and future launches.",
    },
  ];
}

function buildFaqs(category: Category) {
  if (category.slug === "candle-boxes") {
    return [
      {
        question: "What types of candle packaging can ZEEPACK produce?",
        answer:
          "We can explore tuck boxes, rigid candle boxes, sleeves, mailer formats, and insert-led structures depending on the product and sales channel.",
      },
      {
        question: "Can candle packaging be made in custom sizes?",
        answer:
          "Yes. Sizes are built around the candle vessel, lid, insert fit, and the presentation direction you want for the collection.",
      },
      {
        question: "What materials are available for candle packaging?",
        answer:
          "Common material routes include kraft board, cardboard, and stronger rigid board options depending on the required structure.",
      },
      {
        question: "Can I print my logo and artwork on candle boxes?",
        answer:
          "Yes. Candle packaging can be developed with custom printing, logo placement, and branding details that match the collection.",
      },
      {
        question: "Do you offer premium finishes for candle packaging?",
        answer:
          "Yes. Popular finish directions include foil, embossing, spot UV, and lamination depending on the brand tone and material.",
      },
      {
        question: "Are inserts available for candle jars and gift sets?",
        answer:
          "Yes. Foam and cardboard inserts can be used to improve fit, reduce movement, and keep the presentation more controlled.",
      },
      {
        question: "What is the minimum order quantity for candle packaging?",
        answer:
          "Minimum quantity depends on the structure, material, and finish direction, but low minimum projects can be discussed.",
      },
      {
        question: "How long does candle packaging production usually take?",
        answer:
          "Production timing is usually planned after the packaging direction is approved and commonly falls within an approximate 10 to 20 day window.",
      },
      {
        question: "Is candle packaging suitable for ecommerce shipping?",
        answer:
          "Yes. Candle packaging can be shaped for direct-to-consumer delivery with stronger structure and more protective insert directions.",
      },
      {
        question: "Can sustainable candle packaging options be explored?",
        answer:
          "Yes. Recyclable board options, kraft directions, and reduced-waste structures can be reviewed where they suit the packaging goal.",
      },
      {
        question: "Can candle packaging align with other product categories?",
        answer:
          "Yes. Many brands align candle packaging with adjacent beauty, gifting, or fragrance categories for a more consistent collection feel.",
      },
      {
        question: "How do I request a quote for candle packaging?",
        answer:
          "Share the candle type, quantity, dimensions, material preferences, and finish direction through the quote form or contact page.",
      },
    ];
  }

  const baseFaqs = [...category.faq];
  const genericFaqs = [
    {
      question: `Can ${category.name.toLowerCase()} be made in custom sizes?`,
      answer:
        "Yes. We build packaging around the product dimensions, insert needs, and the intended customer experience rather than relying on only fixed stock sizes.",
    },
    {
      question: `What is the minimum order quantity for ${category.name.toLowerCase()}?`,
      answer:
        "Minimum order quantity depends on structure, material direction, and finishing complexity, but low minimum projects can be explored.",
    },
    {
      question: `What printing options are available for ${category.name.toLowerCase()}?`,
      answer: "CMYK and Pantone printing can be discussed depending on the artwork and color control required for the project.",
    },
    {
      question: `Can ${category.name.toLowerCase()} include custom inserts?`,
      answer:
        "Yes. Insert options can be added where product fit, protection, and cleaner presentation are important.",
    },
    {
      question: `What finishes work well for ${category.name.toLowerCase()}?`,
      answer: `Popular finishing routes include ${category.finishes.slice(0, 3).join(", ").toLowerCase()}, depending on the brand direction and material choice.`,
    },
    {
      question: `How long does production usually take for ${category.name.toLowerCase()}?`,
      answer:
        "Production timing depends on quantity, structure, and finishing, and is usually scheduled after the packaging direction is approved.",
    },
    {
      question: `How do I get a quote for ${category.name.toLowerCase()}?`,
      answer:
        "You can request a quote by sharing the product type, quantity, dimensions, material preferences, and finishing direction through the quote form or contact page.",
    },
    {
      question: `Are sustainable material options available for ${category.name.toLowerCase()}?`,
      answer:
        "Yes. We can explore recyclable board options, kraft directions, and reduced-waste structures where they suit the packaging goal.",
    },
  ];

  const combined = [...baseFaqs, ...genericFaqs];
  const unique = combined.filter(
    (item, index, array) => array.findIndex((candidate) => candidate.question === item.question) === index,
  );

  return unique.slice(0, 12);
}

function buildSpecificationsHeading(category: Category) {
  return `Specifications for ${category.name}`;
}

function buildCustomizationHeading(category: Category) {
  return `Customization Options for ${category.name}`;
}

function buildUseCaseHeading(category: Category) {
  if (category.slug === "candle-boxes") {
    return "Where Custom Candle Packaging Boxes Are Used";
  }

  return `Where ${category.name} Is Used`;
}

function buildWhyChooseHeading(category: Category) {
  if (category.slug === "candle-boxes") {
    return "Why Choose ZEEPACK for Candle Packaging";
  }

  return `Why Choose ${category.name}`;
}

function mapIndustryToHref(industry: string) {
  const normalized = industry.toLowerCase();
  if (normalized.includes("cosmetic") || normalized.includes("skincare") || normalized.includes("wellness")) {
    return "/industries/cosmetic-packaging";
  }
  if (normalized.includes("candle") || normalized.includes("fragrance")) {
    return "/industries/candle-packaging";
  }
  if (normalized.includes("jewelry")) {
    return "/industries/jewelry-packaging";
  }
  if (normalized.includes("fashion")) {
    return "/industries/fashion-packaging";
  }
  if (normalized.includes("food") || normalized.includes("gift")) {
    return "/industries/food-packaging";
  }
  return "/industries/ecommerce-packaging";
}

function pickFeatureIcon(feature: string) {
  const lower = feature.toLowerCase();
  if (lower.includes("insert") || lower.includes("protect")) return ShieldCheck;
  if (lower.includes("closure") || lower.includes("format") || lower.includes("structure")) return Package2;
  if (lower.includes("print") || lower.includes("branding")) return Palette;
  if (lower.includes("finish") || lower.includes("foil") || lower.includes("story")) return Sparkles;
  if (lower.includes("board") || lower.includes("material")) return Layers3;
  if (lower.includes("gift") || lower.includes("reveal")) return Gift;
  return Boxes;
}

function getRelatedCardBadge(slug: string) {
  switch (slug) {
    case "product-boxes":
      return "Most Popular";
    case "mailer-boxes":
      return "Retail Ready";
    case "cosmetic-boxes":
      return "Best for Gifting";
    default:
      return undefined;
  }
}

function getRelatedCardTitle(slug: string, fallback: string) {
  switch (slug) {
    case "product-boxes":
      return "Custom Product Boxes for Retail Brands";
    case "mailer-boxes":
      return "Mailer Boxes for Ecommerce Shipping";
    case "cosmetic-boxes":
      return "Luxury Cosmetic Packaging Boxes";
    default:
      return fallback;
  }
}
