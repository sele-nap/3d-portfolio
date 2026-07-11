import { sceneColors } from '@/tokens/theme';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Mesh, MeshBasicMaterial } from 'three';

interface Star {
  position: [number, number, number];
  size: number;
  color: string;
  opacity: number;
  driftPhase: number;
  driftSpeed: number;
  driftAmount: number;
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function StarField() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 90 }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          -(Math.random() * 14 + 2),
        ] as [number, number, number],
        size: Math.random() * 0.025 + 0.006,
        color:
          sceneColors.starField[
            Math.floor(Math.random() * sceneColors.starField.length)
          ],
        opacity: Math.random() * 0.5 + 0.15,
        driftPhase: Math.random() * Math.PI * 2,
        driftSpeed: 0.09 + Math.random() * 0.14,
        driftAmount: 0.12 + Math.random() * 0.18,
      })),
    [],
  );

  const meshRefs = useRef<(Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    if (prefersReducedMotion) return;
    const t = clock.elapsedTime;
    stars.forEach((star, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;
      const phase = t * star.driftSpeed + star.driftPhase;
      mesh.position.x = star.position[0] + Math.sin(phase) * star.driftAmount;
      mesh.position.y =
        star.position[1] + Math.cos(phase * 0.7) * star.driftAmount * 0.6;
      const material = mesh.material as MeshBasicMaterial;
      material.opacity = star.opacity * (0.7 + Math.sin(phase * 1.3) * 0.3);
    });
  });

  return (
    <>
      {stars.map((star, i) => (
        <mesh
          key={i}
          position={star.position}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[star.size, 6, 6]} />
          <meshBasicMaterial
            color={star.color}
            transparent
            opacity={star.opacity}
          />
        </mesh>
      ))}
    </>
  );
}
