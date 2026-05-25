import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { useLanguage } from '../app/LanguageContext';
import { TarotCards, TarotCardsProps } from './TarotCards';

function ResponsiveCamera() {
  const { camera, size } = useThree();
  const lastSize = useRef({ w: -1, h: -1 });

  useFrame(() => {
    if (size.width === lastSize.current.w && size.height === lastSize.current.h)
      return;
    lastSize.current = { w: size.width, h: size.height };
    const isPortrait = size.height > size.width;
    const z = isPortrait
      ? size.width < 480
        ? 8
        : 8.5
      : size.width < 480
        ? 8
        : size.width < 1400
          ? 7
          : 5;
    camera.position.z = z;
  });

  return null;
}

interface Star {
  position: [number, number, number];
  size: number;
  color: string;
  opacity: number;
}

function StarField() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 90 }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          -(Math.random() * 14 + 2),
        ] as [number, number, number],
        size: Math.random() * 0.025 + 0.006,
        color: ['#d4a574', '#d4a574', '#6b4d7a', '#b8b8aa', '#7a9578'][
          Math.floor(Math.random() * 5)
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

export function Scene({ activeSection, onCardSelect }: TarotCardsProps) {
  const { t } = useLanguage();

  // WCAG 2.1.1 — Keyboard navigation: buttons visually hidden but focusable,
  // allowing section access without a mouse
  const sections = [
    { id: 'projects', label: t.projects.title },
    { id: 'about', label: t.about.title },
    { id: 'formations', label: t.formations.title },
    { id: 'experiences', label: t.experiences.title },
    { id: 'contact', label: t.contact.title },
  ];

  return (
    <main
      aria-label="Portfolio"
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        background:
          'linear-gradient(180deg, #06050a 0%, #0a080f 50%, #0d0a07 100%)',
      }}
    >
      {/* Keyboard-accessible navigation — visually hidden, shown on focus */}
      <nav aria-label="Portfolio navigation" className="card-keyboard-nav">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onCardSelect(activeSection === id ? null : id)}
            aria-pressed={activeSection === id}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* aria-hidden + role="presentation": canvas is purely decorative */}
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 72 }}
        aria-hidden="true"
        role="presentation"
      >
        <ResponsiveCamera />

        <ambientLight intensity={2.2} color="#c8a060" />

        <pointLight
          position={[0, 0, 7]}
          intensity={3}
          color="#e8d5b0"
          distance={14}
          decay={2}
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={3}
          color="#ff8040"
          distance={8}
          decay={2}
        />

        <pointLight
          position={[3, 1, 3]}
          intensity={3}
          color="#e06030"
          distance={8}
          decay={2}
        />

        <pointLight
          position={[0, 3, -1]}
          intensity={0.6}
          color="#6b4d7a"
          distance={10}
          decay={2}
        />

        <TarotCards activeSection={activeSection} onCardSelect={onCardSelect} />

        <fog attach="fog" args={['#06050a', 10, 22]} />

        <StarField />
      </Canvas>
    </main>
  );
}
