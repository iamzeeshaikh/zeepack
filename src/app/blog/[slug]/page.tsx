import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { Container } from "@/components/ui/container";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  createMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return createMetadata({ title: "Not found", description: "", path: `/blog/${slug}`, noindex: true });
  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
  });
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Render inline [anchor](/path) markdown links inside body copy as internal links.
function renderRichText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={index}>{part}</Fragment>;
    const [, label, href] = match;
    return (
      <Link
        key={index}
        href={href}
        className="font-semibold text-[var(--color-cta)] underline decoration-[var(--color-cta)]/40 underline-offset-2 hover:decoration-[var(--color-cta)]"
      >
        {label}
      </Link>
    );
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

  const related = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: new URL(post.image, siteConfig.siteUrl).toString(),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "ZEEPACK" },
    publisher: { "@type": "Organization", name: "ZEEPACK", url: siteConfig.siteUrl },
    mainEntityOfPage: new URL(`/blog/${post.slug}`, siteConfig.siteUrl).toString(),
  };

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {post.faq.length ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(post.faq)) }} />
      ) : null}

      <Container>
        <article className="mx-auto max-w-3xl py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
            <Link href="/blog" className="hover:text-[var(--color-cta)]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-cta)]">{post.category}</span>
          </nav>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[rgba(17,17,17,0.5)]">
            <time dateTime={post.publishedAt}>{dateFormatter.format(new Date(post.publishedAt))}</time>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
          </div>

          <p className="mt-8 text-lg leading-8 text-[var(--color-primary)]">{post.intro}</p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {renderRichText(paragraph)}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-base leading-7 text-[var(--color-muted)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-cta)]" />
                        <span>{renderRichText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {post.faq.length ? (
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-[var(--color-primary)]">Frequently asked questions</h2>
              <div className="mt-6 space-y-5">
                {post.faq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white p-6">
                    <h3 className="text-base font-semibold text-[var(--color-primary)]">{item.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-14 rounded-2xl bg-[var(--color-shell)] p-8 text-center">
            <p className="text-lg font-semibold text-[var(--color-primary)]">
              Ready to spec your packaging?
            </p>
            <Link
              href="/quote"
              className="mt-5 inline-block rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(232,96,58,0.28)]"
            >
              Get a Free Quote
            </Link>
          </div>

          {related.length ? (
            <section className="mt-14">
              <h2 className="text-xl font-bold text-[var(--color-primary)]">Keep reading</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white p-5 transition hover:border-[var(--color-cta)]"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cta)]">
                      {r.category}
                    </span>
                    <p className="mt-2 font-semibold text-[var(--color-primary)]">{r.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </Container>
    </>
  );
}
