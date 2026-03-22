import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { fieldReports, getReportAuthorName, getReportBySlug } from "@/data";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return fieldReports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return { title: "Field report not found" };
  return { title: report.title, description: report.summary };
}

export default async function ReportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) notFound();

  return (
    <Container className="space-y-10 py-16">
      <Breadcrumbs items={[{ label: "Field Reports", href: "/field-reports" }, { label: report.title }]} />
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">{report.tags.map((tag) => <Badge key={tag} variant="accent">{tag}</Badge>)}</div>
        <div>
          <p className="text-sm text-foreground/60">{formatDate(report.date)} · {getReportAuthorName(report.authorSlug)}</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{report.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/70">{report.summary}</p>
        </div>
      </div>
      <PlaceholderImage label={report.coverImage} className="min-h-[420px]" />
      <Card className="prose-content max-w-4xl p-8">{report.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Card>
    </Container>
  );
}
