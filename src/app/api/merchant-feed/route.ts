import { categories } from "@/data/categories";
import { productStyles } from "@/data/product-styles";
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

export async function GET() {
  // Category pages (29 items)
  const categoryItems = categories
    .filter((cat) => !GMC_BANNED_TERMS.test(cat.slug) && !GMC_BANNED_TERMS.test(cat.name))
    .map((cat) => {
    const link = absUrl(`/products/${cat.slug}`);
    const imageLink = absUrl(cat.image);
    const description = xmlEscape(cat.shortDescription);
    const title = xmlEscape(`${cat.name} | Custom Packaging by ZEEPACK`);
    const productType = xmlEscape(`Custom Packaging > ${cat.name}`);

    return `
    <item>
      <g:id>${feedId(cat.slug)}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${imageLink}</g:image_link>
      <g:price>0.30 USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>ZEEPACK</g:brand>
      <g:google_product_category>2634</g:google_product_category>
      <g:product_type>${productType}</g:product_type>
      <g:mpn>${xmlEscape(`ZP-${cat.slug}`)}</g:mpn>
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
  });

  // Product style pages (~375 items)
  const styleItems = productStyles
    .filter((style) => !GMC_BANNED_TERMS.test(style.slug) && !GMC_BANNED_TERMS.test(style.title))
    .map((style) => {
    const link = absUrl(`/products/styles/${style.slug}`);
    const imageLink = absUrl(style.image);
    const description = xmlEscape(style.description);
    const title = xmlEscape(`${style.title} | Custom Packaging by ZEEPACK`);
    const productType = xmlEscape(`Custom Packaging > ${style.title}`);

    return `
    <item>
      <g:id>${feedId(`style-${style.slug}`)}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${imageLink}</g:image_link>
      <g:price>0.30 USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>ZEEPACK</g:brand>
      <g:google_product_category>2634</g:google_product_category>
      <g:product_type>${productType}</g:product_type>
      <g:mpn>${xmlEscape(`ZP-${style.slug}`)}</g:mpn>
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
  });

  const items = [...categoryItems, ...styleItems].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${xmlEscape(siteConfig.name)} — Premium Custom Packaging</title>
    <link>${siteConfig.siteUrl}/products</link>
    <description>${xmlEscape(siteConfig.description)}</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
