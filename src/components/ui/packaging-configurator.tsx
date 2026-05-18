"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, ChevronRight, PhoneCall, Sparkles } from "lucide-react";

import { submitFormRequest } from "@/lib/form-client";
import { Container } from "@/components/ui/container";

// ── Data ─────────────────────────────────────────────────────────────────────

const BOX_TYPES = [
  { id: "rigid-boxes", label: "Rigid Boxes", image: "/images/zee/rigid-shoulder-box.jpg", desc: "Premium structured luxury boxes" },
  { id: "mailer-boxes", label: "Mailer Boxes", image: "/images/zee/mailer-with-inserts.jpg", desc: "E-commerce & DTC delivery" },
  { id: "folding-cartons", label: "Folding Cartons", image: "/images/zee/folding-carton-cosmetic.jpg", desc: "Retail shelf-ready formats" },
  { id: "gift-boxes", label: "Gift Boxes", image: "/images/zee/gift-stationery-box.jpg", desc: "Premium gifting presentation" },
  { id: "candle-boxes", label: "Candle Packaging", image: "/images/zee/candle-window-box.jpg", desc: "Candle & home fragrance" },
  { id: "cosmetic-boxes", label: "Cosmetic Packaging", image: "/images/zee/cosmetic-serum-box.jpg", desc: "Beauty & skincare brands" },
  { id: "jewelry-boxes", label: "Jewelry Boxes", image: "/images/zee/jewelry-cotton-box.jpg", desc: "Fine & fashion jewelry" },
  { id: "kraft-boxes", label: "Kraft Boxes", image: "/images/zee/kraft-recycled-box.jpg", desc: "Natural & artisan brands" },
  { id: "corrugated-boxes", label: "Corrugated Boxes", image: "/images/zee/corrugated-divider-box.jpg", desc: "Shipping & transit" },
  { id: "display-boxes", label: "Display Boxes", image: "/images/zee/display-window-box.jpg", desc: "Counter & POS display" },
  { id: "product-boxes", label: "Product Boxes", image: "/images/zee/product-rigid-box.jpg", desc: "General retail & DTC" },
  { id: "sustainable-packaging", label: "Sustainable", image: "/images/zee/sustainable-kraft-box.jpg", desc: "Eco-responsible formats" },
];

const SIZES = [
  { id: "xs", label: "Extra Small", sub: "4 × 3 × 2 in" },
  { id: "sm", label: "Small", sub: "6 × 4 × 2 in" },
  { id: "md", label: "Medium", sub: "9 × 6 × 3 in" },
  { id: "lg", label: "Large", sub: "12 × 9 × 4 in" },
  { id: "xl", label: "Extra Large", sub: "16 × 12 × 6 in" },
  { id: "custom", label: "Custom Size", sub: "Enter below ↓" },
];

const MATERIALS = [
  { id: "cardboard", label: "Cardboard", sub: "300–400gsm" },
  { id: "kraft", label: "Kraft", sub: "Natural brown paper" },
  { id: "corrugated", label: "Corrugated", sub: "Heavy-duty shipping" },
  { id: "rigid-board", label: "Rigid Board", sub: "Premium luxury feel" },
  { id: "eco-friendly", label: "Eco-Friendly", sub: "FSC certified" },
];

const PRINTING = [
  { id: "none", label: "No Printing", sub: "Plain / unprinted" },
  { id: "cmyk", label: "Full Colour CMYK", sub: "Standard 4-colour" },
  { id: "pms", label: "PMS Spot Colours", sub: "Pantone matched" },
  { id: "inside", label: "Inside Printing", sub: "Interior design" },
  { id: "outside", label: "Outside Printing", sub: "Exterior design" },
  { id: "both-sides", label: "Both Sides", sub: "In & out printed" },
];

