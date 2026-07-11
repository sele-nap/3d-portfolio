import { SectionTitle } from '@/base/SectionTitle';
import { DegreeItem } from '@/components/DegreeItem';
import { useLanguage } from '@/hooks/useLanguage';

export function ExperiencesSection() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle title={t.experiences.title} />
      <p className="modal-text">{t.experiences.description}</p>
      <div className="degrees-list">
        {t.experiences.jobs.map((job, i) => (
          <DegreeItem
            key={i}
            period={job.period}
            institution={job.company}
            location={job.location}
            title={job.title}
            highlights={job.highlights}
          />
        ))}
      </div>
    </>
  );
}
