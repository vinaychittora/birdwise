import Link from "next/link";
import { siteSettings } from "@/data";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={siteSettings.siteName}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-soft">
        SZ
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-lg font-semibold tracking-tight text-foreground">Sahil Zutshi</span>
        <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">Birding & Wildlife Tours</span>
      </span>
    </Link>
  );
}
