import { MagicCursor } from '@/base/MagicCursor';
import { LanguageProvider } from '@/hooks/useLanguage';
import { MainLayout } from '@/layout/MainLayout';
import { Scene } from '@/scene/canvas/Scene';
import { useState } from 'react';

export function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <LanguageProvider>
      <MagicCursor />
      <Scene activeSection={activeSection} onCardSelect={setActiveSection} />
      <MainLayout
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </LanguageProvider>
  );
}
