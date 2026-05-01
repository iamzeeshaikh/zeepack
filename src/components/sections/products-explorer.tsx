"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

const typeFilters = [
  { label: "All formats", value: "all" },
  { label: "Boxes", value: "boxes" },
  { label: "Accessories", value: "accessories" },
  { label: "Sustainable", value: "sustainable" },
];

const useCaseFilters = [
  "All use cases",
  "Retail",
  "Gifting",
  "E-commerce",
  "Launch kits",
  "Premium display",
];

const industryFilters = [
  "All industries",
  "Cosmetics",
  "Candles",
  "Jewelry",
  "Fashion",
  "Food",
  "E-commerce",
];

export function ProductsExplorer({ categories }: { categories: Category[] }) {
  const [activeType, setActiveType] = useState("all");
  const [activeUseCase, setActiveUseCase] = useState("All use cases");
  const [activeIndustry, setActiveIndustry] = useState("All industries");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const typeMatch =
        activeType === "all" ? true : category.type === activeType;

      const useCaseMatch =
        activeUseCase === "All use cases"
          ? true
          : matchesUseCase(category, activeUseCase);

      const industryMatch =
        activeIndustry === "All industries"
          ? true
          : category.industries.includes(activeIndustry);

      return typeMatch && useCaseMatch && industryMatch;
    });
  }, [activeIndustry, activeType, activeUseCase, categories]);

  return (
    <div className="space-y-10">
      <div className="surface-card rounded-[20px] p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              Browse Collection
            </p>
            <h3 className="mt-3 font-display text-3xl leading-[0.98] tracking-[-0.04em] text-[var(--color-primary)]">
              Filter by structure, use case, and industry.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveType(filter.value)}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-medium transition",
                  activeType === filter.value
                    ? "border-[rgba(198,169,114,0.46)] bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[0_10px_22px_rgba(17,17,17,0.04)]"
                    : "border-[var(--color-border)] bg-white/78 text-[var(--color-muted)] hover:border-[var(--color-taupe)] hover:text-[var(--color-primary)]",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <select
              className="input-shell"
              value={activeUseCase}
              onChange={(event) => setActiveUseCase(event.target.value)}
            >
              {useCaseFilters.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className="input-shell"
              value={activeIndustry}
              onChange={(event) => setActiveIndustry(event.target.value)}
            >
              {industryFilters.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCategories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-[18px] border border-[rgba(17,17,17,0.08)] bg-white/88 shadow-[0_12px_26px_rgba(17,17,17,0.045),0_26px_70px_rgba(17,17,17,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(17,17,17,0.08),0_40px_90px_rgba(17,17,17,0.12)]",
              index % 3 === 0 && "xl:-mt-6",
            )}
          >
            <div className="relative aspect-[5/4] overflow-hidden border-b border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.82),rgba(238,230,218,0.96))]">
              <Image
                src={category.image}
                alt={`${category.name} packaging category`}
                fill
                sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute left-4 top-4 rounded-full border border-white/65 bg-white/82 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-taupe)] backdrop-blur">
                {getCategoryTag(category)}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
                {category.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                {category.shortDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.industries.slice(0, 2).map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full bg-[var(--color-surface)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-taupe)]"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                Explore collection
                <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function matchesUseCase(category: Category, useCase: string) {
  const name = category.name.toLowerCase();
  const intro = category.intro.toLowerCase();

  if (useCase === "Retail") {
    return (
      category.industries.some((industry) => ["Cosmetics", "Fashion", "Food"].includes(industry)) ||
      intro.includes("retail") ||
      name.includes("carton")
    );
  }

  if (useCase === "Gifting") {
    return intro.includes("gift") || category.industries.some((industry) => industry.includes("Gifting"));
  }

  if (useCase === "E-commerce") {
    return intro.includes("e-commerce") || category.industries.includes("E-commerce");
  }

  if (useCase === "Launch kits") {
    return intro.includes("launch") || name.includes("rigid") || name.includes("product");
  }

  if (useCase === "Premium display") {
    return intro.includes("display") || intro.includes("shelf") || name.includes("luxury");
  }

  return true;
}

function getCategoryTag(category: Category) {
  if (category.slug === "rigid-boxes") return "Signature";
  if (category.slug === "mailer-boxes") return "DTC";
  if (category.slug === "folding-cartons") return "Retail";
  if (category.slug === "candle-boxes") return "Gifting";
  if (category.slug === "cosmetic-boxes") return "Beauty";
  if (category.slug === "labels-and-stickers") return "Details";
  if (category.slug === "paper-bags") return "Carry";
  if (category.slug === "inserts") return "Support";
  if (category.slug === "sleeves") return "Editorial";
  if (category.slug === "sustainable-packaging") return "Eco";
  return "Collection";
}
