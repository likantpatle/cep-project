import React from 'react';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function RoadmapTimeline({ roadmap }) {
  if (!roadmap) return null;

  return (
    <div className="roadmap-viewer">
      <div className="roadmap-header">
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span className="badge badge-primary">{roadmap.domain}</span>
          <span className="badge badge-slate">Stage-by-Stage Guide</span>
        </div>
        <h2 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {roadmap.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {roadmap.tagline}
        </p>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {roadmap.overview}
        </p>

        {/* Alternative Pathways Callout */}
        {roadmap.alternativeNote && (
          <div className="callout callout-info" style={{ marginTop: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <Sparkles size={18} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--primary)' }}>Multiple Pathways Exist: </strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {roadmap.alternativeNote}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Visual Timeline */}
      <div className="timeline-track">
        {roadmap.steps.map((step, idx) => (
          <div key={idx} className="timeline-step">
            <div className="timeline-dot">{idx + 1}</div>
            
            <span className="timeline-stage-tag">{step.stage}</span>
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-desc">{step.description}</p>

            <ul className="timeline-bullets">
              {step.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="timeline-bullet">
                  <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
