type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="surface-card h-full rounded-[16px] p-7 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(17,17,17,0.06),0_34px_72px_rgba(17,17,17,0.1)]">
      <p className="font-display text-3xl leading-none text-[var(--color-gold)]">
        &ldquo;
      </p>
      <p className="mt-4 text-base leading-8 text-[var(--color-primary)]">
        {quote}
      </p>
      <div className="mt-8 border-t border-[rgba(17,17,17,0.08)] pt-5">
        <p className="font-semibold text-[var(--color-primary)]">{name}</p>
        <p className="mt-1 text-sm text-[var(--color-muted)]">{role}</p>
      </div>
    </div>
  );
}
