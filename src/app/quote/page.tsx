import { redirect } from "next/navigation";

export default function LegacyQuoteRedirect() {
  redirect("/request-a-quote/");
}
