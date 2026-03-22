import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Mail } from "lucide-react";
import { Container } from "@/components/site/container";
import { GuideCard } from "@/components/site/guide-card";
import { NewsletterCard } from "@/components/site/newsletter-card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { ReportCard } from "@/components/site/report-card";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { TourCard } from "@/components/site/tour-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredTours, guaranteedTours, guides, newTours, recentReports, siteSettings, testimonials } from "@/data";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b bg-hero-texture py-24 text-primary-foreground sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                {siteSettings.tagline}
              </div>
              <div className="space-y-5">
                <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Birding journeys shaped by place, season, and fieldcraft.</h1>
                <p className="max-w-xl text-lg leading-8 text-primary-foreground/80">Discover premium demo itineraries across South Asia and beyond — from wetlands and rainforests to high-altitude wildlife landscapes — all presented with original branding and structured local content.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary"><Link href="/tours">Browse tours</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"><Link href="/contact">Plan a custom trip</Link></Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "18 handcrafted demo tours",
                  "6 specialist guides",
                  "Responsive multi-page Next.js build",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-primary-foreground/85">{item}</div>
                ))}
              </div>
            </div>
            <PlaceholderImage label="Editorial expedition-style hero placeholder with mountain forest and wetlands" className="min-h-[440px] bg-white/10 text-primary-foreground" />
          </div>
        </Container>
      </section>

      <Container className="space-y-20 pt-16">
        <section>
          <Card className="grid gap-8 p-8 lg:grid-cols-[1fr,auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Start browsing</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">Search by habitat, destination, departure month, or guide.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link href="/tours"><Compass className="mr-2 h-4 w-4" />Explore all tours</Link></Button>
              <Button asChild variant="outline"><Link href="/field-reports"><Mail className="mr-2 h-4 w-4" />Read field reports</Link></Button>
            </div>
          </Card>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Featured journeys" title="A premium collection of birding, wildlife, and photography departures." description="The homepage highlights a curated mix of journeys to mirror a real travel company’s editorial rhythm — headline trips, guaranteed departures, and newly released ideas." />
          <div className="grid gap-6 xl:grid-cols-3">{featuredTours.slice(0, 6).map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Guaranteed departures" title="Trips already confirmed to operate." description="Useful for travelers who want confidence around dates and fast booking decisions." />
          <div className="grid gap-6 lg:grid-cols-3">{guaranteedTours.slice(0, 3).map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="New tours" title="Fresh routes, specialist angles, and timely departures." />
          <div className="grid gap-6 lg:grid-cols-3">{newTours.slice(0, 3).map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Field reports" title="Recent notes from the field." description="Rich dummy editorial content helps the website feel like an active specialist travel business instead of a static brochure." />
            <Button asChild variant="outline"><Link href="/field-reports">All reports <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">{recentReports.map((report) => <ReportCard key={report.slug} report={report} />)}</div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Meet our guides" title="Field leaders with clear regional strengths and specialist interests." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Guest feedback" title="Testimonials that reinforce the premium, specialist tone." />
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}</div>
        </section>

        <NewsletterCard />

        <section>
          <Card className="grid gap-6 p-8 lg:grid-cols-3">
            {[
              "Ethical wildlife-viewing principles across all journeys.",
              "Structured local data files ready for a future CMS integration.",
              "Detailed tour pages with departures, itineraries, FAQs, and related content.",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-foreground/75"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /> <span>{item}</span></div>
            ))}
          </Card>
        </section>
      </Container>
    </div>
  );
}
