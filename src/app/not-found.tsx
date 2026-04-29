import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <div className="hero-shell px-8 py-12 text-center sm:px-12">
          <p className="chip">404</p>
          <h1 className="mt-6 text-5xl text-[var(--color-ink)] sm:text-6xl">
            That page could not be found.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            The page may have moved, the URL may be incorrect, or the content may now sit under a cleaner ZEEPACK route.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="chip">
              Go Home
            </Link>
            <Link href="/products" className="chip">
              Browse Products
            </Link>
            <Link href="/quote" className="chip">
              Get a Quote
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
