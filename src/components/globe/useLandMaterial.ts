import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Color, MeshPhongMaterial } from 'three';

export function useLandMaterial(mixColor: Color) {
  const uniforms = useMemo(() => {
    return {
      time: { value: 0 },
      color1: { value: new Color() },
    };
  }, []);

  useFrame(({ clock }) => {
    uniforms.time.value = clock.elapsedTime;
    uniforms.color1.value = mixColor;
  });

  return useMemo(() => {
    const material = new MeshPhongMaterial();

    material.onBeforeCompile = (shader) => {
      shader.uniforms.time = uniforms.time;
      shader.uniforms.color1 = uniforms.color1;

      shader.vertexShader = `varying vec4 vInstancePosition;
        ${shader.vertexShader}`;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vInstancePosition = instanceMatrix * vec4( transformed, 1.0 );`,
      );

      shader.fragmentShader = `uniform float time;
        uniform vec3 color1;
        varying vec4 vInstancePosition;
        ${shader.fragmentShader}`;

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 s = sin((vInstancePosition.xyz / 2.) + time);
        float m = (s.x + s.y + s.z + 3.) / 40.;
        diffuseColor = vec4( mix( diffuseColor.rgb, color1, m ), diffuseColor.a );`,
      );
    };

    return material;
  }, [uniforms]);
}
