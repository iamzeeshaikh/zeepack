import { BadgeCheck, Clock3, PackageCheck, Ruler, Sparkles } from "lucide-react";

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
    <section className="relative -mt-8 pb-4 sm:-mt-10">
      <Container>
        <Reveal>
          <div className="surface-card overflow-hidden rounded-[30px] p-6 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-taupe)]">
                  Pricing & Trust
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--color-primary)] sm:text-lg">
                  Starting from $0.30 per piece. Final pricing varies by quantity, size,
                  material, printing, and finishing options.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trustItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.9),rgba(255,255,255,0.92))] px-4 py-4 shadow-[0_10px_24px_rgba(17,17,17,0.04)]"
                  >
                    <div className="inline-flex rounded-full border border-[rgba(17,17,17,0.08)] bg-white/88 p-2">
                      <item.icon className="size-4 text-[var(--color-gold)]" />
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-primary)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[rgba(198,169,114,0.1)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              <BadgeCheck className="size-4 text-[var(--color-gold)]" />
              Pricing shown for snippet eligibility and quote guidance
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