const FINISHES = [
  { id: "gloss-lam", label: "Gloss Lamination", sub: "High shine surface" },
  { id: "matte-lam", label: "Matte Lamination", sub: "Smooth satin look" },
  { id: "spot-uv", label: "Spot UV", sub: "Selective high gloss" },
  { id: "gold-foil", label: "Gold Foil", sub: "Luxury metallic gold" },
  { id: "silver-foil", label: "Silver Foil", sub: "Metallic silver cross" },
  { id: "embossing", label: "Embossing", sub: "Raised texture" },
  { id: "debossing", label: "Debossing", sub: "Pressed-in texture" },
  { id: "soft-touch", label: "Soft-Touch", sub: "Velvet-like finish" },
];

const QUANTITIES = [100, 250, 500, 1000, 2500, 5000, 10000];

const ADD_ONS = [
  { id: "inserts", label: "Inserts", sub: "Custom tray or foam" },
  { id: "window-cut", label: "Window Cut", sub: "Transparent panel" },
  { id: "ribbon-closure", label: "Ribbon Closure", sub: "Silk ribbon & bow" },
  { id: "magnetic-closure", label: "Magnetic Closure", sub: "Premium snap close" },
  { id: "handles", label: "Handles", sub: "Die-cut carry handles" },
  { id: "sleeves", label: "Outer Sleeve", sub: "Branded paper sleeve" },
];

const TRUST_BADGES = [
  "Free design support included",
  "Low minimum order quantities",
  "Premium finishes available",
  "Ships nationwide across the USA",
  "24-hr quote response",
];

// ── Types ─────────────────────────────────────────────────────────────────────

type Sel = {
  boxType: string;
  size: string;
  customW: string;
  customH: string;
  customD: string;
  material: string;
  printing: string[];
  finishes: string[];
  quantity: number | null;
  customQty: string;
  addOns: string[];
  designSupport: boolean;
};

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

