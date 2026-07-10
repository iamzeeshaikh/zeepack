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

function renderItem(opts: {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  price: number;
  productType: string;
  mpn: string;
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
      <g:mpn>${xmlEscape(opts.mpn)}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Free Shipping</g:service>
        <g:price>0 USD</g:price>
        <g:min_handling_time>10</g:min_handling_time>
        <g:max_handling_time>20</g:max_handling_time>
        <g:min_transit_time>3</g:min_transit_time>
        <g:max_transit_time>7</g:max_transit_time>
      </g:shipping>
      <g:return_policy_label>free-returns</g:return_policy_label>
    </item>`;
}

export async function GET() {
  const allowedCategories = categories.filter(
    (cat) => !GMC_BANNED_TERMS.test(cat.slug) && !GMC_BANNED_TERMS.test(cat.name)
  );
  const allowedStyles = productStyles.filter(
    (style) => !GMC_BANNED_TERMS.test(style.slug) && !GMC_BANNED_TERMS.test(style.title)
  );

  // Build the ordered pool of distinct product images (category images first, then
  // style images and galleries). Each image is handed out to at most one product.
  const imagePool: string[] = [];
  const addImage = (img?: string) => {
    if (img && img.startsWith("/images/zee/") && !imagePool.includes(img)) {
      imagePool.push(img);
    }
  };
  allowedCategories.forEach((cat) => addImage(cat.image));
  allowedStyles.forEach((style) => {
    addImage(style.image);
    addImage(style.fallbackImage);
    (style.galleryImages ?? []).forEach(addImage);
  });

  // Hand out globally-unique images first for maximum variety; once the distinct
  // pool is exhausted, fall back to the product's own (relevant) image rather
  // than skipping it. Every product is fed — Google fetches them all and accepts
  // up to the account's current capacity, so more show automatically as capacity
  // grows, without editing the feed again.
  const usedImages = new Set<string>();
  const takeImage = (preferred: string): string => {
    if (preferred && !usedImages.has(preferred)) {
      usedImages.add(preferred);
      return preferred;
    }
    for (const img of imagePool) {
      if (!usedImages.has(img)) {
        usedImages.add(img);
        return img;
      }
    }
    return preferred; // pool exhausted — reuse the product's own relevant image
  };

  const items: string[] = [];

  // Categories first — the real product lines, each with its own image.
  for (const cat of allowedCategories) {
    items.push(
      renderItem({
        id: cat.slug,
        title: `${cat.name} | Custom Packaging by ZEEPACK`,
        description: cat.shortDescription,
        link: absUrl(`/products/${cat.slug}`),
        image: takeImage(cat.image),
        price: getUnitPrice(cat),
        productType: `Custom Packaging > ${cat.name}`,
        mpn: `ZP-${cat.slug}`,
      })
    );
  }

  // Then every style, each getting a unique image while the pool lasts and its
  // own relevant image thereafter.
  for (const style of allowedStyles) {
    items.push(
      renderItem({
        id: `style-${style.slug}`,
        title: `${style.title} | Custom Packaging by ZEEPACK`,
        description: style.description,
        link: absUrl(`/products/styles/${style.slug}`),
        image: takeImage(style.image),
        price: getUnitPrice({ slug: style.slug, title: style.title, materials: style.materialOptions }),
        productType: `Custom Packaging > ${style.title}`,
        mpn: `ZP-${style.slug}`,
      })
    );
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
