import Link from "next/link";
import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import {
  footerPopularSearches,
  footerProductLinks,
  footerLegalLinks,
  footerQuickLinks,
  siteConfig,
} from "@/data/site";

const packagingHighlights = [
  "Luxury Rigid Boxes",
  "Custom Mailer Boxes",
  "Folding Cartons",
  "Candle Packaging",
  "Cosmetic Boxes",
  "Jewelry Packaging",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(17,17,17,0.07)] bg-[#0e0d0b] text-white">
      {/* Top CTA banner */}
      <div className="border-b border-white/[0.06]">
        <Container className="py-12">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-8 py-10 sm:px-12 sm:py-12">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_0%,rgba(198,169,114,0.18),transparent_50%),radial-gradient(ellipse_40%_60%_at_100%_100%,rgba(232,96,58,0.08),transparent_50%)]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Start Your Packaging Brief
                </p>
                <h2 className="mt-3 max-w-2xl font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Build packaging that feels considered, premium, and aligned with the brand you are growing.
                </h2>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  href="/quote"
                  variant="secondary"
                  icon={<ArrowRight className="size-4" />}
                  className="justify-center px-6 py-3.5"
                >
                  Get a Quote
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  className="justify-center border-white/12 bg-white/[0.06] px-6 py-3.5 text-white hover:border-white/20 hover:bg-white/10 hover:shadow-none"
                >
                  Talk to Packaging Team
                </Button>
              </div>
            </div>

            {/* Packaging format tags */}
            <div className="relative mt-10 flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
              {packagingHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-medium text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer grid */}
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_0.8fr_1.1fr]">
          {/* Brand column */}
          <div className="max-w-[280px]">
            <Logo theme="dark" />
            <p className="mt-5 text-[0.88rem] leading-[1.85] text-white/55">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Est. USA
              </span>
              <div className="h-px flex-1 bg-white/[0.08]" />
            </div>
          </div>

          <FooterColumn title="Quick Links" items={footerQuickLinks} />
          <FooterColumn title="Product Links" items={footerProductLinks} />
          <FooterColumn title="Popular Searches" items={footerPopularSearches} />
          <FooterColumn title="Legal" items={footerLegalLinks} />

          {/* Contact column */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/44">
              Contact
            </h3>
            <div className="mt-5 space-y-4">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-[0.88rem] text-white/60 transition hover:text-[var(--color-gold-strong)]"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" />
                <span>{siteConfig.email}</span>
              </Link>
              <Link
                href={siteConfig.phoneHref}
                className="flex items-start gap-3 text-[0.88rem] text-white/60 transition hover:text-[var(--color-gold-strong)]"
              >
                <PhoneCall className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" />
                <span>{siteConfig.phone}</span>
              </Link>
              <div className="flex items-start gap-3 text-[0.88rem] text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" />
                <span>{siteConfig.address}</span>
              </div>
            </div>

            {/* Response time badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[12px]">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
              <span className="font-semibold text-white/70">24-hr quote response</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-[13px] text-white/36">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-white/28">
            Premium Custom Packaging · USA
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/44">
        {title}
      </h3>
      <div className="mt-5 grid gap-2.5">
        {items.map((item, index) => (
          <Link
            key={`${title}-${item.label}-${index}`}
            href={item.href}
            className="text-[0.88rem] text-white/58 transition hover:text-[var(--color-gold-strong)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
