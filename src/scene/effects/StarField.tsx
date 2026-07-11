import { sceneColors } from '@/tokens/theme';
import { useMemo } from 'react';

interface Star {
  position: [number, number, number];
  size: number;
  color: string;
  opacity: number;
}

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
      })),
    [],
  );

  return (
    <>
      {stars.map((star, i) => (
        <mesh key={i} position={star.position}>
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
