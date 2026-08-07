// Real customer reviews only. Every entry here is shown on the product page
// AND feeds the Product schema's aggregateRating — fabricated entries are a
// Google Merchant Center misrepresentation trigger (this account has been
// suspended for it before), so nothing goes in this file unless an actual
// customer said it.
//
// productSlug must match a category slug from src/data/categories.ts.
// date is YYYY-MM-DD (approximate is fine). location is optional ("Austin, TX").

export type CustomerReview = {
  author: string;
  productSlug: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  location?: string;
};

export const customerReviews: CustomerReview[] = [];

export function getReviewsByProduct(slug: string): CustomerReview[] {
  return customerReviews.filter((review) => review.productSlug === slug);
}

export function getProductRating(
  slug: string,
): { ratingValue: string; reviewCount: number } | null {
  const reviews = getReviewsByProduct(slug);
  if (!reviews.length) return null;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    ratingValue: (Math.round(avg * 10) / 10).toFixed(1),
    reviewCount: reviews.length,
  };
}
