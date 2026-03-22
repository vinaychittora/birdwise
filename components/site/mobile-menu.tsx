"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { Route } from "next";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/guides", label: "Guides" },
  { href: "/field-reports", label: "Field Reports" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] satisfies ReadonlyArray<{ href: Route; label: string }>;

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-4 w-4" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-card p-6 shadow-soft">
          <div className="mb-10 flex items-center justify-between">
            <Dialog.Title className="font-serif text-xl font-semibold">Explore the journeys</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="sm" aria-label="Close navigation menu">
                <X className="h-4 w-4" />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Dialog.Close asChild key={link.href}>
                <Link href={link.href} className="rounded-2xl border border-border px-4 py-3 text-base font-medium hover:bg-secondary">
                  {link.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
