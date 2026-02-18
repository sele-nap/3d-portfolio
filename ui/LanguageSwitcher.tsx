import { useLanguage } from '../app/LanguageContext'
import { useRef } from 'react'
import './LanguageSwitcher.css'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const switchRef = useRef<HTMLDivElement>(null)

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr'
    setLanguage(newLang)

    if (switchRef.current) {
      createMagicParticles(switchRef.current)
    }
  }

  const createMagicParticles = (container: HTMLElement) => {
    const particleCount = 8

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'magic-particle'

      const angle = (i / particleCount) * Math.PI * 2
      const distance = 40 + Math.random() * 20

      particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`)
      particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`)

      container.appendChild(particle)

      setTimeout(() => particle.remove(), 1000)
    }
  }

  return (
    <div className="language-switcher" ref={switchRef}>
      <button
        className="magic-toggle"
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
      >
        <div className={`toggle-track ${language}`}>
          <span className={`lang-label left ${language === 'fr' ? 'active' : ''}`}>FR</span>
          <div className="toggle-thumb">
            <span className="magic-symbol">✦</span>
          </div>
          <span className={`lang-label right ${language === 'en' ? 'active' : ''}`}>EN</span>
          <div className="toggle-glow"></div>
        </div>
      </button>
    </div>
  )
}
