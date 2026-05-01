import { notFound } from "next/navigation";
import Link from "next/link";

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
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

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

  const title =
    industry.slug === "cosmetics"
      ? "Custom Cosmetic Packaging Boxes for Beauty Brands | ZEEPACK"
      : `${industry.name} Packaging | Premium Industry Solutions by ZEEPACK`;
  const description =
    industry.slug === "cosmetics"
      ? "Explore custom cosmetic packaging boxes for beauty brands, including skincare packaging, beauty packaging, inserts, cartons, and cosmetic boxes USA support."
      : content.heroDescription;

  return createMetadata({
    title,
    description,
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
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ]);
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
            {industry.slug === "cosmetics" ? (
              <>
                <p>
                  ZEEPACK develops custom cosmetic packaging for brands that need stronger beauty presentation, cleaner product fit, and more deliberate packaging systems across launches, retail shelves, and direct-to-consumer delivery. From skincare packaging to fragrance-led collections, the goal is to create cosmetic boxes that feel structured, premium, and commercially practical.
                </p>
                <p className="mt-4">
                  Whether a line is built around jars, bottles, palettes, or bundled sets, the final structure needs to support both protection and presentation. Some brands compare beauty formats with <Link href="/products/rigid-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">rigid boxes</Link> when they need a more elevated reveal for gifting, premium launches, or higher-value skincare presentation.
                </p>
                <p className="mt-4">
                  Other collections need efficient shelf-ready formats, especially when multiple SKUs need cleaner print hierarchy and easier merchandising. In those cases, <Link href="/products/folding-cartons" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">folding cartons</Link> often become part of the packaging system for creams, serums, and makeup products that need consistency without excess structure.
                </p>
                <p className="mt-4">
                  Product support also matters when packaging needs to hold bottles, jars, or multi-piece beauty sets securely. Brands often add <Link href="/products/inserts" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">custom inserts</Link> to improve fit, reduce movement, and keep the unboxing sequence more controlled for premium beauty packaging.
                </p>
                <p className="mt-4">
                  When a collection also ships directly, the structure may need to balance shelf presentation with practical transit protection. That is why some beauty brands also review <Link href="/products/mailer-boxes" className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4">mailer boxes</Link> for influencer sends, ecommerce kits, and launch packaging that still needs a cleaner branded arrival.
                </p>
              </>
            ) : (
              <>
                {content.seoParagraphs.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
                {recommendedCategories[0] ? (
                  <p className="mt-4">
                    Brands in this category often start by comparing structures such as{" "}
                    <Link
                      href={`/products/${recommendedCategories[0].slug}`}
                      className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4"
                    >
                      {recommendedCategories[0].name.toLowerCase()}
                    </Link>{" "}
                    when deciding how much structure, print presence, and product support the packaging should carry.
                  </p>
                ) : null}
              </>
            )}
          </>
        }
        image={{
          src: content.supportImage,
          alt: `${industry.name} packaging support visual.`,
        }}
        reverse
        stats={content.priorityCards}
      />

      {industry.slug === "cosmetics" ? (
        <EditorialListSection
          eyebrow="Packaging Solutions"
          title="Packaging Solutions for Cosmetic Products"
          items={[
            {
              title: "Skincare Packaging",
              body: "Structured packaging for serums, creams, cleansers, and treatment sets that need a more polished shelf presence.",
            },
            {
              title: "Makeup Packaging",
              body: "Presentation-led formats for color cosmetics, compact products, and branded beauty collections with clearer hierarchy.",
            },
            {
              title: "Serum Boxes",
              body: "Custom box directions for serum bottles that need better insert support, refined print detail, and stronger luxury perception.",
            },
            {
              title: "Cream Boxes",
              body: "Balanced formats for cream jars and skincare products where structure, fit, and branding all need to feel more exact.",
            },
          ]}
          columns={3}
        />
      ) : null}

      <IconFeatureGrid
        eyebrow="Value Props"
        title={
          industry.slug === "cosmetics"
            ? "Why beauty brands choose ZEEPACK."
            : "What usually matters most in this category."
        }
        description="These are the packaging priorities that most often shape the final structure and finish route for this industry."
        items={content.valueProps}
      />

      {industry.slug === "cosmetics" ? (
        <section className="section-space pt-0">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Quick Answers"
                title="Common questions about cosmetic packaging."
                description="These short answers help clarify the practical details brands usually want to understand before requesting pricing or samples."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  question: "What is cosmetic packaging?",
                  answer:
                    "Cosmetic packaging is the outer presentation and protection system used for skincare, makeup, fragrance, and wellness products. It helps products feel more premium at shelf level and more consistent during delivery.",
                },
                {
                  question: "What materials are used?",
                  answer:
                    "Beauty packaging commonly uses paperboard, kraft, coated stocks, and rigid structures depending on whether the format is retail-led, gift-focused, or meant for a more elevated unboxing experience.",
                },
                {
                  question: "What is the MOQ?",
                  answer:
                    "Minimum order quantity depends on structure, finish, and size, but low minimum projects can be discussed for launches, test runs, and growing brands.",
                },
                {
                  question: "How long does production take?",
                  answer:
                    "Production timing depends on quantity, printing, inserts, and finishing complexity. Many custom cosmetic packaging boxes projects move forward within a few weeks after approvals.",
                },
              ].map((item, index) => (
                <Reveal key={item.question} delay={index * 0.04}>
                  <div className="surface-card h-full p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                      Q&amp;A
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
