import { BadgeCheck, Clock3, PackageCheck, RotateCcw, Ruler, Sparkles, Truck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const trustItems = [
  {
    title: "Low minimum orders available",
    icon: PackageCheck,
  },
  {
    title: "Custom sizes and inserts",
    icon: Ruler,
  },
  {
    title: "Free shipping to USA, CA, UK & AU",
    icon: Truck,
  },
  {
    title: "15-day returns accepted",
    icon: RotateCcw,
  },
  {
    title: "Typical response within 24 hours",
    icon: Clock3,
  },
  {
    title: "Premium finishing options",
    icon: Sparkles,
  },
];

export function ProductTrustStrip() {
  return (
    <section className="relative -mt-10 pb-4 sm:-mt-12">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(17,17,17,0.07)] bg-white shadow-[0_2px_4px_rgba(17,17,17,0.04),0_20px_48px_rgba(17,17,17,0.08)] p-7 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:items-center">
              {/* Pricing note */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[var(--color-gold)] opacity-70" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
                    Pricing & Trust
                  </p>
                </div>
                <p className="mt-3.5 text-[1rem] leading-[1.75] text-[var(--color-primary)] sm:text-[1.05rem]">
                  Starting from{" "}
                  <span className="font-bold text-[var(--color-cta)]">$0.30 per piece</span>
                  . Final pricing varies by quantity, size, material, printing, and finishing options.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[rgba(198,169,114,0.10)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-taupe)]">
                  <BadgeCheck className="size-4 text-[var(--color-gold)]" />
                  Pricing for quote guidance
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {trustItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-[rgba(17,17,17,0.07)] bg-[linear-gradient(145deg,rgba(248,245,239,0.88),rgba(255,255,255,0.94))] px-4 py-4 shadow-[0_4px_16px_rgba(17,17,17,0.04)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-[rgba(198,169,114,0.12)]">
                      <item.icon className="size-4 text-[var(--color-gold)]" />
                    </div>
                    <p className="mt-3 text-[13px] font-semibold leading-5 text-[var(--color-primary)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
