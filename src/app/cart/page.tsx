"use client";

import Link from "next/link";

import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/data/pricing";

export default function CartPage() {
  const { items, subtotal, setQty, removeItem, ready } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Your Cart</h1>

      {ready && items.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-[rgba(17,17,17,0.1)] bg-white p-10 text-center">
          <p className="text-[rgba(17,17,17,0.7)]">Your cart is empty.</p>
          <Link
            href="/products"
            className="mt-5 inline-block rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-semibold text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-[rgba(17,17,17,0.1)] bg-white p-5 sm:flex-row sm:items-center"
              >
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                ) : null}
                <div className="flex-1">
                  <Link
                    href={item.href}
                    className="font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-[rgba(17,17,17,0.6)]">
                    {formatPrice(item.price)} / unit
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    step={50}
                    value={item.qty}
                    onChange={(e) => setQty(item.id, Number(e.target.value))}
                    className="w-24 rounded-full border border-[rgba(17,17,17,0.14)] px-3 py-2 text-sm"
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <span className="w-20 text-right font-semibold text-[var(--color-primary)]">
                    {formatPrice(item.price * item.qty)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-[rgba(17,17,17,0.5)] hover:text-[var(--color-cta)]"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-[rgba(17,17,17,0.1)] bg-white p-6">
            <h2 className="text-lg font-bold text-[var(--color-primary)]">Order Summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Shipping</span>
              <span className="font-semibold text-[var(--color-cta)]">Free</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Payment</span>
              <span className="font-semibold">Cash on Delivery</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[rgba(17,17,17,0.1)] pt-4 text-base font-bold text-[var(--color-primary)]">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block rounded-full bg-[var(--color-cta)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_28px_rgba(232,96,58,0.28)]"
            >
              Proceed to Checkout
            </Link>
            <p className="mt-3 text-center text-xs text-[rgba(17,17,17,0.5)]">
              Prices are starting per-unit estimates; final quote confirmed after
              artwork review.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
