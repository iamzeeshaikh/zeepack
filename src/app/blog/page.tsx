import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Packaging Blog: Guides on Boxes, Materials & Design | ZEEPACK",
  description:
    "Practical custom packaging guides — rigid boxes vs folding cartons, e-commerce mailers, sustainable materials, cosmetic packaging, and premium finishes.",
  path: "/blog",
  keywords: [
    "custom packaging blog",
    "packaging guides",
    "rigid boxes vs folding cartons",
    "sustainable packaging",
  ],
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Container>
        <div className="py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
            ZEEPACK Journal
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
            Custom packaging guides &amp; insights
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
            No-fluff guidance on choosing structures, materials, and finishes that
            protect your product and lift your brand. Prefer to talk specifics?{" "}
            <Link href="/quote" className="font-semibold text-[var(--color-cta)] hover:underline">
              Get a quote
            </Link>
            .
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cta)]">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-[var(--color-primary)]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-[rgba(17,17,17,0.5)]">
                    <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
