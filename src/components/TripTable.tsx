import { useTripStore } from '../state/tripStore';
import { TripRow } from './TripRow';

export function TripTable() {
  const trips = useTripStore((s) => s.trips);

  return (
    <table className="min-w-full">
      <tbody>
        {trips.map((trip) => (
          <TripRow key={trip.start.string} trip={trip} />
        ))}
      </tbody>
    </table>
  );
}
