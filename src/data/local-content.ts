/**
 * Real, city-specific information — the only thing that makes a location page
 * worth indexing.
 *
 * Every city page is built from the same template, so without this the pages
 * differ only by a swapped-in city name. That reads as thin to search engines
 * no matter how the sentences are arranged, which is why 139 of them are
 * currently noindex.
 *
 * A city becomes indexable automatically once its entry here clears
 * MIN_LOCAL_WORDS words of genuine local detail. Nothing else to change — the
 * sitemap, the robots tag and the on-page section all follow from this file.
 *
 * ── What belongs here ──────────────────────────────────────────────────────
 * Things only ZEEPACK knows. Facts a reader could not guess:
 *
 *   • Real transit time from production to that metro
 *   • Actual work done for brands there (anonymous is fine —
 *     "a 5,000-unit rigid box run for an Austin skincare label")
 *   • Trade shows, markets or districts the local customers actually attend
 *   • Freight, port or distribution specifics for that region
 *   • Anything about minimums, seasonality or pricing that differs locally
 *
 * ── What does NOT belong here ──────────────────────────────────────────────
 * Anything that could be written about any city by swapping the name:
 *
 *   ✗ "Birmingham is a thriving hub for growing brands."
 *   ✗ "Businesses in Birmingham need packaging that stands out."
 *   ✓ "Birmingham orders ship from our Dallas line in 3–4 business days.
 *      We produce recurring rigid-box runs for two Birmingham skincare
 *      labels and a UAB-adjacent medical device supplier, most of which move
 *      through the Alabama Retail Association's spring showcase."
 *
 * If a sentence would still be true after changing the city name, it is not
 * local content and it will not make the page worth indexing.
 */

/** A city page needs at least this many words of real local detail to be indexed. */
export const MIN_LOCAL_WORDS = 120;

export interface LocalContent {
  /** 2-4 sentences of genuine local detail. Shown as the page's lead section. */
  intro: string;
  /** Optional extra blocks — shipping notes, local projects, regional quirks. */
  sections?: Array<{ heading: string; body: string }>;
}

/**
 * Keyed by location slug (see src/data/locations.ts — note the slugs alternate
 * between the "custom-packaging-" and "custom-boxes-" prefixes).
 *
 * Add entries here as the content gets written. An empty object is the correct
 * starting state: no city is claimed to have local content it does not have.
 */
export const localContentBySlug: Record<string, LocalContent> = {
  // Nothing written yet. Add an entry per city as the content is researched —
  // see the guidance above for what counts as local and what does not.
  //
  // "custom-packaging-austin": {
  //   intro:
  //     "Austin orders ship from <where> in <n> business days. We produce ... ",
  //   sections: [
  //     {
  //       heading: "What Austin brands order most",
  //       body: "...",
  //     },
  //   ],
  // },
};

function wordCount(input: string) {
  return input.trim().split(/\s+/).filter(Boolean).length;
}

export function getLocalContent(slug: string): LocalContent | undefined {
  return localContentBySlug[slug];
}

/** Total words of real local detail written for a city. */
export function localWordCount(slug: string): number {
  const content = localContentBySlug[slug];
  if (!content) return 0;

  return (
    wordCount(content.intro) +
    (content.sections ?? []).reduce(
      (total, section) => total + wordCount(section.heading) + wordCount(section.body),
      0,
    )
  );
}

/** True once a city carries enough real local detail to stand on its own. */
export function hasEnoughLocalContent(slug: string): boolean {
  return localWordCount(slug) >= MIN_LOCAL_WORDS;
}
