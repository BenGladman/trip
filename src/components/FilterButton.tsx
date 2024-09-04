import { clsx } from 'clsx';
import { useTripStore } from '../state/tripStore';
import type { Filter } from '../types';

interface FilterButtonProps {
  filter: NonNullable<Filter>;
}

export function FilterButton({ filter }: FilterButtonProps) {
  const isActive = useTripStore((s) => s.filter === filter);
  const setFilter = useTripStore((s) => s.setFilter);

  return (
    <button
      className={clsx(
        'whitespace-nowrap px-2 rounded-md',
        isActive ? 'bg-slate-500/70' : 'bg-slate-700/60',
      )}
      onClick={() => {
        setFilter(isActive ? null : filter);
      }}
    >
      {filter.buttonLabel}
    </button>
  );
}
