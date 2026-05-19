"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";

import { submitFormRequest } from "@/lib/form-client";

type Props = {
  context?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

const initialState = { name: "", email: "", phone: "", message: "" };

export function PageLeadForm({
  context = "",
  eyebrow = "Free Quote",
  title = "Get a Custom Packaging Quote",
  description = "Share your details and we'll respond within 24 hours with pricing and options.",
}: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function set(field: keyof typeof initialState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("message", form.message);
      fd.append("productType", context);
      if (file) fd.append("file", file);

      await submitFormRequest("lead", fd);
      router.push("/thank-you/?form=lead");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.07)] px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.35)] outline-none transition focus:border-[var(--color-taupe)] focus:bg-[rgba(255,255,255,0.1)]";

  return (
    <div className="bg-[var(--color-primary)] px-6 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center lg:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[rgba(255,255,255,0.55)]">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Row 1: Name / Email / Phone */}
          <div className="grid gap-3 sm:grid-cols-3">
            <input className={inputCls} placeholder="Your Name" value={form.name} onChange={set("name")} required />
            <input type="email" className={inputCls} placeholder="Email Address" value={form.email} onChange={set("email")} required />
            <input className={inputCls} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
          </div>

          {/* Row 2: Message */}
          <textarea
            className={`${inputCls} min-h-[100px] resize-none`}
            placeholder="Tell us about your packaging — product type, quantity, size, finish direction, or any other details…"
            value={form.message}
            onChange={set("message")}
          />

          {/* Row 3: File upload + Submit */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm text-[rgba(255,255,255,0.6)] transition hover:border-[rgba(255,255,255,0.35)] hover:text-white"
            >
              <Paperclip className="h-4 w-4" />
              {file ? file.name : "Upload Artwork / File"}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg,.zip"
              className="hidden"
              onChange={handleFile}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(232,96,58,0.32)] transition hover:opacity-90 disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Request a Quote"}
            </button>

            <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
              No spam · 24-hr response · 5 MB max
            </p>
          </div>

          {error ? <p className="text-sm text-[var(--color-cta)]">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
