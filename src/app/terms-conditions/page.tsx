import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions | The Cereal Boxes",
  description: "Review the terms and conditions for The Cereal Boxes website and packaging inquiries.",
  path: "/terms-conditions/",
});

export default function TermsConditionsPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Terms &amp; Conditions</h1>
        <div className="mt-6 grid gap-4 text-base leading-8 text-[var(--color-muted)]">
          <p>All website content is provided for informational and marketing purposes related to custom cereal packaging and quote generation.</p>
          <p>Quotes, timelines, production details, and final packaging specifications are confirmed separately during the project approval process.</p>
          <p>Artwork, custom dimensions, and packaging concepts remain subject to review for feasibility, compliance, and legal safety before production.</p>
          <p>Use of this website does not create a production contract until terms are accepted and confirmed in writing.</p>
        </div>
      </Container>
    </section>
  );
}

