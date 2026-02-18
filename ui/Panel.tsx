import { useLanguage } from '../app/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Panel.css'

interface PanelProps {
  activeSection: string | null
  onClose: () => void
}

export function Panel({ activeSection, onClose }: PanelProps) {
  const { t } = useLanguage()
  const isOpen = activeSection !== null

  return (
    <>
      <div className="ui-header">
        <div className="site-identity">
          <span className="site-name">{t.hero.name}</span>
          <span className="site-role">{t.hero.title}</span>
        </div>
        <LanguageSwitcher />
      </div>

      <footer className="ui-footer">
        <span>{t.footer.made}</span>
        <span className="footer-sep">·</span>
        <span className="footer-tech">{t.footer.tech}</span>
      </footer>

      <div
        className={`modal-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      >
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

          {activeSection === 'about' && (
            <div className="modal-content">
              <h2 className="modal-title">{t.about.title}</h2>
              <div className="modal-accent-line" />
              <p className="modal-text">{t.about.intro}</p>
              <div className="skills-grid">
                {Object.values(t.about.skills).map((group) => (
                  <div key={group.title} className="skill-card">
                    <h3>{group.title}</h3>
                    <ul className="skill-list">
                      {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'formations' && (
            <div className="modal-content">
              <h2 className="modal-title">{t.formations.title}</h2>
              <div className="modal-accent-line" />
              <p className="modal-text">{t.formations.description}</p>
              <div className="degrees-list">
                {t.formations.degrees.map((degree, i) => (
                  <div key={i} className="degree-item">
                    <div className="degree-header">
                      <span className="degree-period">{degree.period}</span>
                      <span className="degree-school">{degree.school} · <span className="degree-location">{degree.location}</span></span>
                    </div>
                    <p className="degree-title">{degree.title}</p>
                    <ul className="degree-highlights">
                      {degree.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a href={t.formations.cv.fileName} download className="cv-download-btn">
                <span className="cv-icon">↓</span>
                {t.formations.cv.label}
              </a>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="modal-content">
              <h2 className="modal-title">{t.contact.title}</h2>
              <div className="modal-accent-line" />
              <p className="modal-text">{t.contact.description}</p>
              <div className="contact-links">
                <a href={`mailto:${t.contact.email}`} className="contact-link">
                  <span className="contact-link-icon">✉</span>
                  {t.contact.email}
                </a>
                <a href={t.contact.githubUrl} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon">◈</span>
                  {t.contact.github}
                </a>
                <a href={t.contact.linkedinUrl} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon">◈</span>
                  {t.contact.linkedin}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
