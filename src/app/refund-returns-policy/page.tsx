import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund / Returns Policy | ZEEPACK",
  description: "Review refund and returns information for packaging orders from ZEEPACK.",
  path: "/refund-returns-policy",
});

export default function RefundReturnsPolicyPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Refund / Returns Policy</h1>
        <div className="mt-6 grid gap-4 text-base leading-8 text-[var(--color-muted)]">
          <p>Because custom packaging is made to project specifications, returns are generally not accepted after production approval unless an error is confirmed.</p>
          <p>If there is an issue with a completed packaging order, contact us promptly with order details, photos, and a description of the concern so the issue can be reviewed.</p>
          <p>Refunds, credits, or replacement decisions depend on the approved specifications and the nature of the issue reported.</p>
          <p>Please review proofs, dimensions, and artwork carefully before approving production.</p>
        </div>
      </Container>
    </section>
  );
}
