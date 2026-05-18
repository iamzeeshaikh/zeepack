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
import { industries } from "@/data/industries";
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

// Map human-readable location industry labels → industry page slugs
const industrySlugMap: Record<string, string> = {
  "Beauty & Cosmetics": "cosmetics",
  "Cosmetics": "cosmetics",
  "Skincare": "skincare",
  "Hair Care": "hair-care",
  "Men's Grooming": "mens-grooming",
  "Soap & Bath": "soap-bath",
  "Aromatherapy": "aromatherapy",
  "Essential Oils": "essential-oils",
  "Vegan Beauty": "vegan-beauty",
  "Wellness": "wellness",
  "Health & Wellness": "health-wellness",
  "Supplements": "supplements",
  "Fitness": "fitness",
  "Cannabis": "cbd",
  "CBD": "cbd",
  "Pharmacy": "pharmacy",
  "Natural & Organic": "natural-organic",
  "Natural Products": "natural-organic",
  "Food & Beverage": "food",
  "Food Processing": "food",
  "Food": "food",
  "Bakery": "bakery",
  "Coffee & Tea": "coffee-tea",
  "Coffee": "coffee-tea",
  "Confectionery": "confectionery",
  "Chocolate": "chocolate",
  "Wine & Spirits": "wine-spirits",
  "Gourmet Food": "gourmet-food",
  "Restaurant": "restaurant",
  "E-commerce": "ecommerce",
  "Subscription Boxes": "subscription-boxes",
  "Fashion": "fashion",
  "Luxury Fashion": "luxury-fashion",
  "Apparel": "fashion",
  "Jewelry": "jewelry",
  "Footwear": "footwear",
  "Accessories": "accessories",
  "Home Decor": "home-decor",
  "Luxury Gifts": "luxury-gifts",
  "Luxury Retail": "luxury-gifts",
  "Corporate Gifts": "corporate-gifts",
  "Wedding & Events": "wedding-events",
  "Holiday & Seasonal": "holiday-seasonal",
  "Pet Products": "pet-products",
  "Baby Products": "baby-products",
  "Electronics": "electronics",
  "Retail": "boutique-retail",
  "Boutique Retail": "boutique-retail",
  "Spa & Wellness": "spa-wellness",
  "Stationery": "stationery",
  "Gift Baskets": "gift-baskets",
  "Corporate Events": "corporate-events",
};

