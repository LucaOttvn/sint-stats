"use client";
import { submitSearch } from "@/serverActions/search";
import {useActionState} from "react";


export default function SearchBar() {
  const [state, formAction, isPending] = useActionState(submitSearch, null);

  return (
    <form action={formAction} className="center gap-2">
      <input className="mainInput" type="text" name="query" />
      <button className="mainButton" disabled={isPending}>{isPending ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
