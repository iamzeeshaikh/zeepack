"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  /** Full-size image paths; duplicates are removed while preserving order. */
  images: string[];
  /** Product / category name used for descriptive alt text. */
  name: string;
};

/**
 * Interactive product gallery: a large main image with clickable thumbnails.
 * Clicking a thumbnail swaps the main image in place — no navigation.
 *
 * Every gallery image stays mounted in the main frame (only the active one is
 * visible), so the browser has already fetched the optimized next/image asset
 * by the time a thumbnail is clicked and the swap is instant. This replaces
 * raw `new Image()` warming, which would bypass the next/image optimizer and
 * download unoptimized duplicates.
 */
export function ProductGallery({ images, name }: ProductGalleryProps) {
  const unique = images.filter(
    (image, index, array) => array.indexOf(image) === index,
  );
  const [active, setActive] = useState(0);

  if (!unique.length) return null;

  return (
    <div>
      <div className="editorial-image-frame rounded-[28px] p-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(248,245,239,0.96),rgba(238,230,218,0.92))] sm:aspect-[16/10]">
          {unique.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${name} product photo ${index + 1} of ${unique.length}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={cn(
                "object-contain p-4 transition-opacity duration-300 sm:p-6",
                index === active ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={index === active ? undefined : true}
            />
          ))}
        </div>
      </div>

      {unique.length > 1 ? (
        <div
          className="mt-4 flex flex-wrap gap-3"
          role="group"
          aria-label={`${name} gallery thumbnails`}
        >
          {unique.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View ${name} image ${index + 1}`}
              aria-current={index === active}
              className={cn(
                "relative h-20 w-[104px] shrink-0 overflow-hidden rounded-[14px] border-2 transition",
                index === active
                  ? "border-[var(--color-gold)] shadow-[0_10px_22px_rgba(17,17,17,0.12)]"
                  : "border-transparent opacity-75 hover:opacity-100",
              )}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                width={104}
                height={80}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
