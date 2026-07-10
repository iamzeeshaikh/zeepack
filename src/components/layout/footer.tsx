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
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/zeecustomboxes" target="_blank" rel="noopener noreferrer" aria-label="ZEEPACK on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
            </a>
            <a href="https://www.instagram.com/zeecustomboxes" target="_blank" rel="noopener noreferrer" aria-label="ZEEPACK on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/85652701" target="_blank" rel="noopener noreferrer" aria-label="ZEEPACK on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
            </a>
          </div>
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
