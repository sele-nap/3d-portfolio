import { useLanguage } from '@/hooks/useLanguage';
import { useCallback, useState } from 'react';
import './LanguageSwitcher.css';

interface Particle {
  id: number;
  x: string;
  y: string;
}

let particleIdCounter = 0;

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const distance = 40 + Math.random() * 20;
      newParticles.push({
        id: particleIdCounter++,
        x: `${Math.cos(angle) * distance}px`,
        y: `${Math.sin(angle) * distance}px`,
      });
    }
    setParticles(newParticles);

    // Remove particles after animation completes
    setTimeout(() => setParticles([]), 1000);
  }, []);

  const handleSelect = (lang: 'fr' | 'en') => {
    if (lang === language) return;
    setLanguage(lang);
    createParticles();
  };

  return (
    <div className="language-switcher">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magic-particle"
          style={
            { '--x': particle.x, '--y': particle.y } as React.CSSProperties
          }
        />
      ))}
      <button
        className="lang-toggle"
        onClick={() => handleSelect(language === 'fr' ? 'en' : 'fr')}
        aria-label={`Switch to ${language === 'fr' ? 'English' : 'French'}`}
      >
        <span className={`lang-option${language === 'fr' ? ' active' : ''}`}>
          FR
        </span>
        <span className={`lang-option${language === 'en' ? ' active' : ''}`}>
          EN
        </span>
      </button>
    </div>
  );
}
