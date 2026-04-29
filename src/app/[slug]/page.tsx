import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/sections/content-page-view";
import { contentPages, getContentPageBySlug } from "@/data/catalog";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);

  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}/`,
    keywords: page.keywordTargets,
    noindex: page.noindex,
    image: page.image,
    imageAlt: page.imageAlt,
  });
}

export default async function DynamicContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => getContentPageBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: page.kind === "guide" ? "Resources" : "Cereal Boxes",
      path: page.kind === "guide" ? "/blog/" : "/cereal-boxes/",
    },
    { name: page.title, path: `/${page.slug}/` },
  ]);

  const faqSchema = buildFaqSchema(page.faq);
  const commerceSchema =
    page.kind === "service" || page.kind === "guide" || page.kind === "inspiration"
      ? buildServiceSchema({
          name: page.title,
          description: page.metaDescription,
          path: `/${page.slug}/`,
        })
      : buildProductSchema({
          name: page.title,
          description: page.metaDescription,
          path: `/${page.slug}/`,
          image: page.image,
          category: "Custom cereal packaging",
          additionalProperty: page.specs.map((item) => ({
            name: item.label,
            value: item.value,
          })),
        });

  return (
    <>
      <ContentPageView page={page} relatedPages={relatedPages} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commerceSchema) }}
      />
    </>
  );
}
