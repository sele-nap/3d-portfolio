import { AccentLine } from '@/base/AccentLine';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <>
      <h2 id="modal-title" className="modal-title">
        {title}
      </h2>
      <AccentLine />
    </>
  );
}
