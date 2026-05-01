import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-5 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_16%_10%,rgba(198,169,114,0.18),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(139,125,107,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_72%)]" />

      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,169,114,0.35)] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-taupe)] shadow-[0_10px_30px_rgba(17,17,17,0.05)] backdrop-blur">
            <Sparkles className="size-4 text-[var(--color-gold)]" />
            Luxury custom packaging
          </span>

          <h1 className="mt-5 max-w-[9.2ch] font-display text-[2.95rem] leading-[0.9] tracking-[-0.05em] text-[var(--color-primary)] sm:max-w-[10.2ch] sm:text-[3.45rem] lg:max-w-[9.4ch] lg:text-[4rem] xl:max-w-[9.8ch] xl:text-[4.45rem]">
            <span className="block">Premium Custom Packaging</span>
            <span className="block">That Defines Your Brand</span>
          </h1>

          <p className="mt-5 max-w-lg text-[1rem] leading-7 text-[var(--color-muted)]">
            Structured, refined, and built for brands that care about presentation, consistency, and long-term perception.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </div>

        <div className="relative w-full">
          <div className="rounded-[36px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,230,218,0.88))] p-3 shadow-[0_28px_68px_rgba(17,17,17,0.1)] sm:p-4 lg:p-5">
            <div className="relative min-h-[390px] overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,rgba(248,245,239,0.98),rgba(238,230,218,0.92))] sm:min-h-[500px] lg:min-h-[610px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_28%,rgba(255,255,255,0.92),rgba(255,255,255,0.2)_34%,transparent_62%),radial-gradient(circle_at_18%_80%,rgba(198,169,114,0.14),transparent_32%)]" />
              <div className="pointer-events-none absolute inset-x-[10%] bottom-[7%] h-[10%] rounded-full bg-[rgba(17,17,17,0.11)] blur-3xl" />

              <Image
                src="/images/clean/retail-ready-packaging-1.webp"
                alt="Premium custom packaging boxes arranged for brand presentation"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-3 sm:p-4 lg:p-5 drop-shadow-[0_34px_78px_rgba(17,17,17,0.18)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
