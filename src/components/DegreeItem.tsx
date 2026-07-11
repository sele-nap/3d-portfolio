interface DegreeItemProps {
  period: string;
  institution: string;
  location: string;
  title: string;
  highlights: readonly string[];
}

export function DegreeItem({
  period,
  institution,
  location,
  title,
  highlights,
}: DegreeItemProps) {
  return (
    <div className="degree-item">
      <div className="degree-header">
        <span className="degree-period">{period}</span>
        <span className="degree-school">
          {institution} · <span className="degree-location">{location}</span>
        </span>
      </div>
      <p className="degree-title">{title}</p>
      <ul className="degree-highlights">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

export type { DegreeItemProps };
