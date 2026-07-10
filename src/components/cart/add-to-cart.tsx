"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/data/pricing";

type Props = {
  id: string;
  name: string;
  slug: string;
  href: string;
  image?: string;
  price: number;
  minQty?: number;
};

export function AddToCart({ id, name, slug, href, image, price, minQty = 100 }: Props) {
  const { addItem } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(minQty);
  const [added, setAdded] = useState(false);

  function handleAdd(goToCart: boolean) {
    addItem({ id, name, slug, href, image, price }, qty);
    if (goToCart) {
      router.push("/cart");
      return;
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="rounded-2xl border border-[rgba(17,17,17,0.1)] bg-white p-5 shadow-[0_10px_30px_rgba(17,17,17,0.06)]">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-[var(--color-primary)]">
          {formatPrice(price)}
        </span>
        <span className="text-sm text-[rgba(17,17,17,0.6)]">/ unit &middot; from</span>
      </div>
      <p className="mt-1 text-xs text-[rgba(17,17,17,0.55)]">
        Pay on delivery (COD). Final unit price depends on size, material, and
        print &mdash; confirmed after artwork review.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <label htmlFor={`qty-${id}`} className="text-sm font-medium text-[var(--color-primary)]">
          Quantity
        </label>
        <input
          id={`qty-${id}`}
          type="number"
          min={minQty}
          step={50}
          value={qty}
          onChange={(e) => setQty(Math.max(minQty, Number(e.target.value) || minQty))}
          className="w-28 rounded-full border border-[rgba(17,17,17,0.14)] px-4 py-2 text-sm"
        />
      </div>
      <p className="mt-1 text-xs text-[rgba(17,17,17,0.5)]">
        Minimum order {minQty} units.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => handleAdd(false)}
          className="flex-1 rounded-full border border-[var(--color-cta)] px-5 py-3 text-sm font-semibold text-[var(--color-cta)] transition hover:bg-[var(--color-cta)] hover:text-white"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={() => handleAdd(true)}
          className="flex-1 rounded-full bg-[var(--color-cta)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(232,96,58,0.28)] transition hover:opacity-95"
        >
          Buy Now
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--color-primary)]">
          Subtotal ({qty} units)
        </span>
        <span className="font-bold text-[var(--color-primary)]">
          {formatPrice(price * qty)}
        </span>
      </div>
    </div>
  );
}