// Build name lookup from imported industries array
const industryNameMap = Object.fromEntries(industries.map((i) => [i.slug, i.name]));

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
  const locShort = location.name;
  const firstProduct = productNames[location.products[0]] ?? "custom packaging";
  const secondProduct = productNames[location.products[1]] ?? "mailer boxes";
  const thirdProduct = productNames[location.products[2]] ?? "folding cartons";
  const firstIndustry = location.industries[0] ?? "local businesses";
  const secondIndustry = location.industries[1] ?? "retail brands";
  const thirdIndustry = location.industries[2] ?? "e-commerce brands";
  const isState = location.type === "state";

  return [
    {
      question: `Does ZEEPACK ship custom packaging to ${locName}?`,
      answer: `Yes. ZEEPACK ships custom packaging nationwide, including to businesses in ${locName}. All packaging is produced to specification and delivered directly to your location. Lead times vary depending on the structure type, order quantity, finishing complexity, and whether custom dielines or artwork are required.`,
    },
    {
      question: `What types of custom packaging does ZEEPACK offer to ${locShort} businesses?`,
      answer: `ZEEPACK offers a wide range of custom packaging formats for ${locShort} businesses — including rigid boxes, mailer boxes, folding cartons, gift boxes, display boxes, kraft boxes, corrugated boxes, candle packaging, cosmetic packaging, jewelry boxes, CBD packaging, supplement packaging, food boxes, tissue paper, paper bags, sleeves, inserts, and labels. The right format depends on your product type, distribution channel, and brand presentation goals.`,
    },
    {
      question: `What is the minimum order quantity for custom packaging in ${locName}?`,
      answer: `Minimum order quantities vary by product type and structure. Many premium formats — including rigid boxes, mailer boxes, and folding cartons — are available in lower minimum quantities suited for growing brands, launch kits, and boutique operations in ${locName}. Contact ZEEPACK with your project details to confirm quantities for a specific format.`,
    },
    {
      question: `What packaging formats are most popular for ${firstIndustry.toLowerCase()} brands in ${locShort}?`,
      answer: `${firstProduct} are among the most requested formats by ${firstIndustry.toLowerCase()} brands in the area. The specific choice depends on the product's price point, distribution channel — retail, gifting, or direct-to-consumer — and the level of structural and finish quality the brand needs to communicate at the point of sale or delivery.`,
    },
    {
      question: `Can ZEEPACK help ${secondIndustry.toLowerCase()} brands in ${locShort} with custom packaging?`,
      answer: `Yes. ${secondProduct} and other premium formats are well-suited for ${secondIndustry.toLowerCase()} brands in ${locShort}. ZEEPACK works across structure selection, material routes, insert planning, and finishing direction to develop packaging that fits the product and the brand's intended presentation level.`,
    },
    {
      question: `What finishing options are available on custom packaging for ${locShort} brands?`,
      answer: `Finishing options available across most formats include foil stamping, embossing, debossing, soft-touch lamination, matte lamination, gloss lamination, and spot UV coating. The right finishing system depends on the product category, budget, and the visual identity of the brand. ZEEPACK can help ${locShort} brands choose finishes that suit both the aesthetic and the practical production constraints.`,
    },
    {
      question: `Does ZEEPACK offer eco-friendly or sustainable packaging for ${locShort} businesses?`,
      answer: `Yes. Recyclable boards, kraft stocks, FSC-certified materials, reduced-plastic directions, and more efficient structural approaches can all be explored for ${locShort} brands. Sustainable packaging options are available across most product categories without sacrificing the finish quality or brand presentation that premium packaging requires.`,
    },
    {
      question: `How long does custom packaging production take for a ${locShort} business?`,
      answer: `Production timelines depend on the packaging type, order quantity, finishing requirements, and whether custom structural dielines or new artwork files are involved. Most projects move into production within a few weeks after design approvals are complete. Rush timelines may be possible depending on format and quantity — share your deadline when requesting a quote.`,
    },
    {
      question: `Can ZEEPACK create packaging for ${thirdIndustry.toLowerCase()} brands based in ${locShort}?`,
      answer: `Yes. ${thirdProduct} and related formats are commonly developed for ${thirdIndustry.toLowerCase()} brands. ZEEPACK works with businesses across ${isState ? locShort : `${locShort} and the broader ${location.stateName} region`} to develop packaging that matches the product category, channel requirements, and the level of presentation the brand is targeting — whether for retail, e-commerce, gifting, or subscription fulfillment.`,
    },
    {
      question: `How do I request a custom packaging quote for my ${locShort} business?`,
      answer: `Use ZEEPACK's quote page or contact us directly with your project details — product type, approximate dimensions, target quantity, preferred materials, and any finish or structural preferences. Most standard project inquiries receive an initial response within 24 hours. For more complex structures or specialty formats, additional details may be needed before a full quote can be prepared.`,
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
    ? location.topCities.filter((c) => c.slug !== slug).slice(0, 8)
    : [];

  const stateCities = location.type === "state"
    ? location.topCities
    : [];

  // Map location industries to industry pages, deduped
  const relatedIndustries = location.industries
    .map((name) => {
      const slug = industrySlugMap[name];
      if (!slug) return null;
      return { slug, name: industryNameMap[slug] ?? name, href: `/industries/${slug}` };
    })
    .filter((x): x is { slug: string; name: string; href: string } => x !== null)
    .filter((x, i, arr) => arr.findIndex((y) => y.slug === x.slug) === i);

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

      {/* Industries section */}
      {relatedIndustries.length > 0 && (
        <section className="section-space pt-0">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Industries"
                title={`Packaging for ${location.name}'s key industries.`}
                description={`Explore packaging formats built around the product categories and distribution needs of ${locLabel}'s most active business sectors.`}
              />
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedIndustries.map((ind) => (
                <Reveal key={ind.slug}>
                  <Link
                    href={ind.href}
                    className="inline-flex items-center rounded-full border border-[var(--color-shell)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-shell)]"
                  >
                    {ind.name}
                  </Link>
                </Reveal>
              ))}
              <Reveal>
                <Link
                  href="/industries"
                  className="inline-flex items-center rounded-full border border-[rgba(17,17,17,0.12)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  All Industries →
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
            <Reveal>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-[rgba(17,17,17,0.12)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                All Products →
              </Link>
            </Reveal>
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
        secondaryLabel="Customize Your Box"
        secondaryHref="/customize"
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
