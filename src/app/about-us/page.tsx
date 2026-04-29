import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { contactCards, siteConfig, trustHighlights } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About The Cereal Boxes | Premium Custom Packaging Company",
  description:
    "Learn about The Cereal Boxes, a premium USA packaging company focused on custom cereal boxes, printed cereal packaging, cereal mylar bags, and wholesale cereal packaging support.",
  path: "/about-us/",
});

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A cereal packaging company built for premium presentation, scalable production, and real quote-driven growth."
        description="The Cereal Boxes supports cereal brands, private label programs, and promotional packaging projects across the USA with custom cereal box manufacturing, design support, and wholesale production planning."
      />

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
          <div className="surface-card p-7 sm:p-9">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
            <h2 className="text-4xl text-[var(--color-ink)]">What makes our approach different</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              We focus on a narrow packaging niche so the site, the content, and the commercial
              message stay aligned around one thing: custom cereal packaging that looks premium,
              ranks well in search, and converts quote requests from real buyers. That means
              clearer product architecture, stronger material guidance, and more useful support for
              dimensions, print, and campaign packaging.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustHighlights.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-[24px] bg-[var(--color-shell)] p-5">
                  <h3 className="text-2xl text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Contact Snapshot
              </p>
              <div className="mt-5 grid gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className="rounded-[22px] border border-[rgba(21,36,58,0.08)] bg-white px-5 py-4 transition hover:-translate-y-0.5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{card.value}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <h3 className="text-3xl text-[var(--color-ink)]">Packaging support across the USA</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Our location details are listed consistently across the site to support local trust
                signals, while our commercial messaging is positioned around nationwide packaging
                supply for USA cereal brands and retail packaging buyers.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink)]">{siteConfig.address}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/request-a-quote/" variant="secondary">
                  Request a Quote
                </Button>
                <Button href="/contact-us/" variant="ghost">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
