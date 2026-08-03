import { categories } from "@/data/categories";
import { industries } from "@/data/industries";

/**
 * Inline links inside local content, written as [anchor text](/path).
 *
 * The rules below are enforced at build time rather than trusted to review:
 * one link per paragraph, descriptive anchors, real destinations only. A
 * violation fails the build with the offending text, so bad linking cannot
 * reach production.
 *
 * Note on trailing slashes: this site canonicalises WITHOUT them — /about/
 * 308-redirects to /about. Links are validated to match that, because a
 * trailing slash here would put a redirect hop on every internal link.
 */

const STATIC_ROUTES = new Set([
  "/",
  "/about",
  "/contact",
  "/quote",
  "/customize",
  "/products",
  "/industries",
  "/sustainability",
  "/faq",
  "/blog",
  "/html-sitemap",
  "/custom-packaging-usa",
]);

/** Anchors that describe nothing, plus close variants. */
const BANNED_ANCHORS = [
  "click here",
  "learn more",
  "read more",
  "visit this page",
  "explore our products",
  "explore our services",
  "check this out",
  "see more",
  "view our collection",
  "discover our range",
  "our solutions",
  "related page",
  "here",
  "this page",
  "find out more",
  "shop now",
];

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

let validRoutes: Set<string> | null = null;

function routes(): Set<string> {
  if (validRoutes) return validRoutes;

  validRoutes = new Set(STATIC_ROUTES);
  for (const category of categories) validRoutes.add(`/products/${category.slug}`);
  for (const industry of industries) validRoutes.add(`/industries/${industry.slug}`);
  return validRoutes;
}

export type LocalNode = { text: string } | { text: string; href: string };

/**
 * Parses one paragraph into text and link nodes, throwing on any rule breach.
 * `context` identifies the offending entry in the build error.
 */
export function parseLocalParagraph(paragraph: string, context: string): LocalNode[] {
  const matches = [...paragraph.matchAll(LINK_PATTERN)];

  if (matches.length > 1) {
    throw new Error(
      `[local-content] ${context}: ${matches.length} internal links in one paragraph — the limit is one. ` +
        `Split the paragraph or drop the weaker link.\n  ${paragraph.slice(0, 120)}…`,
    );
  }

  for (const match of matches) {
    const [, anchor, href] = match;
    const words = anchor.trim().split(/\s+/).length;

    if (BANNED_ANCHORS.includes(anchor.trim().toLowerCase())) {
      throw new Error(`[local-content] ${context}: generic anchor "${anchor}" — describe the destination instead.`);
    }
    if (words < 3 || words > 8) {
      throw new Error(
        `[local-content] ${context}: anchor "${anchor}" is ${words} word(s); use 3-8 descriptive words.`,
      );
    }
    if (href.endsWith("/") && href !== "/") {
      throw new Error(
        `[local-content] ${context}: "${href}" has a trailing slash. This site canonicalises without one, ` +
          `so the link would redirect. Use "${href.replace(/\/$/, "")}".`,
      );
    }
    if (!routes().has(href)) {
      throw new Error(`[local-content] ${context}: "${href}" is not a route on this site.`);
    }
  }

  const nodes: LocalNode[] = [];
  let cursor = 0;
  for (const match of matches) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push({ text: paragraph.slice(cursor, start) });
    nodes.push({ text: match[1], href: match[2] });
    cursor = start + match[0].length;
  }
  if (cursor < paragraph.length) nodes.push({ text: paragraph.slice(cursor) });

  return nodes;
}

/** Every destination linked from one entry, for the repeat-destination check. */
export function linkTargets(paragraphs: string[]): string[] {
  return paragraphs.flatMap((p) => [...p.matchAll(LINK_PATTERN)].map((m) => m[2]));
}
