import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import type { FieldReport } from "@/data/types";
import { formatDate } from "@/lib/utils";
import { getReportAuthorName } from "@/data";

export function ReportCard({ report }: { report: FieldReport }) {
  return (
    <Card className="overflow-hidden">
      <PlaceholderImage label={report.coverImage} subtle className="rounded-none border-0" />
      <div className="space-y-4 p-6">
        <div className="text-sm text-foreground/60">{formatDate(report.date)} · {getReportAuthorName(report.authorSlug)}</div>
        <div>
          <h3 className="font-serif text-2xl font-semibold"><Link href={`/field-reports/${report.slug}`}>{report.title}</Link></h3>
          <p className="mt-2 text-sm leading-7 text-foreground/75">{report.summary}</p>
        </div>
        <Button asChild variant="outline">
          <Link href={`/field-reports/${report.slug}`}>Read report <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </Card>
  );
}
