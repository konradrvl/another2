import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { PlayIdea, FilterState, AgeRange, Season, Location } from "@/data/types";
import { playIdeas, ageLabels, seasonIcons, locationIcons, allMaterials } from "@/data/playIdeas";
import Hero from "@/components/Hero";
import { PlayIdeaCard } from "@/components/PlayIdeaCard";
import pb from '@/lib/pocketbase';
import type { ActivitiesRecord } from '@/lib/pocketbase-types';

const activitiesQueryKey = ["activities"];

const activitiesQueryOptions = {
  queryKey: activitiesQueryKey,
  queryFn: () => pb.collection("activities").getFullList<ActivitiesRecord>(),
}

export const Route = createFileRoute('/')({
  component: Index,
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(activitiesQueryOptions);
  }
})

function Index() {
  const [ideasSection, setIdeasSection] = useState<HTMLElement | null>(null);

  const setIdeasSectionRef = (element: HTMLElement | null) => {
    if (element) {
      setIdeasSection(element);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero ideasSection={ideasSection} />
      <section id="play-ideas" className="py-10 w-full max-w-3xl" ref={setIdeasSectionRef}>
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Spielideen entdecken</h2>
          <PlayIdeasSection />
        </div>
      </section>
    </div>
  );
}

const Filters = ({ onFilterChange }: { onFilterChange: (filters: FilterState) => void; }) => {
  const [activeTab, setActiveTab] = useState<string>("age");
  const [filters, setFilters] = useState<FilterState>({
    ageRanges: [],
    seasons: [],
    locations: [],
    materials: []
  });

  const toggleAgeRange = (ageRange: AgeRange) => {
    setFilters(prev => {
      const newAgeRanges = prev.ageRanges.includes(ageRange)
        ? prev.ageRanges.filter(ar => ar !== ageRange)
        : [...prev.ageRanges, ageRange];
      return { ...prev, ageRanges: newAgeRanges };
    });
  };

  const toggleSeason = (season: Season) => {
    setFilters(prev => {
      const newSeasons = prev.seasons.includes(season)
        ? prev.seasons.filter(s => s !== season)
        : [...prev.seasons, season];
      return { ...prev, seasons: newSeasons };
    });
  };

  const toggleLocation = (location: Location) => {
    setFilters(prev => {
      const newLocations = prev.locations.includes(location)
        ? prev.locations.filter(l => l !== location)
        : [...prev.locations, location];
      return { ...prev, locations: newLocations };
    });
  };

  const toggleMaterial = (material: string) => {
    setFilters(prev => {
      const newMaterials = prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material];
      return { ...prev, materials: newMaterials };
    });
  };

  const clearFilters = () => {
    setFilters({
      ageRanges: [],
      seasons: [],
      locations: [],
      materials: []
    });
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="bg-base-200 rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-medium text-lg">Ideen filtern</h2>
        {(filters.ageRanges.length > 0 || filters.seasons.length > 0 ||
          filters.locations.length > 0 || filters.materials.length > 0) && (
            <button className="btn btn-ghost btn-sm" onClick={clearFilters}>
              Filter zurücksetzen
            </button>
          )}
      </div>

      <div className="mb-4">
        {filters.ageRanges.length > 0 || filters.seasons.length > 0 ||
          filters.locations.length > 0 || filters.materials.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {filters.ageRanges.map(age => (
              <div key={age} className="badge badge-secondary pl-2 pr-1 py-1 flex items-center">
                {ageLabels[age]}
                <button className="ml-1 rounded-full hover:bg-base-content/20 p-0.5"
                  onClick={() => toggleAgeRange(age)}>
                  <span className="sr-only">Remove</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}

            {filters.seasons.map(season => (
              <div key={season} className="badge badge-secondary pl-2 pr-1 py-1 flex items-center hover:cursor-pointer" onClick={() => toggleSeason(season)}>
                {seasonIcons[season]} {season}
                <span className="sr-only">Remove</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            ))}

            {filters.locations.map(location => (
              <div key={location} className="badge badge-secondary pl-2 pr-1 py-1 flex items-center">
                {locationIcons[location]} {location}
                <button className="ml-1 rounded-full hover:bg-base-content/20 p-0.5"
                  onClick={() => toggleLocation(location)}>
                  <span className="sr-only">Remove</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}

            {filters.materials.map(material => (
              <div key={material} className="badge badge-secondary pl-2 pr-1 py-1 flex items-center">
                {material}
                <button className="ml-1 rounded-full hover:bg-base-content/20 p-0.5"
                  onClick={() => toggleMaterial(material)}>
                  <span className="sr-only">Remove</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base-content/70 text-sm">Wähle Filter, um passende Spielideen zu finden.</p>
        )}
      </div>

      <div role="tablist" className="tabs tabs-box">
        <a role="tab" className={cn("tab", { "tab-active": activeTab === "age" })} onClick={() => setActiveTab("age")}>Alter</a>
        <a role="tab" className={cn("tab", { "tab-active": activeTab === "season" })} onClick={() => setActiveTab("season")}>Jahreszeit</a>
        <a role="tab" className={cn("tab", { "tab-active": activeTab === "location" })} onClick={() => setActiveTab("location")}>Ort</a>
        <a role="tab" className={cn("tab", { "tab-active": activeTab === "material" })} onClick={() => setActiveTab("material")}>Material</a>
      </div>

      <div className="mt-4 p-2">
        {activeTab === "age" && (
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(ageLabels) as AgeRange[]).map(age => (
              <button
                key={age}
                className={cn("btn btn-sm justify-start", filters.ageRanges.includes(age) ? "btn-primary" : "btn-outline")}
                onClick={() => toggleAgeRange(age)}
              >
                {filters.ageRanges.includes(age) && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
                <span className="text-xs">{ageLabels[age]}</span>
              </button>
            ))}
          </div>
        )}

        {activeTab === "season" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(['Frühling', 'Sommer', 'Herbst', 'Winter', 'Ganzjährig'] as Season[]).map(season => (
              <button
                key={season}
                className={cn("btn btn-sm justify-start", filters.seasons.includes(season) ? "btn-primary" : "btn-outline")}
                onClick={() => toggleSeason(season)}
              >
                {filters.seasons.includes(season) && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
                <span className="mr-2">{seasonIcons[season]}</span> {season}
              </button>
            ))}
          </div>
        )}

        {activeTab === "location" && (
          <div className="grid grid-cols-2 gap-2">
            {(['Drinnen', 'Draußen', 'Spielplatz', 'Straße'] as Location[]).map(location => (
              <button
                key={location}
                className={cn("btn btn-sm justify-start", filters.locations.includes(location) ? "btn-primary" : "btn-outline")}
                onClick={() => toggleLocation(location)}
              >
                {filters.locations.includes(location) && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
                <span className="mr-2">{locationIcons[location]}</span> {location}
              </button>
            ))}
          </div>
        )}

        {activeTab === "material" && (
          <div className="h-48 overflow-y-auto rounded-md border border-base-300">
            <div className="grid grid-cols-2 gap-2 p-1">
              {allMaterials.map(material => (
                <button
                  key={material}
                  className={cn("btn btn-sm justify-start", filters.materials.includes(material) ? "btn-primary" : "btn-outline")}
                  onClick={() => toggleMaterial(material)}
                >
                  {filters.materials.includes(material) && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  )}
                  {material}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* </Tabs> */} {/* Tabs replaced with DaisyUI tabs */}
    </div>
  );
};

const PlayIdeasSection = () => {
  const [filters, setFilters] = useState<FilterState>({
    ageRanges: [],
    seasons: [],
    locations: [],
    materials: []
  });

  const [filteredIdeas, setFilteredIdeas] = useState<PlayIdea[]>(playIdeas);

  
  const activitiesQuery = useQuery(
    activitiesQueryOptions,
  );

  useEffect(() => {
    let result = [...playIdeas];

    if (filters.ageRanges.length > 0) {
      result = result.filter(idea =>
        idea.ageRanges.some(age => filters.ageRanges.includes(age))
      );
    }

    if (filters.seasons.length > 0) {
      result = result.filter(idea =>
        idea.seasons.some(season => filters.seasons.includes(season))
      );
    }

    if (filters.locations.length > 0) {
      result = result.filter(idea =>
        idea.locations.some(location => filters.locations.includes(location))
      );
    }

    if (filters.materials.length > 0) {
      result = result.filter(idea =>
        filters.materials.every(material => idea.materials.includes(material))
      );
    }

    setFilteredIdeas(result);
  }, [filters]);

  return (
    <div className="space-y-6">
      <div className="bg-base-200 rounded-xl p-5">
        <Filters onFilterChange={setFilters} />
      </div>

      <div>
        {activitiesQuery.data?.length && activitiesQuery.data.length > 0 ? (
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {activitiesQuery.data.map(activity => (
              <PlayIdeaCard key={activity.name} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="bg-base-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-medium mb-2">Keine passenden Spielideen gefunden</h3>
            <p className="text-base-content/70">
              Versuche, einige Filter zurückzusetzen, um mehr Ergebnisse zu sehen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


