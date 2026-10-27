import React, { useState } from 'react';
import { 
  Cpu, Bot, ShieldCheck, Wifi, BarChart3, Cloud, 
  Glasses, Link, Sun, Navigation, Box, Sparkles, 
  CheckCircle2, ArrowRight, Lightbulb 
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/technologies';

export default function TechnologiesPage({ onFilterCareersByTech, setActivePage }) {
  const [selectedTechFilter, setSelectedTechFilter] = useState('all');

  const getTechIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={26} />;
      case 'Bot': return <Bot size={26} />;
      case 'ShieldCheck': return <ShieldCheck size={26} />;
      case 'Wifi': return <Wifi size={26} />;
      case 'BarChart3': return <BarChart3 size={26} />;
      case 'Cloud': return <Cloud size={26} />;
      case 'Glasses': return <Glasses size={26} />;
      case 'Link': return <Link size={26} />;
      case 'Sun': return <Sun size={26} />;
      case 'Navigation': return <Navigation size={26} />;
      case 'Box': return <Box size={26} />;
      default: return <Cpu size={26} />;
    }
  };

  return (
    <div className="technologies-layout">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Digital Awareness</span>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Technology Awareness for Students
          </h1>
          <p className="section-desc">
            Emerging technologies are shaping the modern world. Here is how they actually work, 
            where you see them every day, and how you can start exploring them as a Class 9 or 10 student.
          </p>
        </div>

        {/* Informative introductory callout */}
        <div className="callout callout-info" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <Sparkles size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--primary)' }}>Why Learn About Technology in School? </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                You don’t have to become a computer programmer to understand technology. 
                Whether you enter medicine, law, agriculture, business, or design, knowing how digital tools work 
                helps you solve bigger problems in your chosen field.
              </span>
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div className="tech-card-header">
                <div className="tech-icon-box">
                  {getTechIcon(tech.iconName)}
                </div>
                <div>
                  <span className="badge badge-primary" style={{ marginBottom: '0.25rem' }}>
                    {tech.badge}
                  </span>
                  <h2 className="tech-title">{tech.title}</h2>
                  <div className="tech-tagline">{tech.tagline}</div>
                </div>
              </div>

              {/* Simple Explanation */}
              <div className="tech-explanation">
                <p><strong>What is it? </strong>{tech.simpleExplanation}</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.885rem', color: 'var(--text-muted)' }}>
                  <strong>How it works: </strong>{tech.howItWorks}
                </p>
              </div>

              {/* Everyday Examples */}
              <div className="tech-block">
                <div className="tech-block-title">Everyday Examples You Know:</div>
                <ul className="tech-block-list">
                  {tech.everydayExamples.map((ex, i) => (
                    <li key={i} className="tech-block-item">
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Where It Is Used in Society */}
              <div className="tech-block" style={{ background: 'var(--bg-surface)' }}>
                <div className="tech-block-title">Where It Is Used in Society:</div>
                <ul className="tech-block-list">
                  {tech.whereItIsUsed.map((use, i) => (
                    <li key={i} className="tech-block-item">
                      <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills to Try Now */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Skills You Can Start Trying:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {tech.skillsToExplore.map((sk, i) => (
                    <span key={i} className="badge badge-slate" style={{ fontSize: '0.75rem' }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Starter Challenge */}
              <div style={{ 
                background: 'var(--accent-light)', 
                border: '1px solid #FDE68A', 
                borderRadius: 'var(--radius-md)', 
                padding: '0.85rem 1rem', 
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: 'var(--accent-hover)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  <Lightbulb size={15} />
                  <span>Student Mini-Challenge</span>
                </div>
                <div>{tech.starterChallenge}</div>
              </div>

              {/* Related Careers & Action */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Related careers: <strong>{tech.relatedCareers.slice(0, 2).join(', ')}</strong>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onFilterCareersByTech(tech.title)}
                >
                  <span>Explore Careers</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
