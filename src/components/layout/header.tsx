"use client";

import Link from "next/link";
import { ChevronDown, Mail, Menu, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { industries } from "@/data/industries";
import { navigation, productMenuGroups, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type MenuKey = "products" | "industries" | null;

const MENU_CLOSE_DELAY = 160;

export function Header() {
  const pathname = usePathname();
  const closeTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDesktopMenu = (menu: Exclude<MenuKey, null>) => {
    clearCloseTimer();
    setOpenMenu(menu);
  };

  const scheduleCloseMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, MENU_CLOSE_DELAY);
  };

  const primaryNav = useMemo(
    () => navigation.filter((item) => !["/products", "/industries"].includes(item.href)),
    [],
  );

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-[rgba(17,17,17,0.08)] bg-[rgba(248,245,239,0.86)] backdrop-blur-xl transition",
          scrolled && "bg-[rgba(248,245,239,0.96)] shadow-[0_18px_44px_rgba(17,17,17,0.08)]",
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-4">
          <Logo />

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6" aria-label="Primary navigation">
            {primaryNav.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(navLinkClasses, isActivePath(pathname, item.href) && "text-[var(--color-accent)]")}
              >
                {item.label}
              </Link>
            ))}

            <DesktopMenuTrigger
              label="Products"
              menuKey="products"
              isOpen={openMenu === "products"}
              isActive={pathname.startsWith("/products")}
              onOpen={openDesktopMenu}
              onClose={scheduleCloseMenu}
              onClearClose={clearCloseTimer}
            >
              <ProductsMenu />
            </DesktopMenuTrigger>

            <DesktopMenuTrigger
              label="Industries"
              menuKey="industries"
              isOpen={openMenu === "industries"}
              isActive={pathname.startsWith("/industries")}
              onOpen={openDesktopMenu}
              onClose={scheduleCloseMenu}
              onClearClose={clearCloseTimer}
            >
              <IndustriesMenu />
            </DesktopMenuTrigger>

            {primaryNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(navLinkClasses, isActivePath(pathname, item.href) && "text-[var(--color-accent)]")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.08)] bg-white px-3.5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] xl:px-4"
            >
              <PhoneCall className="size-4" />
              {siteConfig.phone}
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.08)] bg-white px-3.5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] xl:px-4"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </Link>
            <Button href="/quote" variant="secondary" className="px-4 xl:px-5">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-[rgba(17,17,17,0.08)] bg-white p-3 text-[var(--color-primary)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </div>

      {open ? (
        <div className="border-b border-[rgba(17,17,17,0.08)] bg-[var(--color-shell)] lg:hidden">
          <Container className="grid gap-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-primary)]",
                  isActivePath(pathname, item.href) && "border-[var(--color-accent)] text-[var(--color-accent)]",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="grid gap-3 rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Featured Categories
              </p>
              {productMenuGroups.flatMap((group) => group.items).slice(0, 8).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[var(--color-primary)]"
                >
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

function DesktopMenuTrigger({
  label,
  menuKey,
  isOpen,
  isActive,
  onOpen,
  onClose,
  onClearClose,
  children,
}: {
  label: string;
  menuKey: Exclude<MenuKey, null>;
  isOpen: boolean;
  isActive: boolean;
  onOpen: (menu: Exclude<MenuKey, null>) => void;
  onClose: () => void;
  onClearClose: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="relative inline-flex shrink-0"
      onMouseEnter={() => onOpen(menuKey)}
      onMouseLeave={onClose}
      onFocusCapture={() => onOpen(menuKey)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(navLinkClasses, isActive && "text-[var(--color-accent)]")}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn("size-4 transition duration-300", isOpen && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-max -translate-x-1/2",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "relative pt-2 transition duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-2 before:content-['']",
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          )}
          onMouseEnter={onClearClose}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductsMenu() {
  return (
    <div className="w-[min(620px,calc(100vw-2rem))] rounded-[26px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.97)] p-4 shadow-[0_24px_80px_rgba(17,17,17,0.12)] backdrop-blur-2xl">
      <div className="rounded-[22px] bg-[linear-gradient(180deg,rgba(248,245,239,0.96),rgba(238,230,218,0.88))] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[29rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Product Collection
            </p>
            <h3 className="mt-2 font-display text-[1.45rem] leading-[0.98] tracking-[-0.035em] text-[var(--color-primary)]">
              Explore premium packaging formats.
            </h3>
            <p className="mt-2 text-[12px] leading-5 text-[var(--color-muted)]">
              Rigid boxes, mailers, cartons, and supporting layers shaped around presentation, structure, and brand perception.
            </p>
          </div>
          <Button href="/products" variant="ghost" className="px-4 py-2.5">
            View All Products
          </Button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {productMenuGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,245,239,0.74))] p-3.5"
          >
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
              {group.title}
            </p>
            <div className="mt-2.5 space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block rounded-[14px] border border-transparent px-3 py-2.5 transition duration-300 hover:border-[rgba(17,17,17,0.08)] hover:bg-white"
                >
                  <p className="text-[14px] font-semibold leading-5 text-[var(--color-primary)] transition group-hover:text-[var(--color-accent)]">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustriesMenu() {
  return (
    <div className="w-[min(620px,calc(100vw-2rem))] rounded-[26px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.97)] p-4 shadow-[0_24px_80px_rgba(17,17,17,0.12)] backdrop-blur-2xl">
      <div className="rounded-[22px] bg-[linear-gradient(180deg,rgba(248,245,239,0.96),rgba(238,230,218,0.88))] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[29rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Industry Solutions
            </p>
            <h3 className="mt-2 font-display text-[1.45rem] leading-[0.98] tracking-[-0.035em] text-[var(--color-primary)]">
              Packaging shaped around your category.
            </h3>
            <p className="mt-2 text-[12px] leading-5 text-[var(--color-muted)]">
              Solutions for beauty, candles, jewelry, fashion, food, and e-commerce brands that need stronger product presentation.
            </p>
          </div>
          <Button href="/industries" variant="ghost" className="px-4 py-2.5">
            View All Industries
          </Button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            className="rounded-[20px] bg-[linear-gradient(180deg,rgba(248,245,239,0.88),rgba(255,255,255,0.78))] p-3.5"
          >
            <Link
              href={`/industries/${industry.slug}`}
              className="group block rounded-[14px] border border-transparent px-3 py-2.5 transition duration-300 hover:border-[rgba(17,17,17,0.08)] hover:bg-white"
            >
              <p className="text-[14px] font-semibold leading-5 text-[var(--color-primary)] transition group-hover:text-[var(--color-accent)]">
                {industry.name}
              </p>
              <p className="mt-2 text-[12px] leading-5 text-[var(--color-muted)]">
                {industry.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function isActivePath(pathname: string, href: string) {
  const normalizedHref = href.replace(/\/$/, "") || "/";
  return pathname === normalizedHref;
}

const navLinkClasses =
  "inline-flex items-center gap-2 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]";
