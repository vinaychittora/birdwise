import type { Category, Destination, Habitat } from "./types";

export const categories: Category[] = [
  { slug: "birding-tours", name: "Birding Tours", description: "Species-led departures focused on endemic, migratory, and habitat-specialist birds." },
  { slug: "wildlife-tours", name: "Wildlife Tours", description: "Broader natural history journeys with mammals, reptiles, and ecosystems in view." },
  { slug: "photography-tours", name: "Photography Tours", description: "Small-group departures with hides, low-angle access, and image-making time." },
  { slug: "family-nature-trips", name: "Family Nature Trips", description: "Gentle-paced itineraries suited to mixed ages and first-time nature travelers." },
  { slug: "custom-expeditions", name: "Custom Expeditions", description: "Privately tailored routes for clubs, researchers, and specialist travel planners." },
];

export const habitats: Habitat[] = [
  { slug: "grassland", name: "Grassland", description: "Open plains, savanna mosaics, and semi-arid grazing landscapes." },
  { slug: "wetland", name: "Wetland", description: "Lakes, marshes, floodplains, riverine backwaters, and mangrove creeks." },
  { slug: "woodland", name: "Woodland", description: "Dry deciduous forests, oak woodlands, and sal forest edges." },
  { slug: "desert", name: "Desert", description: "Arid dune systems, scrubby desert edges, and saline flats." },
  { slug: "rainforest", name: "Rainforest", description: "Evergreen forest, cloud forest, and humid tropical foothills." },
  { slug: "high-altitude", name: "High Altitude", description: "Alpine valleys, trans-Himalayan slopes, and cold desert plateaus." },
  { slug: "coastal", name: "Coastal", description: "Beaches, estuaries, mudflats, coral cays, and offshore crossings." },
  { slug: "mixed-habitats", name: "Mixed Habitats", description: "Circuits combining multiple ecosystems for broad species diversity." },
];

export const destinations: Destination[] = [
  { slug: "rajasthan", name: "Rajasthan Desert Belt", country: "India", summary: "Desert scrub, steppe grassland, and historic wetlands across western India." },
  { slug: "western-ghats", name: "Western Ghats", country: "India", summary: "Monsoon forests, shola-grassland systems, and coastal escarpments." },
  { slug: "bharatpur-chambal", name: "Bharatpur & Chambal", country: "India", summary: "Classic north Indian wetlands and riverine ravines rich in birdlife and reptiles." },
  { slug: "ladakh", name: "Ladakh & Changthang", country: "India", summary: "High-altitude cold desert with charismatic mammals and Tibetan plateau species." },
  { slug: "northeast-india", name: "Northeast India", country: "India", summary: "Bamboo, foothill forest, and subtropical rainforest landscapes." },
  { slug: "sri-lanka", name: "Sri Lanka Rainforest Arc", country: "Sri Lanka", summary: "Endemic-rich rainforest and montane forest routes across the island." },
  { slug: "sundarbans", name: "Sundarbans Coast", country: "India", summary: "Mangrove channels, mudflats, and estuarine edges along the Bay of Bengal." },
  { slug: "kaziranga-assam", name: "Assam & Brahmaputra Plains", country: "India", summary: "Floodplain grasslands, wetlands, and tea country birding circuits." },
  { slug: "central-india", name: "Central India Forests", country: "India", summary: "Tiger landscapes, mixed forest, and woodland lakes in the Satpura belt." },
  { slug: "maldives", name: "Maldives Atolls", country: "Maldives", summary: "A gentle family-friendly coastal nature route with seabirds and reef life." },
  { slug: "bhutan", name: "Bhutan Valleys", country: "Bhutan", summary: "Elevational birding from warm broadleaf valleys to temperate forest." },
  { slug: "kenya", name: "Northern Kenya & Rift", country: "Kenya", summary: "An international-style safari combining birds, mammals, and dramatic rift scenery." },
];
