import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const stats = [
  { value: "250+", label: "Brand projects" },
  { value: "24 hrs", label: "Quote response" },
  { value: "Low MOQ", label: "Flexible runs" },
];

const marqueeItems = [
  "Luxury Rigid Boxes",
  "Custom Mailer Boxes",
  "Candle Packaging",
  "Cosmetic Boxes",
  "Jewelry Packaging",
  "Folding Cartons",
  "Premium Paper Bags",
  "Custom Tissue Paper",
  "Packaging Sleeves",
  "Sustainable Options",
];

const trustBadges = [
  "Custom sizes on every format",
  "Premium finishes on every order",
  "Low MOQ available",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-0 pt-6 sm:pt-10">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_8%_-10%,rgba(198,169,114,0.20),transparent),radial-gradient(ellipse_40%_50%_at_96%_10%,rgba(207,74,38,0.07),transparent)]" />

      <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-20">

        {/* ── Left column: Copy ── */}
        <div className="relative z-10">

          {/* Eyebrow badge */}
          <div className="hero-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,169,114,0.38)] bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)] shadow-[0_6px_20px_rgba(17,17,17,0.06)] backdrop-blur">
              <Sparkles className="size-3.5 text-[var(--color-gold)]" />
              Luxury Custom Packaging
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-in-headline mt-6 font-display leading-[0.88] tracking-[-0.05em] text-[var(--color-primary)]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "0.08s" }}
          >
            <span className="block">Premium</span>
            <span className="block italic text-[var(--color-gold)]">Packaging</span>
            <span className="block">That Defines</span>
            <span className="block">Your Brand.</span>
          </h1>

          {/* Description */}
          <p
            className="hero-in mt-7 max-w-[44ch] text-[1.05rem] leading-[1.8] text-[var(--color-muted)]"
            style={{ animationDelay: "0.16s" }}
          >
            Rigid boxes, mailers, and cartons cut to your exact size and spec — foil, emboss, and soft-touch finishing, low minimums, and a quote back within 24 hours.
          </p>

          {/* CTAs */}
          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.22s" }}>
            <Button
              href="/quote"
              variant="secondary"
              icon={<ArrowRight className="size-4" />}
              className="px-6 py-3.5 text-[0.92rem]"
            >
              Get a Custom Quote
            </Button>
            <Button href="/customize" variant="ghost" className="px-6 py-3.5 text-[0.92rem]">
              Customize Your Box
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className="hero-in mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
            style={{ animationDelay: "0.3s" }}
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-[var(--color-gold)]" />
                <span className="text-[13px] text-[var(--color-muted)]">{badge}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="hero-in mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-[rgba(17,17,17,0.07)] pt-8"
            style={{ animationDelay: "0.36s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[2rem] leading-none tracking-[-0.04em] text-[var(--color-primary)]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: Image ── */}
        <div className="hero-in-frame relative" style={{ animationDelay: "0.12s" }}>
          {/* Main image frame */}
          <div className="relative rounded-[40px] border border-[rgba(17,17,17,0.07)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(238,230,218,0.90))] p-4 shadow-[0_40px_80px_rgba(17,17,17,0.13),0_4px_8px_rgba(17,17,17,0.06)] sm:p-5">
            <div className="relative min-h-[400px] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,rgba(248,245,239,0.98),rgba(238,230,218,0.95))] sm:min-h-[520px] lg:min-h-[580px]">
              {/* Inner ambient light */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_20%,rgba(255,255,255,0.92),rgba(255,255,255,0.18)_34%,transparent_60%),radial-gradient(circle_at_14%_80%,rgba(198,169,114,0.16),transparent_28%)]" />
              {/* Ground shadow */}
              <div className="pointer-events-none absolute inset-x-[12%] bottom-[3%] h-[10%] rounded-full bg-[rgba(17,17,17,0.10)] blur-3xl" />
              <Image
                src="/images/zee/product-rigid-box.jpg"
                alt="Premium custom packaging boxes by ZEEPACK — luxury presentation packaging for modern brands"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Floating card: Low MOQ */}
            <div className="float-card absolute -left-5 top-10 z-10 sm:-left-8">
              <div className="w-[168px] rounded-[20px] border border-[rgba(17,17,17,0.07)] bg-white p-4 shadow-[0_20px_48px_rgba(17,17,17,0.12)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(198,169,114,0.14)]">
                    <BadgeCheck className="size-5 text-[var(--color-gold)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-[var(--color-primary)]">Low MOQ</p>
                    <p className="text-[10px] leading-4 text-[var(--color-muted)]">Flexible runs available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card: Premium Finishes */}
            <div className="float-card-delayed absolute -right-5 bottom-14 z-10 sm:-right-8">
              <div className="w-[190px] rounded-[20px] border border-[rgba(17,17,17,0.07)] bg-white p-4 shadow-[0_20px_48px_rgba(17,17,17,0.12)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(207,74,38,0.10)]">
                    <Sparkles className="size-5 text-[var(--color-cta)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-[var(--color-primary)]">Premium Finishes</p>
                    <p className="text-[10px] leading-4 text-[var(--color-muted)]">Foil · Emboss · UV</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute right-4 top-4 z-10 sm:right-5 sm:top-5">
              <div className="rounded-[16px] border border-[rgba(17,17,17,0.07)] bg-white/96 px-3.5 py-2.5 shadow-[0_10px_28px_rgba(17,17,17,0.10)] backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="mt-1 text-[10px] font-semibold text-[var(--color-primary)]">5.0 by premium brands</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Category marquee strip ── */}
      <div className="mt-14 overflow-hidden border-y border-[rgba(17,17,17,0.07)] bg-white/60 py-4 backdrop-blur-sm">
        <div className="flex w-max items-center marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <Link
              key={i}
              href="/products"
              className="flex shrink-0 items-center gap-4 px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)] transition hover:text-[var(--color-cta)]"
            >
              {item}
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)] opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
