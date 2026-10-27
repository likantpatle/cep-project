import React from 'react';
import { 
  RotateCcw, Compass, Sparkles, CheckCircle2, AlertTriangle, 
  ArrowRight, Brain, Laptop, FlaskConical, Palette, 
  MessageSquare, HeartHandshake, TrendingUp, Wrench, Layers 
} from 'lucide-react';
import RecommendationCard from '../components/RecommendationCard';
import { CAREERS } from '../data/careers';

export default function ResultsPage({ 
  assessmentResults, 
  onRetakeAssessment, 
  onSelectCareer, 
  onSelectRoadmap, 
  setActivePage 
}) {
  if (!assessmentResults) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>No Assessment Completed Yet</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Please complete the 15-question career assessment to view your tailored interest profile.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setActivePage('assessment')}
        >
          <span>Take Career Assessment</span>
          <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const { profile, topDimensions, summaryText } = assessmentResults;

  // Map icon component
  const getDimensionIcon = (id) => {
    switch (id) {
      case 'analytical': return <Brain size={18} color="var(--primary)" />;
      case 'technology': return <Laptop size={18} color="#0891B2" />;
      case 'scientific': return <FlaskConical size={18} color="#059669" />;
      case 'creative': return <Palette size={18} color="#D97706" />;
      case 'communication': return <MessageSquare size={18} color="#7C3AED" />;
      case 'social': return <HeartHandshake size={18} color="#E11D48" />;
      case 'leadership': return <TrendingUp size={18} color="#B45309" />;
      case 'practical': return <Wrench size={18} color="#4B5563" />;
      default: return <Sparkles size={18} color="var(--primary)" />;
    }
  };

  // Find careers matching top interest dimensions
  const topIds = topDimensions.map(d => d.id);
  const recommendedCareers = CAREERS.filter(career => 
    career.interestDimensions && career.interestDimensions.some(dim => topIds.includes(dim))
  ).slice(0, 4);

  // Fallback if none match
  const displayCareers = recommendedCareers.length > 0 ? recommendedCareers : CAREERS.slice(0, 4);

  return (
    <div className="results-layout">
      <div className="container">
        {/* Top Summary Banner */}
        <div className="results-summary-card">
          <div className="results-header-badge">
            <Sparkles size={14} />
            <span>Assessment Complete</span>
          </div>

          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Your Interest Profile
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {summaryText}
          </p>

          {/* Ethical Disclaimer Callout */}
          <div className="callout callout-warning">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <AlertTriangle size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--accent-hover)' }}>Exploration Guide, Not a Fixed Verdict: </strong>
                <span style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                  These suggestions are starting points for exploration, not final career decisions. 
                  In Class 9 and 10, your interests will continue to develop as you encounter new subjects, 
                  practical projects, and life experiences.
                </span>
              </div>
            </div>
          </div>

          {/* Visual Profile Breakdown Grid */}
          <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
            Interest Dimensions Breakdown
          </h3>

          <div className="profile-bars-grid">
            {profile.map((item) => (
              <div key={item.id} className="dimension-bar-card">
                <div className="dimension-bar-header">
                  <div className="dimension-bar-title">
                    {getDimensionIcon(item.id)}
                    <span>{item.label}</span>
                  </div>
                  <span className="dimension-bar-pct">{item.percentage}%</span>
                </div>

                <div className="dim-track">
                  <div 
                    className="dim-fill" 
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: item.color || 'var(--primary)'
                    }} 
                  />
                </div>

                <p className="dimension-bar-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onRetakeAssessment}
            >
              <RotateCcw size={15} />
              <span>Retake Assessment</span>
            </button>

            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => setActivePage('careers')}
            >
              <Compass size={15} />
              <span>Browse All Careers Without Filters</span>
            </button>
          </div>
        </div>

        {/* Career Recommendations Section */}
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-tag">Personalized Suggestions</span>
            <h2 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Career Fields You May Want to Explore
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Based on your strongest interest dimensions, here are initial career directions to investigate.
            </p>
          </div>

          <div className="recommendations-grid">
            {displayCareers.map((career) => (
              <RecommendationCard
                key={career.id}
                career={career}
                matchReason={`Your responses showed high interest in ${topDimensions[0].label.toLowerCase()}${topDimensions[1] ? ` and ${topDimensions[1].label.toLowerCase()}` : ''}.`}
                onSelectCareer={onSelectCareer}
                onSelectRoadmap={onSelectRoadmap}
              />
            ))}
          </div>

          {/* Action Row */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => setActivePage('careers')}
            >
              <Compass size={18} />
              <span>Explore All 70+ Careers Library</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
