import Link from "next/link";
import { Container } from "@/components/site/container";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="grid min-h-[70vh] gap-10 py-20 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">404</p>
        <h1 className="font-serif text-5xl font-semibold">The trail goes quiet here.</h1>
        <p className="max-w-xl text-lg leading-8 text-foreground/70">The page you were looking for doesn’t exist in this demo itinerary. Head back to the homepage or continue browsing tours.</p>
        <div className="flex gap-4">
          <Button asChild><Link href="/">Back home</Link></Button>
          <Button asChild variant="outline"><Link href="/tours">View tours</Link></Button>
        </div>
      </div>
      <PlaceholderImage label="404 page placeholder illustration" className="min-h-[380px]" />
    </Container>
  );
}
