"use client";

import Link from "next/link";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navigation, productMenuGroups, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-[rgba(21,36,58,0.08)] bg-[rgba(255,250,241,0.86)] backdrop-blur-xl transition",
          scrolled && "bg-[rgba(255,250,241,0.96)] shadow-[0_18px_44px_rgba(21,36,58,0.08)]",
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-4">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-accent)]",
                  isActivePath(pathname, item.href) && "text-[var(--color-accent)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(21,36,58,0.08)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <PhoneCall className="size-4" />
              {siteConfig.phone}
            </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(21,36,58,0.08)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </Link>
            <Button href="/quote" variant="secondary">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-[rgba(21,36,58,0.08)] bg-white p-3 text-[var(--color-ink)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </div>

      {open ? (
        <div className="border-b border-[rgba(21,36,58,0.08)] bg-[var(--color-shell)] lg:hidden">
          <Container className="grid gap-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-[rgba(21,36,58,0.08)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)]",
                  isActivePath(pathname, item.href) && "border-[var(--color-accent)] text-[var(--color-accent)]",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="grid gap-3 rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Featured Categories
              </p>
              {productMenuGroups.flatMap((group) => group.items).slice(0, 8).map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--color-ink)]">
                    {item.label}
                  </Link>
                ))}
            </div>

            <Button href="/quote" variant="secondary" className="justify-center">
              Get Custom Quote
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function isActivePath(pathname: string, href: string) {
  const normalizedHref = href.replace(/\/$/, "") || "/";
  return pathname === normalizedHref;
}
