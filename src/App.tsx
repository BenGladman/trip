import globeSvg from './globe.svg';

export function App() {
  return (
    <>
      <div className="inline-flex flex-col items-center">
        <h1 className="text-5xl">Trip</h1>
        <img src={globeSvg} className="w-40" alt="Globe" />
      </div>
    </>
  );
}
