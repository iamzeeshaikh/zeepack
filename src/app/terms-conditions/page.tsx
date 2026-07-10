import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions | ZEEPACK",
  description: "ZEEPACK terms and conditions — website use, quote and order process, intellectual property, liability limits, and governing law for custom packaging services.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: May 2026</p>

        <div className="mt-8 grid gap-8 text-base leading-8 text-[var(--color-muted)]">

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or using <strong className="text-[var(--color-ink)]">zeepack.co</strong> (&ldquo;the
              Website&rdquo;), submitting a quote request, or placing an order with ZEEPACK, you agree to be
              bound by these Terms &amp; Conditions. If you do not agree, please do not use the Website
              or our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">2. Services</h2>
            <p className="mt-2">
              ZEEPACK provides custom packaging design, manufacturing, and fulfillment services.
              All products are custom-manufactured to order based on specifications confirmed
              between ZEEPACK and the customer during the quoting and approval process.
              Website content — including product descriptions, images, pricing indications, and
              specifications — is for informational purposes only and does not constitute a binding offer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">3. Quotes and Orders</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                A quote submitted through our website is a <strong className="text-[var(--color-ink)]">request for pricing</strong>,
                not a confirmed order.
              </li>
              <li>
                An order is only confirmed once ZEEPACK sends a written order confirmation and
                the customer approves the artwork proof and final specifications.
              </li>
              <li>
                Pricing, lead times, and production details are finalized during the quoting process
                and may differ from any indicative figures shown on the Website.
              </li>
              <li>
                ZEEPACK reserves the right to decline any quote request or order at its discretion.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">4. Artwork and Design Approval</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Customers are responsible for reviewing all artwork proofs, dimensions, finishes,
                and structural specifications before approving production.
              </li>
              <li>
                Once production approval is given, changes to artwork or specifications may not
                be possible and may result in additional charges.
              </li>
              <li>
                ZEEPACK is not responsible for errors in approved proofs — including typos,
                color variations inherent to the printing process, or incorrect dimensions
                approved by the customer.
              </li>
              <li>
                Customers warrant that submitted artwork does not infringe any third-party
                intellectual property rights. ZEEPACK accepts no liability for copyright or
                trademark infringement arising from customer-supplied artwork.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">5. Pricing and Payment</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>All prices are quoted in US Dollars (USD) unless otherwise stated.</li>
              <li>Payment terms are as specified in the order confirmation.</li>
              <li>
                ZEEPACK reserves the right to update pricing for future quotes without notice.
                Confirmed orders are not affected by subsequent price changes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">6. Shipping and Delivery</h2>
            <p className="mt-2">
              Shipping terms, estimated delivery timelines, and carrier responsibilities are governed
              by our{" "}
              <a href="/shipping-policy" className="text-[var(--color-primary)] underline underline-offset-4">
                Shipping Policy
              </a>
              , which forms part of these Terms &amp; Conditions. ZEEPACK is not liable for delays
              caused by carriers, customs, natural events, or circumstances beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">7. Returns and Refunds</h2>
            <p className="mt-2">
              Returns, exchanges, and refunds are governed by our{" "}
              <a href="/refund-returns-policy" className="text-[var(--color-primary)] underline underline-offset-4">
                Refund &amp; Returns Policy
              </a>
              , which forms part of these Terms &amp; Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">8. Intellectual Property</h2>
            <p className="mt-2">
              All content on this Website — including text, images, logos, graphics, and design layouts —
              is the property of ZEEPACK or its licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works from
              Website content without our prior written consent.
            </p>
            <p className="mt-3">
              Artwork and design files submitted by customers remain the property of the customer.
              By submitting artwork, you grant ZEEPACK a limited license to use it solely for the
              purpose of fulfilling your order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">9. Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, ZEEPACK&rsquo;s total liability for any claim
              arising from these Terms or the use of our Website or services shall not exceed the
              amount paid by the customer for the specific order giving rise to the claim.
            </p>
            <p className="mt-3">
              ZEEPACK is not liable for any indirect, incidental, special, or consequential damages,
              including but not limited to loss of profits, business interruption, or loss of data,
              even if advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">10. Disclaimer of Warranties</h2>
            <p className="mt-2">
              The Website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
              without warranties of any kind, express or implied. ZEEPACK does not warrant that the
              Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">11. Governing Law</h2>
            <p className="mt-2">
              These Terms &amp; Conditions are governed by and construed in accordance with the
              laws of the <strong className="text-[var(--color-ink)]">State of Oregon, United States</strong>.
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
              of the courts located in Oregon.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">12. Changes to These Terms</h2>
            <p className="mt-2">
              ZEEPACK may update these Terms &amp; Conditions at any time. Changes will be posted
              on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of the Website
              or our services after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">13. Contact</h2>
            <p className="mt-2">
              For questions about these Terms &amp; Conditions, contact us at{" "}
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
