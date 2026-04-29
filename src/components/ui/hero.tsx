import Image from "next/image";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type HeroProps = {
  trustCues: string[];
};

export function Hero({ trustCues }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-5 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_16%_10%,rgba(198,169,114,0.18),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(139,125,107,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_72%)]" />

      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,169,114,0.35)] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-taupe)] shadow-[0_10px_30px_rgba(17,17,17,0.05)] backdrop-blur">
            <Sparkles className="size-4 text-[var(--color-gold)]" />
            Luxury custom packaging
          </span>

          <h1 className="mt-5 max-w-[13ch] font-display text-[3.15rem] leading-[0.88] tracking-[-0.05em] text-[var(--color-primary)] sm:text-[3.8rem] lg:text-[4.15rem]">
            Premium Custom Packaging
            <br />
            That Elevates Your Brand
          </h1>

          <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-[var(--color-muted)]">
            Designed for brands that care about presentation, structure, and
            long-term perception.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/quote"
              variant="secondary"
              icon={<ArrowRight className="size-4" />}
            >
              Get a Custom Quote
            </Button>
            <Button href="/products" variant="ghost">
              Explore Packaging
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustCues.map((cue) => (
              <div
                key={cue}
                className="inline-flex items-center gap-3 rounded-full border border-[rgba(17,17,17,0.08)] bg-white/82 px-4 py-3 text-sm text-[var(--color-primary)] shadow-[0_10px_24px_rgba(17,17,17,0.045)]"
              >
                <BadgeCheck className="size-4 text-[var(--color-gold)]" />
                <span>{cue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="editorial-image-frame rounded-[34px] p-3 sm:p-4 lg:p-4">
            <div className="relative min-h-[400px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(248,245,239,0.98),rgba(238,230,218,0.9))] sm:min-h-[500px] lg:min-h-[610px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(255,255,255,0.9),rgba(255,255,255,0.18)_34%,transparent_64%),radial-gradient(circle_at_54%_62%,rgba(198,169,114,0.1),transparent_38%)]" />
              <div className="pointer-events-none absolute inset-x-[10%] bottom-[7%] h-[10%] rounded-full bg-[rgba(17,17,17,0.1)] blur-3xl" />

              <Image
                src="/images/clean/retail-ready-packaging-1.webp"
                alt="Retail-ready premium packaging hero visual for ZEEPACK."
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-2 sm:p-3 lg:p-4 drop-shadow-[0_34px_78px_rgba(17,17,17,0.18)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
