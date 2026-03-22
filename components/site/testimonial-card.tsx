import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full p-6">
      <blockquote className="space-y-4">
        <p className="font-serif text-2xl leading-9 text-foreground">“{testimonial.quote}”</p>
        <footer className="text-sm text-foreground/70">
          <strong className="text-foreground">{testimonial.name}</strong>, {testimonial.location}
        </footer>
      </blockquote>
    </Card>
  );
}
