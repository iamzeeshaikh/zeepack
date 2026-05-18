import { notFound } from "next/navigation";
import Link from "next/link";
import { Globe, Clock, Sparkles, CircleGauge, Leaf, Layers3 } from "lucide-react";

import {
  EditorialHero,
  EditorialListSection,
  IconFeatureGrid,
  VisualSpotlight,
} from "@/components/sections/editorial-page-sections";
import { CTASection } from "@/components/ui/cta-section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocationBySlug, locationSlugs, type LocationData } from "@/data/locations";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

// Each product maps to a distinct zee/ image for use as a secondary spotlight image
const productImages: Record<string, string> = {
  "rigid-boxes": "/images/zee/rigid-shoulder-box.jpg",
  "mailer-boxes": "/images/zee/mailer-with-inserts.jpg",
  "folding-cartons": "/images/zee/folding-carton-cosmetic.jpg",
  "product-boxes": "/images/zee/product-rigid-box.jpg",
  "gift-boxes": "/images/zee/gift-stationery-box.jpg",
  "display-boxes": "/images/zee/display-window-box.jpg",
  "window-boxes": "/images/zee/window-display-box.jpg",
  "kraft-boxes": "/images/zee/kraft-recycled-box.jpg",
  "corrugated-boxes": "/images/zee/corrugated-divider-box.jpg",
  "candle-boxes": "/images/zee/candle-window-box.jpg",
  "cosmetic-boxes": "/images/zee/cosmetic-jar-box.jpg",
  "perfume-boxes": "/images/zee/perfume-flip-box.jpg",
  "jewelry-boxes": "/images/zee/jewelry-cotton-box.jpg",
  "soap-boxes": "/images/zee/soap-handmade-box.jpg",
  "wax-melt-boxes": "/images/zee/wax-melt-box.jpg",
  "cbd-packaging": "/images/zee/cbd-isolate-box.jpg",
  "supplement-packaging": "/images/zee/supplement-cardboard-box.jpg",
  "food-boxes": "/images/zee/bakery-divider-box.jpg",
  "custom-tissue-paper": "/images/zee/tissue-paper-custom.jpg",
  "paper-bags": "/images/zee/paper-bag-bakery.jpg",
  "sleeves": "/images/zee/sleeve-soap.jpg",
  "inserts": "/images/zee/insert-folded.jpg",
  "labels-and-stickers": "/images/zee/label-body-butter.jpg",
  "sustainable-packaging": "/images/zee/kraft-gift-box.jpg",
};

function getSpotlightImage(location: LocationData): string {
  // Pick the first product image that differs from the hero image
  for (const productSlug of location.products) {
    const img = productImages[productSlug];
    if (img && img !== location.heroImage) return img;
  }
  // Fallback: a generic second image that's unlikely to match
  return "/images/zee/insert-presentation.jpg";
}

const productNames: Record<string, string> = {
  "rigid-boxes": "Luxury Rigid Boxes",
  "mailer-boxes": "Mailer Boxes",
  "folding-cartons": "Folding Cartons",
  "product-boxes": "Product Boxes",
  "gift-boxes": "Gift Boxes",
  "display-boxes": "Display Boxes",
  "window-boxes": "Window Boxes",
  "kraft-boxes": "Kraft Boxes",
  "corrugated-boxes": "Corrugated Boxes",
  "candle-boxes": "Candle Packaging",
  "cosmetic-boxes": "Cosmetic Packaging",
  "perfume-boxes": "Perfume Boxes",
  "jewelry-boxes": "Jewelry Boxes",
  "soap-boxes": "Soap Boxes",
  "wax-melt-boxes": "Wax Melt Boxes",
  "cbd-packaging": "CBD Packaging",
  "supplement-packaging": "Supplement Packaging",
  "food-boxes": "Food & Bakery Boxes",
  "custom-tissue-paper": "Custom Tissue Paper",
  "paper-bags": "Paper Bags",
  "sleeves": "Custom Sleeves",
  "inserts": "Custom Inserts",
  "labels-and-stickers": "Labels & Stickers",
  "sustainable-packaging": "Sustainable Packaging",
};

