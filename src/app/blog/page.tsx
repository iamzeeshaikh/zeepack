import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/data/catalog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog And Resources | The Cereal Boxes",
  description:
    "Explore guides and resources about cereal box dimensions, materials, blank vs custom cereal boxes, mini cereal boxes, gable packaging, and breakfast packaging strategy.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Resources built to support cereal packaging rankings and real buyer decisions."
        description="Our blog and resource section supports product pages with useful informational content around dimensions, materials, food packaging, structures, and buying decisions."
      />

      <section className="section-space">
        <Container>
          <div className="surface-card p-7 sm:p-9">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
            <div className="mt-6 editorial-grid">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,36,58,0.08)]"
                >
                  <div className="relative aspect-[1.1/0.82] overflow-hidden rounded-[20px]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-2 text-3xl text-[var(--color-ink)]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

