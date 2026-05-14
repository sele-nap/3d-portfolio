import { useState } from 'react';
import { Scene } from '../scene/Scene';
import { MagicCursor } from '../ui/MagicCursor';
import { Panel } from '../ui/Panel';
import { LanguageProvider } from './LanguageContext';
import './styles.css';

export function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <LanguageProvider>
      <MagicCursor />
      <Scene activeSection={activeSection} onCardSelect={setActiveSection} />
      <Panel
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </LanguageProvider>
  );
}
