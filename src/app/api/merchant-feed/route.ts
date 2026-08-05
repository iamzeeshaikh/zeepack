import { categories } from "@/data/categories";
import { productStyles } from "@/data/product-styles";
import { getUnitPrice } from "@/data/pricing";
import { siteConfig } from "@/data/site";

function xmlEscape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.siteUrl}${path}`;
}

function feedId(raw: string): string {
  return xmlEscape(raw.substring(0, 50));
}

const GMC_BANNED_TERMS = /cbd|cannabis|vape|tobacco/i;

// Products with no photo of the actual product on file — showing an unrelated
// stock image in Shopping ads reads as misrepresentation, so keep them out of
// the feed until a real photo exists.
const NO_REAL_IMAGE = new Set(["mylar-bags"]);

// The account's current item capacity is ~103; sending more produces an
// "over capacity, items rejected" feed error. Keep the feed under that limit
// and raise this once Google grows the account's capacity.
const FEED_LIMIT = 100;

function renderItem(opts: {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  price: number;
  productType: string;
}): string {
  return `
    <item>
      <g:id>${feedId(opts.id)}</g:id>
      <g:title>${xmlEscape(opts.title)}</g:title>
      <g:description>${xmlEscape(opts.description)}</g:description>
      <g:link>${opts.link}</g:link>
      <g:image_link>${absUrl(opts.image)}</g:image_link>
      <g:price>${opts.price.toFixed(2)} USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>ZEEPACK</g:brand>
      <g:google_product_category>2634</g:google_product_category>
      <g:product_type>${xmlEscape(opts.productType)}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Free Shipping</g:service>
        <g:price>0 USD</g:price>
        <g:min_handling_time>3</g:min_handling_time>
        <g:max_handling_time>5</g:max_handling_time>
        <g:min_transit_time>3</g:min_transit_time>
        <g:max_transit_time>5</g:max_transit_time>
      </g:shipping>
    </item>`;
}

export async function GET() {
  const allowedCategories = categories.filter(
    (cat) =>
      !GMC_BANNED_TERMS.test(cat.slug) &&
      !GMC_BANNED_TERMS.test(cat.name) &&
      !NO_REAL_IMAGE.has(cat.slug)
  );
  const allowedStyles = productStyles.filter(
    (style) =>
      !GMC_BANNED_TERMS.test(style.slug) &&
      !GMC_BANNED_TERMS.test(style.title) &&
      !NO_REAL_IMAGE.has(style.categorySlug)
  );

  const items: string[] = [];

  // Categories first — the main product lines. Each item uses the exact image
  // shown on its landing page so the ad always matches what the shopper lands on.
  for (const cat of allowedCategories) {
    if (items.length >= FEED_LIMIT) break;
    items.push(
      renderItem({
        id: cat.slug,
        title: `${cat.name} | Custom Packaging by ZEEPACK`,
        description: cat.shortDescription,
        link: absUrl(`/products/${cat.slug}`),
        image: cat.image,
        price: getUnitPrice(cat),
        productType: `Custom Packaging > ${cat.name}`,
      })
    );
  }

  // Then styles, round-robin across categories so every product line stays
  // represented within the capped feed.
  const stylesByCategory = new Map<string, typeof allowedStyles>();
  for (const style of allowedStyles) {
    const bucket = stylesByCategory.get(style.categorySlug) ?? [];
    bucket.push(style);
    stylesByCategory.set(style.categorySlug, bucket);
  }
  const buckets = [...stylesByCategory.values()];
  for (let round = 0; items.length < FEED_LIMIT; round++) {
    let pushedAny = false;
    for (const bucket of buckets) {
      if (items.length >= FEED_LIMIT) break;
      const style = bucket[round];
      if (!style) continue;
      pushedAny = true;
      items.push(
        renderItem({
          id: `style-${style.slug}`,
          title: `${style.title} | Custom Packaging by ZEEPACK`,
          description: style.description,
          link: absUrl(`/products/styles/${style.slug}`),
          image: style.image,
          price: getUnitPrice({ slug: style.slug, title: style.title, materials: style.materialOptions }),
          productType: `Custom Packaging > ${style.title}`,
        })
      );
    }
    if (!pushedAny) break;
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${xmlEscape(siteConfig.name)} — Premium Custom Packaging</title>
    <link>${siteConfig.siteUrl}/products</link>
    <description>${xmlEscape(siteConfig.description)}</description>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
