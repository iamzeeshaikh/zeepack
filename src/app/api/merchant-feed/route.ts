import { categories } from "@/data/categories";
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

export async function GET() {
  const items = categories
    .map((cat) => {
      const link = absUrl(`/products/${cat.slug}`);
      const imageLink = absUrl(cat.image);
      const description = xmlEscape(cat.shortDescription);
      const title = xmlEscape(`${cat.name} | Custom Packaging by ZEEPACK`);
      const productType = xmlEscape(`Custom Packaging > ${cat.name}`);

      return `
    <item>
      <g:id>${xmlEscape(cat.slug)}</g:id>
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
      <g:identifier_exists>no</g:identifier_exists>
    </item>`;
    })
    .join("\n");

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
