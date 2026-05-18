import Link from "next/link";

import { Container } from "@/components/ui/container";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { productStyles } from "@/data/product-styles";
import { footerLegalLinks, footerQuickLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HTML Sitemap | ZEEPACK",
  description: "Browse the complete HTML sitemap for the ZEEPACK website including all product pages, industry pages, and more.",
  path: "/html-sitemap",
});

export default function HtmlSitemapPage() {
  const stylesByCategory = categories.map((category) => ({
    category,
    styles: productStyles.filter((s) => s.categorySlug === category.slug),
  }));

  return (
    <section className="section-space">
      <Container className="surface-card p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">HTML Sitemap</h1>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          {productStyles.length + categories.length + industries.length + footerQuickLinks.length + footerLegalLinks.length} total pages indexed
        </p>

        {/* Top columns */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <SitemapColumn title="Main Pages" links={footerQuickLinks} />
          <SitemapColumn
            title="Product Categories"
            links={categories.map((c) => ({ label: c.name, href: `/products/${c.slug}` }))}
          />
          <SitemapColumn
            title="Industries"
            links={industries.slice(0, 43).map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))}
          />
          <SitemapColumn
            title="More Industries"
            links={industries.slice(43).map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))}
          />
        </div>

        {/* Legal */}
        <div className="mt-8">
          <SitemapColumn title="Legal" links={footerLegalLinks} />
        </div>

        {/* Product Styles — grouped by category */}
        <div className="mt-12">
          <h2 className="text-2xl text-[var(--color-ink)]">
            Product Styles <span className="text-base font-normal text-[var(--color-muted)]">({productStyles.length} pages)</span>
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {stylesByCategory.map(({ category, styles }) =>
              styles.length === 0 ? null : (
                <div key={category.slug}>
                  <h3 className="mb-3 text-base font-semibold text-[var(--color-ink)]">
                    <Link href={`/products/${category.slug}`} className="hover:text-[var(--color-accent)]">
                      {category.name}
                    </Link>
                  </h3>
                  <div className="grid gap-1">
                    {styles.map((style) => (
                      <Link
                        key={style.slug}
                        href={`/products/styles/${style.slug}`}
                        className="text-sm leading-6 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                      >
                        {style.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
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
