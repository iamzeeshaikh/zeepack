import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "The rigid boxes arrived exactly as specified. The foil stamping was crisp and the structural feel was exactly what we wanted for our launch collection.",
    author: "Sarah M.",
    role: "Founder",
    company: "Lumière Candle Co.",
    product: "Luxury Rigid Boxes",
    stars: 5,
  },
  {
    quote:
      "ZEEPACK helped us nail the unboxing experience. The mailer boxes with interior print elevated our DTC brand in a way we didn't expect at our order size.",
    author: "James K.",
    role: "Creative Director",
    company: "Avant Skincare",
    product: "Custom Mailer Boxes",
    stars: 5,
  },
  {
    quote:
      "From the first quote conversation to production, everything was handled with precision. The cosmetic cartons matched our brand perfectly.",
    author: "Priya R.",
    role: "Brand Manager",
    company: "Botanica Beauty",
    product: "Cosmetic Packaging",
    stars: 5,
  },
];

export function TestimonialsGrid() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {testimonials.map((item, index) => (
        <Reveal key={item.author} delay={index * 0.08}>
          <div className="surface-card relative flex h-full flex-col p-7">
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 h-1 w-16 rounded-tl-[28px] bg-[linear-gradient(90deg,var(--color-gold),transparent)]" />

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(item.stars)].map((_, i) => (
                <Star key={i} className="size-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative mt-5 flex-1">
              <Quote className="absolute -left-1 -top-1 size-5 text-[var(--color-gold)] opacity-30" />
              <p className="relative z-10 text-[0.9rem] leading-[1.8] text-[var(--color-muted)]">
                {item.quote}
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-[rgba(17,17,17,0.07)] pt-5">
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">{item.author}</p>
                <p className="text-[12px] text-[var(--color-muted)]">
                  {item.role}, {item.company}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-taupe)]">
                {item.product}
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
