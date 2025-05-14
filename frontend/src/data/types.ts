export type AgeRange = "0-1" | "1-3" | "3-6" | "6-10" | "10+"; 
export type Season = "Frühling" | "Sommer" | "Herbst" | "Winter" | "Ganzjährig"; 
export type Location = "Drinnen" | "Draußen" | "Spielplatz" | "Straße"; 

export interface PlayIdea {
  id: string | number;
  title: string;
  description: string;
  ageRanges: AgeRange[];
  seasons: Season[];
  locations: Location[];
  materials: string[];
  instructions: string;
  benefits: string;
  image?: string;
}

export interface FilterState {
  ageRanges: AgeRange[];
  seasons: Season[];
  locations: Location[];
  materials: string[];
} 