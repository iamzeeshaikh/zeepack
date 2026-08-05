# ZEEPACK — Google Merchant Center Pre-Setup Audit
**Date:** 2026-05-20  
**Site:** zeepack.co  
**Purpose:** Full codebase audit before Google Merchant Center configuration

---

## Phase 1: Stack Discovery

### Framework & Architecture
- **Type:** Single-repo (monorepo nahi, ek hi Next.js project hai)
- **Frontend framework:** Next.js 16.2.2 — App Router (Server Components)
- **UI layer:** React 19, TypeScript, Tailwind CSS v4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Backend:** Koi separate backend nahi. API sirf ek route hai: `src/app/api/forms/route.ts` (form submissions only)
- **Email:** Nodemailer + SMTP (Gmail) — Resend nahi (README outdated hai)
- **Database:** Koi database nahi — sab data TypeScript files mein hardcoded hai

### Deployment
- **Platform:** **Vercel** (confirmed — `.vercel/project.json` mein `projectId: "prj_5J3eKWTTouTqX0IeppTisfNcbyJL"` exist karta hai)
- **vercel.json:** Exist nahi karta (Vercel auto-detects Next.js)
- **Domain:** zeepack.co

### Folder Structure (2-level, node_modules excluded)
```
zeepack/
├── public/
│   ├── brand/
│   ├── images/
│   ├── ZEE Images/
│   ├── og-default.jpg
│   └── google70275a70604fffc8.html   ← Google Search Console verified
├── src/
│   ├── app/
│   │   ├── api/forms/route.ts
│   │   ├── products/[slug]/page.tsx
│   │   ├── products/styles/[slug]/page.tsx
│   │   ├── products/candle-packaging/page.tsx
│   │   ├── industries/[slug]/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── [slug]/page.tsx           ← Location & catalog pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── [other static pages...]
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/                          ← Sab product data yahan hai
│   │   ├── categories.ts
│   │   ├── catalog.ts
│   │   ├── industries.ts
│   │   ├── locations.ts
│   │   ├── product-styles.ts
│   │   ├── site.ts
│   │   ├── faqs.ts
│   │   └── testimonials.ts
│   └── lib/
│       ├── seo.ts
│       ├── form-mail.ts
│       ├── form-client.ts
│       └── utils.ts
├── next.config.ts
├── package.json
└── .env.example
```

---

## Phase 2: Products Data Source

### Data kahan hai?
Koi database, headless CMS, ya external API nahi hai. **Sab data TypeScript static files mein** `src/data/` folder ke andar hai:

| File | Kya hai | Count |
|------|---------|-------|
| `src/data/categories.ts` | Main product categories | **29 categories** |
| `src/data/product-styles.ts` | Har category ke styles/variants | **~300+ styles** |
| `src/data/catalog.ts` | Cereal-specific SEO landing pages + blog | **36 content pages + 7 blog posts** |
| `src/data/industries.ts` | Industry-specific pages | **60+ industries** |
| `src/data/locations.ts` | City/state location pages | **~100+ locations** |
| `src/data/site.ts` | Site config, navigation, stats | — |

### Routes jo products serve karte hain
- `/products/[slug]` → `src/app/products/[slug]/page.tsx` (categories.ts se data)
- `/products/styles/[slug]` → `src/app/products/styles/[slug]/page.tsx` (product-styles.ts se)
- `/[slug]` → `src/app/[slug]/page.tsx` (catalog.ts se — cereal pages)

