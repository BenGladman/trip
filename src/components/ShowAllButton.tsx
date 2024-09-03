import { useTripStore } from '../state/tripStore';

export function ShowAllButton() {
  const hasFilter = useTripStore((s) => s.filter !== null);
  const clearFilter = useTripStore((s) => s.clearFilter);

  if (!hasFilter) {
    return null;
  }

  return (
    <button
      className="bg-slate-700/60 m-2 px-4 py-1 rounded-md"
      onClick={() => clearFilter()}
    >
      Show all
    </button>
  );
}
