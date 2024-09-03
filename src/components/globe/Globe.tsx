import { useFrame } from '@react-three/fiber';
import { BlueSphere } from './BlueSphere';
import { Land } from './Land';
import { useEffect, useMemo, useRef } from 'react';
import { Euler, Group, MathUtils, Quaternion } from 'three';
import { useTripStore } from '../../state/tripStore';

export function Globe() {
  const groupRef = useRef<Group>(null!);

  const selectedCoordinates = useTripStore(
    (s) => s.selectedTrip?.coordinates[0],
  );

  const targetQuaternion = useMemo(() => new Quaternion(), []);
  const targetEuler = useMemo(() => new Euler(), []);

  useEffect(() => {
    if (selectedCoordinates) {
      targetEuler.set(
        MathUtils.degToRad(selectedCoordinates[0]),
        MathUtils.degToRad(90 - selectedCoordinates[1]),
        0,
      );

      targetQuaternion.setFromEuler(targetEuler);
    } else {
      targetEuler.x = 0;
    }
  }, [selectedCoordinates, targetQuaternion, targetEuler]);

  useFrame((_, delta) => {
    if (!selectedCoordinates) {
      targetEuler.y -= delta / 4;
      targetQuaternion.setFromEuler(targetEuler);
    }

    groupRef.current.quaternion.slerp(targetQuaternion, delta);
  });

  return (
    <group ref={groupRef}>
      <BlueSphere />
      <Land />
    </group>
  );
}
