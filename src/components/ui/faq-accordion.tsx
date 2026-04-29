"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[22px] border border-[rgba(21,36,58,0.08)] bg-white/90 shadow-[0_14px_30px_rgba(21,36,58,0.06)] transition duration-300 hover:-translate-y-0.5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-[var(--color-ink)]">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-[var(--color-muted)] transition duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-muted)] sm:px-6 sm:pb-6">
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
