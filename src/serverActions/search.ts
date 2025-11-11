"use server";

import { redirect, RedirectType } from "next/navigation";

export async function submitSearch(_: any, formData: FormData) {
  const query = String(formData.get("query") || "").trim();
  if (!query) return { error: "Missing query" };
  // push to a shareable URL: /search?q=...
  redirect(`/youtube/${encodeURIComponent(query)}`, RedirectType.push);
}
