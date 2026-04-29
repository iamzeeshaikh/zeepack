import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { contentPages } from "@/data/catalog";
import { homepageFaqs } from "@/data/site";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

const faqItems = [...homepageFaqs, ...contentPages.slice(0, 6).flatMap((page) => page.faq)].slice(0, 12);

export const metadata = createMetadata({
  title: "FAQ | The Cereal Boxes",
  description:
    "Frequently asked questions about custom cereal boxes, printing, materials, dimensions, minimum orders, wholesale production, and cereal packaging support.",
  path: "/faq/",
});

export default function FAQPage() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common cereal packaging, print, and quote questions."
        description="This FAQ page helps buyers understand custom cereal box sizes, printing, low MOQ support, wholesale production, food packaging options, and project timelines."
      />
      <section className="section-space">
        <Container>
          <div className="surface-card p-7 sm:p-9">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
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

