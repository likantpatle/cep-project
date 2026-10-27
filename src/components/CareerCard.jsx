import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function CareerCard({ career, onSelectCareer, onSelectRoadmap }) {
  return (
    <div className="career-card">
      <div className="career-card-top">
        <span className="badge badge-primary">{career.domain}</span>
        {career.streams && career.streams[0] && (
          <span className="badge badge-slate">{career.streams[0]}</span>
        )}
      </div>

      <h3 className="career-card-title">{career.name}</h3>
      <p className="career-card-desc">{career.shortDescription}</p>

      <div className="career-card-meta">
        <div className="career-card-meta-label">Skills to explore:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {career.skillsToExplore.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="badge badge-slate" style={{ fontSize: '0.725rem' }}>
              {skill}
            </span>
          ))}
          {career.skillsToExplore.length > 3 && (
            <span className="badge badge-slate" style={{ fontSize: '0.725rem' }}>
              +{career.skillsToExplore.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="career-card-bottom">
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => onSelectCareer(career)}
        >
          <span>View Details</span>
          <ArrowRight size={14} />
        </button>

        {career.roadmapId && (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onSelectRoadmap(career.roadmapId)}
            title="See step-by-step educational pathway"
          >
            <Layers size={14} />
            <span>Roadmap</span>
          </button>
        )}
      </div>
    </div>
  );
}
