import type { MetadataRoute } from "next";

import { blogPosts, contentPages } from "@/data/catalog";
import { footerLegalLinks, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about-us/",
    "/contact-us/",
    "/request-a-quote/",
    "/faq/",
    "/blog/",
    "/html-sitemap/",
    ...footerLegalLinks.map((item) => item.href),
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const contentUrls = contentPages
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: `${siteConfig.siteUrl}/${page.slug}/`,
      lastModified: new Date(),
    }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...contentUrls, ...blogUrls];
}
