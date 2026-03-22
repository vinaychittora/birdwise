import type { FAQItem, Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    name: "Maya L.",
    location: "Singapore",
    quote: "The guiding felt deeply knowledgeable without ever being rushed. We left with great sightings and a much better understanding of habitat and conservation.",
    relatedTourSlug: "monsoon-birding-western-ghats",
  },
  {
    name: "Arjun & Neha",
    location: "Mumbai",
    quote: "Our family trip never felt like a generic holiday package. Every day had structure, flexibility, and genuine natural history depth.",
    relatedTourSlug: "family-nature-escape-maldives-atoll",
  },
  {
    name: "Peter D.",
    location: "United Kingdom",
    quote: "A premium small-group experience with excellent logistics, superb local knowledge, and thoughtful pacing throughout.",
    relatedTourSlug: "wetlands-of-bharatpur-and-chambal",
  },
  {
    name: "Sofia C.",
    location: "Spain",
    quote: "The photography mentoring was practical and ethical, and I came back with far stronger images than I expected.",
    relatedTourSlug: "western-ghats-endemics-photography-hide",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How fit do I need to be for most tours?",
    answer: "Most departures are vehicle-supported and involve short to moderate walks. Each tour page includes a difficulty level and accessibility note so you can choose confidently.",
    category: "Travel",
  },
  {
    question: "Do you arrange international flights or visas?",
    answer: "No backend travel desk is included in this demo. In a real setup, international flights, visas, and insurance would usually remain the traveler’s responsibility unless otherwise stated.",
    category: "Booking",
  },
  {
    question: "Can I request a private or custom itinerary?",
    answer: "Yes. The company specializes in custom expeditions for clubs, families, photographers, and focused species-led groups. The contact page includes a mock inquiry form for this purpose.",
    category: "Private Trips",
  },
  {
    question: "What optics or camera gear should I bring?",
    answer: "Binoculars are essential for birding tours, while photographers should bring weather protection, extra batteries, and a comfortable support system. Packing suggestions can later be connected to a CMS or trip dossier.",
    category: "Equipment",
  },
  {
    question: "Are departures guaranteed to run?",
    answer: "Guaranteed badges mark tours that already have enough guests confirmed to operate. Other departures may still be available to book, but would need more guests before being confirmed.",
    category: "Booking",
  },
  {
    question: "Do the tours prioritize ethical wildlife viewing?",
    answer: "Yes. The brand is built around ethical birding and natural history travel, with careful use of playback, respectful distances, and local conservation awareness.",
    category: "Travel",
  },
];
