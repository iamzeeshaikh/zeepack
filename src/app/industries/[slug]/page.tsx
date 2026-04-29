import { notFound } from "next/navigation";

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
import { CategoryCard } from "@/components/ui/category-card";
import { getCategoryBySlug } from "@/data/categories";
import { getIndustryBySlug, industries } from "@/data/industries";
import { industryPageContent } from "@/data/industry-page-content";
import { buildFaqSchema, buildServiceSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  const content = industryPageContent[slug];

  if (!industry || !content) return {};

  return createMetadata({
    title: `${industry.name} Packaging | Premium Industry Solutions by ZEEPACK`,
    description: content.heroDescription,
    path: `/industries/${industry.slug}`,
    keywords: [industry.name.toLowerCase(), ...industry.packagingFocus.map((item) => item.toLowerCase())],
    image: industry.image,
    imageAlt: `${industry.name} packaging by ZEEPACK`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  const content = industryPageContent[slug];

  if (!industry || !content) {
    notFound();
  }

  const recommendedCategories = content.relatedCategorySlugs
    .map((categorySlug) => getCategoryBySlug(categorySlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const faqSchema = buildFaqSchema(content.faqs);
  const serviceSchema = buildServiceSchema({
    name: `${industry.name} Packaging`,
    description: content.heroDescription,
    path: `/industries/${industry.slug}`,
  });

  return (
    <>
      <EditorialHero
        eyebrow={content.eyebrow}
        title={content.heroTitle}
        description={content.heroDescription}
        image={{
          src: industry.image,
          alt: `${industry.name} packaging by ZEEPACK.`,
        }}
        highlights={content.trustPills}
      />

      <VisualSpotlight
        eyebrow="Industry Context"
        title={`Packaging priorities for ${industry.name.toLowerCase()} brands.`}
        description={
          <>
            {content.seoParagraphs.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {paragraph}
              </p>
            ))}
          </>
        }
        image={{
          src: content.supportImage,
          alt: `${industry.name} packaging support visual.`,
        }}
        reverse
        stats={content.priorityCards}
      />

      <IconFeatureGrid
        eyebrow="Value Props"
        title="What usually matters most in this category."
        description="These are the packaging priorities that most often shape the final structure and finish route for this industry."
        items={content.valueProps}
      />

      <EditorialListSection
        eyebrow="Audience"
        title="Who this packaging direction is usually built for."
        items={content.audience.map((item) => ({
          title: item.title,
          body: item.description,
        }))}
        columns={3}
      />

      <EditorialListSection
        eyebrow="Material and Finish Direction"
        title="The premium result usually depends on choosing the right level of structure and decoration."
        items={[
          ...content.materialsCopy.map((copy, index) => ({
            title: index === 0 ? "Material approach" : "Structural fit",
            body: copy,
          })),
          ...content.finishCards.map((item) => ({
            title: item.title,
            body: `${item.title} can be used when the packaging needs a stronger sense of polish, hierarchy, and premium finish control.`,
          })),
        ]}
        columns={3}
      />

      {recommendedCategories.length ? (
        <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))]">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Recommended Solutions"
                title={`Packaging formats that usually work well for ${industry.name.toLowerCase()} brands.`}
                description="These categories often form the core of the packaging system for this industry."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {recommendedCategories.slice(0, 6).map((item, index) => (
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
              title={`What brands usually ask about ${industry.name.toLowerCase()} packaging.`}
              description="These answers cover the questions that come up most often while evaluating packaging for this category."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={content.faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need packaging shaped around the ${industry.name.toLowerCase()} category?`}
        description="Share the product type, format, and presentation goals so we can help narrow the structure and material direction."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
