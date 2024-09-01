import { Canvas } from '@react-three/fiber';
import { Globe } from './Globe';

export function GlobeScene() {
  return (
    <Canvas
      camera={{
        fov: 30,
        near: 1,
        far: 1000,
        position: [0, 0, 100],
      }}
      dpr={window.devicePixelRatio}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[50, 30, 50]} decay={0} intensity={4} />
      <Globe />
    </Canvas>
  );
}
