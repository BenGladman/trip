import { clsx } from 'clsx';
import { useTripStore } from '../state/tripStore';
import type { Trip } from '../types';

interface TripRowProps {
  trip: Trip;
}

export function TripRow({ trip }: TripRowProps) {
  const selectedTrip = useTripStore((s) => s.selectedTrip);
  const selectTrip = useTripStore((s) => s.select);

  const isSelected = trip === selectedTrip;

  return (
    <tr
      className={clsx(
        'align-top border-b-2 border-b-slate-100/20 *:p-2',
        isSelected && 'bg-slate-500/20',
      )}
      onClick={() => selectTrip(isSelected ? null : trip)}
    >
      <td className="whitespace-nowrap">{trip.start.string}</td>
      <td>
        <div className="flex flex-col">
          {trip.countries.map((country) => (
            <span key={country.name} className="whitespace-nowrap">
              {country.flag} {country.name}
            </span>
          ))}
        </div>
      </td>
      <td>
        {trip.places.map((place, index) => (
          <span key={place.name}>
            <span className="whitespace-nowrap">{place.name}</span>
            <span>{index < trip.places.length - 1 && ', '}</span>
          </span>
        ))}
      </td>
      <td>{trip.duration}</td>
      <td>
        {trip.activities.map((activity, index) => (
          <span key={activity.name}>
            <span className="whitespace-nowrap">{activity.name}</span>
            <span>{index < trip.activities.length - 1 && ', '}</span>
          </span>
        ))}
      </td>
      <td className="whitespace-nowrap">{trip.agent?.name}</td>
    </tr>
  );
}
