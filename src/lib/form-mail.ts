import { siteConfig } from "@/data/site";

export type FormType = "contact" | "lead" | "quote";

export const FORM_RECIPIENT = siteConfig.email;

type FormPayload = Record<string, string>;

export function getFormSubject(formType: FormType, payload: FormPayload) {
  const company = payload.company?.trim();
  const product = payload.productInterestedIn?.trim() || payload.productType?.trim();

  if (formType === "quote") {
    return company
      ? `Quote Request from ${company}`
      : `Quote Request${product ? ` for ${product}` : ""}`;
  }

  if (formType === "lead") {
    return company ? `New Packaging Lead from ${company}` : "New Packaging Lead";
  }

  return company ? `Contact Inquiry from ${company}` : "Contact Inquiry";
}

export function buildFormEmailHtml(formType: FormType, payload: FormPayload) {
  const titleMap: Record<FormType, string> = {
    contact: "New Contact Inquiry",
    lead: "New Lead Submission",
    quote: "New Quote Request",
  };

  const rows = Object.entries(payload)
    .filter(([, value]) => value?.trim())
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #E7E1D3;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#697386;font-weight:700;width:220px;">
            ${escapeHtml(formatLabel(key))}
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #E7E1D3;font-size:14px;line-height:1.7;color:#15243A;">
            ${escapeHtml(value).replace(/\n/g, "<br />")}
          </td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="background:#FFF9EE;padding:32px;font-family:Arial,sans-serif;color:#15243A;">
      <div style="max-width:760px;margin:0 auto;background:#FFFFFF;border:1px solid rgba(21,36,58,0.08);border-radius:24px;overflow:hidden;">
        <div style="padding:28px 32px;background:linear-gradient(180deg,#FFF4C8,#FFF9EE);border-bottom:1px solid #E7E1D3;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#697386;font-weight:700;">The Cereal Boxes</p>
          <h1 style="margin:0;font-size:30px;line-height:1.1;font-weight:700;color:#15243A;">${titleMap[formType]}</h1>
          <p style="margin:14px 0 0;font-size:15px;line-height:1.8;color:#5F6878;">
            A new website form submission has been received at ${siteConfig.domain}.
          </p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

export function buildFormEmailText(formType: FormType, payload: FormPayload) {
  const titleMap: Record<FormType, string> = {
    contact: "New Contact Inquiry",
    lead: "New Lead Submission",
    quote: "New Quote Request",
  };

  const fields = Object.entries(payload)
    .filter(([, value]) => value?.trim())
    .map(([key, value]) => `${formatLabel(key)}: ${value}`)
    .join("\n");

  return `${titleMap[formType]}\n\n${fields}`;
}

function formatLabel(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (match) => match.toUpperCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
