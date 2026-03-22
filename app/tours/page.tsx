import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { ToursBrowser } from "@/components/site/tours-browser";
import { Card } from "@/components/ui/card";
import { guides, tours } from "@/data";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse birding, wildlife, and photography departures with filters for habitat, region, guide, and season.",
};

function ToursPageFallback() {
  return (
    <Card className="p-10 text-center">
      <h2 className="font-serif text-2xl font-semibold">Loading the tour browser…</h2>
      <p className="mt-3 text-sm leading-7 text-foreground/70">Preparing filters, departures, and searchable tour cards.</p>
    </Card>
  );
}

export default function ToursPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="Journeys" title="Browse every tour by destination, habitat, guide, or departure month." description="Client-side filters sync to URL query parameters, making the tour browser feel realistic and easy to later connect to a CMS or search index." />
      <Suspense fallback={<ToursPageFallback />}>
        <ToursBrowser tours={tours} guides={guides} />
      </Suspense>
    </Container>
  );
}
