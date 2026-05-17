"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { industries } from "@/data/industries";
import { navigation, productMenuGroups, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type MenuKey = "products" | "industries" | null;

const MENU_CLOSE_DELAY = 180;

const featuredProducts = [
  {
    title: "Luxury Rigid Boxes",
    href: "/products/rigid-boxes",
    image: "/images/products/rigid-setup-boxes.jpg",
    tag: "Best Seller",
  },
  {
    title: "Mailer Boxes",
    href: "/products/mailer-boxes",
    image: "/images/products/mailer-boxes.jpg",
    tag: "DTC Ready",
  },
  {
    title: "Candle Packaging",
    href: "/products/candle-boxes",
    image: "/images/products/candle-boxes-1.webp",
    tag: "Premium",
  },
];

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
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
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
    closeTimerRef.current = window.setTimeout(() => setOpenMenu(null), MENU_CLOSE_DELAY);
  };

  const primaryNav = useMemo(
    () => navigation.filter((item) => !["/products", "/industries"].includes(item.href)),
    [],
  );

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-[rgba(17,17,17,0.07)] bg-[rgba(253,251,247,0.88)] backdrop-blur-xl transition duration-300",
          scrolled && "bg-[rgba(253,251,247,0.97)] shadow-[0_1px_0_rgba(17,17,17,0.06),0_16px_40px_rgba(17,17,17,0.07)]",
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-3.5">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-1.5" aria-label="Primary navigation">
            {primaryNav.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(navLinkClasses, isActivePath(pathname, item.href) && "text-[var(--color-cta)]")}
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
                className={cn(navLinkClasses, isActivePath(pathname, item.href) && "text-[var(--color-cta)]")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex xl:gap-2.5">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.08)] bg-white px-3.5 py-2.5 text-[13px] font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-cta)] hover:text-[var(--color-cta)] xl:px-4"
            >
              <PhoneCall className="size-4" />
              {siteConfig.phone}
            </Link>
            <Button href="/quote" variant="secondary" className="px-5 py-2.5 text-[13px]">
              Get a Quote
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex rounded-full border border-[rgba(17,17,17,0.08)] bg-white p-2.5 text-[var(--color-primary)] transition hover:bg-[var(--color-shell)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div className="border-b border-[rgba(17,17,17,0.07)] bg-[var(--color-shell)] lg:hidden">
          <Container className="grid gap-3 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-[rgba(17,17,17,0.07)] bg-white px-5 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]",
                  isActivePath(pathname, item.href) && "border-[var(--color-cta)] text-[var(--color-cta)]",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="rounded-[24px] border border-[rgba(17,17,17,0.07)] bg-white p-4">
              <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Featured Products
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {productMenuGroups.flatMap((g) => g.items).slice(0, 6).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[16px] border border-[rgba(17,17,17,0.07)] px-3 py-2.5 text-[13px] font-medium text-[var(--color-primary)] transition hover:text-[var(--color-cta)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-primary)]"
              >
                <PhoneCall className="size-4" />
                Call
              </Link>
              <Button href="/quote" variant="secondary" className="justify-center py-3">
                Get Quote
              </Button>
            </div>
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
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(navLinkClasses, isActive && "text-[var(--color-cta)]")}
      >
        <span>{label}</span>
        <ChevronDown className={cn("size-4 transition duration-300", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-max -translate-x-1/2",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "relative pt-3 transition duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-3 before:content-['']",
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
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
    <div className="w-[min(700px,calc(100vw-2rem))] rounded-[28px] border border-[rgba(17,17,17,0.07)] bg-[rgba(255,255,255,0.98)] p-5 shadow-[0_24px_80px_rgba(17,17,17,0.14)] backdrop-blur-2xl">
      {/* Header strip */}
      <div className="rounded-[20px] bg-[linear-gradient(145deg,rgba(248,245,239,0.96),rgba(238,230,218,0.88))] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Product Collection
            </p>
            <h3 className="mt-2 font-display text-[1.5rem] leading-[0.96] tracking-[-0.035em] text-[var(--color-primary)]">
              Premium packaging formats for every brand.
            </h3>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[rgba(17,17,17,0.10)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-cta)]"
          >
            View All Products
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_1.6fr] gap-4">
        {/* Featured product images */}
        <div className="grid gap-3">
          {featuredProducts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex items-center gap-3 overflow-hidden rounded-[16px] border border-[rgba(17,17,17,0.07)] bg-[linear-gradient(145deg,rgba(248,245,239,0.80),rgba(238,230,218,0.96))] p-2.5 transition hover:border-[rgba(17,17,17,0.12)] hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[12px] bg-[var(--color-shell)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="56px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-[var(--color-primary)] transition group-hover:text-[var(--color-cta)]">
                  {item.title}
                </p>
                {item.tag ? (
                  <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-taupe)]">
                    {item.tag}
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        {/* Category columns */}
        <div className="grid gap-3 sm:grid-cols-3">
          {productMenuGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[18px] bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(248,245,239,0.68))] p-3.5"
            >
              <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                {group.title}
              </p>
              <div className="mt-2.5 space-y-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block rounded-[12px] border border-transparent px-2.5 py-2 transition hover:border-[rgba(17,17,17,0.07)] hover:bg-white"
                  >
                    <p className="text-[13px] font-semibold leading-5 text-[var(--color-primary)] transition group-hover:text-[var(--color-cta)]">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustriesMenu() {
  return (
    <div className="w-[min(640px,calc(100vw-2rem))] rounded-[28px] border border-[rgba(17,17,17,0.07)] bg-[rgba(255,255,255,0.98)] p-5 shadow-[0_24px_80px_rgba(17,17,17,0.14)] backdrop-blur-2xl">
      {/* Header strip */}
      <div className="rounded-[20px] bg-[linear-gradient(145deg,rgba(248,245,239,0.96),rgba(238,230,218,0.88))] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Industry Solutions
            </p>
            <h3 className="mt-2 font-display text-[1.5rem] leading-[0.96] tracking-[-0.035em] text-[var(--color-primary)]">
              Packaging shaped around your category.
            </h3>
          </div>
          <Link
            href="/industries"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[rgba(17,17,17,0.10)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-cta)]"
          >
            All Industries
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group rounded-[18px] border border-[rgba(17,17,17,0.07)] bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(248,245,239,0.70))] p-4 transition hover:border-[rgba(17,17,17,0.11)] hover:shadow-[0_8px_24px_rgba(17,17,17,0.07)]"
          >
            <p className="text-[14px] font-semibold leading-5 text-[var(--color-primary)] transition group-hover:text-[var(--color-cta)]">
              {industry.name}
            </p>
            <p className="mt-2 text-[12px] leading-5 text-[var(--color-muted)]">
              {industry.description}
            </p>
          </Link>
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
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(17,17,17,0.05)] hover:text-[var(--color-cta)]";
