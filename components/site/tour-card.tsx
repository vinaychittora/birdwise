import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { getGuideName } from "@/data";
import type { Tour } from "@/data/types";
import { formatDate } from "@/lib/utils";

export function TourCard({ tour }: { tour: Tour }) {
  const nextDeparture = [...tour.departures].sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  return (
    <Card className="overflow-hidden">
      <PlaceholderImage label={tour.heroImage} className="rounded-none border-0" />
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {tour.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
          <Badge variant="accent">{tour.category.replace(/-/g, " ")}</Badge>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            <Link href={`/tours/${tour.slug}`} className="hover:text-primary">
              {tour.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-6 text-foreground/70">{tour.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-foreground/70">
          {tour.habitats.map((habitat) => (
            <span key={habitat} className="rounded-full bg-secondary px-3 py-1">{habitat.replace(/-/g, " ")}</span>
          ))}
        </div>
        <div className="grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
          <div className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> {tour.durationDays} days</div>
          <div className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> {formatDate(nextDeparture.date)}</div>
          <div className="inline-flex items-center gap-2 sm:col-span-2"><UserRound className="h-4 w-4 text-primary" /> {tour.guideSlugs.map(getGuideName).join(", ")}</div>
        </div>
        <p className="text-sm leading-7 text-foreground/75">{tour.shortSummary}</p>
        <Button asChild>
          <Link href={`/tours/${tour.slug}`}>
            View journey <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
