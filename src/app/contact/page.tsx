import {
  Boxes,
  CheckCircle2,
  CircleDot,
  MessageCircle,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import {
  EditorialHero,
} from "@/components/sections/editorial-page-sections";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactFaqs } from "@/data/faqs";
import { contactCards, siteConfig } from "@/data/site";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact ZEEPACK | Let's Talk About Your Packaging Project",
  description:
    "Contact ZEEPACK to discuss custom packaging sizes, materials, finishes, inserts, launch packaging, and ongoing supply needs.",
  path: "/contact",
  keywords: [
    "contact zeepack",
    "custom packaging quote",
    "packaging consultation",
    "luxury packaging contact",
  ],
});

const trustedMarks = ["Beauty Launch Teams", "Retail Packaging Buyers", "Fragrance Brands", "Growing Ecommerce Labels"];

export default function ContactPage() {
  const faqSchema = buildFaqSchema(contactFaqs);
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ZEEPACK",
    url: `${siteConfig.siteUrl}/contact`,
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      email: siteConfig.email,
      telephone: siteConfig.phone,
    },
  };
  const whatsappHref = "https://wa.me/15033580443";

  return (
    <>
      <EditorialHero
        eyebrow="Contact ZEEPACK"
        title="Let's Talk About Your Packaging Project"
        description="Whether you are launching something new or refining an existing product, we are here to help shape the packaging direction with clearer structure, material guidance, and presentation logic. We respond within 24 hours on most working days."
        image={{
          src: "/images/real/cosmetic-boxes.webp",
          alt: "ZEEPACK contact page premium packaging visual.",
        }}
        highlights={["Custom sizes", "Materials", "Finishes", "Launch packaging"]}
        aside={
          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-4 py-4 text-sm text-[var(--color-primary)] transition hover:bg-white"
              >
                <card.icon className="size-4 text-[var(--color-gold)]" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {card.title}
                </p>
                <p className="mt-2 leading-6">{card.value}</p>
              </a>
            ))}
          </div>
        }
      />

      <section className="pb-6 -mt-10 relative z-10">
        <Container>
          <div className="rounded-[28px] border border-[rgba(17,17,17,0.07)] bg-white/86 px-5 py-5 shadow-[0_18px_44px_rgba(17,17,17,0.06)] backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
                  Trusted by brands like
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Growing and established teams that need structured packaging guidance, premium presentation, and a reliable response window.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trustedMarks.map((mark) => (
                  <div
                    key={mark}
                    className="flex min-h-[128px] flex-col items-center justify-center rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.95),rgba(255,255,255,0.9))] px-5 py-5 text-center shadow-[0_10px_24px_rgba(17,17,17,0.03)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(17,17,17,0.05)]"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(17,17,17,0.05)]">
                      <CircleDot className="size-4 text-[var(--color-gold)]" />
                    </span>
                    <span className="mt-4 max-w-[11ch] text-[0.98rem] font-semibold leading-8 text-[var(--color-primary)]">
                      {mark}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,245,239,0.82))]">
        <Container className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
          <Reveal className="xl:order-2">
            <div className="surface-card p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-taupe)]">
                Start Your Packaging Request
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl">
                Tell us what you are working on.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                Fill out the form and share your requirements. The more detail you can provide around product type, quantity, dimensions, material direction, and finish expectations, the easier it is to shape a more useful response.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-5 py-5">
                  <TimerReset className="size-5 text-[var(--color-gold)]" />
                  <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">We respond within 24 hours</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Most enquiries receive a first reply within one working day.</p>
                </div>
                <div className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-white/86 px-5 py-5">
                  <ShieldCheck className="size-5 text-[var(--color-gold)]" />
                  <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">Clearer packaging guidance</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">We help narrow structure, materials, and finish choices before production moves forward.</p>
                </div>
              </div>

              <div className="mt-10 rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/86 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                  Contact Information
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.address}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.phone}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]">{siteConfig.email}</p>
              </div>

              <div className="mt-6 rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/86 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                  Client Perspective
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--color-primary)]">
                  “The team helped us move from vague packaging ideas to a much cleaner launch-ready direction without slowing the timeline.”
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="xl:order-1 xl:sticky xl:top-28">
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Reach Out"
              title="A quicker conversation usually starts with the right details."
              description="These are the main topics we can help clarify early, without turning the page into a long detour from the form."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { title: "Packaging direction", body: "Clarify whether the project should lean toward rigid, carton, mailer, sleeve, insert, or a wider packaging system.", icon: Boxes },
              { title: "Pricing and structure", body: "Compare material routes, quantity expectations, and structural choices before production planning starts.", icon: CheckCircle2 },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="surface-card p-6">
                  <item.icon className="size-5 text-[var(--color-gold)]" />
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title="Visit or locate the ZEEPACK office."
              description="The address is available for reference, planning, and shipment coordination."
            />
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[30px] border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
            <iframe
              title="ZEEPACK office map"
              src="https://www.google.com/maps?q=2975%20Coburn%20Hollow%20Road%20Bloomington%2C%20IL%2061701%20United%20States&z=14&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions before getting in touch."
              description="If you are still shaping the project, these answers cover the most common things brands ask before starting the conversation."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(17,17,17,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1f1f1f]"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </>
  );
}
