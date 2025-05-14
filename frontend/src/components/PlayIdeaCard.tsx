import { cn } from "@/lib/utils";
import type { PlayIdea } from "@/data/types";
import { ageLabels, seasonIcons, locationIcons } from "@/data/playIdeas";
import { Link } from "@tanstack/react-router";
import type { ActivitiesRecord } from "@/lib/pocketbase-types";

interface PlayIdeaCardProps {
  activity: ActivitiesRecord;
}

export const PlayIdeaCard = ({ activity }: PlayIdeaCardProps) => {
  const { id, display_name, description, min_age_months, max_age_months, weather, location } = activity;
  // const modalId = `play-idea-modal-${id}`; // Modal ID not needed if modal is removed/rethought
  
  // Helper to ensure we have an array of strings for mapping
  const ensureStringArray = (value: unknown): string[] => {
    if (Array.isArray(value)) {
      return value.map(String); // Ensure all elements are strings
    }
    if (value != null) { // Handles single string or other primitive convertible to string
      return [String(value)];
    }
    return [];
  };

  const weatherArray = ensureStringArray(weather);
  const locationArray = ensureStringArray(location);

  return (
    <Link 
      to="/activities/$activityName"
      params={{ activityName: String(id) }} 
      className="card bg-base-100 shadow-xl flex flex-col h-full transition-all hover:shadow-lg animate-scale-in no-underline hover:no-underline focus:no-underline active:no-underline"
    >
      <div className="card-body flex-1 pb-3">
        <h2 className="card-title text-lg">{display_name}</h2>
        <p className="line-clamp-2 text-sm text-base-content/70 flex-grow">{description}</p>
      
        <div className="mt-auto space-y-2 pt-2">
          <div className="flex flex-wrap gap-1">
            {(min_age_months != null && max_age_months != null) && (
              <div className="badge badge-outline badge-sm bg-inspire-blue/20 dark:bg-blue-900/30 text-xs">
                {min_age_months === max_age_months ? 
                  (min_age_months === 1 ? `${min_age_months} Monat` : `${min_age_months} Monate`) : 
                  `${min_age_months} - ${max_age_months} Monate`
                }
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {weatherArray.slice(0, 3).map((s: string) => (
              <div key={s} className="badge badge-ghost badge-sm">
                {seasonIcons[s as keyof typeof seasonIcons]} {s === 'Ganzjährig' ? '' : s}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {locationArray.map((l: string) => (
              <div key={l} className="badge badge-ghost badge-sm bg-inspire-green/30 dark:bg-green-900/30">
                {locationIcons[l as keyof typeof locationIcons]} {l}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - This might need to be moved or handled differently if it's meant to be part of a separate page now */}
      {/* It is generally not recommended to have modals inside links that navigate away. 
          Consider if this modal is still needed or should be part of the target page /activities/$activityId. 
          For now, I've commented it out to prevent potential issues. 
          If you need it, we might need to rethink its placement and trigger mechanism. */}
      {/* 
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle" onClick={(e) => e.stopPropagation()}> 
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-2 text-sm text-base-content/70">{description}</p>
          
          <div className="space-y-3 my-2 text-sm">
            <div>
              <h4 className="font-medium mb-1 text-base">Altersgruppe</h4>
              <div className="flex flex-wrap gap-1">
                {ageRanges.map(age => (
                  <div key={age} className="badge badge-outline bg-inspire-blue/20 dark:bg-blue-900/30">
                    {ageLabels[age]}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-1 text-base">Jahreszeit & Ort</h4>
              <div className="flex flex-wrap gap-1 mb-1">
                {seasons.map(season => (
                  <div key={season} className="badge badge-ghost">
                    {seasonIcons[season]} {season}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {locations.map(location => (
                  <div key={location} className="badge badge-ghost bg-inspire-green/30 dark:bg-green-900/30">
                    {locationIcons[location]} {location}
                  </div>
                ))}
              </div>
            </div>
            
            {materials.length > 0 && (
              <div>
                <h4 className="font-medium mb-1 text-base">Benötigte Materialien</h4>
                <div className="flex flex-wrap gap-1">
                  {materials.map((material, index) => (
                    <div key={index} className="badge badge-outline">
                      {material}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h4 className="font-medium mb-1 text-base">Anleitung</h4>
              <p className="whitespace-pre-wrap">{instructions}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-1 text-base">Förderaspekte</h4>
              <p className="whitespace-pre-wrap">{benefits}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm">Schließen</button>
            </form>
          </div>
        </div>
         <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      */}
    </Link>
  );
}; 