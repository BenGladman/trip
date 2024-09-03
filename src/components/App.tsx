import { GlobeScene } from './globe/GlobeScene';
import { ShowAllButton } from './ShowAllButton';
import { TripTable } from './TripTable';

export function App() {
  return (
    <>
      <div className="grid fixed inset-0">
        <div className="row-start-1 col-start-1 -z-10 overflow-hidden">
          <GlobeScene />
        </div>
        <div className="row-start-1 col-start-1 overflow-auto">
          <ShowAllButton />
          <TripTable />
        </div>
      </div>
    </>
  );
}
