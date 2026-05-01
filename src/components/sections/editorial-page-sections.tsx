import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type HeroMetric = {
  label: string;
  value: string;
};

type HeroHighlight = {
  text: string;
  icon?: LucideIcon;
};

type EditorialHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  highlights?: Array<string | HeroHighlight>;
  metrics?: HeroMetric[];
  aside?: ReactNode;
  titleClassName?: string;
};

type IconListItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type VisualSpotlightProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
  stats?: Array<
    | string
    | {
        title: string;
        description?: string;
        icon?: LucideIcon;
      }
  >;
};

type NumberedStep = {
  title: string;
  description: string;
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  image,
  highlights = [],
  metrics = [],
  aside,
  titleClassName,
}: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_top_left,_rgba(198,169,114,0.2),_transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,245,239,0.98))] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_82%_22%,rgba(198,169,114,0.12),transparent_24%)]" />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-taupe)]">
              {eyebrow}
            </p>
            <h1
              className={cn(
                "mt-5 font-display text-[2.95rem] leading-[0.92] tracking-[-0.05em] text-[var(--color-primary)] sm:text-[4rem] lg:text-[4.8rem]",
                titleClassName,
              )}
            >
              {title}
            </h1>
            <div className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              {description}
            </div>

            {highlights.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((highlight, index) => {
                  const item =
                    typeof highlight === "string"
                      ? { text: highlight }
                      : highlight;

                  return (
                    <span
                      key={`${item.text}-${index}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.08)] bg-white/88 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-taupe)] shadow-[0_10px_26px_rgba(17,17,17,0.04)]"
                    >
                      {item.icon ? (
                        <item.icon className="size-4 shrink-0 text-[var(--color-gold)]" />
                      ) : null}
                      {item.text}
                    </span>
                  );
                })}
              </div>
            ) : null}

            {metrics.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <Reveal key={metric.label} delay={index * 0.05}>
                    <div className="rounded-[26px] border border-[rgba(17,17,17,0.07)] bg-white/84 px-5 py-5 shadow-[0_16px_38px_rgba(17,17,17,0.05)]">
                      <p className="font-display text-3xl leading-none text-[var(--color-primary)]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                        {metric.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <div className="editorial-image-frame rounded-[38px] p-4 sm:p-5">
              <div className="relative min-h-[420px] overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,rgba(248,245,239,0.98),rgba(238,230,218,0.92))] shadow-[0_28px_80px_rgba(17,17,17,0.12)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(255,255,255,0.92),rgba(255,255,255,0.12)_34%,transparent_62%),radial-gradient(circle_at_22%_82%,rgba(198,169,114,0.12),transparent_32%)]" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {aside ? (
              <div className="mt-6 rounded-[30px] border border-[rgba(17,17,17,0.08)] bg-white/84 p-6 shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
                {aside}
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function IconFeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  items: IconListItem[];
}) {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="surface-card h-full p-6">
                <item.icon className="size-6 text-[var(--color-gold)]" />
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VisualSpotlight({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
  stats = [],
}: VisualSpotlightProps) {
  return (
    <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,245,239,0.76))]">
      <Container
        className={cn(
          "grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center",
          reverse && "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
        )}
      >
        <Reveal className={cn(reverse && "lg:order-2")}>
          <div className="editorial-image-frame rounded-[34px] p-4 sm:p-5">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(248,245,239,0.98),rgba(238,230,218,0.92))]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={cn(reverse && "lg:order-1")}>
          <div className="surface-card p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl">
              {title}
            </h2>
            <div className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              {description}
            </div>

            {stats.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {stats.map((item, index) => {
                  const stat =
                    typeof item === "string"
                      ? { title: item }
                      : item;

                  return (
                    <div
                      key={`${stat.title}-${index}`}
                      className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.94),rgba(255,255,255,0.88))] px-5 py-5 shadow-[0_12px_28px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(17,17,17,0.07)]"
                    >
                      {stat.icon ? (
                        <stat.icon className="size-5 text-[var(--color-gold)]" />
                      ) : null}
                      <p className="mt-4 text-base font-semibold text-[var(--color-primary)]">
                        {stat.title}
                      </p>
                      {stat.description ? (
                        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                          {stat.description}
                        </p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function EditorialListSection({
  eyebrow,
  title,
  description,
  items,
  columns = 2,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  items: Array<{ title: string; body: string }>;
  columns?: 2 | 3;
}) {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <div
          className={cn(
            "mt-10 grid gap-6",
            columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="surface-card h-full p-7">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function NumberedStepsSection({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  steps: NumberedStep[];
}) {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="surface-card h-full p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface)] font-display text-2xl text-[var(--color-primary)]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function QuotePrompt({
  title,
  description,
  links,
}: {
  title: string;
  description: ReactNode;
  links?: Array<{ href: string; label: string }>;
}) {
  return (
    <div className="rounded-[30px] border border-[rgba(17,17,17,0.08)] bg-white/88 p-7 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
      <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
        <ArrowRight className="size-4 text-[var(--color-gold)]" />
        Project planning
      </div>
      <h3 className="mt-5 font-display text-4xl leading-[0.94] text-[var(--color-primary)]">
        {title}
      </h3>
      <div className="mt-5 text-base leading-8 text-[var(--color-muted)]">
        {description}
      </div>
      {links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-[rgba(17,17,17,0.08)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[rgba(198,169,114,0.3)] hover:text-[var(--color-gold)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