const productDescriptions: Record<string, string> = {
  "rigid-boxes": "Premium rigid boxes with structured board, elevated finishes, and a refined unboxing experience for retail, gifting, and luxury brands.",
  "mailer-boxes": "Durable custom-printed mailer boxes built for e-commerce, subscription, and direct-to-consumer delivery with clean interior presentation.",
  "folding-cartons": "Versatile printed carton formats for retail shelves, product launches, and efficient shelf-ready brand presentation.",
  "product-boxes": "Custom-sized product boxes for retail, gifting, and brand-consistent presentation across multiple SKUs.",
  "gift-boxes": "Refined gift box formats that elevate unboxing and brand presence for premium gifting and seasonal collections.",
  "display-boxes": "Counter and point-of-sale display boxes designed for retail visibility and accessible product merchandising.",
  "window-boxes": "Window packaging formats that let the product speak while maintaining a clean branded exterior presentation.",
  "kraft-boxes": "Natural kraft packaging with an earthy, sustainable character suited for artisan and eco-positioned brands.",
  "corrugated-boxes": "Heavy-duty corrugated shipping and storage boxes built for transit protection and bulk logistics operations.",
  "candle-boxes": "Specialty candle packaging with the structure, fit, and finish quality that candle brands need for retail and DTC.",
  "cosmetic-boxes": "Custom cosmetic packaging for beauty and skincare brands — from serum boxes to full collection systems.",
  "perfume-boxes": "Structured perfume boxes with the weight, fit, and finish expected by fragrance-forward brands.",
  "jewelry-boxes": "Lined jewelry boxes with soft-touch inserts and premium presentation for fine and fashion jewelry brands.",
  "soap-boxes": "Clean, branded soap packaging formats for handmade, artisan, and wellness-positioned soap brands.",
  "wax-melt-boxes": "Custom wax melt packaging with a refined, shelf-ready finish for candle and home fragrance brands.",
  "cbd-packaging": "CBD and cannabis packaging that meets compliance requirements while maintaining premium brand presentation.",
  "supplement-packaging": "Custom supplement packaging for health and wellness brands needing retail-ready, compliant box formats.",
  "food-boxes": "Food-grade custom packaging for bakeries, confections, meal kits, and specialty food brands.",
  "custom-tissue-paper": "Custom-printed tissue paper that turns every unboxing into a branded moment for retail and gifting.",
  "paper-bags": "Custom printed paper bags for retail, gifting, and in-store brand presentation.",
  "sleeves": "Branded sleeves that add a refined second layer of presentation over existing product packaging.",
  "inserts": "Custom inserts for secure product placement, cleaner presentation, and a more controlled unboxing sequence.",
  "labels-and-stickers": "Custom labels and stickers for brand-consistent product identification and retail presentation.",
  "sustainable-packaging": "Eco-responsible packaging using recyclable boards, kraft stocks, and reduced-material structures.",
};

