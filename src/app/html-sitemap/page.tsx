import Link from "next/link";

import { Container } from "@/components/ui/container";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { footerLegalLinks, footerQuickLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HTML Sitemap | ZEEPACK",
  description: "Browse the complete HTML sitemap for the ZEEPACK website.",
  path: "/html-sitemap",
});

export default function HtmlSitemapPage() {
  return (
    <section className="section-space">
      <Container className="surface-card p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">HTML Sitemap</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <SitemapColumn title="Main Pages" links={footerQuickLinks} />
          <SitemapColumn
            title="Products"
            links={categories.map((category) => ({
              label: category.name,
              href: `/products/${category.slug}`,
            }))}
          />
          <SitemapColumn
            title="Industries"
            links={industries.map((industry) => ({
              label: industry.name,
              href: `/industries/${industry.slug}`,
            }))}
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
          <Link
            key={link.href}
            href={link.href}
            className="text-sm leading-7 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
