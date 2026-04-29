import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-[rgba(255,215,100,0.12)] bg-[var(--color-ink)] py-2 text-white">
      <Container className="flex items-center justify-between gap-4 text-[11px] sm:text-[12px]">
        <p className="truncate text-white/72">
          Custom cereal boxes in the USA with low MOQ, wholesale support, premium print, and food packaging guidance.
        </p>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="hidden shrink-0 font-semibold text-[var(--color-gold-strong)] transition hover:text-white sm:inline-flex"
        >
          {siteConfig.email}
        </Link>
      </Container>
    </div>
  );
}
