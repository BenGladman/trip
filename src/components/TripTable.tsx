import { useTripStore } from '../state/tripStore';
import { TripRow } from './TripRow';

export function TripTable() {
  const trips = useTripStore((s) => s.trips);

  return (
    <table>
      <thead>
        <tr className="text-left *:p-2">
          <th>Date</th>
          <th>Country</th>
          <th>Places</th>
          <th>Duration</th>
          <th>Activity</th>
          <th>Agent</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <TripRow key={trip.start.string} trip={trip} />
        ))}
      </tbody>
    </table>
  );
}
