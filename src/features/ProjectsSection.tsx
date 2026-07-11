import { SectionTitle } from '@/base/SectionTitle';
import { ProjectItem } from '@/components/ProjectItem';
import { useLanguage } from '@/hooks/useLanguage';

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle title={t.projects.title} />
      <p className="modal-text">{t.projects.description}</p>
      <div className="projects-list">
        {t.projects.items.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            linkLabel={t.projects.linkLabel}
          />
        ))}
      </div>
    </>
  );
}
