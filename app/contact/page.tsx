import type { Metadata } from "next";
import { ContactPanel } from "@/components/site/contact-panel";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a tour inquiry, discuss a custom expedition, or ask about departures and guiding style.",
};

export default function ContactPage() {
  return (
    <Container className="space-y-10 py-16">
      <SectionHeading eyebrow="Contact" title="Start planning a birding or wildlife journey." description="Use the mock inquiry form to simulate a lead capture experience for future CRM, form, or CMS integration." />
      <ContactPanel />
    </Container>
  );
}
