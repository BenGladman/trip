import { useLoader } from '@react-three/fiber';
import worldPngPath from './world.png';
import { TextureLoader } from 'three';

export function BlueSphere() {
  const texture = useLoader(TextureLoader, worldPngPath);

  return (
    <mesh>
      <icosahedronGeometry args={[20, 5]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}