const INITIAL: Sel = {
  boxType: "",
  size: "",
  customW: "",
  customH: "",
  customD: "",
  material: "",
  printing: [],
  finishes: [],
  quantity: null,
  customQty: "",
  addOns: [],
  designSupport: false,
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function toggle(arr: string[], id: string): string[] {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
}

function buildSummaryText(s: Sel): string {
  const lines: string[] = ["=== Packaging Configuration (via Configurator) ==="];
  if (s.boxType) lines.push(`Box Type: ${BOX_TYPES.find((b) => b.id === s.boxType)?.label ?? s.boxType}`);
  if (s.size) {
    if (s.size === "custom") {
      lines.push(`Size: Custom — ${s.customW || "?"}W × ${s.customH || "?"}H × ${s.customD || "?"}D in`);
    } else {
      const sz = SIZES.find((x) => x.id === s.size);
      lines.push(`Size: ${sz?.label} (${sz?.sub})`);
    }
  }
  if (s.material) lines.push(`Material: ${MATERIALS.find((m) => m.id === s.material)?.label}`);
  if (s.printing.length) lines.push(`Printing: ${s.printing.map((p) => PRINTING.find((x) => x.id === p)?.label).join(", ")}`);
  if (s.finishes.length) lines.push(`Finishes: ${s.finishes.map((f) => FINISHES.find((x) => x.id === f)?.label).join(", ")}`);
  if (s.quantity) lines.push(`Quantity: ${s.quantity.toLocaleString()} units`);
  else if (s.customQty) lines.push(`Quantity: ${s.customQty} units (custom)`);
  if (s.addOns.length) lines.push(`Add-Ons: ${s.addOns.map((a) => ADD_ONS.find((x) => x.id === a)?.label).join(", ")}`);
  if (s.designSupport) lines.push("Design Support: Requested");
  return lines.join("\n");
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Step({
  n,
  title,
  badge,
  children,
}: {
  n: number;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white p-6 shadow-[0_2px_16px_rgba(17,17,17,0.04)]">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-cta)] text-xs font-bold text-white">
          {n}
        </span>
        <h2 className="text-[15px] font-semibold text-[var(--color-primary)]">{title}</h2>
        {badge && (
          <span className="rounded-full bg-[rgba(198,169,114,0.12)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-taupe)]">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Pill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-[14px] border px-4 py-3 text-left text-sm transition-all ${
        selected
          ? "border-[var(--color-cta)] bg-[rgba(198,169,114,0.08)] shadow-[0_0_0_1px_var(--color-cta)]"
          : "border-[rgba(17,17,17,0.1)] bg-white hover:border-[rgba(198,169,114,0.5)] hover:bg-[rgba(198,169,114,0.04)]"
      }`}
    >
      {selected && (
        <span className="absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-cta)]">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </span>
      )}
      {children}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1.5">
      <span className="flex-shrink-0 text-[12px] text-[var(--color-muted)]">{label}</span>
      <span
        className={`text-right text-[12px] font-semibold leading-snug ${
          value ? "text-[var(--color-primary)]" : "text-[rgba(17,17,17,0.2)]"
        }`}
      >
        {value ?? "Not selected"}
      </span>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function PackagingConfigurator() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [sel, setSel] = useState<Sel>(INITIAL);
  const [contact, setContact] = useState<ContactForm>({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const selectedBox = BOX_TYPES.find((b) => b.id === sel.boxType);
  const previewImage = selectedBox?.image ?? "/images/zee/rigid-lid-box.jpg";

  const completedSteps = [
    !!sel.boxType,
    !!sel.size,
    !!sel.material,
    sel.printing.length > 0,
    sel.finishes.length > 0,
    !!(sel.quantity || sel.customQty),
  ].filter(Boolean).length;

  const sizeLabel =
    sel.size === "custom"
      ? `Custom: ${sel.customW || "?"}×${sel.customH || "?"}×${sel.customD || "?"}"`
      : SIZES.find((s) => s.id === sel.size)?.label;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contact.name || !contact.email) return;
    setIsSubmitting(true);
    setError("");
    try {
      const payload = new FormData();
      payload.set("formType", "quote");
      payload.set("name", contact.name);
      payload.set("email", contact.email);
      payload.set("phone", contact.phone);
      payload.set("company", contact.company);
      payload.set("productInterestedIn", selectedBox?.label ?? sel.boxType);
      payload.set("quantity", sel.quantity?.toString() ?? sel.customQty);
      payload.set("length", sel.customW);
      payload.set("width", sel.customH);
      payload.set("depth", sel.customD);
      payload.set("materialPreference", MATERIALS.find((m) => m.id === sel.material)?.label ?? "");
      payload.set("printingPreference", sel.printing.map((p) => PRINTING.find((x) => x.id === p)?.label).join(", "));
      payload.set("finishingPreference", sel.finishes.map((f) => FINISHES.find((x) => x.id === f)?.label).join(", "));
      payload.set("message", buildSummaryText(sel));
      await submitFormRequest("quote", payload);
      router.push("/thank-you/?form=quote");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="py-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]">

          {/* ── LEFT PANEL ── */}
          <div className="flex flex-col gap-5">

            {/* Step 1 — Box Type */}
            <Step n={1} title="Select Box Type">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {BOX_TYPES.map((bt) => (
                  <button
                    key={bt.id}
                    type="button"
                    onClick={() => setSel((s) => ({ ...s, boxType: s.boxType === bt.id ? "" : bt.id }))}
                    className={`group relative overflow-hidden rounded-[16px] border text-left transition-all ${
                      sel.boxType === bt.id
                        ? "border-[var(--color-cta)] shadow-[0_0_0_1px_var(--color-cta)]"
                        : "border-[rgba(17,17,17,0.1)] hover:border-[rgba(198,169,114,0.5)]"
                    }`}
                  >
                    <div className="relative h-[88px] w-full bg-[rgba(248,245,239,0.9)]">
                      <Image
                        src={bt.image}
                        alt={bt.label}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 33vw, 50vw"
                      />
                      {sel.boxType === bt.id && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-cta)]">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-[13px] font-semibold text-[var(--color-primary)]">{bt.label}</p>
                      <p className="mt-0.5 text-[11px] text-[var(--color-muted)]">{bt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Step>

            {/* Step 2 — Size */}
            <Step n={2} title="Select Size">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {SIZES.map((sz) => (
                  <Pill
                    key={sz.id}
                    selected={sel.size === sz.id}
                    onClick={() => setSel((s) => ({ ...s, size: s.size === sz.id ? "" : sz.id }))}
                  >
                    <span className="block font-semibold text-[var(--color-primary)]">{sz.label}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--color-muted)]">{sz.sub}</span>
                  </Pill>
                ))}
              </div>
              {sel.size === "custom" && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {(["W", "H", "D"] as const).map((dim) => {
                    const key = `custom${dim}` as "customW" | "customH" | "customD";
                    const label = dim === "W" ? "Width (in)" : dim === "H" ? "Height (in)" : "Depth (in)";
                    return (
                      <div key={dim}>
                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                          {label}
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 6"
                          value={sel[key]}
                          onChange={(e) => setSel((s) => ({ ...s, [key]: e.target.value }))}
                          className="w-full rounded-[12px] border border-[rgba(17,17,17,0.12)] px-3 py-2.5 text-sm text-[var(--color-primary)] outline-none transition focus:border-[var(--color-cta)] focus:ring-1 focus:ring-[var(--color-cta)]"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </Step>

            {/* Step 3 — Material */}
            <Step n={3} title="Select Material">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {MATERIALS.map((mat) => (
                  <Pill
                    key={mat.id}
                    selected={sel.material === mat.id}
                    onClick={() => setSel((s) => ({ ...s, material: s.material === mat.id ? "" : mat.id }))}
                  >
                    <span className="block font-semibold text-[var(--color-primary)]">{mat.label}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--color-muted)]">{mat.sub}</span>
                  </Pill>
                ))}
              </div>
            </Step>

            {/* Step 4 — Printing */}
            <Step n={4} title="Printing Options" badge="Select all that apply">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {PRINTING.map((pr) => (
                  <Pill
                    key={pr.id}
                    selected={sel.printing.includes(pr.id)}
                    onClick={() => setSel((s) => ({ ...s, printing: toggle(s.printing, pr.id) }))}
                  >
                    <span className="block font-semibold text-[var(--color-primary)]">{pr.label}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--color-muted)]">{pr.sub}</span>
                  </Pill>
                ))}
              </div>
            </Step>

            {/* Step 5 — Finishes */}
            <Step n={5} title="Select Finishes" badge="Select all that apply">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {FINISHES.map((fin) => (
                  <Pill
                    key={fin.id}
                    selected={sel.finishes.includes(fin.id)}
                    onClick={() => setSel((s) => ({ ...s, finishes: toggle(s.finishes, fin.id) }))}
                  >
                    <span className="block font-semibold text-[var(--color-primary)]">{fin.label}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--color-muted)]">{fin.sub}</span>
                  </Pill>
                ))}
              </div>
            </Step>

            {/* Step 6 — Quantity */}
            <Step n={6} title="Select Quantity">
              <div className="flex flex-wrap gap-2.5">
                {QUANTITIES.map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setSel((s) => ({ ...s, quantity: s.quantity === qty ? null : qty, customQty: "" }))}
                    className={`rounded-[12px] border px-5 py-2.5 text-sm font-semibold transition-all ${
                      sel.quantity === qty
                        ? "border-[var(--color-cta)] bg-[rgba(198,169,114,0.08)] text-[var(--color-primary)] shadow-[0_0_0_1px_var(--color-cta)]"
                        : "border-[rgba(17,17,17,0.1)] text-[var(--color-muted)] hover:border-[rgba(198,169,114,0.5)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {qty >= 1000 ? `${qty / 1000}k` : qty}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Or enter custom quantity
                </label>
                <input
                  type="number"
                  placeholder="e.g. 750"
                  value={sel.customQty}
                  onChange={(e) => setSel((s) => ({ ...s, customQty: e.target.value, quantity: null }))}
                  className="w-48 rounded-[12px] border border-[rgba(17,17,17,0.12)] px-3 py-2.5 text-sm text-[var(--color-primary)] outline-none transition focus:border-[var(--color-cta)] focus:ring-1 focus:ring-[var(--color-cta)]"
                />
              </div>
            </Step>

            {/* Step 7 — Add-ons */}
            <Step n={7} title="Optional Add-Ons" badge="Select all that apply">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {ADD_ONS.map((ao) => (
                  <Pill
                    key={ao.id}
                    selected={sel.addOns.includes(ao.id)}
                    onClick={() => setSel((s) => ({ ...s, addOns: toggle(s.addOns, ao.id) }))}
                  >
                    <span className="block font-semibold text-[var(--color-primary)]">{ao.label}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--color-muted)]">{ao.sub}</span>
                  </Pill>
                ))}
              </div>
            </Step>

            {/* Step 8 — Design Support */}
            <Step n={8} title="Design Support">
              <button
                type="button"
                onClick={() => setSel((s) => ({ ...s, designSupport: !s.designSupport }))}
                className={`flex w-full items-start gap-4 rounded-[16px] border p-4 text-left transition-all ${
                  sel.designSupport
                    ? "border-[var(--color-cta)] bg-[rgba(198,169,114,0.06)] shadow-[0_0_0_1px_var(--color-cta)]"
                    : "border-[rgba(17,17,17,0.1)] hover:border-[rgba(198,169,114,0.5)]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
                    sel.designSupport
                      ? "border-[var(--color-cta)] bg-[var(--color-cta)]"
                      : "border-[rgba(17,17,17,0.25)]"
                  }`}
                >
                  {sel.designSupport && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">I need free design support</p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--color-muted)]">
                    Our designers will create your artwork at no charge, with unlimited revisions until you are happy.
                  </p>
                </div>
              </button>
            </Step>

            {/* Step 9 — Contact form */}
            <div ref={formRef}>
              <Step n={9} title="Complete Your Quote Request">
                <form onSubmit={handleSubmit}>
                  {/* Selected config summary strip */}
                  {completedSteps > 0 && (
                    <div className="mb-5 rounded-[14px] bg-[rgba(198,169,114,0.07)] p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-taupe)]">
                        Your configuration
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {selectedBox && (
                          <span className="text-[12px] font-semibold text-[var(--color-primary)]">
                            {selectedBox.label}
                          </span>
                        )}
                        {sizeLabel && (
                          <span className="text-[12px] text-[var(--color-muted)]">· {sizeLabel}</span>
                        )}
                        {sel.material && (
                          <span className="text-[12px] text-[var(--color-muted)]">
                            · {MATERIALS.find((m) => m.id === sel.material)?.label}
                          </span>
                        )}
                        {(sel.quantity || sel.customQty) && (
                          <span className="text-[12px] text-[var(--color-muted)]">
                            · {sel.quantity?.toLocaleString() ?? sel.customQty} units
                          </span>
                        )}
                        {sel.finishes.length > 0 && (
                          <span className="text-[12px] text-[var(--color-muted)]">
                            · {sel.finishes.length} finish{sel.finishes.length > 1 ? "es" : ""}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { key: "name" as const, label: "Name *", type: "text", required: true },
                      { key: "email" as const, label: "Email *", type: "email", required: true },
                      { key: "phone" as const, label: "Phone", type: "tel", required: false },
                      { key: "company" as const, label: "Company / Brand", type: "text", required: false },
                    ].map(({ key, label, type, required }) => (
                      <div key={key} className="grid gap-1.5">
                        <label className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                          {label}
                        </label>
                        <input
                          type={type}
                          required={required}
                          value={contact[key]}
                          onChange={(e) => setContact((c) => ({ ...c, [key]: e.target.value }))}
                          className="rounded-[12px] border border-[rgba(17,17,17,0.12)] px-3 py-2.5 text-sm text-[var(--color-primary)] outline-none transition focus:border-[var(--color-cta)] focus:ring-1 focus:ring-[var(--color-cta)]"
                        />
                      </div>
                    ))}
                  </div>

                  {error && (
                    <p className="mt-3 text-sm font-medium text-red-500">{error}</p>
                  )}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex flex-1 items-center justify-center gap-2 rounded-[14px] bg-[var(--color-cta)] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      <Sparkles className="h-4 w-4" />
                      {isSubmitting ? "Sending…" : "Submit Quote Request"}
                    </button>
                    <a
                      href="tel:+15033580443"
                      className="flex items-center justify-center gap-2 rounded-[14px] border border-[rgba(17,17,17,0.12)] px-5 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Talk to an Expert
                    </a>
                  </div>
                </form>
              </Step>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-4">

              {/* Preview */}
              <div className="overflow-hidden rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-[rgba(248,245,239,0.8)]">
                <div className="px-4 pb-2 pt-3.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                    Live Preview
                  </p>
                </div>
                <div className="relative h-48 w-full">
                  <Image
                    src={previewImage}
                    alt="Package preview"
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="360px"
                  />
                </div>
                <p className="py-2 text-center text-[11px] text-[var(--color-muted)]">
                  {selectedBox ? selectedBox.label : "Select a box type to preview"}
                </p>
              </div>

              {/* Summary */}
              <div className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-white p-5 shadow-[0_2px_16px_rgba(17,17,17,0.04)]">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                  Your Configuration
                </p>
                <div className="divide-y divide-[rgba(17,17,17,0.05)]">
                  <SummaryRow label="Box Type" value={selectedBox?.label} />
                  <SummaryRow label="Size" value={sizeLabel} />
                  <SummaryRow label="Material" value={MATERIALS.find((m) => m.id === sel.material)?.label} />
                  <SummaryRow
                    label="Printing"
                    value={
                      sel.printing.length
                        ? sel.printing.map((p) => PRINTING.find((x) => x.id === p)?.label).join(", ")
                        : undefined
                    }
                  />
                  <SummaryRow
                    label="Finishes"
                    value={
                      sel.finishes.length
                        ? sel.finishes.map((f) => FINISHES.find((x) => x.id === f)?.label).join(", ")
                        : undefined
                    }
                  />
                  <SummaryRow
                    label="Quantity"
                    value={
                      sel.quantity
                        ? `${sel.quantity.toLocaleString()} units`
                        : sel.customQty
                          ? `${sel.customQty} units`
                          : undefined
                    }
                  />
                  <SummaryRow
                    label="Add-Ons"
                    value={
                      sel.addOns.length
                        ? sel.addOns.map((a) => ADD_ONS.find((x) => x.id === a)?.label).join(", ")
                        : undefined
                    }
                  />
                  <SummaryRow
                    label="Design Support"
                    value={sel.designSupport ? "Requested" : undefined}
                  />
                </div>

                {/* Progress bar */}
                <div className="mt-4 border-t border-[rgba(17,17,17,0.06)] pt-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[11px] text-[var(--color-muted)]">Configuration</span>
                    <span className="text-[11px] font-bold text-[var(--color-taupe)]">
                      {completedSteps} / 6 steps
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(17,17,17,0.07)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-cta)] transition-all duration-500"
                      style={{ width: `${Math.round((completedSteps / 6) * 100)}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-[14px] bg-[var(--color-cta)] px-4 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  <Sparkles className="h-4 w-4" />
                  Get a Quote
                </button>
                <a
                  href="tel:+15033580443"
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-[14px] border border-[rgba(17,17,17,0.1)] px-4 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Talk to a Packaging Expert
                </a>
              </div>

              {/* Trust badges */}
              <div className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-[rgba(248,245,239,0.55)] p-5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
                  Why ZEEPACK
                </p>
                {TRUST_BADGES.map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5 py-1">
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-cta)]">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[12px] font-medium text-[var(--color-primary)]">{badge}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Mobile CTA strip */}
        <div className="mt-6 flex flex-col gap-3 lg:hidden">
          <button
            type="button"
            onClick={scrollToForm}
            className="flex w-full items-center justify-center gap-2 rounded-[16px] bg-[var(--color-cta)] px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" />
            Get a Quote for This Configuration
          </button>
          <a
            href="tel:+15033580443"
            className="flex w-full items-center justify-center gap-2 rounded-[16px] border border-[rgba(17,17,17,0.12)] px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-cta)]"
          >
            <PhoneCall className="h-4 w-4" />
            Talk to a Packaging Expert
          </a>
        </div>
      </Container>
    </div>
  );
}
