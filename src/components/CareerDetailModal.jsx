import React, { useEffect } from 'react';
import { 
  X, CheckCircle, Briefcase, MapPin, Sparkles, 
  GraduationCap, BookOpen, Layers, ArrowRight 
} from 'lucide-react';

export default function CareerDetailModal({ career, onClose, onSelectRoadmap }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!career) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
    >
      <div className="modal-dialog">
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-primary">{career.domain}</span>
              {career.streams && career.streams.map((st, i) => (
                <span key={i} className="badge badge-accent">{st}</span>
              ))}
            </div>
            <h2 id="career-modal-title" style={{ fontSize: '1.65rem', color: 'var(--text-primary)' }}>
              {career.name}
            </h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {career.shortDescription}
            </p>
          </div>

          {/* What does this professional do? */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Briefcase size={18} color="var(--primary)" />
              <span>What does this professional do?</span>
            </h4>
            <ul className="modal-bullet-list">
              {career.whatTheyDo.map((item, idx) => (
                <li key={idx} className="modal-bullet-item">
                  <CheckCircle size={16} className="modal-bullet-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Where can they work? */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <MapPin size={18} color="var(--accent)" />
              <span>Where can they work?</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {career.workEnvironment.map((place, idx) => (
                <span key={idx} className="badge badge-slate" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                  {place}
                </span>
              ))}
            </div>
          </div>

          {/* Skills to explore & Useful Subjects in School */}
          <div className="modal-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <h4 className="modal-section-title">
                <Sparkles size={18} color="var(--teal)" />
                <span>Skills to explore in school</span>
              </h4>
              <ul className="modal-bullet-list">
                {career.skillsToExplore.map((sk, idx) => (
                  <li key={idx} className="modal-bullet-item">
                    <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>•</span>
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="modal-section-title">
                <BookOpen size={18} color="var(--indigo)" />
                <span>Useful school subjects</span>
              </h4>
              <ul className="modal-bullet-list">
                {career.usefulSchoolSubjects.map((sub, idx) => (
                  <li key={idx} className="modal-bullet-item">
                    <span style={{ color: 'var(--indigo)', fontWeight: 'bold' }}>•</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Educational Pathways */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <GraduationCap size={18} color="var(--primary)" />
              <span>Possible Educational Pathways</span>
            </h4>
            <div className="modal-pathway-steps">
              {career.educationalPathways.map((step, idx) => (
                <div key={idx} className="modal-pathway-step">
                  <div className="modal-step-number">{idx + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Careers */}
          {career.relatedCareers && career.relatedCareers.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <span>Related careers to discover</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {career.relatedCareers.map((rel, idx) => (
                  <span key={idx} className="badge badge-primary">
                    {rel}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Beginner Resources */}
          {career.beginnerResources && career.beginnerResources.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <span>Beginner starting points</span>
              </h4>
              <ul className="modal-bullet-list">
                {career.beginnerResources.map((res, idx) => (
                  <li key={idx} className="modal-bullet-item">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>→</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Roadmap Action Button */}
          {career.roadmapId && (
            <div style={{ 
              marginTop: '2rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Want to see the visual roadmap?</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  View the stage-by-stage journey from Class 9–10 up to your career.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onSelectRoadmap(career.roadmapId);
                }}
              >
                <Layers size={16} />
                <span>Explore Visual Roadmap</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
