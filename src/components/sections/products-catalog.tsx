"use client";

import { useMemo, useState } from "react";

import { CategoryCard } from "@/components/ui/category-card";
import type { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Boxes", value: "boxes" },
  { label: "Accessories", value: "accessories" },
  { label: "Sustainable", value: "sustainable" },
];

export function ProductsCatalog({ categories }: { categories: Category[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = useMemo(() => {
    if (activeFilter === "all") {
      return categories;
    }

    return categories.filter((category) => category.type === activeFilter);
  }, [activeFilter, categories]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              activeFilter === filter.value
                ? "border-[rgba(198,169,114,0.44)] bg-[var(--color-surface)] text-[var(--color-primary)]"
                : "border-[var(--color-border)] bg-white/70 text-[var(--color-muted)] hover:border-[var(--color-taupe)] hover:text-[var(--color-primary)]",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            title={category.name}
            description={category.shortDescription}
            href={`/products/${category.slug}`}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}
