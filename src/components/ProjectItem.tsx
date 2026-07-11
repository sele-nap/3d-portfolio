interface ProjectItemData {
  title: string;
  period: string;
  company: string;
  description: string;
  tech: readonly string[];
  link?: string;
  video?: string;
}

interface ProjectItemProps {
  project: ProjectItemData;
  linkLabel: string;
}

export function ProjectItem({ project, linkLabel }: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-meta">
          {project.period} · {project.company}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tag, i) => (
          <span key={i} className="project-tech-tag">
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
        >
          <span className="project-link-icon">↗</span>
          {linkLabel}
        </a>
      )}
      {project.video && (
        <video
          className="project-video"
          src={project.video}
          controls
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}

export type { ProjectItemData };
