import { cn } from "@/lib/utils";

export function PlaceholderImage({
  label,
  className,
  subtle = false,
}: {
  label: string;
  className?: string;
  subtle?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] border border-border/60",
        subtle
          ? "bg-gradient-to-br from-secondary via-background to-secondary/70"
          : "bg-gradient-to-br from-primary via-primary/80 to-accent/80 text-primary-foreground",
        className,
      )}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_25%)]" />
      <div className="relative flex h-full min-h-[220px] items-end p-6">
        <div>
          <span className={cn("mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]", subtle ? "bg-card text-foreground/70" : "bg-white/15 text-primary-foreground")}>Placeholder visual</span>
          <p className={cn("max-w-sm font-serif text-xl leading-tight", subtle ? "text-foreground" : "text-primary-foreground")}>{label}</p>
        </div>
      </div>
    </div>
  );
}
