import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-foreground/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}
