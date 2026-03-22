import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { GuidesBrowser } from "@/components/site/guides-browser";
import { SectionHeading } from "@/components/site/section-heading";
import { guides } from "@/data";

export const metadata: Metadata = {
  title: "Guides",
  description: "Meet the naturalists, trip leaders, and photography mentors behind Sahil Zutshi Birding & Wildlife Tours.",
};

export default function GuidesPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="Field leaders" title="Meet the guides behind each journey." description="Browse guide biographies, specialties, and regional expertise before exploring their departures." />
      <GuidesBrowser guides={guides} />
    </Container>
  );
}
