"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { TourCard } from "@/components/site/tour-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { categories, habitats } from "@/data";
import type { Guide, Tour } from "@/data/types";
import { getMonthLabel } from "@/lib/utils";

const durationRanges = [
  { value: "short", label: "1-5 days" },
  { value: "medium", label: "6-8 days" },
  { value: "long", label: "9+ days" },
];

const sorts = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price low to high" },
  { value: "duration", label: "Duration" },
  { value: "soonest", label: "Upcoming soonest" },
];

function parseMulti(value: string | null) {
  return value ? value.split(",").filter(Boolean) : [];
}

export function ToursBrowser({ tours, guides }: { tours: Tour[]; guides: Guide[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(() => ({
    q: searchParams.get("q") ?? "",
    categories: parseMulti(searchParams.get("category")),
    habitats: parseMulti(searchParams.get("habitat")),
    regions: parseMulti(searchParams.get("region")),
    months: parseMulti(searchParams.get("month")),
    durations: parseMulti(searchParams.get("duration")),
    difficulties: parseMulti(searchParams.get("difficulty")),
    guides: parseMulti(searchParams.get("guide")),
    sort: searchParams.get("sort") ?? "newest",
  }), [searchParams]);

  function updateParam(key: string, value: string | string[]) {
    const params = new URLSearchParams(searchParams.toString());
    const normalized = Array.isArray(value) ? value.filter(Boolean).join(",") : value;
    if (!normalized) params.delete(key);
    else params.set(key, normalized);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function toggleValue(key: string, value: string) {
    const current = parseMulti(searchParams.get(key));
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    updateParam(key, next);
  }

  const filteredTours = useMemo(() => {
    const list = tours.filter((tour) => {
      const text = `${tour.title} ${tour.subtitle} ${tour.shortSummary} ${tour.speciesHighlights.join(" ")}`.toLowerCase();
      const monthMatches = !filters.months.length || tour.departures.some((departure) => filters.months.includes(String(new Date(departure.date).getUTCMonth() + 1)));
      const durationMatches = !filters.durations.length || filters.durations.some((duration) => {
        if (duration === "short") return tour.durationDays <= 5;
        if (duration === "medium") return tour.durationDays >= 6 && tour.durationDays <= 8;
        return tour.durationDays >= 9;
      });
      return (
        (!filters.q || text.includes(filters.q.toLowerCase())) &&
        (!filters.categories.length || filters.categories.includes(tour.category)) &&
        (!filters.habitats.length || filters.habitats.some((habitat) => tour.habitats.includes(habitat as Tour["habitats"][number]))) &&
        (!filters.regions.length || filters.regions.includes(tour.region)) &&
        monthMatches &&
        durationMatches &&
        (!filters.difficulties.length || filters.difficulties.includes(tour.difficulty)) &&
        (!filters.guides.length || filters.guides.some((guide) => tour.guideSlugs.includes(guide)))
      );
    });

    const sorted = [...list].sort((a, b) => {
      if (filters.sort === "price-asc") return a.price.amount - b.price.amount;
      if (filters.sort === "duration") return a.durationDays - b.durationDays;
      if (filters.sort === "soonest") {
        const aDate = Math.min(...a.departures.map((departure) => +new Date(departure.date)));
        const bDate = Math.min(...b.departures.map((departure) => +new Date(departure.date)));
        return aDate - bDate;
      }
      const aIsNew = a.badges.includes("New") ? 1 : 0;
      const bIsNew = b.badges.includes("New") ? 1 : 0;
      if (aIsNew !== bIsNew) return bIsNew - aIsNew;
      return b.durationDays - a.durationDays;
    });

    return sorted;
  }, [filters, tours]);

  const filterGroups = [
    { label: "Category", key: "category", values: categories.map((category) => category.slug) },
    { label: "Habitat", key: "habitat", values: habitats.map((habitat) => habitat.slug) },
    { label: "Region", key: "region", values: Array.from(new Set(tours.map((tour) => tour.region))) },
    { label: "Month", key: "month", values: Array.from({ length: 12 }, (_, index) => String(index + 1)) },
    { label: "Duration", key: "duration", values: durationRanges.map((item) => item.value) },
    { label: "Difficulty", key: "difficulty", values: Array.from(new Set(tours.map((tour) => tour.difficulty))) },
    { label: "Guide", key: "guide", values: guides.map((guide) => guide.slug) },
  ];

  const activeChips = [
    ...filters.categories.map((value) => ({ key: "category", value, label: value.replace(/-/g, " ") })),
    ...filters.habitats.map((value) => ({ key: "habitat", value, label: value.replace(/-/g, " ") })),
    ...filters.regions.map((value) => ({ key: "region", value, label: value })),
    ...filters.months.map((value) => ({ key: "month", value, label: getMonthLabel(Number(value)) })),
    ...filters.durations.map((value) => ({ key: "duration", value, label: durationRanges.find((item) => item.value === value)?.label ?? value })),
    ...filters.difficulties.map((value) => ({ key: "difficulty", value, label: value })),
    ...filters.guides.map((value) => ({ key: "guide", value, label: guides.find((guide) => guide.slug === value)?.name ?? value })),
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <Card className="space-y-6 p-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
            <Input
              value={filters.q}
              onChange={(event) => updateParam("q", event.target.value)}
              placeholder="Search tours, species, regions"
              className="pl-11"
              aria-label="Search tours"
            />
          </div>
          <div>
            <label htmlFor="sort" className="mb-2 block text-sm font-medium text-foreground/70">Sort by</label>
            <Select id="sort" value={filters.sort} onChange={(event) => updateParam("sort", event.target.value)}>
              {sorts.map((sort) => <option key={sort.value} value={sort.value}>{sort.label}</option>)}
            </Select>
          </div>
          {filterGroups.map((group) => (
            <div key={group.key} className="space-y-3 border-t pt-5 first:border-t-0 first:pt-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.values.map((value) => {
                  const selected = parseMulti(searchParams.get(group.key)).includes(value);
                  const label = group.key === "month"
                    ? getMonthLabel(Number(value))
                    : group.key === "guide"
                      ? guides.find((guide) => guide.slug === value)?.name ?? value
                      : group.key === "duration"
                        ? durationRanges.find((item) => item.value === value)?.label ?? value
                        : value.replace(/-/g, " ");
                  return (
                    <button
                      type="button"
                      key={value}
                      onClick={() => toggleValue(group.key, value)}
                      className={`rounded-full px-3 py-2 text-sm transition ${selected ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/75 hover:bg-secondary/80"}`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <Button variant="ghost" onClick={() => router.replace(pathname)} className="w-full">Clear all filters</Button>
        </Card>
      </aside>
      <div className="space-y-6">
        {activeChips.length || filters.q ? (
          <div className="flex flex-wrap items-center gap-2">
            {filters.q ? (
              <button type="button" onClick={() => updateParam("q", "")} className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
                Search: {filters.q} <X className="h-3 w-3" />
              </button>
            ) : null}
            {activeChips.map((chip) => (
              <button key={`${chip.key}-${chip.value}`} type="button" onClick={() => toggleValue(chip.key, chip.value)} className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-foreground/80">
                {chip.label} <X className="h-3 w-3" />
              </button>
            ))}
          </div>
        ) : null}
        <p className="text-sm text-foreground/60">Showing {filteredTours.length} of {tours.length} journeys.</p>
        {filteredTours.length ? (
          <div className="grid gap-6 xl:grid-cols-2">
            {filteredTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        ) : (
          <Card className="p-10 text-center">
            <h3 className="font-serif text-2xl font-semibold">No tours match those filters.</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/70">Try clearing one or two filters, or search for a broader habitat or destination.</p>
            <Button variant="outline" className="mt-6" onClick={() => router.replace(pathname)}>Reset filters</Button>
          </Card>
        )}
      </div>
    </div>
  );
}
