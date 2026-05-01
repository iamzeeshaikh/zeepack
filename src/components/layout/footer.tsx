import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgba(21,36,58,0.08)] bg-[var(--color-ink)] py-16 text-white">
      <Container>
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/4 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Start Your Packaging Brief
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
              Build packaging that feels considered, premium, and aligned with the brand you are growing.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/quote" variant="secondary">
              Get a Quote
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              className="border-white/12 bg-white/6 text-white hover:bg-white/10"
            >
              Talk to Packaging Team
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_0.78fr_0.88fr_0.88fr_0.78fr_1fr]">
          <div className="max-w-md">
            <Logo theme="dark" />
            <p className="mt-5 text-sm leading-7 text-white/72">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Quick Links" items={footerQuickLinks} />
          <FooterColumn title="Product Links" items={footerProductLinks} />
          <FooterColumn title="Popular Searches" items={footerPopularSearches} />
          <FooterColumn title="Legal" items={footerLegalLinks} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/76">
              <Link href={`mailto:${siteConfig.email}`} className="flex gap-3 transition hover:text-[var(--color-gold-strong)]">
                <Mail className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.email}</span>
              </Link>
              <Link href={siteConfig.phoneHref} className="flex gap-3 transition hover:text-[var(--color-gold-strong)]">
                <PhoneCall className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.phone}</span>
              </Link>
              <p className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
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
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
        {title}
      </h3>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <Link
            key={`${title}-${item.label}-${item.href}-${index}`}
            href={item.href}
            className="text-sm text-white/78 transition hover:text-[var(--color-gold-strong)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
