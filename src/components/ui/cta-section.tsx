import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  eyebrow?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  eyebrow = "Premium packaging starts here",
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-[#0e0d0b] px-8 py-14 text-white shadow-[0_40px_100px_rgba(17,17,17,0.28)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Texture & ambient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(198,169,114,0.22),transparent_50%),radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(232,96,58,0.12),transparent_50%)]" />

          {/* Gold dot grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(198,169,114,1) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Left: Text */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                  <Sparkles className="size-3.5 text-[var(--color-gold)]" />
                  {eyebrow}
                </div>

                <h2 className="mt-6 font-display text-[2.6rem] leading-[0.94] tracking-[-0.04em] sm:text-[3.4rem] lg:text-[4rem]">
                  {title}
                </h2>

                <p className="mt-5 max-w-xl text-[1rem] leading-[1.8] text-white/65">
                  {description}
                </p>
              </div>

              {/* Right: CTAs */}
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  href={primaryHref}
                  variant="secondary"
                  icon={<ArrowRight className="size-4" />}
                  className="justify-center px-7 py-4 text-[0.92rem]"
                >
                  {primaryLabel}
                </Button>
                <Button
                  href={secondaryHref}
                  variant="ghost"
                  className="justify-center border-white/15 bg-white/8 px-7 py-4 text-[0.92rem] text-white hover:border-white/28 hover:bg-white/14 hover:shadow-none"
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>

            {/* Bottom stats strip */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
              {[
                { value: "250+", label: "Brand projects" },
                { value: "24 hrs", label: "Typical quote response" },
                { value: "Low MOQ", label: "Flexible runs" },
                { value: "USA", label: "Nationwide support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[1.8rem] leading-none tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/44">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
