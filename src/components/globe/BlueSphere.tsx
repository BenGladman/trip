import { useLoader } from '@react-three/fiber';
import worldPngPath from './world.png';
import { TextureLoader } from 'three';

export function BlueSphere() {
  const texture = useLoader(TextureLoader, worldPngPath);

  return (
    <mesh>
      <sphereGeometry args={[20]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}
