import Link from "next/link";

import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You | ZEEPACK",
  description: "Thank you for contacting ZEEPACK.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="section-space">
      <Container>
        <div className="hero-shell px-8 py-12 text-center sm:px-12">
          <p className="chip">Request Received</p>
          <h1 className="mt-6 text-5xl text-[var(--color-ink)] sm:text-6xl">
            Thank you for contacting ZEEPACK.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Your submission is on its way to our team. We will review your packaging requirements and follow up through the details you provided.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="chip">
              Submit another quote
            </Link>
            <Link href="/products" className="chip">
              Explore packaging
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
