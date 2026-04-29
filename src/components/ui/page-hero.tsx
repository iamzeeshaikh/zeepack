import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_top_left,_rgba(244,201,93,0.18),_transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,250,241,0.98))] py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-none text-[var(--color-ink)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {description}
          </p>
        </div>
        {aside ? (
          <div className="surface-card p-6 sm:p-7">
            {aside}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
