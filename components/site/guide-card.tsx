import type { Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import type { Guide } from "@/data/types";

export function GuideCard({ guide }: { guide: Guide }) {
  const href = `/guides/${guide.slug}` as Route;

  return (
    <Card className="overflow-hidden">
      <PlaceholderImage label={guide.portrait} subtle className="rounded-none border-0" />
      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold"><Link href={href}>{guide.name}</Link></h3>
          <p className="text-sm text-primary">{guide.role}</p>
        </div>
        <p className="text-sm leading-7 text-foreground/75">{guide.bio}</p>
        <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
          {guide.specialties.slice(0, 3).map((specialty) => <span key={specialty} className="rounded-full bg-secondary px-3 py-1">{specialty}</span>)}
        </div>
        <Button asChild variant="outline">
          <Link href={href}>Meet the guide <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </Card>
  );
}
