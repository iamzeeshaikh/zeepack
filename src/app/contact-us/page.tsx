import { redirect } from "next/navigation";

export default function LegacyContactUsRedirect() {
  redirect("/contact");
}
