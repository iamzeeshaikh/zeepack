import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { blogPosts, contentPages, featuredHomeSlugs } from "@/data/catalog";
import {
  customizationOptions,
  homeStats,
  homeTrustBadges,
  homepageFaqs,
  industries,
  materialOptions,
  processSteps,
  serviceReasons,
  trustHighlights,
} from "@/data/site";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Custom Cereal Boxes In The USA | The Cereal Boxes",
  description:
    "Premium custom cereal boxes for USA brands. Explore printed cereal packaging, blank cereal boxes, mini cereal boxes, cereal mylar bags, and wholesale cereal box solutions.",
  path: "/",
  keywords: [
    "custom cereal boxes",
    "printed cereal packaging",
    "wholesale cereal boxes",
    "blank cereal boxes",
    "mini cereal boxes",
  ],
});

export default function HomePage() {
  const featuredPages = contentPages.filter((page) => featuredHomeSlugs.includes(page.slug));
  const faqSchema = buildFaqSchema(homepageFaqs);

  return (
    <>
      <section className="section-space">
        <Container>
          <div className="hero-shell px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  {homeTrustBadges.map((badge) => (
                    <span key={badge} className="chip">
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="mt-6 max-w-4xl text-5xl leading-[0.92] text-[var(--color-ink)] sm:text-7xl">
                  Premium custom cereal boxes built for retail brands across the USA.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                  The Cereal Boxes designs and manufactures custom cereal boxes, printed cereal
                  packaging, cereal mylar bags, mini cereal boxes, blank cartons, and wholesale
                  packaging solutions that feel polished, shelf-ready, and production-minded.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/request-a-quote/" variant="secondary" icon={<ArrowRight className="size-4" />}>
                    Get Custom Quote
                  </Button>
                  <Button href="/cereal-boxes/" variant="ghost">
                    Explore Cereal Boxes
                  </Button>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white/80 p-4">
                      <p className="text-2xl font-extrabold text-[var(--color-ink)]">{stat.value}</p>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card overflow-hidden p-3">
                <div className="grid gap-3">
                  <div className="relative aspect-[1.1/0.82] overflow-hidden rounded-[26px]">
                    <Image
                      src="/images/cereal/cereal-boxes.jpg"
                      alt="Premium custom cereal boxes hero image."
                      fill
                      priority
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[24px]">
                      <Image
                        src="/images/cereal/custom-printed-cereal-boxes.jpg"
                        alt="Custom printed cereal boxes showcase."
                        fill
                        sizes="(min-width: 1024px) 18vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[24px]">
                      <Image
                        src="/images/cereal/mini-cereal-boxes.jpg"
                        alt="Mini cereal boxes showcase."
                        fill
                        sizes="(min-width: 1024px) 18vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="editorial-grid">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}/`}
              className="surface-card overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(21,36,58,0.1)]"
            >
              <div className="relative aspect-[1.05/0.82] overflow-hidden rounded-[22px]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-3xl text-[var(--color-ink)]">{page.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{page.intro}</p>
            </Link>
          ))}
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(247,239,216,0.42),rgba(255,255,255,0.7))]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Why Choose The Cereal Boxes
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)] sm:text-5xl">
              A premium packaging partner for cereal brands that need design, structure, and conversion all working together.
            </h2>
          </div>
          <div className="mt-10 editorial-grid">
            {trustHighlights.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon className="size-6 text-[var(--color-accent)]" />
                <h3 className="mt-4 text-2xl text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-2">
          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Customization Options
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Built around your specs, not forced into a stock template.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {customizationOptions.map((item) => (
                <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/customization-printing-options/" className="micro-link mt-6">
              Explore customization and printing options
            </Link>
          </div>

          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Materials And Finishes
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Food packaging materials paired with premium retail finishes.</h2>
            <div className="mt-6 grid gap-3">
              {materialOptions.map((item) => (
                <div key={item} className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/materials-finishes/" className="micro-link mt-6">
              Review materials and finishes
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,239,216,0.54))]">
        <Container className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <LeadForm title="Get A Quote For Custom Cereal Packaging" />

          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Our Process
              </p>
              <div className="mt-6 grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white px-5 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl text-[var(--color-ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Industries We Serve
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div key={industry.title} className="rounded-[22px] bg-[var(--color-shell)] p-5">
                    <h3 className="text-2xl text-[var(--color-ink)]">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Conversion-Focused Trust
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Built to rank, built to convert, built to scale.</h2>
            <div className="mt-6 grid gap-3">
              {serviceReasons.map((item) => (
                <div key={item} className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Resources
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Supportive content built around real packaging decisions.</h2>
            <div className="mt-6 grid gap-4">
              {blogPosts.slice(0, 4).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="rounded-[22px] bg-[var(--color-shell)] p-5 transition hover:-translate-y-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-2xl text-[var(--color-ink)]">{post.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
            <Link href="/blog/" className="micro-link mt-6">
              Explore all resources
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(247,239,216,0.48),rgba(255,255,255,0.8))]">
        <Container className="surface-card p-7 sm:p-9">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)] sm:text-5xl">
              Answers to common cereal packaging questions.
            </h2>
          </div>
          <div className="mt-8">
            <FAQAccordion items={homepageFaqs} />
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
