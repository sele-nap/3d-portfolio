interface SkillCardProps {
  title: string;
  items: readonly string[];
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <ul className="skill-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
