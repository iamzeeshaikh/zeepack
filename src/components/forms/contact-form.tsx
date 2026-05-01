"use client";

import { Check, CircleDollarSign, Layers3, Package, Palette, Send, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { submitFormRequest } from "@/lib/form-client";

type CheckboxCard = {
  label: string;
  icon: typeof Package;
};

const projectTypes = [
  "Custom Boxes",
  "Labels",
  "Mailers",
  "Rigid Boxes",
  "Folding Cartons",
  "Inserts",
  "Tissue Paper",
  "Paper Bags",
];

const estimatedQuantities = ["100-500", "500-1000", "1000-5000", "5000+"];
const timelines = ["ASAP", "2-4 weeks", "1-3 months", "Flexible"];

const checkboxCards: CheckboxCard[] = [
  { label: "Custom sizes", icon: Package },
  { label: "Materials", icon: Layers3 },
  { label: "Finishes", icon: Sparkles },
  { label: "Launch packaging", icon: Palette },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  estimatedQuantity: "",
  timeline: "",
  budgetRange: "",
  message: "",
  interests: [] as string[],
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fieldErrors = useMemo(() => {
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!form.projectType) errors.projectType = "Select a project type.";
    if (!form.estimatedQuantity) errors.estimatedQuantity = "Select an estimated quantity.";
    if (!form.timeline) errors.timeline = "Select a timeline.";
    if (!form.message.trim()) errors.message = "Tell us a little about your project.";
    return errors;
  }, [form]);

  const emailIsValid = form.email.trim() && isValidEmail(form.email);

  function updateField<K extends keyof typeof initialState>(key: K, value: (typeof initialState)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleInterest(label: string) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(label)
        ? current.interests.filter((item) => item !== label)
        : [...current.interests, label],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      projectType: true,
      estimatedQuantity: true,
      timeline: true,
      message: true,
    });
    setError("");

    if (Object.keys(fieldErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await submitFormRequest("contact", {
        ...form,
        interests: form.interests.join(", "),
      });
      router.push("/thank-you/?form=contact");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send your message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingField
          id="contact-name"
          label="Name"
          value={form.name}
          required
          ariaRequired
          error={touched.name ? fieldErrors.name : ""}
          onBlur={() => setTouched((current) => ({ ...current, name: true }))}
          onChange={(value) => updateField("name", value)}
        />

        <FloatingField
          id="contact-email"
          type="email"
          label="Email"
          value={form.email}
          required
          ariaRequired
          isValid={Boolean(emailIsValid)}
          error={touched.email ? fieldErrors.email : ""}
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          onChange={(value) => updateField("email", value)}
        />

        <FloatingField
          id="contact-phone"
          label="Phone"
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <FloatingField
          id="contact-company"
          label="Company"
          value={form.company}
          onChange={(value) => updateField("company", value)}
        />

        <FloatingSelect
          id="contact-project-type"
          label="Project Type"
          value={form.projectType}
          options={projectTypes}
          required
          ariaRequired
          error={touched.projectType ? fieldErrors.projectType : ""}
          onBlur={() => setTouched((current) => ({ ...current, projectType: true }))}
          onChange={(value) => updateField("projectType", value)}
        />

        <FloatingSelect
          id="contact-quantity"
          label="Estimated Quantity"
          value={form.estimatedQuantity}
          options={estimatedQuantities}
          required
          ariaRequired
          error={touched.estimatedQuantity ? fieldErrors.estimatedQuantity : ""}
          onBlur={() => setTouched((current) => ({ ...current, estimatedQuantity: true }))}
          onChange={(value) => updateField("estimatedQuantity", value)}
        />

        <FloatingSelect
          id="contact-timeline"
          label="Timeline"
          value={form.timeline}
          options={timelines}
          required
          ariaRequired
          error={touched.timeline ? fieldErrors.timeline : ""}
          onBlur={() => setTouched((current) => ({ ...current, timeline: true }))}
          onChange={(value) => updateField("timeline", value)}
        />

        <FloatingField
          id="contact-budget"
          label="Budget Range (Optional)"
          value={form.budgetRange}
          icon={CircleDollarSign}
          onChange={(value) => updateField("budgetRange", value)}
        />
      </div>

      <fieldset className="mt-6">
        <legend className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
          What we can help with
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {checkboxCards.map((item) => {
            const selected = form.interests.includes(item.label);
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => toggleInterest(item.label)}
                aria-pressed={selected}
                className={`rounded-[22px] border px-4 py-4 text-left transition duration-300 ${
                  selected
                    ? "border-[var(--color-gold)] bg-[rgba(198,169,114,0.12)] shadow-[0_16px_32px_rgba(17,17,17,0.05)]"
                    : "border-[rgba(17,17,17,0.08)] bg-[var(--color-surface)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(17,17,17,0.05)]"
                }`}
              >
                <item.icon className="size-5 text-[var(--color-gold)]" />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">{item.label}</span>
                  {selected ? <Check className="size-4 text-[var(--color-primary)]" /> : null}
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <FloatingTextarea
          id="contact-message"
          label="Tell us about your packaging project"
          value={form.message}
          required
          ariaRequired
          error={touched.message ? fieldErrors.message : ""}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          onChange={(value) => updateField("message", value)}
        />
      </div>

      {error ? <p className="mt-3 text-sm text-[#b42318]">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(17,17,17,0.18)] transition hover:-translate-y-0.5 hover:bg-[#05070a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="size-4" />
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required = false,
  ariaRequired = false,
  error,
  isValid = false,
  icon: Icon,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  required?: boolean;
  ariaRequired?: boolean;
  error?: string;
  isValid?: boolean;
  icon?: typeof CircleDollarSign;
}) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 z-10 origin-left bg-white px-1 text-xs font-medium transition-all duration-200 ${
          value ? "top-0 -translate-y-1/2 text-[var(--color-taupe)]" : "top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-required={ariaRequired}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={`input-shell h-15 w-full rounded-[20px] border bg-white px-4 pb-3 pt-5 text-sm text-[var(--color-primary)] outline-none transition ${
          error
            ? "border-[#dc2626] focus:border-[#dc2626]"
            : isValid
              ? "border-[#16a34a] focus:border-[#16a34a]"
              : "border-[rgba(17,17,17,0.08)] focus:border-[var(--color-gold)]"
        } ${Icon ? "pl-11" : ""}`}
      />
      {Icon ? <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-taupe)]" /> : null}
      {isValid ? <Check className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#16a34a]" /> : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function FloatingSelect({
  id,
  label,
  value,
  options,
  onChange,
  onBlur,
  required = false,
  ariaRequired = false,
  error,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  required?: boolean;
  ariaRequired?: boolean;
  error?: string;
}) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 z-10 origin-left bg-white px-1 text-xs font-medium transition-all duration-200 ${
          value ? "top-0 -translate-y-1/2 text-[var(--color-taupe)]" : "top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
        }`}
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        aria-required={ariaRequired}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={`input-shell h-15 w-full appearance-none rounded-[20px] border bg-white px-4 pb-3 pt-5 text-sm text-[var(--color-primary)] outline-none transition ${
          error ? "border-[#dc2626]" : "border-[rgba(17,17,17,0.08)] focus:border-[var(--color-gold)]"
        }`}
      >
        <option value="" disabled />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  onBlur,
  required = false,
  ariaRequired = false,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  required?: boolean;
  ariaRequired?: boolean;
  error?: string;
}) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 z-10 origin-left bg-white px-1 text-xs font-medium transition-all duration-200 ${
          value ? "top-0 -translate-y-1/2 text-[var(--color-taupe)]" : "top-5 text-[var(--color-muted)]"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        required={required}
        aria-required={ariaRequired}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={`input-shell min-h-36 w-full resize-none rounded-[24px] border bg-white px-4 pb-4 pt-8 text-sm text-[var(--color-primary)] outline-none transition ${
          error ? "border-[#dc2626]" : "border-[rgba(17,17,17,0.08)] focus:border-[var(--color-gold)]"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
