import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { blogPosts, contentPages } from "@/data/catalog";
import { footerLegalLinks, footerQuickLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HTML Sitemap | The Cereal Boxes",
  description: "Browse the complete HTML sitemap for The Cereal Boxes website.",
  path: "/html-sitemap/",
});

export default function HtmlSitemapPage() {
  return (
    <section className="section-space">
      <Container className="surface-card p-7 sm:p-9">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "HTML Sitemap" }]} />
        <h1 className="text-5xl text-[var(--color-ink)]">HTML Sitemap</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <SitemapColumn title="Main Pages" links={footerQuickLinks} />
          <SitemapColumn
            title="Cereal Packaging Pages"
            links={contentPages.map((page) => ({ label: page.title, href: `/${page.slug}/` }))}
          />
          <SitemapColumn
            title="Blog"
            links={blogPosts.map((post) => ({ label: post.title, href: `/blog/${post.slug}/` }))}
          />
          <SitemapColumn title="Legal" links={footerLegalLinks} />
        </div>
      </Container>
    </section>
  );
}

function SitemapColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-2xl text-[var(--color-ink)]">{title}</h2>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm leading-7 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

