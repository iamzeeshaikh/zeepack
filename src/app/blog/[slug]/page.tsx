import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts, getBlogPostBySlug, getContentPageBySlug } from "@/data/catalog";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
    image: post.image,
    imageAlt: post.imageAlt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPages = post.relatedSlugs
    .map((relatedSlug) => getContentPageBySlug(relatedSlug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const faqSchema = buildFaqSchema(post.faq);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ]);

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]} />
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{post.intro}</p>
            </div>
            {post.sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-4xl text-[var(--color-ink)]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="surface-card p-7 sm:p-9">
              <FAQAccordion items={post.faq} />
            </div>
          </div>

          <div className="grid gap-6">
            <div className="surface-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Related Pages
              </p>
              <div className="mt-4 grid gap-3">
                {relatedPages.map((page) => (
                  <Link key={page.slug} href={`/${page.slug}/`} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm font-semibold text-[var(--color-ink)]">
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
