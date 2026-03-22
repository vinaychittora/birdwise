import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { ReportCard } from "@/components/site/report-card";
import { SectionHeading } from "@/components/site/section-heading";
import { fieldReports } from "@/data";

export const metadata: Metadata = {
  title: "Field Reports",
  description: "Seasonal notes, trip reports, and natural history observations from birding and wildlife journeys.",
};

export default function FieldReportsPage() {
  const reports = [...fieldReports].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="Editorial" title="Field reports, migration notes, and trip dispatches." description="These dummy editorial entries help the demo site feel like a living specialist brand with ongoing field presence." />
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">{reports.map((report) => <ReportCard key={report.slug} report={report} />)}</div>
    </Container>
  );
}
