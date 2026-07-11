import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { AboutSection } from '@/features/AboutSection';
import { ContactSection } from '@/features/ContactSection';
import { ExperiencesSection } from '@/features/ExperiencesSection';
import { FormationsSection } from '@/features/FormationsSection';
import { Modal } from '@/features/Modal';
import { ProjectsSection } from '@/features/ProjectsSection';
import { useLanguage } from '@/hooks/useLanguage';
import '@/tokens/panel.css';

interface MainLayoutProps {
  activeSection: string | null;
  onClose: () => void;
}

export function MainLayout({ activeSection, onClose }: MainLayoutProps) {
  const { t } = useLanguage();
  const isOpen = activeSection !== null;

  return (
    <>
      <header className="ui-header">
        <div className="site-identity">
          <span className="site-name">{t.hero.name}</span>
          <span className="site-role">{t.hero.title}</span>
        </div>
        <LanguageSwitcher />
      </header>

      <footer className="ui-footer">
        <span>{t.footer.made}</span>
        <span className="footer-sep">·</span>
        <span className="footer-tech">{t.footer.tech}</span>
      </footer>

      <Modal isOpen={isOpen} onClose={onClose}>
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'formations' && <FormationsSection />}
        {activeSection === 'experiences' && <ExperiencesSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </Modal>
    </>
  );
}
