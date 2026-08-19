import { sceneColors } from '@/tokens/theme';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Color, ShaderMaterial } from 'three';

const STAR_COUNT = 220;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return reduced;
}

const vertexShader = `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;
  attribute float aSpeed;
  attribute float aDrift;
  attribute float aBaseOpacity;
  uniform float uTime;
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    vColor = aColor;
    float phase = uTime * aSpeed + aPhase;
    vec3 pos = position;
    pos.x += sin(phase) * aDrift;
    pos.y += cos(phase * 0.7) * aDrift * 0.6;
    vOpacity = aBaseOpacity * (0.65 + sin(phase * 1.3) * 0.35);
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, dist) * vOpacity;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

export function StarField() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { positions, aSize, aColor, aPhase, aSpeed, aDrift, aBaseOpacity } =
    useMemo(() => {
      const positions = new Float32Array(STAR_COUNT * 3);
      const aSize = new Float32Array(STAR_COUNT);
      const aColor = new Float32Array(STAR_COUNT * 3);
      const aPhase = new Float32Array(STAR_COUNT);
      const aSpeed = new Float32Array(STAR_COUNT);
      const aDrift = new Float32Array(STAR_COUNT);
      const aBaseOpacity = new Float32Array(STAR_COUNT);
      const tmpColor = new Color();

      for (let i = 0; i < STAR_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = -(Math.random() * 14 + 2);

        aSize[i] = Math.random() * 4.5 + 2.5;

        tmpColor.set(
          sceneColors.starField[
            Math.floor(Math.random() * sceneColors.starField.length)
          ],
        );
        aColor[i * 3] = tmpColor.r;
        aColor[i * 3 + 1] = tmpColor.g;
        aColor[i * 3 + 2] = tmpColor.b;

        aPhase[i] = Math.random() * Math.PI * 2;
        aSpeed[i] = 0.18 + Math.random() * 0.28;
        aDrift[i] = 0.24 + Math.random() * 0.34;
        aBaseOpacity[i] = Math.random() * 0.5 + 0.35;
      }

      return { positions, aSize, aColor, aPhase, aSpeed, aDrift, aBaseOpacity };
    }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const materialRef = useRef<ShaderMaterial>(null);
  const startTime = useRef(performance.now());

  useFrame(() => {
    if (prefersReducedMotion || !materialRef.current) return;
    materialRef.current.uniforms.uTime.value =
      (performance.now() - startTime.current) / 1000;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[aSize, 1]} />
        <bufferAttribute attach="attributes-aColor" args={[aColor, 3]} />
        <bufferAttribute attach="attributes-aPhase" args={[aPhase, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[aSpeed, 1]} />
        <bufferAttribute attach="attributes-aDrift" args={[aDrift, 1]} />
        <bufferAttribute
          attach="attributes-aBaseOpacity"
          args={[aBaseOpacity, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
