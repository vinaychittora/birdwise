import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { NewsletterCard } from "@/components/site/newsletter-card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the philosophy, guiding style, and design direction behind Sahil Zutshi Birding & Wildlife Tours.",
};

export default function AboutPage() {
  return (
    <Container className="space-y-16 py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
        <SectionHeading eyebrow="About the company" title="An original demo brand built around ethical birding and natural history travel." description="This website is intentionally structured like a real specialist operator: clear information architecture, editorial rhythm, destination-rich copy, and maintainable data models." />
        <PlaceholderImage label="About page expedition collage placeholder" className="min-h-[360px]" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Field-first philosophy",
            text: "Tours are imagined around patient observation, local context, and ethical wildlife viewing rather than checklist-driven rush.",
          },
          {
            title: "Structured for growth",
            text: "All content lives in local typed data files so the project can later migrate cleanly into a headless CMS or API-backed catalog.",
          },
          {
            title: "Editorial design language",
            text: "The layout uses earthy colors, strong typography, and spacious card systems to feel premium, calm, and expedition-oriented.",
          },
        ].map((item) => (
          <Card key={item.title} className="p-6">
            <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/70">{item.text}</p>
          </Card>
        ))}
      </div>

      <Card className="grid gap-8 p-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold">What makes the experience feel real?</h2>
          <p className="mt-4 text-sm leading-7 text-foreground/75">Detailed departures, believable regional scope, guide-specific expertise, field reports, and interconnected content all work together so the site reads like a specialist travel business rather than a generic theme.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Static generation for index and detail pages",
            "Reusable cards and sections",
            "Consistent placeholder-image strategy",
            "Accessible semantic markup throughout",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-secondary p-4 text-sm text-foreground/75">{item}</div>
          ))}
        </div>
      </Card>

      <NewsletterCard />
    </Container>
  );
}