### Environment Variables
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@zeecustomboxes.com
SMTP_PASS=               ← Production mein set karna hai
SMTP_FROM_NAME=ZEE Pack
SMTP_FROM_EMAIL=info@zeecustomboxes.com
SMTP_TO=shanimazhar82@gmail.com
```
**Database ya CMS ka koi env var nahi** — confirm karta hai ke sab data static hai.

---

## Phase 3: Sample Product Schema

### Category Type (`src/data/categories.ts`)
```typescript
type Category = {
  slug: string;           // "rigid-boxes"
  name: string;           // "Luxury Rigid Boxes"
  shortDescription: string;
  intro: string;
  image: string;          // "/images/zee/rigid-lid-box.jpg"
  type: "boxes" | "accessories" | "sustainable";
  heroLabel: string;
  keyFeatures: string[];
  materials: string[];    // ["Rigid chipboard", "Art paper wraps", ...]
  finishes: string[];     // ["Foil stamping", "Embossing", ...]
  variants: string[];     // ["Magnetic rigid box", "Drawer rigid box", ...]
  industries: string[];
  seoHeading: string;
  seoBody: string;
  faq: Array<{ question: string; answer: string }>;
}
```

### Sample Product — "Luxury Rigid Boxes"
```json
{
  "slug": "rigid-boxes",
  "name": "Luxury Rigid Boxes",
  "shortDescription": "Premium presentation boxes with refined structure, tactile finishes, and elevated unboxing impact.",
  "intro": "Luxury rigid boxes are designed for brands that need presence, precision, and a memorable reveal...",
  "image": "/images/zee/rigid-lid-box.jpg",
  "type": "boxes",
  "heroLabel": "Signature packaging",
  "keyFeatures": [
    "Heavy-duty board construction",
    "Lift-off, hinged, and magnetic closure formats",
    "Custom inserts for secure product positioning",
    "High-end wraps for refined shelf presence"
  ],
  "materials": ["Rigid chipboard", "Art paper wraps", "Textured specialty paper", "Recycled-content board options"],
  "finishes": ["Foil stamping", "Embossing", "Debossing", "Soft-touch lamination", "Spot UV"],
  "variants": ["Magnetic rigid box", "Drawer rigid box", "Shoulder neck box", "Lift-off lid box"],
  "industries": ["Cosmetics", "Jewelry", "Fashion", "Premium gifting"]
}
```

**Note:** Koi `price`, `sku`, `gtin`, ya `weight` field nahi hai data mein.

---

## Phase 3: Pricing Model Check

### Price/Quote Fields Search Results
- **`categories.ts`:** Koi numeric `price` field nahi
- **`product-styles.ts`:** Koi numeric `price` field nahi
- **`catalog.ts`:** Koi `price` field nahi — body text mein sirf "price point" phrase aya ek baar
- **`site.ts`:** `homeStats` mein sirf `"Low MOQ"` mention hai, koi number nahi

### Site ka Pricing Model
**100% Quote-Only business.** Har product page par CTAs hain:
- "Request a Quote" → `/quote`
- "Get a Quote" → `/contact`
- Quote form submissions → email via SMTP

### ⚠️ Important Discovery: Schema.org mein Price Already Exist Karta Hai
`src/app/products/[slug]/page.tsx` (line 176) aur `src/app/products/styles/[slug]/page.tsx` (line 92) mein:

```typescript
const productSchema = buildProductSchema({
  name: category.name,
  // ...
  offers: {
    price: "0.30",          // ← Hardcoded placeholder
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { name: "Pricing Note", value: "Starting from $0.30 per piece" },
    // ...
  ],
});
```

**Matlab:** JSON-LD structured data mein `$0.30` already inject ho raha hai — lekin:
1. Yeh **page par visually nahi dikhta** (koi `<p>Starting from $0.30</p>` nahi hai)
2. Yeh ek uniform placeholder hai — real pricing product ke type, quantity, finish ke hisab se vary karti hai

### Cart/Checkout
**Koi cart, checkout, ya add-to-cart nahi.** Codebase mein "cart", "checkout", "basket", "addToCart" ke liye grep kiya — zero results.

---

## Phase 4: SEO & Structured Data

### Schema.org Structured Data

| Schema Type | Kahan inject hota hai | Status |
|------------|----------------------|--------|
| `Organization` | `src/app/layout.tsx` (global) + homepage | ✅ Active |
| `LocalBusiness` | `src/app/layout.tsx` (global) | ✅ Active |
| `WebSite` | `src/app/layout.tsx` (global) | ✅ Active |
| `Product` | `/products/[slug]` + `/products/styles/[slug]` | ✅ Active (price: "$0.30") |
| `Service` | `/products/[slug]` + `/products/styles/[slug]` | ✅ Active |
| `BreadcrumbList` | `/products/[slug]` + `/products/styles/[slug]` | ✅ Active |
| `FAQPage` | Homepage, contact page, product pages | ✅ Active |

**Schema builder location:** `src/lib/seo.ts`  
No `next-seo` ya `react-helmet` — sab custom Next.js Metadata API + manual `<script type="application/ld+json">` blocks.

### Sitemap
✅ **Auto-generated** via `src/app/sitemap.ts` — Next.js built-in `MetadataRoute.Sitemap`

Sitemap covers:
- Static pages (home, about, contact, quote, etc.)
- `/products/[slug]` — 29 category pages
- `/products/styles/[slug]` — ~300+ style pages
- `/industries/[slug]` — 60+ industry pages
- `/[locationSlug]` — 100+ location pages
- `/custom-packaging-usa`

Accessible at: `https://zeepack.co/sitemap.xml`

