import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { productStyles } from "@/data/product-styles";
import { footerLegalLinks, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/quote",
    "/products",
    "/industries",
    "/sustainability",
    "/faq",
    "/html-sitemap",
    ...footerLegalLinks.map((item) => item.href),
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${siteConfig.siteUrl}/products/${category.slug}`,
    lastModified: new Date(),
  }));

  const styleUrls = productStyles.map((style) => ({
    url: `${siteConfig.siteUrl}/products/styles/${style.slug}`,
    lastModified: new Date(),
  }));

  const industryUrls = industries.map((industry) => ({
    url: `${siteConfig.siteUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...categoryUrls, ...styleUrls, ...industryUrls];
}
