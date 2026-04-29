import { categories } from "@/data/categories";
import { createMetadata } from "@/lib/seo";
import { EditorialHero } from "@/components/sections/editorial-page-sections";
import { ProductsExplorer } from "@/components/sections/products-explorer";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = createMetadata({
  title: "Products | Premium Packaging Formats by ZEEPACK",
  description:
    "Explore premium packaging formats from ZEEPACK including rigid boxes, mailers, cartons, cosmetic packaging, perfume boxes, jewelry boxes, tissue paper, sleeves, inserts, and paper bags.",
  path: "/products",
  keywords: [
    "premium packaging products",
    "rigid boxes",
    "mailer boxes",
    "cosmetic packaging",
    "paper bags packaging",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Product Collection"
        title="Packaging Formats Built Around Detail, Structure, and Premium Perception"
        description="Explore the full ZEEPACK collection across boxes, supporting layers, and sustainable packaging directions. Every format is selected to help brands shape a cleaner, stronger customer-facing result."
        image={{
          src: "/images/real/product-boxes.webp",
          alt: "Premium packaging collection by ZEEPACK.",
        }}
        highlights={["Boxes", "Accessories", "Sustainable options", "Low minimums"]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Browse Collection"
              title="Find the packaging direction that matches your product and use case."
              description="Browse by structure, use case, or industry to narrow the collection toward the formats that make the most sense for your brand."
            />
          </Reveal>
          <div className="mt-10">
            <ProductsExplorer categories={categories} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need help choosing the right packaging format?"
        description="If you are deciding between rigid boxes, cartons, mailers, or supporting layers, we can help shape the most suitable route before production details are finalized."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="Contact ZEEPACK"
        secondaryHref="/contact"
      />
    </>
  );
}
