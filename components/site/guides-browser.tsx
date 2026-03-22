"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { GuideCard } from "@/components/site/guide-card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Guide } from "@/data/types";

export function GuidesBrowser({ guides }: { guides: Guide[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string | null>(null);
  const [specialty, setSpecialty] = useState<string | null>(null);

  const regions = Array.from(new Set(guides.flatMap((guide) => guide.regions)));
  const specialties = Array.from(new Set(guides.flatMap((guide) => guide.specialties)));

  const filtered = useMemo(
    () => guides.filter((guide) => {
      const haystack = `${guide.name} ${guide.role} ${guide.bio} ${guide.specialties.join(" ")} ${guide.regions.join(" ")}`.toLowerCase();
      return (!query || haystack.includes(query.toLowerCase())) && (!region || guide.regions.includes(region)) && (!specialty || guide.specialties.includes(specialty));
    }),
    [guides, query, region, specialty],
  );

  return (
    <div className="space-y-8">
      <Card className="space-y-5 p-6">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides, specialties, or regions" className="pl-11" />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Filter by region</p>
            <div className="flex flex-wrap gap-2">
              {regions.map((item) => (
                <button key={item} type="button" onClick={() => setRegion(region === item ? null : item)} className={`rounded-full px-3 py-2 text-sm ${region === item ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/75"}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Filter by specialty</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((item) => (
                <button key={item} type="button" onClick={() => setSpecialty(specialty === item ? null : item)} className={`rounded-full px-3 py-2 text-sm ${specialty === item ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/75"}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
      {filtered.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div> : <Card className="p-10 text-center text-foreground/70">No guides matched those filters.</Card>}
    </div>
  );
}
