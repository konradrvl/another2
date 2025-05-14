import type { PlayIdea, AgeRange, Season, Location } from "./types";

// Placeholder data - Replace with your actual play ideas
export const playIdeas: PlayIdea[] = [
  {
    id: 1,
    title: "Placeholder Idea 1",
    description: "A fun activity for toddlers.",
    ageRanges: ["1-3"],
    seasons: ["Ganzjährig"],
    locations: ["Drinnen"],
    materials: ["Blocks"],
    instructions: "Build a tower.",
    benefits: "Develops motor skills."
  },
  {
    id: 2,
    title: "Placeholder Idea 2",
    description: "Outdoor fun for older kids.",
    ageRanges: ["6-10"],
    seasons: ["Sommer"],
    locations: ["Draußen", "Spielplatz"],
    materials: ["Ball"],
    instructions: "Play catch.",
    benefits: "Encourages physical activity."
  }
];

export const ageLabels: Record<AgeRange, string> = {
  "0-1": "0-1 Jahre",
  "1-3": "1-3 Jahre",
  "3-6": "3-6 Jahre",
  "6-10": "6-10 Jahre",
  "10+": "10+ Jahre"
};

export const seasonIcons: Record<Season, string> = {
  "Frühling": "🌷",
  "Sommer": "☀️",
  "Herbst": "🍂",
  "Winter": "❄️",
  "Ganzjährig": "📅"
};

export const locationIcons: Record<Location, string> = {
  "Drinnen": "🏠",
  "Draußen": "🌳",
  "Spielplatz": "🤸",
  "Straße": "🛣️"
};

// Extract all unique materials from playIdeas
export const allMaterials: string[] = Array.from(
  new Set(playIdeas.flatMap(idea => idea.materials))
); 