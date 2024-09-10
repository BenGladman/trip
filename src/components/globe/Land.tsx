import { useEffect, useRef } from 'react';
import { Color, InstancedMesh, Object3D, type Vector3 } from 'three';
import { initializeTripStoreLandDots } from '../../state/initializeTripStoreLandDots';
import { useTripStore } from '../../state/tripStore';
import { Place } from '../../types';
import { useLandMaterial } from './useLandMaterial';
import worldPngPath from './world.png';

const landColor = new Color('hsl(142, 76%, 15%)');
const mixColor = new Color('hsl(43, 96%, 56%)');

const highlightColor1 = new Color('hsl(142, 76%, 80%)');
const highlightColor2 = new Color('hsl(142, 76%, 40%)');

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

    const setDot = (i: number, dot: Vector3, places?: Place[]) => {
      let scale = 0;
      let color = landColor;

      if (
        selectedTrip &&
        places?.some((place) =>
          selectedTrip.places.some((tripPlace) => tripPlace === place),
        )
      ) {
        color = highlightColor1;
        scale = 2;
      } else if (
        places?.some((place) =>
          trips.some((trip) =>
            trip.places.some((tripPlace) => tripPlace === place),
          ),
        )
      ) {
        color = highlightColor2;
        scale = 1.2;
      }

      temp.position.set(0, 0, 0);
      temp.scale.set(1, 1, 1);

      temp.lookAt(dot);
      temp.position.set(dot.x, dot.y, dot.z);

      if (scale) {
        temp.scale.set(scale, scale, scale);
      }

      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
      instancedMeshRef.current.setColorAt(i, color);
    };

    if (!instancedMeshRef.current.userData.isInitialized) {
      landDots.forEach((dot, i) => {
        setDot(i, dot, placesAtLandDotIndex.get(i));
      });

      instancedMeshRef.current.userData.isInitialized = true;
    } else {
      for (const [i, places] of placesAtLandDotIndex) {
        setDot(i, landDots[i], places);
      }
    }

    // Update the instance
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [placesAtLandDotIndex, filterPlace, selectedTrip, trips, landDots]);

  const landMaterial = useLandMaterial(mixColor);

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[undefined, undefined, landDots.length]}
      material={landMaterial}
    >
      <circleGeometry args={[0.1, 9]} />
    </instancedMesh>
  );
}
