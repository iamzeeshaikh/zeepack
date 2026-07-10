"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Confirmation() {
  const params = useSearchParams();
  const ref = params.get("ref");

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-bold text-[var(--color-primary)]">
        Order placed!
      </h1>
      {ref ? (
        <p className="mt-2 text-sm text-[rgba(17,17,17,0.6)]">
          Your reference is <strong>{ref}</strong>
        </p>
      ) : null}
      <p className="mt-4 text-[rgba(17,17,17,0.75)]">
        Thanks for your order. Our team will call you shortly to confirm the
        details, final quote, and delivery. Payment is <strong>Cash on
        Delivery</strong> &mdash; nothing to pay now.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/products"
          className="rounded-full border border-[var(--color-cta)] px-6 py-3 text-sm font-semibold text-[var(--color-cta)]"
        >
          Continue Browsing
        </Link>
        <Link
          href="/"
          className="rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
      <Confirmation />
    </Suspense>
  );
}
