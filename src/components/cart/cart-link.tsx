"use client";

import Link from "next/link";

import { useCart } from "@/lib/cart/cart-context";

export function CartLink({ className = "" }: { className?: string }) {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Cart with ${count} item${count === 1 ? "" : "s"}`}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,17,17,0.12)] text-[var(--color-primary)] transition hover:border-[var(--color-cta)] hover:text-[var(--color-cta)] ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-cta)] px-1 text-[11px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}
