import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund & Returns Policy | ZEEPACK",
  description: "ZEEPACK returns and refund policy — 15-day return window on new/unopened custom packaging orders across the USA, Canada, UK, and Australia.",
  path: "/refund-returns-policy",
});

export default function RefundReturnsPolicyPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Refund &amp; Returns Policy</h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: May 2026</p>

        <div className="mt-8 grid gap-8 text-base leading-8 text-[var(--color-muted)]">

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Returns Accepted</h2>
            <p className="mt-2">
              ZEEPACK accepts returns for both <strong className="text-[var(--color-ink)]">defective and non-defective products</strong>.
              Exchanges are also accepted. Eligible returns must be initiated within
              <strong className="text-[var(--color-ink)]"> 15 days</strong> of the delivery date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Eligible Countries</h2>
            <p className="mt-2">
              This return policy applies to orders shipped to the following countries:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>United States</li>
              <li>Canada</li>
              <li>United Kingdom</li>
              <li>Australia</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Product Condition</h2>
            <p className="mt-2">
              Returns are accepted for <strong className="text-[var(--color-ink)]">new products only</strong> —
              items that are unopened and have never been used. Products that have been opened,
              used, or altered are not eligible for return.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Return Window</h2>
            <p className="mt-2">
              Return requests must be submitted within
              <strong className="text-[var(--color-ink)]"> 15 days</strong> of the confirmed delivery date.
              Requests submitted after this period will not be accepted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Return Method</h2>
            <p className="mt-2">
              Approved returns are processed via <strong className="text-[var(--color-ink)]">drop-off at a designated carrier location</strong>.
              Once your return is approved, we will provide the return address and carrier instructions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Restocking Fee</h2>
            <p className="mt-2">
              There is <strong className="text-[var(--color-ink)]">no restocking fee</strong> for eligible returns.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Refund Processing Time</h2>
            <p className="mt-2">
              Once the returned item is received and inspected, refunds are processed within
              <strong className="text-[var(--color-ink)]"> 15 business days</strong>.
              Refunds are issued in <strong className="text-[var(--color-ink)]">USD</strong> to the original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Custom Orders</h2>
            <p className="mt-2">
              Custom-printed packaging approved for production is subject to the standard return window above.
              Please review all proofs, dimensions, and artwork carefully before approving production
              to avoid issues that fall outside return eligibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">How to Start a Return</h2>
            <p className="mt-2">
              To initiate a return or exchange, contact us within the 15-day window at{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>{" "}
              or call{" "}
              <a href="tel:+15033580443" className="text-[var(--color-primary)] underline underline-offset-4">
                (503) 358-0443
              </a>{" "}
              with your order number, photos of the items, and reason for return.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
