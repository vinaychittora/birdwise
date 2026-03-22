import Link from "next/link";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { MobileMenu } from "@/components/site/mobile-menu";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/guides", label: "Guides" },
  { href: "/field-reports", label: "Field Reports" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/tours">Browse tours</Link>
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
