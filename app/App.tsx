import { useState } from 'react';
import { Scene } from '../scene/Scene';
import { MagicCursor } from '../ui/MagicCursor';
import { Panel } from '../ui/Panel';
import { LanguageProvider } from './LanguageContext';
// @ts-ignore
import './styles.css';

export function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleCardSelect = (id: string | null) => {
    setActiveSection(id);
  };

  return (
    <LanguageProvider>
      <MagicCursor />
      <Scene activeSection={activeSection} onCardSelect={handleCardSelect} />
      <Panel
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </LanguageProvider>
  );
}
