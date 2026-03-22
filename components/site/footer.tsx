import Link from "next/link";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { siteSettings } from "@/data";

const quickLinks = [
  { href: "/tours", label: "All tours" },
  { href: "/guides", label: "Our guides" },
  { href: "/field-reports", label: "Field reports" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card/60 py-16">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-lg text-sm leading-7 text-foreground/70">{siteSettings.tagline}. Crafted as a polished demo with local structured data, ready to evolve toward a CMS-backed publishing workflow.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Quick links</h3>
          <ul className="space-y-3 text-sm text-foreground/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">Contact</h3>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li>{siteSettings.location}</li>
            <li>
              <a href={`mailto:${siteSettings.email}`} className="hover:text-foreground">{siteSettings.email}</a>
            </li>
            <li>
              <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} className="hover:text-foreground">{siteSettings.phone}</a>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {siteSettings.socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70 hover:bg-secondary">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
