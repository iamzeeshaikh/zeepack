"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/data/pricing";

export default function CheckoutPage() {
  const { items, subtotal, clear, ready } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    const form = new FormData(e.currentTarget);
    const customer = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      address: String(form.get("address") || ""),
      city: String(form.get("city") || ""),
      state: String(form.get("state") || ""),
      postcode: String(form.get("postcode") || ""),
      notes: String(form.get("notes") || ""),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          items: items.map((i) => ({
            name: i.name,
            slug: i.slug,
            price: i.price,
            qty: i.qty,
          })),
          subtotal,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      clear();
      router.push(`/order-confirmed?ref=${encodeURIComponent(data.orderRef)}`);
    } catch {
      setError("Network error. Please try again or call us.");
      setSubmitting(false);
    }
  }

  if (ready && items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--color-primary)]">Checkout</h1>
        <p className="mt-4 text-[rgba(17,17,17,0.7)]">Your cart is empty.</p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-semibold text-white"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[rgba(17,17,17,0.14)] px-4 py-3 text-sm focus:border-[var(--color-cta)] focus:outline-none";

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Checkout</h1>
      <p className="mt-2 text-sm text-[rgba(17,17,17,0.6)]">
        Cash on Delivery &mdash; no online payment required. We confirm your order
        and final quote by phone before production.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Full name *" className={inputClass} />
            <input name="phone" required placeholder="Phone *" className={inputClass} />
          </div>
          <input name="email" type="email" placeholder="Email (for order updates)" className={inputClass} />
          <input name="address" required placeholder="Delivery address *" className={inputClass} />
          <div className="grid gap-4 sm:grid-cols-3">
            <input name="city" required placeholder="City *" className={inputClass} />
            <input name="state" placeholder="State" className={inputClass} />
            <input name="postcode" placeholder="ZIP / Postcode" className={inputClass} />
          </div>
          <textarea
            name="notes"
            rows={3}
            placeholder="Order notes (size, material, print details)…"
            className={inputClass}
          />

          {error ? (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-[var(--color-cta)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(232,96,58,0.28)] disabled:opacity-60"
          >
            {submitting ? "Placing order…" : "Place Order (Cash on Delivery)"}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-[rgba(17,17,17,0.1)] bg-white p-6">
          <h2 className="text-lg font-bold text-[var(--color-primary)]">Your Order</h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span className="pr-2 text-[rgba(17,17,17,0.75)]">
                  {item.name} × {item.qty}
                </span>
                <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-[rgba(17,17,17,0.1)] pt-4 text-base font-bold text-[var(--color-primary)]">
            <span>Total (COD)</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
