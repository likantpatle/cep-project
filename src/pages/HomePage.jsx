import React from 'react';
import { 
  ArrowRight, Compass, Sparkles, CheckCircle2, 
  Layers, Cpu, BookOpen, MessageSquareText, Shield, 
  HeartHandshake, Brain, Users, Award, HelpCircle
} from 'lucide-react';
import { CAREER_DOMAINS } from '../data/careers';

export default function HomePage({ setActivePage, onSelectDomain }) {
  const features = [
    {
      id: 'assessment',
      title: 'Career Assessment',
      num: '01',
      desc: 'Take an interactive 15-question quiz designed for Class 9–10 students to discover your natural interest dimensions.',
      icon: <Brain size={24} />
    },
    {
      id: 'careers',
      title: 'Explore Careers',
      num: '02',
      desc: 'Browse through dozens of careers across 15 domains and Indian educational streams after Class 10.',
      icon: <Compass size={24} />
    },
    {
      id: 'roadmaps',
      title: 'Career Roadmaps',
      num: '03',
      desc: 'See visual step-by-step timelines from Class 9–10 to college degrees, polytechnics, and real careers.',
      icon: <Layers size={24} />
    },
    {
      id: 'technologies',
      title: 'Technology Awareness',
      num: '04',
      desc: 'Understand AI, Robotics, Cybersecurity, IoT, and Cloud in simple, everyday language without heavy jargon.',
      icon: <Cpu size={24} />
    },
    {
      id: 'resources',
      title: 'Learning Resources',
      num: '05',
      desc: 'Access curated, free learning portals, simulations, coding playgrounds, and government career guides.',
      icon: <BookOpen size={24} />
    },
    {
      id: 'feedback',
      title: 'Share Feedback',
      num: '06',
      desc: 'Help our student project team improve CareerQuest by letting us know what you learned.',
      icon: <MessageSquareText size={24} />
    }
  ];

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={15} />
            <span>Community Engagement Project for Class 9 & 10 Students</span>
          </div>

          <h1 className="hero-title">
            Explore Careers. Discover Your Path.
          </h1>

          <p className="hero-subtitle">
            CareerQuest helps students understand their interests, explore different career options, 
            and discover the educational paths and skills behind them.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => handleNav('assessment')}
            >
              <span>Start Career Assessment</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => handleNav('careers')}
            >
              <Compass size={18} />
              <span>Explore Careers</span>
            </button>
          </div>

          {/* Simple Visual Journey */}
          <div className="journey-container">
            <div className="journey-label">Your Career Exploration Journey</div>
            <div className="journey-steps">
              <div className="journey-step">
                <div className="journey-step-circle">1</div>
                <div className="journey-step-text">Discover Interests</div>
                <div className="journey-step-desc">Through fun scenario questions</div>
              </div>

              <div className="journey-connector" />

              <div className="journey-step">
                <div className="journey-step-circle">2</div>
                <div className="journey-step-text">Explore Careers</div>
                <div className="journey-step-desc">Beyond common default choices</div>
              </div>

              <div className="journey-connector" />

              <div className="journey-step">
                <div className="journey-step-circle">3</div>
                <div className="journey-step-text">Understand Roadmap</div>
                <div className="journey-step-desc">Class 10 → Streams → Degrees</div>
              </div>

              <div className="journey-connector" />

              <div className="journey-step">
                <div className="journey-step-circle">4</div>
                <div className="journey-step-text">Start Learning</div>
                <div className="journey-step-desc">Free platforms & starter skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CAREERQUEST? SECTION */}
      <section className="home-section">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="section-tag">Why We Built This</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Guidance Built for Actual School Students
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                In Class 9 and 10, students are often expected to make major decisions about streams 
                and subjects with very little information. Traditional advice is frequently limited to just two or three 
                well-known professions, leaving countless creative, technical, and social possibilities undiscovered.
              </p>
              <div className="callout callout-info" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--primary)' }}>Our Purpose: </strong>
                CareerQuest was designed by student peers to give every student an open, friendly, 
                and pressure-free space to explore their natural curiosities.
              </div>
            </div>

            <div className="why-card-stack">
              <div className="why-point-card">
                <div className="why-point-icon">
                  <Compass size={22} />
                </div>
                <div>
                  <h3 className="why-point-title">Hundreds of Options Beyond the Obvious</h3>
                  <p className="why-point-desc">
                    There are diverse, fulfilling careers in healthcare, law, design, environmental engineering, 
                    digital media, agriculture, and skilled vocational trades that students rarely hear about in school.
                  </p>
                </div>
              </div>

              <div className="why-point-card">
                <div className="why-point-icon" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h3 className="why-point-title">Interests Over External Pressure</h3>
                  <p className="why-point-desc">
                    Choosing a stream should consider what kind of problems you enjoy solving and how you like to work, 
                    not only exam marks or what friends and neighbors suggest.
                  </p>
                </div>
              </div>

              <div className="why-point-card">
                <div className="why-point-icon" style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}>
                  <Layers size={22} />
                </div>
                <div>
                  <h3 className="why-point-title">Structured, Transparent Pathways</h3>
                  <p className="why-point-desc">
                    We demystify what actually happens after Class 10: Science (PCM/PCB), Commerce, Humanities, 
                    and Polytechnic/Vocational pathways with alternative routes highlighted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT CAN YOU DO HERE? SECTION */}
      <section className="home-section home-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Features</span>
            <h2 className="section-title">What Can You Do Here?</h2>
            <p className="section-desc">
              CareerQuest provides 6 practical tools designed to guide you step-by-step through self-discovery and learning.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="feature-tile"
                onClick={() => handleNav(feat.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="feature-icon-wrapper">
                  {feat.icon}
                </div>
                <div className="feature-number">Step {feat.num}</div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
                <span className="feature-link-text">
                  <span>Explore Feature</span>
                  <ArrowRight size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPLORE MAJOR CAREER DOMAINS */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Career Fields</span>
            <h2 className="section-title">Explore What Interests You</h2>
            <p className="section-desc">
              Careers come in many different fields. Click any domain below to browse specific roles, skills, and pathways.
            </p>
          </div>

          <div className="domains-grid">
            {CAREER_DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="domain-tile"
                onClick={() => onSelectDomain(domain)}
              >
                <div className="domain-tile-icon">
                  <Award size={24} />
                </div>
                <span className="domain-tile-name">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW CAREERQUEST WORKS */}
      <section className="home-section home-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Simple 5-Step Process</span>
            <h2 className="section-title">How CareerQuest Works</h2>
            <p className="section-desc">
              You don’t need any previous preparation. Just follow these five steps to find clear career directions.
            </p>
          </div>

          <div className="how-it-works-list">
            <div className="how-step-card">
              <div className="how-step-num">1</div>
              <h3 className="how-step-title">Take the Assessment</h3>
              <p className="how-step-desc">
                Answer 15 real-world scenario questions about your favorite activities, hobbies, and problem-solving styles.
              </p>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">2</div>
              <h3 className="how-step-title">Understand Your Strengths</h3>
              <p className="how-step-desc">
                See your Interest Profile across 8 dimensions like Analytical, Creative, Technology, and Social.
              </p>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">3</div>
              <h3 className="how-step-title">Explore Suggestions</h3>
              <p className="how-step-desc">
                Review suggested career fields tailored to your profile with clear explanations of why they match.
              </p>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">4</div>
              <h3 className="how-step-title">View Educational Roadmaps</h3>
              <p className="how-step-desc">
                See what subjects to take in Class 11–12, entrance tests, polytechnic routes, and college degrees.
              </p>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">5</div>
              <h3 className="how-step-title">Start Learning Today</h3>
              <p className="how-step-desc">
                Dive into free interactive portals, coding tutorials, science simulations, and books to build real skills.
              </p>
            </div>
          </div>

          {/* Final CTA Banner */}
          <div className="cta-banner">
            <h2>Ready to Discover Your Strengths?</h2>
            <p>
              Take our 15-question interest assessment or jump directly into browsing the complete career library.
            </p>
            <div className="cta-buttons">
              <button
                type="button"
                className="btn btn-accent btn-lg"
                onClick={() => handleNav('assessment')}
              >
                <span>Start Career Assessment</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => handleNav('careers')}
                style={{ background: '#FFFFFF', color: 'var(--primary)' }}
              >
                <span>Start Exploring Careers</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
