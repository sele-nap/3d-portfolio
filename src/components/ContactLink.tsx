import { ReactNode } from 'react';

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
}

export function ContactLink({ href, icon, label, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="contact-link"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="contact-link-icon">{icon}</span>
      {label}
    </a>
  );
}
