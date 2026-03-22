import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function NewsletterCard() {
  return (
    <Card className="grid gap-6 bg-primary p-8 text-primary-foreground lg:grid-cols-[1fr,auto] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Stay in the field</p>
        <h3 className="mt-3 font-serif text-3xl font-semibold">Seasonal tour releases, migration updates, and field notes.</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80">This is a mock newsletter signup block designed for a future mailing-list integration.</p>
      </div>
      <form className="flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup form">
        <Input type="email" placeholder="Email address" className="bg-white text-foreground" aria-label="Email address" />
        <Button type="submit" variant="secondary">Join updates</Button>
      </form>
    </Card>
  );
}
