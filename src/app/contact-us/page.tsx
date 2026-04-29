import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { contactCards, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us | The Cereal Boxes",
  description:
    "Contact The Cereal Boxes for custom cereal boxes, printed cereal packaging, cereal mylar bags, and wholesale packaging support in the USA.",
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a packaging expert about custom cereal boxes."
        description="Use the contact form, call us directly, or email your project details to start a quote for custom cereal packaging, wholesale cereal boxes, or specialty packaging support."
      />

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
              <h2 className="text-4xl text-[var(--color-ink)]">Direct contact details</h2>
              <div className="mt-6 grid gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className="rounded-[22px] border border-[rgba(21,36,58,0.08)] bg-white px-5 py-4"
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
              <h3 className="text-3xl text-[var(--color-ink)]">Map and service area</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                We serve cereal packaging buyers across the United States while maintaining clear
                local business information for trust and NAP consistency.
              </p>
              <div className="mt-6 rounded-[26px] border border-dashed border-[rgba(21,36,58,0.14)] bg-[var(--color-shell)] p-8 text-sm leading-7 text-[var(--color-muted)]">
                Map embed placeholder for: {siteConfig.address}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

