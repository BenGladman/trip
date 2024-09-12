import { clsx } from 'clsx';
import { useTripStore } from '../state/tripStore';
import type { Trip } from '../types';
import { FilterButton } from './FilterButton';

interface TripRowProps {
  trip: Trip;
}

export function TripRow({ trip }: TripRowProps) {
  const selectedTrip = useTripStore((s) => s.selectedTrip);
  const selectTrip = useTripStore((s) => s.selectTrip);

  const isSelected = trip === selectedTrip;

  return (
    <tr
      className={clsx(
        'align-top border-b-2 border-b-slate-100/10 *:p-2',
        isSelected && 'bg-slate-500/20',
      )}
      onClick={(e) => {
        if (isSelected && !(e.target instanceof HTMLButtonElement)) {
          selectTrip(null);
        } else {
          selectTrip(trip);
        }
      }}
    >
      <td>
        <FilterButton filter={trip} />
      </td>
      <td>
        <div className="flex flex-col items-start gap-1">
          {trip.countries.map((country) => (
            <FilterButton key={country.name} filter={country} />
          ))}
        </div>
      </td>
      <td>
        <div className="flex flex-row flex-wrap gap-1">
          {trip.places.map((place) => (
            <FilterButton key={place.name} filter={place} />
          ))}
          {trip.accommodations.map((accommodation) => (
            <FilterButton key={accommodation.name} filter={accommodation} />
          ))}
        </div>
      </td>
      <td className="whitespace-nowrap">{trip.durationDescription}</td>
      <td>
        <div className="flex flex-row flex-wrap gap-1">
          {trip.activities.map((activity) => (
            <FilterButton key={activity.name} filter={activity} />
          ))}
          {trip.agent && <FilterButton filter={trip.agent} />}
        </div>
      </td>
    </tr>
  );
}
