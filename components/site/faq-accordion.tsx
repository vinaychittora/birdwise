import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { FAQItem } from "@/data/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {items.map((item) => (
        <Card key={item.question} className="overflow-hidden">
          <Accordion.Item value={item.question}>
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-4 p-6 text-left font-medium">
                <span>{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-6 pt-0 text-sm leading-7 text-foreground/70">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion.Root>
  );
}
