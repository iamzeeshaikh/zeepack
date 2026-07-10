// Per-unit "from" pricing by packaging type. Custom packaging is bulk/quote in
// reality, but Merchant Center + a real cart need a concrete purchasable price,
// so each product carries a starting per-unit price consistent with the feed.
//
//   rigid / set-up / magnetic (heavy board)      -> $5.00
//   corrugated / cardboard / mailer / shipping    -> $1.00
//   kraft / paper / folding carton / small box    -> $0.75  (default)

export type PriceInput = {
  slug?: string;
  name?: string;
  title?: string;
  materials?: string[];
};

export function getUnitPrice(input: PriceInput): number {
  const text = [input.slug, input.name, input.title, ...(input.materials ?? [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (/\brigid\b|magnetic|set-?up box|chipboard|luxury rigid/.test(text)) return 5;
  if (/corrugat|cardboard|\bmailer\b|shipping box|moving box/.test(text)) return 1;
  return 0.75;
}

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

export const PRICE_CURRENCY = "USD";
