import { useEffect, useRef, useState } from 'react';
import { Color, InstancedMesh, Object3D, Vector3 } from 'three';
import { getDots } from './getDots';

const landColors = [
  new Color('hsl(142, 76%, 20%)'),
  new Color('hsl(142, 76%, 22%)'),
  new Color('hsl(142, 76%, 24%)'),
  new Color('hsl(142, 76%, 26%)'),
  new Color('hsl(142, 76%, 28%)'),
];

function getLandColor(pos: Vector3) {
  const i =
    (Math.sin(pos.x / 3) + Math.sin(pos.y / 3) + Math.sin(pos.z / 3) + 3) / 6;

  return landColors[Math.floor(i * landColors.length)];
}

export function Land() {
  const instancedMeshRef = useRef<InstancedMesh>(null!);
  const [dots, setDots] = useState<Vector3[]>([]);

  useEffect(() => {
    (async () => {
      setDots(await getDots());
    })();
  }, []);

  useEffect(() => {
    const temp = new Object3D();

    dots.forEach((dot, i) => {
      temp.position.set(0, 0, 0);
      temp.lookAt(dot);
      temp.position.set(dot.x, dot.y, dot.z);
      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
      instancedMeshRef.current.setColorAt(i, getLandColor(dot));
    });

    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [dots]);

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[undefined, undefined, dots.length]}
    >
      <circleGeometry args={[0.1, 4]} />
      <meshPhongMaterial />
    </instancedMesh>
  );
}
