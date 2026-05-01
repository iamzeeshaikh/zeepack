import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { productStyles } from "@/data/product-styles";
import { footerLegalLinks, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-01T00:00:00.000Z");

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
    lastModified,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "/" ? 1 : path === "/products" || path === "/industries" ? 0.9 : 0.7,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${siteConfig.siteUrl}/products/${category.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const styleUrls = productStyles.map((style) => ({
    url: `${siteConfig.siteUrl}/products/styles/${style.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const industryUrls = industries.map((industry) => ({
    url: `${siteConfig.siteUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryUrls, ...styleUrls, ...industryUrls];
}
