import { redirect } from "next/navigation";

export default function LegacyRequestQuoteRedirect() {
  redirect("/quote");
}
