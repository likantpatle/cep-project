import React from 'react';
import { ExternalLink, BookOpen, Video, Award, Globe, Code } from 'lucide-react';

export default function ResourceCard({ resource }) {
  const getTypeIcon = (type) => {
    if (type.toLowerCase().includes('video')) return <Video size={14} />;
    if (type.toLowerCase().includes('interactive')) return <Code size={14} />;
    if (type.toLowerCase().includes('course')) return <Award size={14} />;
    return <BookOpen size={14} />;
  };

  return (
    <div className="resource-card">
      <div className="resource-card-top">
        <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          {getTypeIcon(resource.type)}
          <span>{resource.type}</span>
        </span>
        <span className="badge badge-teal">{resource.level}</span>
      </div>

      <h3 className="resource-card-title">{resource.title}</h3>
      <div className="resource-card-provider">Provided by: {resource.provider}</div>
      <p className="resource-card-desc">{resource.description}</p>

      {resource.tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {resource.tags.map((tag, i) => (
            <span key={i} className="badge badge-slate" style={{ fontSize: '0.725rem' }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="resource-card-bottom">
        <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
          100% Free / Open Access
        </span>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm"
        >
          <span>Open Resource</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
