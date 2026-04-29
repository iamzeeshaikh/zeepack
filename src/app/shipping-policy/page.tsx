import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shipping Policy | ZEEPACK",
  description: "Read the shipping policy for packaging orders from ZEEPACK.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Shipping Policy</h1>
        <div className="mt-6 grid gap-4 text-base leading-8 text-[var(--color-muted)]">
          <p>Shipping timelines vary based on project scope, quantity, printing complexity, finish requirements, and final delivery destination.</p>
          <p>Estimated turnaround and delivery expectations are discussed during the quoting process and confirmed before production begins.</p>
          <p>Transit timing can vary by carrier and destination. Expedited shipping may be available for selected projects upon request.</p>
          <p>Please review your shipping address and receiving requirements carefully during order confirmation.</p>
        </div>
      </Container>
    </section>
  );
}
