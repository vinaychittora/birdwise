import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { faqs } from "@/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about departures, equipment, logistics, and custom trip planning.",
};

export default function FAQPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="FAQ" title="Useful planning information before you travel." description="Frequently asked questions are grouped into a clean accordion to support future editorial expansion." />
      <FAQAccordion items={faqs} />
    </Container>
  );
}
