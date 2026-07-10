import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shipping Policy | ZEEPACK",
  description: "ZEEPACK shipping policy — free shipping to the USA, Canada, UK, and Australia on all custom packaging orders.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Shipping Policy</h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: July 2026</p>

        <div className="mt-8 grid gap-8 text-base leading-8 text-[var(--color-muted)]">

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Free Shipping</h2>
            <p className="mt-2">
              ZEEPACK offers <strong className="text-[var(--color-ink)]">free shipping</strong> on
              all custom packaging orders to the United States, Canada, United Kingdom, and Australia.
              No minimum order value is required to qualify for free shipping.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Order Cut-Off Time</h2>
            <p className="mt-2">
              Our order cut-off time is
              <strong className="text-[var(--color-ink)]"> 2:00 PM Pacific Standard Time (Los Angeles, GMT-08:00)</strong>.
              Orders confirmed before the cut-off begin handling the same business day;
              orders confirmed after the cut-off begin handling the next business day.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Handling Time</h2>
            <p className="mt-2">
              All ZEEPACK products are custom-manufactured to order. Handling time —
              from order confirmation and artwork approval to handoff to the carrier — is
              <strong className="text-[var(--color-ink)]"> 3 to 5 business days</strong>.
              Orders are fulfilled Monday through Saturday.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Transit Time</h2>
            <p className="mt-2">
              Once your order is handed to the carrier, estimated transit time to
              all shipping destinations is
              <strong className="text-[var(--color-ink)]"> 3 to 5 business days</strong>.
              Shipments are dispatched Monday through Saturday.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Total Estimated Delivery</h2>
            <p className="mt-2">
              Total estimated delivery time from order confirmation to arrival is
              <strong className="text-[var(--color-ink)]"> 6 to 10 business days</strong>.
              This covers both handling and transit. Exact timelines are confirmed during
              the quoting and approval process.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Shipping Area</h2>
            <p className="mt-2">
              We ship to the following countries:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong className="text-[var(--color-ink)]">United States</strong> — including Alaska and Hawaii</li>
              <li><strong className="text-[var(--color-ink)]">Canada</strong></li>
              <li><strong className="text-[var(--color-ink)]">United Kingdom</strong></li>
              <li><strong className="text-[var(--color-ink)]">Australia</strong></li>
            </ul>
            <p className="mt-2">
              For shipping enquiries to other countries, please contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Order Tracking</h2>
            <p className="mt-2">
              A tracking number is provided via email once your order has been dispatched.
              If you have not received tracking details within your confirmed handling window,
              contact us at{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Shipping Address</h2>
            <p className="mt-2">
              Please ensure your delivery address is accurate at the time of order confirmation.
              ZEEPACK is not responsible for delays caused by incorrect or incomplete addresses
              provided by the customer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Damaged or Lost Shipments</h2>
            <p className="mt-2">
              If your order arrives damaged or does not arrive within the estimated window,
              contact us within <strong className="text-[var(--color-ink)]">5 business days</strong> of
              the expected delivery date with photos of any damage so we can resolve the issue promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Contact</h2>
            <p className="mt-2">
              For shipping questions or rush order enquiries, reach us at{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>{" "}
              or call{" "}
              <a href="tel:+15033580443" className="text-[var(--color-primary)] underline underline-offset-4">
                (503) 358-0443
              </a>.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
