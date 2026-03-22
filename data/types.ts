export type TourCategorySlug =
  | "birding-tours"
  | "wildlife-tours"
  | "photography-tours"
  | "family-nature-trips"
  | "custom-expeditions";

export type HabitatSlug =
  | "grassland"
  | "wetland"
  | "woodland"
  | "desert"
  | "rainforest"
  | "high-altitude"
  | "coastal"
  | "mixed-habitats";

export type Difficulty = "Easy" | "Moderate" | "Moderate +" | "Challenging";
export type TourBadge = "Guaranteed" | "Few spaces left" | "New";

export interface Category {
  slug: TourCategorySlug;
  name: string;
  description: string;
}

export interface Habitat {
  slug: HabitatSlug;
  name: string;
  description: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  summary: string;
}

export interface Departure {
  date: string;
  durationDays: number;
  status: TourBadge;
  spacesLeft: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  summary: string;
}

export interface Guide {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  regions: string[];
  portrait: string;
  tourSlugs: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: TourCategorySlug;
  habitats: HabitatSlug[];
  region: string;
  country: string;
  heroImage: string;
  gallery: string[];
  shortSummary: string;
  description: string[];
  highlights: string[];
  speciesHighlights: string[];
  difficulty: Difficulty;
  accessibility: string;
  bestSeason: string;
  durationDays: number;
  groupSize: string;
  price: {
    amount: number;
    currency: "INR" | "USD";
    perPersonLabel: string;
  };
  departures: Departure[];
  badges: TourBadge[];
  guideSlugs: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  faqSnippet: {
    question: string;
    answer: string;
  }[];
  relatedTourSlugs: string[];
  featured?: boolean;
}

export interface FieldReport {
  slug: string;
  title: string;
  date: string;
  authorSlug: string;
  summary: string;
  coverImage: string;
  content: string[];
  tags: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  relatedTourSlug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Booking" | "Travel" | "Equipment" | "Private Trips";
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: { label: string; href: string }[];
}
