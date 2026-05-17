"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-[22px] border transition duration-300",
              isOpen
                ? "border-[rgba(232,96,58,0.18)] bg-white shadow-[0_8px_32px_rgba(17,17,17,0.08)]"
                : "border-[rgba(17,17,17,0.07)] bg-white/88 shadow-[0_2px_8px_rgba(17,17,17,0.04)] hover:border-[rgba(17,17,17,0.12)] hover:shadow-[0_6px_20px_rgba(17,17,17,0.06)]",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className={cn(
                "text-[0.95rem] font-semibold leading-snug transition",
                isOpen ? "text-[var(--color-cta)]" : "text-[var(--color-ink)]",
              )}>
                {item.question}
              </span>
              <div className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition duration-300",
                isOpen
                  ? "border-[rgba(232,96,58,0.25)] bg-[rgba(232,96,58,0.08)] text-[var(--color-cta)]"
                  : "border-[rgba(17,17,17,0.09)] bg-[var(--color-shell)] text-[var(--color-muted)]",
              )}>
                {isOpen
                  ? <Minus className="size-3.5" />
                  : <Plus className="size-3.5" />
                }
              </div>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[0.9rem] leading-[1.85] text-[var(--color-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
