import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Check, CircleOff, Clock3, MapPin, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ContactPanel } from "@/components/site/contact-panel";
import { Container } from "@/components/site/container";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { GuideCard } from "@/components/site/guide-card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { TourCard } from "@/components/site/tour-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getGuideBySlug, getRelatedTours, getTourBySlug, tours } from "@/data";
import { formatCurrency, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.title,
    description: tour.shortSummary,
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const guideProfiles = tour.guideSlugs.map(getGuideBySlug).filter(Boolean);
  const relatedTours = getRelatedTours(tour.slug);

  return (
    <div className="pb-20">
      <section className="border-b py-10">
        <Container className="space-y-8">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: tour.title }]} />
          <div className="grid gap-8 lg:grid-cols-[1fr,0.95fr] lg:items-end">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">{tour.badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">{tour.region} · {tour.country}</p>
                <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{tour.title}</h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/70">{tour.subtitle}</p>
              </div>
            </div>
            <Card className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="inline-flex items-center gap-3 text-sm text-foreground/75"><Clock3 className="h-4 w-4 text-primary" /> {tour.durationDays} days</div>
              <div className="inline-flex items-center gap-3 text-sm text-foreground/75"><Users className="h-4 w-4 text-primary" /> {tour.groupSize}</div>
              <div className="inline-flex items-center gap-3 text-sm text-foreground/75"><MapPin className="h-4 w-4 text-primary" /> {tour.bestSeason}</div>
              <div className="inline-flex items-center gap-3 text-sm text-foreground/75"><CalendarDays className="h-4 w-4 text-primary" /> From {formatCurrency(tour.price.amount, tour.price.currency)}</div>
            </Card>
          </div>
          <PlaceholderImage label={tour.heroImage} className="min-h-[420px]" />
        </Container>
      </section>

      <Container className="space-y-12 pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Overview</h2>
              <div className="prose-content">{tour.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </Card>

            <Card className="space-y-4 p-6">
              <h2 className="font-serif text-3xl font-semibold">Highlights</h2>
              <ul className="grid gap-3 text-sm leading-7 text-foreground/75">
                {tour.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /> {highlight}</li>)}
              </ul>
            </Card>

            <Card className="space-y-4 p-6">
              <h2 className="font-serif text-3xl font-semibold">Target species & wildlife</h2>
              <div className="flex flex-wrap gap-2">{tour.speciesHighlights.map((species) => <Badge key={species} variant="accent">{species}</Badge>)}</div>
            </Card>

            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Itinerary</h2>
              <div className="space-y-5">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="rounded-2xl bg-secondary/60 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/75">Day {item.day}</p>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">{item.summary}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">FAQ</h2>
              <FAQAccordion items={tour.faqSnippet.map((item) => ({ ...item, category: "Travel" as const }))} />
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Quick facts</h2>
              <dl className="grid gap-4 text-sm text-foreground/75">
                <div className="flex justify-between gap-4 border-b pb-3"><dt>Difficulty</dt><dd>{tour.difficulty}</dd></div>
                <div className="flex justify-between gap-4 border-b pb-3"><dt>Accessibility</dt><dd className="max-w-[18rem] text-right">{tour.accessibility}</dd></div>
                <div className="flex justify-between gap-4 border-b pb-3"><dt>Best season</dt><dd>{tour.bestSeason}</dd></div>
                <div className="flex justify-between gap-4 border-b pb-3"><dt>Group size</dt><dd>{tour.groupSize}</dd></div>
                <div className="flex justify-between gap-4"><dt>Price</dt><dd>{formatCurrency(tour.price.amount, tour.price.currency)} {tour.price.perPersonLabel}</dd></div>
              </dl>
            </Card>

            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Upcoming departures</h2>
              <div className="space-y-3">
                {tour.departures.map((departure) => (
                  <div key={departure.date} className="rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{formatDate(departure.date)}</p>
                        <p className="text-sm text-foreground/70">{departure.durationDays} days · {departure.spacesLeft} spaces left</p>
                      </div>
                      <Badge>{departure.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full"><a href="#inquiry">Ask about this departure</a></Button>
            </Card>

            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Included</h2>
              <ul className="space-y-3 text-sm leading-7 text-foreground/75">
                {tour.included.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /> {item}</li>)}
              </ul>
            </Card>

            <Card className="space-y-5 p-6">
              <h2 className="font-serif text-3xl font-semibold">Not included</h2>
              <ul className="space-y-3 text-sm leading-7 text-foreground/75">
                {tour.notIncluded.map((item) => <li key={item} className="flex gap-3"><CircleOff className="mt-1 h-5 w-5 shrink-0 text-primary" /> {item}</li>)}
              </ul>
            </Card>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold">Your guides</h2>
          <div className="grid gap-6 lg:grid-cols-2">{guideProfiles.map((guide) => guide ? <GuideCard key={guide.slug} guide={guide} /> : null)}</div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold">Gallery placeholders</h2>
          <div className="grid gap-6 md:grid-cols-3">{tour.gallery.map((image) => <PlaceholderImage key={image} label={image} subtle className="min-h-[200px]" />)}</div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-3xl font-semibold">Related tours</h2>
            <Button asChild variant="outline"><Link href="/tours">View all tours</Link></Button>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">{relatedTours.map((relatedTour) => <TourCard key={relatedTour.slug} tour={relatedTour} />)}</div>
        </section>

        <section id="inquiry" className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold">Inquire about this journey</h2>
          <ContactPanel compact />
        </section>
      </Container>
    </div>
  );
}
