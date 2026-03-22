import { faqs, testimonials } from "./testimonials";
import { fieldReports } from "./field-reports";
import { guides } from "./guides";
import { siteSettings } from "./site";
import { destinations, categories, habitats } from "./taxonomy";
import { tours } from "./tours";

export { siteSettings, categories, habitats, destinations, guides, tours, fieldReports, testimonials, faqs };

export const featuredTours = tours.filter((tour) => tour.featured);
export const guaranteedTours = tours.filter((tour) => tour.departures.some((departure) => departure.status === "Guaranteed")).slice(0, 6);
export const newTours = tours.filter((tour) => tour.badges.includes("New")).slice(0, 6);
export const recentReports = [...fieldReports].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getReportBySlug(slug: string) {
  return fieldReports.find((report) => report.slug === slug);
}

export function getToursByGuide(slug: string) {
  return tours.filter((tour) => tour.guideSlugs.includes(slug));
}

export function getGuideName(slug: string) {
  return guides.find((guide) => guide.slug === slug)?.name ?? slug;
}

export function getReportAuthorName(slug: string) {
  return getGuideName(slug);
}

export function getRelatedTours(slug: string) {
  const current = getTourBySlug(slug);
  if (!current) return [];

  const scores = tours
    .filter((tour) => tour.slug !== slug)
    .map((tour) => {
      let score = 0;
      if (tour.category === current.category) score += 3;
      if (tour.region === current.region) score += 2;
      score += tour.habitats.filter((habitat) => current.habitats.includes(habitat)).length;
      if (current.relatedTourSlugs.includes(tour.slug)) score += 4;
      return { tour, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.tour);

  return scores;
}
