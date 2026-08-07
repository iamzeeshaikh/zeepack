import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { CustomerReview } from "@/data/reviews";

type ProductReviewsProps = {
  reviews: CustomerReview[];
  name: string;
};

/**
 * Visible customer reviews for a product category. Renders nothing when the
 * product has no reviews — the same entries feed the Product schema's
 * aggregateRating, and marked-up reviews must be visible on the page.
 */
export function ProductReviews({ reviews, name }: ProductReviewsProps) {
  if (!reviews.length) return null;

  const avg =
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10;

  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--color-gold)] opacity-70" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                  Customer Reviews
                </p>
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-[1.7rem] leading-tight text-[var(--color-primary)] sm:text-[2rem]">
                What customers say about {name.toLowerCase()}
              </h2>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < Math.round(avg)
                        ? "size-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                        : "size-4 text-[rgba(17,17,17,0.18)]"
                    }
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {avg.toFixed(1)} · {reviews.length}{" "}
                {reviews.length === 1 ? "review" : "reviews"}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={`${review.author}-${review.date}`}
              className="rounded-[24px] border border-[rgba(17,17,17,0.07)] bg-white p-6 shadow-[0_4px_16px_rgba(17,17,17,0.04)]"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < review.rating
                        ? "size-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]"
                        : "size-3.5 text-[rgba(17,17,17,0.18)]"
                    }
                  />
                ))}
              </div>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-[var(--color-ink-soft)]">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-5 text-sm font-bold text-[var(--color-primary)]">
                {review.author}
              </p>
              <p className="mt-1 text-[12px] text-[var(--color-muted)]">
                {review.location ? `${review.location} · ` : ""}
                {new Date(review.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
