import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { TourCard } from "@/components/site/tour-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getGuideBySlug, getToursByGuide, guides } from "@/data";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return { title: guide.name, description: guide.bio };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const ledTours = getToursByGuide(guide.slug);

  return (
    <Container className="space-y-10 py-16">
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: guide.name }]} />
      <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
        <PlaceholderImage label={guide.portrait} subtle className="min-h-[420px]" />
        <Card className="space-y-6 p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">{guide.role}</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold">{guide.name}</h1>
          </div>
          <p className="text-base leading-8 text-foreground/75">{guide.bio}</p>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Specialties</h2>
            <div className="flex flex-wrap gap-2">{guide.specialties.map((specialty) => <Badge key={specialty}>{specialty}</Badge>)}</div>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Regions of expertise</h2>
            <div className="flex flex-wrap gap-2">{guide.regions.map((region) => <Badge key={region} variant="accent">{region}</Badge>)}</div>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-primary">Plan a journey with {guide.name.split(" ")[0]} →</Link>
        </Card>
      </div>
      <section className="space-y-6">
        <h2 className="font-serif text-3xl font-semibold">Tours led by {guide.name}</h2>
        <div className="grid gap-6 xl:grid-cols-3">{ledTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div>
      </section>
    </Container>
  );
}
