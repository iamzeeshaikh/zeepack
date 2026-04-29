import type { LucideIcon } from "lucide-react";

type ProcessStepsProps = {
  steps: Array<{
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {steps.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.step}
            className="surface-card relative h-full p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-taupe)]">
              {item.step}
            </span>
            <div className="mt-6 inline-flex rounded-2xl bg-[var(--color-surface)] p-3 text-[var(--color-gold)]">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