function generateFAQs(location: LocationData): Array<{ question: string; answer: string }> {
  const locName = location.type === "city"
    ? `${location.name}, ${location.stateAbbr}`
    : location.name;
  const firstProduct = productNames[location.products[0]] ?? "custom packaging";
  const firstIndustry = location.industries[0] ?? "local businesses";

  return [
    {
      question: `Does ZEEPACK ship custom packaging to ${locName}?`,
      answer: `Yes. ZEEPACK ships custom packaging nationwide, including to businesses in ${locName}. All packaging is produced to specification and delivered directly to your location, with lead times depending on structure, quantity, and finishing complexity.`,
    },
    {
      question: `What is the minimum order quantity for custom packaging in ${locName}?`,
      answer: `Minimum order quantities vary by product type. Many premium formats — including rigid boxes and mailer boxes — are available in lower minimum quantities suitable for growing brands, launch runs, and boutique operations in ${locName}.`,
    },
    {
      question: `What packaging is most popular for ${firstIndustry.toLowerCase()} brands in ${location.name}?`,
      answer: `${firstProduct} are commonly requested by ${firstIndustry.toLowerCase()} brands in the area. The right format depends on the product type, price point, retail versus e-commerce context, and the level of presentation the brand needs to communicate at first touch.`,
    },
    {
      question: `How do I get a custom packaging quote for my ${location.name} business?`,
      answer: `Request a quote through ZEEPACK's quote page or contact us directly. Share your product type, approximate dimensions, quantity, and any structure or finish preferences. A response typically comes within 24 hours for most standard project requests.`,
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const locLabel = location.type === "city"
    ? `${location.name}, ${location.stateAbbr}`
    : location.name;

  const prefixWord = slug.startsWith("custom-boxes-") ? "Custom Boxes" : "Custom Packaging";

  return createMetadata({
    title: `${prefixWord} in ${locLabel} | Premium Brand Packaging by ZEEPACK`,
    description: location.blurb.slice(0, 155),
    path: `/${slug}`,
    keywords: [
      `custom packaging ${location.name.toLowerCase()}`,
      `custom boxes ${location.name.toLowerCase()}`,
      `${location.name.toLowerCase()} packaging`,
      ...location.industries.map((i) => i.toLowerCase()),
    ],
    image: location.heroImage,
    imageAlt: `Custom packaging in ${location.name} by ZEEPACK`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  const locLabel = location.type === "city"
    ? `${location.name}, ${location.stateAbbr}`
    : location.name;

  const spotlightImage = getSpotlightImage(location);

  const faqs = generateFAQs(location);
  const faqSchema = buildFaqSchema(faqs);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...(location.type === "city"
      ? [
          { name: `${location.stateName} Packaging`, path: `/${location.stateSlug}` },
          { name: `${location.name}`, path: `/${slug}` },
        ]
      : [{ name: `${location.name} Packaging`, path: `/${slug}` }]),
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

  const serviceSchema = buildServiceSchema({
    name: `Custom Packaging in ${locLabel}`,
    description: location.blurb,
    path: `/${slug}`,
  });

  const resolvedProducts = location.products
    .filter((p) => productNames[p])
    .map((p) => ({
      slug: p,
      name: productNames[p]!,
      description: productDescriptions[p] ?? "",
      href: `/products/${p}`,
    }));

  const siblingCities = location.type === "city"
    ? location.topCities.filter((c) => c.slug !== slug).slice(0, 3)
    : [];

  const stateCities = location.type === "state"
    ? location.topCities.slice(0, 8)
    : [];

  const valueProps = [
    {
      icon: Globe,
      title: "Nationwide Delivery",
      description: `All custom packaging ships directly to ${location.name} regardless of where production occurs.`,
    },
    {
      icon: Clock,
      title: "24-Hour Quote Response",
      description: "Most project inquiries receive an initial pricing response within one business day.",
    },
    {
      icon: Sparkles,
      title: "Premium Finish Options",
      description: "Foil, embossing, soft-touch, spot UV, and restrained finish systems available across formats.",
    },
    {
      icon: CircleGauge,
      title: "Low Minimum Orders",
      description: "Launch kits, boutique runs, and growing brands can pursue premium packaging at practical quantities.",
    },
    {
      icon: Leaf,
      title: "Sustainable Options",
      description: "Recyclable boards, kraft stocks, and reduced-material structures can be explored without losing refinement.",
    },
    {
      icon: Layers3,
      title: "Custom Sizes & Structures",
      description: "Rigid boxes, mailers, cartons, sleeves, and inserts can all be tailored to exact product dimensions.",
    },
  ];

  return (
    <>
      <EditorialHero
        eyebrow={`Custom Packaging · ${locLabel}`}
        title={`Custom Packaging for ${location.name} Businesses`}
        description={location.blurb}
        image={{
          src: location.heroImage,
          alt: `Custom packaging for ${location.name} brands by ZEEPACK`,
        }}
        highlights={["Low Minimums", "Premium Finishes", "24-hr Quote Response", "Ships Nationwide"]}
      />

      <VisualSpotlight
        eyebrow="Local Packaging Context"
        title={`Packaging shaped around ${location.name}'s industries.`}
        description={
          <>
            <p>
              Businesses in {locLabel} operate across {location.industries.slice(0, 3).join(", ")} and other sectors — all with packaging needs that vary by product type, distribution channel, and the level of presentation required at the point of sale or delivery.
            </p>
            <p className="mt-4">
              ZEEPACK develops custom packaging for brands that need stronger structure, cleaner material selection, and more deliberate finish quality. Whether the goal is shelf presence, a premium unboxing experience, or reliable transit protection, the format is shaped around the product and the brand.
            </p>
            <p className="mt-4">
              {resolvedProducts[0] ? (
                <>
                  Many {location.name} brands begin by reviewing{" "}
                  <Link
                    href={resolvedProducts[0].href}
                    className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4"
                  >
                    {resolvedProducts[0].name.toLowerCase()}
                  </Link>{" "}
                  when deciding how much structure and finish quality the packaging should carry.
                </>
              ) : (
                "The right packaging structure depends on the product type, price point, and intended distribution channel."
              )}
            </p>
            {resolvedProducts[1] ? (
              <p className="mt-4">
                Brands with e-commerce or subscription fulfillment needs often also evaluate{" "}
                <Link
                  href={resolvedProducts[1].href}
                  className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4"
                >
                  {resolvedProducts[1].name.toLowerCase()}
                </Link>{" "}
                when the packaging needs to perform both on shelf and in transit.
              </p>
            ) : null}
          </>
        }
        image={{
          src: spotlightImage,
          alt: `${location.name} packaging formats by ZEEPACK`,
        }}
        reverse
        stats={[
          `${location.industries.length}+ Key Industries`,
          `${resolvedProducts.length}+ Product Formats`,
          "24-hr Quote Response",
          "Low Minimum Orders",
        ]}
      />

      <EditorialListSection
        eyebrow="Packaging Solutions"
        title={`Popular packaging formats for ${location.name} brands.`}
        items={resolvedProducts.map((p) => ({
          title: p.name,
          body: p.description,
        }))}
        columns={3}
      />

      <IconFeatureGrid
        eyebrow="Why ZEEPACK"
        title={`What ${location.name} brands get when they work with ZEEPACK.`}
        description="These are the practical advantages that matter most when evaluating a custom packaging partner for your business."
        items={valueProps}
      />

      {/* Internal links — sibling cities (for city pages) or city index (for state pages) */}
      {(siblingCities.length > 0 || stateCities.length > 0) && (
        <section className="section-space pt-0">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow={location.type === "city" ? "Also in " + location.stateName : "Cities We Serve in " + location.name}
                title={
                  location.type === "city"
                    ? `Custom packaging for other ${location.stateName} cities.`
                    : `Custom packaging available across ${location.name}.`
                }
                description={
                  location.type === "city"
                    ? `ZEEPACK ships to every major city in ${location.stateName}. Explore packaging resources for nearby markets.`
                    : `ZEEPACK delivers custom packaging to businesses in every major ${location.name} city.`
                }
              />
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {(location.type === "city" ? siblingCities : stateCities).map((city) => (
                <Reveal key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="inline-flex items-center rounded-full border border-[var(--color-shell)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-shell)]"
                  >
                    {city.name}
                  </Link>
                </Reveal>
              ))}
              {location.type === "city" && (
                <Reveal>
                  <Link
                    href={`/${location.stateSlug}`}
                    className="inline-flex items-center rounded-full border border-[var(--color-cta)] bg-[var(--color-cta)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    All {location.stateName} →
                  </Link>
                </Reveal>
              )}
              <Reveal>
                <Link
                  href="/custom-packaging-usa"
                  className="inline-flex items-center rounded-full border border-[rgba(17,17,17,0.12)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  View USA Packaging →
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Related products links */}
      <section className="section-space bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(255,255,255,0.92))]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Packaging Formats"
              title={`Explore packaging formats for ${location.name} businesses.`}
              description="Browse the specific product categories most relevant to the industries active in your area."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {resolvedProducts.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={p.href}
                  className="inline-flex items-center rounded-full border border-[var(--color-shell)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-shell)]"
                >
                  {p.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title={`Common questions about custom packaging in ${location.name}.`}
              description="These answers cover the questions that come up most often from businesses evaluating packaging for their products."
            />
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need custom packaging for your ${location.name} business?`}
        description="Share the product type, quantity, and presentation goals so we can help shape the right structure and material direction."
        primaryLabel="Get a Quote"
        primaryHref="/quote"
        secondaryLabel="View All Products"
        secondaryHref="/products"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
