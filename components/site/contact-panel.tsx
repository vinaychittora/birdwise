import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data";

export function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
      <Card className="space-y-6 p-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold">Plan a journey with us</h3>
          <p className="mt-3 text-sm leading-7 text-foreground/70">Use this polished demo inquiry form as a starting point for future CRM or CMS-backed forms.</p>
        </div>
        <div className="space-y-4 text-sm text-foreground/75">
          <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /><span>{siteSettings.email}</span></div>
          <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /><span>{siteSettings.phone}</span></div>
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>{siteSettings.location}</span></div>
        </div>
      </Card>
      <Card className="p-6">
        <form className="grid gap-4" aria-label="Inquiry form">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input aria-label="Your name" placeholder="Your name" />
            <Input type="email" aria-label="Your email" placeholder="Email address" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input aria-label="Tour of interest" placeholder="Tour of interest" />
            <Input aria-label="Preferred dates" placeholder="Preferred dates" />
          </div>
          {!compact ? <Input aria-label="Group details" placeholder="Group size or travel style" /> : null}
          <textarea
            aria-label="Inquiry message"
            placeholder="Tell us about your interests, target species, or ideal travel style."
            className="min-h-36 rounded-[1.5rem] border bg-card px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-foreground/60">Demo form only — no data is submitted.</p>
            <Button type="submit">Send inquiry</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
