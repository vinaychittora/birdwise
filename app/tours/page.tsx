import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { ToursBrowser } from "@/components/site/tours-browser";
import { guides, tours } from "@/data";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse birding, wildlife, and photography departures with filters for habitat, region, guide, and season.",
};

export default function ToursPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="Journeys" title="Browse every tour by destination, habitat, guide, or departure month." description="Client-side filters sync to URL query parameters, making the tour browser feel realistic and easy to later connect to a CMS or search index." />
      <ToursBrowser tours={tours} guides={guides} />
    </Container>
  );
}
