import { trips } from '../database/trips/trips';
import { TripTable } from './TripTable';

export function App() {
  return (
    <>
      <div className="inline-flex flex-col items-center">
        <h1 className="text-5xl">Trip</h1>
        <TripTable trips={trips} />
      </div>
    </>
  );
}
