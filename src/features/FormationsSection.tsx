import { SectionTitle } from '@/base/SectionTitle';
import { DegreeItem } from '@/components/DegreeItem';
import { useLanguage } from '@/hooks/useLanguage';
import { useCallback, useRef, useState } from 'react';

interface Particle {
  id: number;
  sx: number;
  sy: number;
  ex: number;
  ey: number;
}

let particleId = 0;

export function FormationsSection() {
  const { t } = useLanguage();
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnParticles = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const { width, height } = btn.getBoundingClientRect();
    const cx = width / 2;
    const cy = height / 2;
    const pts: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.4;
      const sx = cx + (cx - 1) * Math.cos(angle);
      const sy = cy + (cy - 1) * Math.sin(angle);
      const dist = 12 + Math.random() * 14;
      pts.push({
        id: particleId++,
        sx,
        sy,
        ex: sx + Math.cos(angle) * dist,
        ey: sy + Math.sin(angle) * dist,
      });
    }
    setParticles(pts);
    setTimeout(() => setParticles([]), 800);
  }, []);

  return (
    <>
      <SectionTitle title={t.formations.title} />
      <p className="modal-text">{t.formations.description}</p>
      <div className="degrees-list">
        {t.formations.degrees.map((degree, i) => (
          <DegreeItem
            key={i}
            period={degree.period}
            institution={degree.school}
            location={degree.location}
            title={degree.title}
            highlights={degree.highlights}
          />
        ))}
      </div>
      <a
        ref={btnRef}
        href={t.formations.cv.fileName}
        download
        className="cv-download-btn"
        onMouseEnter={spawnParticles}
      >
        {particles.map((p) => (
          <span
            key={p.id}
            className="cv-particle"
            style={
              {
                '--sx': `${p.sx}px`,
                '--sy': `${p.sy}px`,
                '--ex': `${p.ex}px`,
                '--ey': `${p.ey}px`,
              } as React.CSSProperties
            }
          />
        ))}
        {t.formations.cv.label}
        <span className="cv-icon">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </a>
    </>
  );
}
