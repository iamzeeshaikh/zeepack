import Image from "next/image";
import Link from "next/link";

import { LeadForm } from "@/components/forms/lead-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import type { ContentPage } from "@/data/catalog";

export function ContentPageView({
  page,
  relatedPages,
}: {
  page: ContentPage;
  relatedPages: ContentPage[];
}) {
  return (
    <>
      <section className="section-space pb-12">
        <Container>
          <div className="hero-shell px-6 py-8 sm:px-10 sm:py-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: page.kind === "guide" ? "Resources" : "Products", href: page.kind === "guide" ? "/about" : "/products" },
                { label: page.title },
              ]}
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
              <div>
                <span className="chip">{page.heroLabel}</span>
                <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] text-[var(--color-ink)] sm:text-6xl">
                  {page.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                  {page.intro}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/quote" variant="secondary">
                    Get Custom Quote
                  </Button>
                  <Button href="/contact" variant="ghost">
                    Talk to Packaging Team
                  </Button>
                </div>
              </div>

              <div className="surface-card overflow-hidden p-3">
                <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[24px]">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-10">
            <div className="surface-card p-7 sm:p-9">
              <p className="text-base leading-8 text-[var(--color-muted)]">{page.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {page.specs.map((item) => (
                  <div key={item.label} className="rounded-[24px] bg-[var(--color-shell)] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {page.sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="surface-card p-7 sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    Frequently Asked Questions
                  </p>
                  <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Questions buyers ask before ordering.
                  </h2>
                </div>
                <Link href="/faq/" className="micro-link">
                  Visit the full FAQ page
                </Link>
              </div>
              <div className="mt-6">
                <FAQAccordion items={page.faq} />
              </div>
            </div>

            {relatedPages.length ? (
              <div className="surface-card p-7 sm:p-9">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Related Pages
                    </p>
                    <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
                      Keep exploring packaging options.
                    </h2>
                  </div>
                  <Link href="/products" className="micro-link">
                    See all product pages
                  </Link>
                </div>
                <div className="mt-8 editorial-grid">
                  {relatedPages.map((relatedPage) => (
                    <Link
                      key={relatedPage.slug}
                      href={`/${relatedPage.slug}/`}
                      className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,36,58,0.08)]"
                    >
                      <div className="relative aspect-[1.1/0.88] overflow-hidden rounded-[18px]">
                        <Image
                          src={relatedPage.image}
                          alt={relatedPage.imageAlt}
                          fill
                          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-2xl text-[var(--color-ink)]">{relatedPage.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {relatedPage.intro}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            <LeadForm title="Get A Fast Packaging Quote" />
            <div className="surface-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Why Brands Choose Us
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--color-ink)]">
                <li>Low minimums for growing premium brands</li>
                <li>Material, finish, and structural guidance</li>
                <li>Custom sizes, inserts, and presentation-led packaging routes</li>
                <li>Clearer planning for launch and repeat production runs</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
