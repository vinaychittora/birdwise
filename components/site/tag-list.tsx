import { Badge } from "@/components/ui/badge";

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="subtle">
          {item}
        </Badge>
      ))}
    </div>
  );
}
