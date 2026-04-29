import type { FormType } from "@/lib/form-mail";

export async function submitFormRequest(
  formType: FormType,
  payload: Record<string, string> | FormData,
) {
  const body =
    payload instanceof FormData
      ? (() => {
          payload.set("formType", formType);
          return payload;
        })()
      : JSON.stringify({
          formType,
          payload,
        });

  const response = await fetch("/api/forms", {
    method: "POST",
    headers: payload instanceof FormData ? undefined : { "Content-Type": "application/json" },
    body,
  });

  const data = (await response.json().catch(() => null)) as
    | { error?: string; success?: boolean }
    | null;

  if (!response.ok) {
    throw new Error(data?.error || "Unable to send your request right now.");
  }

  return data;
}
