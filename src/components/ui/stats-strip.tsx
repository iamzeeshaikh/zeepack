type StatsStripProps = {
  items: Array<{ value: string; label: string }>;
};

export function StatsStrip({ items }: StatsStripProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[16px] border border-[rgba(17,17,17,0.08)] bg-white/86 px-5 py-6 text-center shadow-[0_10px_22px_rgba(17,17,17,0.045),0_24px_60px_rgba(17,17,17,0.06)]"
        >
          <p className="font-display text-4xl leading-none tracking-[-0.035em] text-[var(--color-primary)]">
            {item.value}
          </p>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
