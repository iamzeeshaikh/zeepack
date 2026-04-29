"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { submitFormRequest } from "@/lib/form-client";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  productInterestedIn: "",
  quantity: "",
  length: "",
  width: "",
  depth: "",
  materialPreference: "",
  printingPreference: "",
  finishingPreference: "",
  message: "",
};

export function QuoteForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = new FormData();

      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      if (file) payload.append("file", file);

      await submitFormRequest("quote", payload);
      router.push("/thank-you/?form=quote");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your quote request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            className="input-shell"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            required
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            className="input-shell"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            required
          />
        </Field>
        <Field label="Phone">
          <input
            className="input-shell"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          />
        </Field>
        <Field label="Company">
          <input
            className="input-shell"
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({ ...current, company: event.target.value }))
            }
          />
        </Field>
        <Field label="Product Interested In">
          <input
            className="input-shell"
            value={form.productInterestedIn}
            onChange={(event) =>
              setForm((current) => ({ ...current, productInterestedIn: event.target.value }))
            }
          />
        </Field>
        <Field label="Quantity">
          <input
            className="input-shell"
            value={form.quantity}
            onChange={(event) =>
              setForm((current) => ({ ...current, quantity: event.target.value }))
            }
          />
        </Field>
        <Field label="Length">
          <input
            className="input-shell"
            value={form.length}
            onChange={(event) => setForm((current) => ({ ...current, length: event.target.value }))}
          />
        </Field>
        <Field label="Width">
          <input
            className="input-shell"
            value={form.width}
            onChange={(event) => setForm((current) => ({ ...current, width: event.target.value }))}
          />
        </Field>
        <Field label="Depth">
          <input
            className="input-shell"
            value={form.depth}
            onChange={(event) => setForm((current) => ({ ...current, depth: event.target.value }))}
          />
        </Field>
        <Field label="Material Preference">
          <input
            className="input-shell"
            value={form.materialPreference}
            onChange={(event) =>
              setForm((current) => ({ ...current, materialPreference: event.target.value }))
            }
          />
        </Field>
        <Field label="Printing Preference">
          <input
            className="input-shell"
            value={form.printingPreference}
            onChange={(event) =>
              setForm((current) => ({ ...current, printingPreference: event.target.value }))
            }
          />
        </Field>
        <Field label="Finishing Preference">
          <input
            className="input-shell"
            value={form.finishingPreference}
            onChange={(event) =>
              setForm((current) => ({ ...current, finishingPreference: event.target.value }))
            }
          />
        </Field>
      </div>

      <Field label="Project Details" className="mt-4">
        <textarea
          className="input-shell min-h-36 resize-none"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Tell us about your packaging style, target market, turnaround, or artwork status."
        />
      </Field>

      <Field label="Upload Artwork Or Brief" className="mt-4">
        <input
          type="file"
          className="input-shell file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-cream)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--color-ink)]"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
        />
      </Field>

      {error ? <p className="mt-4 text-sm text-[var(--color-accent)]">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.24)] transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Submit Quote Request"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-sm font-semibold text-[var(--color-ink)]">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
