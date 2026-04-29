import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutFaqs,
  contactFaqs,
  homeFaqs,
  quoteFaqs,
  sustainabilityFaqs,
} from "@/data/faqs";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

const faqItems = [
  ...homeFaqs.slice(0, 4),
  ...aboutFaqs.slice(0, 3),
  ...contactFaqs.slice(0, 3),
  ...quoteFaqs.slice(0, 3),
  ...sustainabilityFaqs.slice(0, 3),
];

export const metadata = createMetadata({
  title: "FAQ | ZEEPACK",
  description:
    "Frequently asked questions about premium custom packaging, materials, finishes, quote requests, low minimums, and packaging support from ZEEPACK.",
  path: "/faq",
});

export default function FAQPage() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to common packaging, materials, and quote questions."
              description="This page combines the questions brands most often ask while evaluating premium packaging for launches, gifting, retail, and e-commerce."
            />
          </Reveal>
          <div className="surface-card mt-10 p-7 sm:p-9">
            <FAQAccordion items={faqItems} />
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
