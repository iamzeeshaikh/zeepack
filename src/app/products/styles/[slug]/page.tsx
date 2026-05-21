import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Tag } from "lucide-react";

import {
  EditorialHero,
  EditorialListSection,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ProductTrustStrip } from "@/components/ui/product-trust-strip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryCard } from "@/components/ui/category-card";
import {
  getCategoryForStyle,
  getProductStyleBySlug,
  getRelatedProductStyles,
  productStyles,
} from "@/data/product-styles";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return productStyles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getProductStyleBySlug(slug);

  if (!style) return {};

  return createMetadata({
    title: `${style.title} | Premium Packaging Style by ZEEPACK`,
    description: style.overview,
    path: `/products/styles/${style.slug}`,
    keywords: [style.title.toLowerCase(), ...style.useCases.map((item) => item.toLowerCase())],
    image: style.image,
    imageAlt: `${style.title} by ZEEPACK`,
  });
}

export default async function ProductStylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getProductStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  const category = getCategoryForStyle(style);
  if (!category) {
    notFound();
  }

  const relatedStyles = getRelatedProductStyles(style);
  const faqSchema = buildFaqSchema(style.faq);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category.name, path: `/products/${category.slug}` },
    { name: style.title, path: `/products/styles/${style.slug}` },
  ]);
  const serviceSchema = buildServiceSchema({
    name: style.title,
    description: style.overview,
    path: `/products/styles/${style.slug}`,
  });
  const productSchema = buildProductSchema({
    name: style.title,
    description: style.overview,
    path: `/products/styles/${style.slug}`,
    image: style.image,
    category: `${category.name} style`,
    offers: {
      price: "0.30",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      { name: "Pricing Note", value: "Starting from $0.30 per piece" },
      { name: "Use Cases", value: style.useCases.join(", ") },
      { name: "Materials", value: style.materialOptions.join(", ") },
      { name: "Finishes", value: style.finishOptions.join(", ") },
    ],
  });

  return (
    <>
      <EditorialHero
        eyebrow={style.badge}
        title={style.title}
        description={style.description}
        image={{
          src: style.image,
          alt: `${style.title} packaging by ZEEPACK.`,
        }}
        highlights={style.useCases.slice(0, 4)}
        primaryLabel="Customize Your Box"
        primaryHref={`/customize?type=${category.slug}`}
        secondaryLabel="Get a Quote"
        secondaryHref="/quote"
      />

      {/* Visible price — required for Google Merchant Center schema match */}
      <div className="border-b border-[var(--color-border)] bg-white">
        <Container>
          <div className="flex items-center gap-2 py-3 text-sm text-[var(--color-muted)]">
            <Tag className="size-3.5 shrink-0 text-[var(--color-gold)]" />
            Starting from{" "}
            <span className="font-semibold text-[var(--color-foreground)]">$0.30 / piece</span>
            <span className="hidden sm:inline">— exact pricing via free quote</span>
          </div>
        </Container>
      </div>

      <ProductTrustStrip />

      <VisualSpotlight
        eyebrow="Style Overview"
        title={`${style.title} within the ${category.name.toLowerCase()} collection.`}
        description={
          <>
            <p>{style.overview}</p>
            <p className="mt-4">{style.dimensionsCopy}</p>
            <p className="mt-4">
              This style is usually reviewed alongside{" "}
              <Link
                href={`/products/${category.slug}`}
                className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4"
              >
                {category.name.toLowerCase()}
              </Link>{" "}
              when brands are narrowing structure, finish direction, and product fit.
            </p>
          </>
        }
        image={{
          src: style.fallbackImage,
          alt: `${style.title} support visual.`,
        }}
        reverse
        stats={style.keyHighlights.slice(0, 4)}
      />

      <EditorialListSection
        eyebrow="Key Highlights"
        title="What usually makes this style effective."
        items={style.keyHighlights.map((item) => ({
          title: item,
          body: `This aspect helps ${style.title.toLowerCase()} feel more appropriate for premium packaging programs where structure, fit, and perception all matter.`,
        }))}
        columns={3}
      />

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(248,245,239,0.82))]">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-7 sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Material Options</h2>
            <div className="mt-5 grid gap-3">
              {style.materialOptions.map((material) => (
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
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Finish Options</h2>
            <div className="mt-5 grid gap-3">
              {style.finishOptions.map((finish) => (
                <div
                  key={finish}
                  className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-white px-4 py-4 text-sm font-medium text-[var(--color-primary)]"
                >
                  {finish}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title={`A closer look at ${style.title.toLowerCase()}.`}
              description="Supporting visuals help show how this style can move across premium packaging systems."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {style.galleryImages.map((image, index) => (
              <Reveal key={image} delay={index * 0.05}>
                <div className="editorial-image-frame rounded-[28px] p-3">
                  <div className="relative min-h-[280px] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(248,245,239,0.96),rgba(238,230,218,0.92))]">
                    <Image
                      src={image}
                      alt={`${style.title} gallery image ${index + 1}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {relatedStyles.length ? (
        <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))]">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Related Styles"
                title="Other directions within this category."
                description="These related styles are often considered alongside this format when the structure is still being narrowed down."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedStyles.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <CategoryCard
                    title={item.title}
                    description={item.description}
                    href={`/products/styles/${item.slug}`}
                    image={item.image}
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
              title={`Questions about ${style.title.toLowerCase()}.`}
              description="These are the most common clarifications brands ask before requesting a quote for this style."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={style.faq} />
          </div>
        </Container>
      </section>

      {/* Configurator promo */}
      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-primary)] px-8 py-11 sm:px-12 sm:py-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 60%, #C6A972 0%, transparent 55%), radial-gradient(circle at 80% 20%, #C6A972 0%, transparent 50%)",
                }}
              />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
                    Interactive Configurator
                  </p>
                  <h2 className="mt-2.5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Customize Your {category.name}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-[rgba(255,255,255,0.6)]">
                    Choose size, material, finish, quantity, and add-ons. Submit your quote directly — no page reload, no redirects.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                    {["8 finish options", "Custom sizes", "Free design support", "24-hr response"].map((f) => (
                      <span key={f} className="flex items-center gap-1.5 text-[12px] text-[rgba(255,255,255,0.5)]">
                        <span className="h-1 w-1 rounded-full bg-[var(--color-taupe)]" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    href={`/customize?type=${category.slug}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-cta)] px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  >
                    <Sparkles className="h-4 w-4" />
                    Start Customizing
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[rgba(255,255,255,0.18)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[rgba(255,255,255,0.45)]"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title={`Ready to price ${style.title.toLowerCase()}?`}
        description="Share the dimensions, quantity, and finish direction so we can shape the right premium packaging route around the product."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="Customize Your Box"
        secondaryHref={`/customize?type=${category.slug}`}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
