import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(198,169,114,0.22)] bg-[linear-gradient(135deg,rgba(17,17,17,0.98),rgba(33,28,24,0.94))] px-6 py-10 text-white shadow-[0_32px_80px_rgba(17,17,17,0.20)] sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,169,114,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.68)]">
                Premium packaging starts here
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.78)]">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={primaryHref}
                variant="secondary"
                icon={<ArrowRight className="size-4" />}
              >
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
