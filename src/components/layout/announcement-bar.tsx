import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { siteConfig } from "@/data/site";

const tickers = [
  "Low MOQ available",
  "Custom sizes on every format",
  "Premium finishes · Foil · Emboss · Soft-touch",
  "24-hour quote response",
  "USA-wide packaging support",
  "Rigid boxes · Mailers · Cartons · Bags",
  "Luxury packaging for modern brands",
];

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#0e0d0b] py-2.5">
      <div className="flex w-max items-center marquee-track">
        {[...tickers, ...tickers, ...tickers, ...tickers].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-5 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60"
          >
            {item}
            <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold)] opacity-70" />
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,#0e0d0b,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,#0e0d0b,transparent)]" />

      <div className="absolute inset-y-0 right-0 hidden items-center gap-4 pr-5 sm:flex">
        <Link
          href={siteConfig.phoneHref}
          className="flex items-center gap-2 text-[11px] font-semibold text-[var(--color-gold)] transition hover:text-white"
        >
          <PhoneCall className="size-3.5" />
          {siteConfig.phone}
        </Link>
      </div>
    </div>
  );
}
