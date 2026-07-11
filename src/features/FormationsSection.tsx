import { SectionTitle } from '@/base/SectionTitle';
import { DegreeItem } from '@/components/DegreeItem';
import { useLanguage } from '@/hooks/useLanguage';

export function FormationsSection() {
  const { t } = useLanguage();
  return (
    <>
      <SectionTitle title={t.formations.title} />
      <p className="modal-text">{t.formations.description}</p>
      <div className="degrees-list">
        {t.formations.degrees.map((degree, i) => (
          <DegreeItem
            key={i}
            period={degree.period}
            institution={degree.school}
            location={degree.location}
            title={degree.title}
            highlights={degree.highlights}
          />
        ))}
      </div>
      <a href={t.formations.cv.fileName} download className="cv-download-btn">
        <span className="cv-icon">↓</span>
        {t.formations.cv.label}
      </a>
    </>
  );
}
