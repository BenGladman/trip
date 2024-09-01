import { useFrame } from '@react-three/fiber';
import { BlueSphere } from './BlueSphere';
import { Land } from './Land';
import { useMemo, useRef } from 'react';
import { Euler, Group, MathUtils, Quaternion } from 'three';
import { useTripStore } from '../../state/tripStore';

export function Globe() {
  const groupRef = useRef<Group>(null!);
  const selectedTrip = useTripStore((s) => s.selectedTrip);

  const targetQuaternion = useMemo(() => {
    if (selectedTrip?.coordinates.length) {
      const euler = new Euler(
        MathUtils.degToRad(selectedTrip.coordinates[0][0]),
        MathUtils.degToRad(270 - selectedTrip.coordinates[0][1]),
        0,
      );

      return new Quaternion().setFromEuler(euler);
    }

    return null;
  }, [selectedTrip]);

  useFrame((_, delta) => {
    if (targetQuaternion) {
      groupRef.current.quaternion.slerp(targetQuaternion, delta);
    } else {
      groupRef.current.rotation.y -= delta / 4;
    }
  });

  return (
    <group ref={groupRef}>
      <BlueSphere />
      <Land />
    </group>
  );
}