### robots.txt
✅ **Auto-generated** via `src/app/robots.ts`

```
User-agent: *
Allow: /
Disallow: /thank-you/
Sitemap: https://zeepack.co/sitemap.xml
```

### Google Search Console
✅ **Already verified** — `public/google70275a70604fffc8.html` exist karta hai (verification file)

---

## Phase 5: Final Summary Report

| Field | Value |
|-------|-------|
| **Stack** | Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 |
| **Hosting** | Vercel (project ID: `prj_5J3eKWTTouTqX0IeppTisfNcbyJL`) |
| **Products storage** | Static TypeScript — `src/data/categories.ts` (29 categories), `src/data/product-styles.ts` (~300+ styles) |
| **Products count** | ~330+ unique product/style pages (29 categories × avg 10+ styles each) |
| **Pricing model currently** | **Quote-only** — koi visible price nahi, lekin JSON-LD mein `$0.30` hardcoded placeholder already hai |
| **Cart/Checkout** | ❌ Nahi hai |
| **Google Search Console** | ✅ Verified |
| **Sitemap** | ✅ Auto-generated at `/sitemap.xml` |
| **robots.txt** | ✅ Auto-generated |
| **Structured data** | ✅ Product schema (with $0.30 price), Organization, LocalBusiness, FAQPage, BreadcrumbList active |

---

## Google Merchant Center ke liye Key Issues & Recommendations

### Issue 1: Price visually page par nahi dikhti
**Problem:** JSON-LD mein `price: "0.30"` inject ho raha hai lekin page par koi visible price text nahi hai.  
**GMC requirement:** Price schema aur page pe visible price match karni chahiye.

**Fix karne ke liye files:**
- `src/app/products/[slug]/page.tsx` — product hero section mein "Starting from $0.30/piece" text add karo
- `src/app/products/styles/[slug]/page.tsx` — same

### Issue 2: Per-product pricing nahi, ek uniform placeholder hai
**Problem:** Sab 330+ products pe same `$0.30` price hai — Merchant Center mein alag alag categories ki actual starting prices better perform karengi.

**Fix karne ke liye files:**
- `src/data/categories.ts` — har category mein `startingFromPrice: number` field add karo (e.g., rigid boxes $2.50, tissue paper $0.15, etc.)
- `src/app/products/[slug]/page.tsx` (line ~176) — hardcoded `"0.30"` ko `category.startingFromPrice.toString()` se replace karo
- `src/lib/seo.ts` — `buildProductSchema()` function already supports `offers` parameter, koi change nahi chahiye

### Issue 3: Google Merchant Center Product Feed
**Problem:** GMC ke liye Shopping Ads run karne hetu ek product feed chahiye (XML ya Google Sheets format).  
Abhi koi `/api/merchant-feed.xml` route nahi hai.

**Naya file banana hoga:**
- `src/app/api/merchant-feed/route.ts` — categories.ts se data padhkar Google Merchant Center compatible XML feed generate karo

Required feed fields per GMC spec:
```
id, title, description, link, image_link, price, availability, 
condition, brand, google_product_category
```

### Issue 4: GTIN / MPN
Custom packaging mein standard GTIN nahi hoti. GMC pe `identifier_exists: no` set karna hoga feed mein.

---

## Quick Reference: Exact Files for Changes

| Change | File |
|--------|------|
| Visible price on product pages | `src/app/products/[slug]/page.tsx` |
| Visible price on style pages | `src/app/products/styles/[slug]/page.tsx` |
| Per-category starting prices | `src/data/categories.ts` — `startingFromPrice` field add karo |
| Schema price update | `src/app/products/[slug]/page.tsx` line 177 |
| Product feed API route (naya) | `src/app/api/merchant-feed/route.ts` |
| Schema builder (koi change nahi chahiye) | `src/lib/seo.ts` — `buildProductSchema()` already ready hai |
