import { useTripStore } from '../state/tripStore';
import type { Activity, Agent, Country, Place } from '../types';

interface FilterButtonProps {
  filter: Country | Place | Activity | Agent;
}

export function FilterButton({ filter }: FilterButtonProps) {
  const setFilter = useTripStore((s) => s.setFilter);

  return (
    <button
      className="whitespace-nowrap bg-slate-700/60 px-2 rounded-md"
      onClick={() => setFilter(filter)}
    >
      {filter.buttonLabel}
    </button>
  );
}
