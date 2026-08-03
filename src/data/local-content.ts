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
  "custom-packaging-new-york-city": {
    intro:
      "Retail stockrooms in Manhattan are the smallest of any major US market, and that single constraint shapes most packaging decisions here. Boutiques along Fifth Avenue and in SoHo routinely refuse cases that will not fit a narrow back-of-house shelf or clear a walk-up stairwell, so carton footprint matters as much as shelf presence. Brands selling into these accounts usually specify shallower master cartons and a shelf-ready inner that a shop assistant can open without a blade.",
    sections: [
      {
        heading: "Garment District habits carry into packaging",
        body: "Fashion labels working out of the Seventh Avenue showrooms tend to plan packaging around the wholesale calendar rather than the retail one, which means samples are needed months before the production run. A folding structure that arrives flat and assembles in the showroom is easier to demonstrate to buyers than a pre-glued box that ships bulky, and it costs less to send a dozen of them to appointments. Luxury accessory lines that need the box to feel like part of the product usually move to [structured rigid boxes with a lined interior](/products/rigid-boxes) once the wholesale order is confirmed.",
      },
      {
        heading: "Last-mile realities",
        body: "A large share of New York deliveries end at a doorman desk, a mailroom, or a fifth-floor apartment, and packages are handled far more times than in markets where a van reaches the door. Corner crush and edge scuffing show up on returns more often here than anywhere else we ship, so it is worth over-specifying board grade on anything with a gloss laminate.",
      },
    ],
  },

  "custom-packaging-los-angeles": {
    intro:
      "Los Angeles is where a packaging decision doubles as a media decision. The indie beauty cluster spread across Culver City, Silver Lake and the Valley builds launches around seeding boxes sent to creators, and those parcels are filmed on opening far more often than they are simply unpacked. That changes the brief: the tear line, the reveal order and the sound the lid makes are all part of the product for a brand whose first thousand impressions come from a phone camera.",
    sections: [
      {
        heading: "Two packaging runs, not one",
        body: "Most LA beauty brands we work with end up running two versions of the same design — a heavier PR box for seeding, and a lighter retail or shipper version for volume. Splitting them keeps the freight cost of the everyday run down while leaving room to spend on the few hundred units that will actually be filmed. Skincare and colour lines usually anchor that PR run on [cosmetic boxes built for camera-facing reveals](/products/cosmetic-boxes), then strip back the finish for the shelf version.",
      },
    ],
  },

  "custom-packaging-chicago": {
    intro:
      "Chicago sits at the largest rail interchange in North America, which is why so much packaging planning here is really freight planning. Brands with national distribution often hold inventory in the metro precisely because a pallet can reach either coast without a second handoff, and that makes pallet efficiency worth more than it is in a market shipping mostly parcel. Getting the master carton dimensions to divide cleanly into a standard pallet footprint frequently saves more per year than any material substitution.",
    sections: [
      {
        heading: "Winter is a material constraint",
        body: "Between December and March, freight moving through the metro spends hours at temperatures that stiffen board and slow adhesive cure, and cartons that perform fine in a September test can fail a January drop. We specify a colder-tolerant adhesive on anything shipping into or out of the region in winter, and we recommend testing samples after a night in an unheated space rather than at room temperature.",
      },
      {
        heading: "Trade show cycles",
        body: "McCormick Place runs several of the food and housewares shows that Midwest buyers actually place orders at, and the packaging that travels to those booths has a different job from the packaging that ships to stores. Brands presenting there often need a small run of [display boxes that survive booth handling](/products/display-boxes) months before the retail packaging is finalised.",
      },
    ],
  },

  "custom-packaging-houston": {
    intro:
      "Humidity is the packaging variable that catches out brands new to Houston. Corrugated board loses a meaningful share of its stacking strength as it takes on moisture, and a warehouse without climate control on the Gulf Coast will do exactly that for most of the year. Cartons that stack six high in a dry Midwest facility can bow at four here, which shows up as crushed bottom layers rather than as an obvious packaging failure.",
    sections: [
      {
        heading: "Specifying for the Gulf Coast",
        body: "The usual fix is a moisture-resistant liner and a higher board grade than the weight of the product alone would suggest, chosen against the humidity the stock will actually sit in rather than the shipping distance. Brands moving volume through regional distribution generally standardise on [corrugated shipping boxes with a moisture-resistant liner](/products/corrugated-boxes) for anything held longer than a few weeks.",
      },
      {
        heading: "The medical centre effect",
        body: "The Texas Medical Center anchors a dense cluster of device, diagnostic and supplement companies, and packaging for that customer base carries documentation and labelling requirements that consumer packaging does not. Leaving panel space for regulatory copy at the design stage avoids the far more expensive problem of finding it after the dieline is approved.",
      },
    ],
  },

  "custom-packaging-phoenix": {
    intro:
      "Summer in Phoenix regularly puts parcels in delivery vehicles and on doorsteps at temperatures well above what most packaging is tested against. Anything with a wax, oil or emulsion base can soften in transit, and adhesives that hold reliably elsewhere will let go on a closure that sits in a hot van for an afternoon. Brands here plan the summer months as a separate packaging season rather than treating heat as an edge case.",
    sections: [
      {
        heading: "Dispensary shelf rules shape the box",
        body: "Arizona's regulated cannabis retailers work to child-resistance and labelling requirements that dictate closure type and panel layout before any brand consideration enters, and a design approved in another state often cannot ship here unchanged. Getting the compliance panel and the closure decided first, then designing around them, is far cheaper than retrofitting — which is why most operators start from [child-resistant CBD and cannabis packaging](/products/cbd-packaging) rather than adapting a standard carton.",
      },
    ],
  },

  "custom-packaging-philadelphia": {
    intro:
      "The pharmaceutical corridor running from Philadelphia into central New Jersey gives this market an unusually high concentration of companies whose packaging has to satisfy a regulator before it satisfies a buyer. Even brands well outside prescription products inherit those habits from the local talent pool, and briefs here tend to arrive with the labelling requirements already specified rather than discovered late.",
    sections: [
      {
        heading: "Supplement labelling eats panel space",
        body: "A supplement facts panel, ingredient list, disclaimer and lot coding together consume more surface than most first-time designs allow for, and the usual result is a shrunken logo and a cramped front face. Working out the required copy area before the structure is chosen tends to push brands towards a taller carton than they first imagined, and towards [supplement cartons sized for a facts panel](/products/supplement-packaging) rather than a compact box that has to be redrawn.",
      },
    ],
  },

  "custom-boxes-san-antonio": {
    intro:
      "San Antonio's retail packaging demand is shaped more by visitors than by residents. The concentration of tourism around the River Walk and the missions supports a large gift and speciality food trade, and the buying pattern is distinctive — purchases are made on foot, carried for the rest of the day, and often flown home in a suitcase. Packaging that survives that journey needs to be light, rigid enough to resist a packed bag, and small enough not to force a checked case.",
    sections: [
      {
        heading: "Built for the suitcase",
        body: "The practical brief for a local speciality food or souvenir producer is closer to travel packaging than to retail packaging: a flat profile, no protruding closures, and enough internal support to keep contents from shifting. Producers selling jarred or fragile goods to visitors usually settle on [gift boxes with fitted internal support](/products/gift-boxes) once the first round of breakage reports comes back.",
      },
      {
        heading: "Military base retail",
        body: "The exchanges serving Lackland, Fort Sam Houston and Randolph operate on their own vendor terms and packaging expectations, and lead times run longer than civilian retail because of the approval steps involved. Brands selling into those accounts should plan artwork sign-off several weeks earlier than they would for a comparable regional chain.",
      },
    ],
  },

  "custom-packaging-san-diego": {
    intro:
      "The biotech cluster around Torrey Pines and Sorrento Valley has spun out a steady stream of consumer health brands, and they arrive with expectations set by laboratory packaging rather than retail packaging. Tolerances are discussed in millimetres, cold-chain and light exposure come up early, and stability data often dictates the material before anyone discusses how the box looks.",
    sections: [
      {
        heading: "Where lab habits help",
        body: "That precision is genuinely useful once it reaches the shelf, because a brand that already knows its fill tolerance can specify an insert that holds a vial or dropper without rattle on the first attempt rather than the third. Health and wellness lines coming out of the cluster commonly pair a printed outer with [supplement packaging sized to a fixed fill tolerance](/products/supplement-packaging).",
      },
      {
        heading: "Cross-border production",
        body: "A significant share of San Diego consumer goods are assembled or filled in Tijuana, which puts a border crossing between the packaging and the product. Cartons that ship south flat and are erected at the filling site avoid paying to move air across the border twice, and reduce the volume held at customs.",
      },
    ],
  },

  "custom-boxes-dallas": {
    intro:
      "The Dallas Market Center is the largest wholesale marketplace in the country, and its calendar drives packaging deadlines across the region. Gift, home and apparel buyers place orders at market for delivery months later, which means the packaging shown at the showroom appointment has to exist before the production order does. Brands that treat the market sample as an afterthought usually end up presenting a mocked-up box and losing the detail that would have won the order.",
    sections: [
      {
        heading: "Sample first, production second",
        body: "The practical sequence here is a small, fully finished sample run timed to the market date, followed by the volume order once buyers commit. Corporate gifting programmes, which are unusually large in the Dallas market because of the concentration of headquarters in the metro, tend to be built around [gift boxes built for showroom appointments](/products/gift-boxes) before any quantity is agreed.",
      },
    ],
  },

  "custom-packaging-austin": {
    intro:
      "Austin brands ask about end-of-life earlier in the conversation than brands in almost any other market we serve. It is common for a first brief here to specify recycled content, a plastic-free closure and a curbside-recyclable outer before it specifies a colour, and the local customer base does check. That order of priorities changes what is worth spending on — the finish budget tends to go into board quality and print restraint rather than lamination.",
    sections: [
      {
        heading: "Designing without the laminate",
        body: "Removing film lamination is the single change that most improves recyclability, but it also removes the scuff protection that a dark, heavily inked box depends on. The workable answer is usually a lighter ink coverage and an uncoated or lightly coated stock that hides handling marks by design, which is the route most local brands take when they move to [sustainable packaging without a plastic laminate](/products/sustainable-packaging).",
      },
      {
        heading: "The SXSW spike",
        body: "March compresses a year of sampling into a fortnight, and brands distributing product around the festival need a short run that behaves differently from their retail packaging — smaller, cheaper to carry, and disposable without guilt. Planning that run in December rather than February is the difference between getting it and improvising.",
      },
    ],
  },

  "custom-packaging-san-jose": {
    intro:
      "Hardware coming out of the South Bay carries a packaging requirement most consumer goods never encounter: the contents can be damaged by static before they are damaged by impact. Boards, sensors and anything with exposed contacts need an anti-static layer between the product and the printed outer, and that layer has to be specified as part of the structure rather than added as a bag at the packing bench.",
    sections: [
      {
        heading: "Fit tolerance over cushioning volume",
        body: "For dense, small electronics the failure mode is movement rather than compression, so the effective fix is a tighter cavity rather than more void fill. A moulded or die-cut cavity that holds the unit within a millimetre or two lets the outer carton shrink, which lowers dimensional weight on every parcel — the reason most local hardware brands specify [die-cut inserts that hold components without movement](/products/inserts) early in the design.",
      },
    ],
  },

  "custom-boxes-jacksonville": {
    intro:
      "Jacksonville is a distribution market before it is a retail one. JAXPORT and the interstate junction have concentrated an unusual density of third-party logistics operators here, and a large share of the packaging shipped into the metro is destined to be opened, re-picked and re-shipped rather than sold. That changes the specification: cartons need to survive being opened and closed several times, and to carry labelling that scans reliably after handling.",
    sections: [
      {
        heading: "Packed for a 3PL, not a shelf",
        body: "Fulfilment operators charge by handling time, so a case that opens cleanly along a perforation and re-seals without tape is cheaper to process than one that has to be cut. Brands holding stock with a local operator generally standardise on [corrugated cases built for repeated handling](/products/corrugated-boxes) rather than the retail-facing carton they use elsewhere.",
      },
      {
        heading: "Hurricane season planning",
        body: "Between June and November, warehouse stock in this region can sit through power interruptions and elevated humidity for days at a time. Holding a buffer of packaging inland, or specifying a board grade that tolerates a week of damp without losing stacking strength, is cheaper than replacing a compromised inventory position mid-season.",
      },
    ],
  },

  "custom-packaging-fort-worth": {
    intro:
      "The logistics complex around Alliance Airport has made Fort Worth a market where packaging is often designed around air freight rather than road. Dimensional weight dominates the cost of an air pallet in a way it does not on a truck, and a carton that is two centimetres too tall in each direction can move an entire shipment into a higher band. Brands here tend to arrive at the packaging conversation already knowing their target cube.",
    sections: [
      {
        heading: "Aerospace parts have their own rules",
        body: "Components moving to and from the aviation suppliers concentrated in the metro usually need traceability marked on the packaging itself, not just on the paperwork inside, and the carton is expected to survive being logged, inspected and re-closed. Suppliers in that chain commonly specify [product boxes with a printable traceability panel](/products/product-boxes) so the marking survives handling.",
      },
    ],
  },
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
