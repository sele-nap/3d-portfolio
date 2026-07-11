import { SectionTitle } from '@/base/SectionTitle';
import { SkillCard } from '@/components/SkillCard';
import { useLanguage } from '@/hooks/useLanguage';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle title={t.about.title} />
      <p className="modal-text">{t.about.intro}</p>
      <div className="skills-grid">
        {Object.values(t.about.skills).map((group) => (
          <SkillCard
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </>
  );
}
