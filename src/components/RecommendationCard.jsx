import React from 'react';
import { Layers, ArrowRight, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

export default function RecommendationCard({ career, matchReason, onSelectCareer, onSelectRoadmap }) {
  return (
    <div className="recommendation-card">
      <div className="rec-header">
        <div>
          <div className="rec-domain">{career.domain}</div>
          <h3 className="rec-title">{career.name}</h3>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {career.streams && career.streams.map((s, idx) => (
            <span key={idx} className="badge badge-accent">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Why it matches */}
      <div className="rec-match-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
          <Sparkles size={16} />
          <span>Why this matches your profile</span>
        </div>
        <div>
          {matchReason || `You showed strong interest in ${career.domain.toLowerCase()} activities and logical or creative problem-solving.`}
        </div>
      </div>

      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        {career.shortDescription}
      </p>

      {/* Details Grid */}
      <div className="rec-details-grid">
        {/* Skills to explore */}
        <div>
          <div className="rec-col-title">Skills to start exploring:</div>
          <div className="rec-tags">
            {career.skillsToExplore.slice(0, 4).map((skill, i) => (
              <span key={i} className="badge badge-slate">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Related Careers */}
        <div>
          <div className="rec-col-title">Related careers in this field:</div>
          <div className="rec-tags">
            {career.relatedCareers.slice(0, 4).map((rel, i) => (
              <span key={i} className="badge badge-primary">
                {rel}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Pathway preview */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="rec-col-title" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <GraduationCap size={15} color="var(--primary)" />
          <span>Typical educational pathway:</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {career.educationalPathways && career.educationalPathways[1] ? (
            <div>• {career.educationalPathways[1]} &nbsp;→&nbsp; {career.educationalPathways[3] || career.educationalPathways[2]}</div>
          ) : (
            <div>• Class 10 → Higher Secondary Stream / Diploma → Degree / Vocational Certification</div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onSelectCareer(career)}
        >
          <span>View Career Details</span>
          <ArrowRight size={14} />
        </button>

        {career.roadmapId && (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onSelectRoadmap(career.roadmapId)}
          >
            <Layers size={14} />
            <span>View Roadmap</span>
          </button>
        )}
      </div>
    </div>
  );
}
