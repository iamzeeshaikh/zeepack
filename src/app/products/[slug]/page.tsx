import Link from "next/link";
import { notFound } from "next/navigation";

import {
  EditorialHero,
  EditorialListSection,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { CategoryCard } from "@/components/ui/category-card";
import { categories, getCategoryBySlug } from "@/data/categories";
import {
  getCategoryFaqs,
  getCategoryGallery,
  getCategorySeoKeywords,
  getCategorySeoParagraphs,
  getCategorySupportImage,
  getCategoryVariants,
  getRelatedCategories,
} from "@/data/category-page-content";
import { buildFaqSchema, buildProductSchema, createMetadata } from "@/lib/seo";
import Image from "next/image";

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

  return createMetadata({
    title: `${category.name} | Premium Custom Packaging by ZEEPACK`,
    description: category.seoBody,
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

  if (!category) {
    notFound();
  }

  const supportImage = getCategorySupportImage(category);
  const variants = getCategoryVariants(category);
  const gallery = getCategoryGallery(category);
  const seoParagraphs = getCategorySeoParagraphs(category);
  const faqs = getCategoryFaqs(category);
  const relatedCategories = getRelatedCategories(category, categories);
  const faqSchema = buildFaqSchema(faqs);
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
        highlights={category.keyFeatures.slice(0, 4)}
      />

      <VisualSpotlight
        eyebrow="Category Story"
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
        stats={category.industries}
      />

      <EditorialListSection
        eyebrow="Variants"
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
              eyebrow="Materials and Finishing"
              title={`The premium result in ${category.name.toLowerCase()} usually comes from the right combination of board, finish, and proportion.`}
              description="These are the most common material and finishing considerations within this packaging category."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Materials</h3>
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
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Finishes</h3>
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
                      unoptimized
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
                    title={item.name}
                    description={item.shortDescription}
                    href={`/products/${item.slug}`}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
