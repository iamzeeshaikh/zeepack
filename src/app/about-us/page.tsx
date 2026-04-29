import { redirect } from "next/navigation";

export default function LegacyAboutUsRedirect() {
  redirect("/about");
}
