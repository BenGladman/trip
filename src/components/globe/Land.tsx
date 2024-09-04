import { useEffect, useRef } from 'react';
import { Color, InstancedMesh, Object3D, Vector3 } from 'three';
import worldPngPath from './world.png';
import { initializeTripStoreLandDots } from '../../state/initializeTripStoreLandDots';
import { useTripStore } from '../../state/tripStore';
import { Place } from '../../types';

const landColors = [
  new Color('hsl(142, 76%, 20%)'),
  new Color('hsl(142, 76%, 22%)'),
  new Color('hsl(142, 76%, 24%)'),
  new Color('hsl(142, 76%, 26%)'),
  new Color('hsl(142, 76%, 28%)'),
];

const highlightColor1 = new Color('hsl(142, 76%, 90%)');
const highlightColor2 = new Color('hsl(142, 76%, 60%)');
const highlightColor3 = new Color('hsl(142, 76%, 34%)');

function getLandColor(pos: Vector3) {
  const i =
    (Math.sin(pos.x / 3) + Math.sin(pos.y / 3) + Math.sin(pos.z / 3) + 3) / 6;

  return landColors[Math.floor(i * landColors.length)];
}

export function Land() {
  const instancedMeshRef = useRef<InstancedMesh>(null!);
  const landDots = useTripStore((s) => s.landDots);
  const placesAtLandDotIndex = useTripStore((s) => s.placesAtLandDotIndex);
  const trips = useTripStore((s) => s.trips);
  const filterPlace = useTripStore((s) =>
    s.filter instanceof Place ? s.filter : null,
  );
  const selectedTrip = useTripStore((s) => s.selectedTrip);

  useEffect(() => {
    initializeTripStoreLandDots(worldPngPath);
  }, []);

  useEffect(() => {
    const temp = new Object3D();

    landDots.forEach((dot, i) => {
      temp.position.set(0, 0, 0);
      temp.lookAt(dot);
      temp.position.set(dot.x, dot.y, dot.z);
      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
      instancedMeshRef.current.setColorAt(i, getLandColor(dot));
    });

    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [landDots]);

  useEffect(() => {
    for (const [i, places] of placesAtLandDotIndex) {
      if (filterPlace && places.some((place) => place === filterPlace)) {
        instancedMeshRef.current.setColorAt(i, highlightColor1);
      } else if (
        selectedTrip &&
        places.some((place) =>
          selectedTrip.places.some((tripPlace) => tripPlace === place),
        )
      ) {
        instancedMeshRef.current.setColorAt(i, highlightColor2);
      } else if (
        places.some((place) =>
          trips.some((trip) =>
            trip.places.some((tripPlace) => tripPlace === place),
          ),
        )
      ) {
        instancedMeshRef.current.setColorAt(i, highlightColor3);
      } else {
        instancedMeshRef.current.setColorAt(i, getLandColor(landDots[i]));
      }
    }

    // Update the instance
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }
  }, [placesAtLandDotIndex, filterPlace, selectedTrip, trips, landDots]);

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[undefined, undefined, landDots.length]}
    >
      <circleGeometry args={[0.05, 4]} />
      <meshPhongMaterial />
    </instancedMesh>
  );
}
