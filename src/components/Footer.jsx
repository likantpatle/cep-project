import React from 'react';
import { Compass, BookOpen, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Project Details Col */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <Compass size={24} color="#60A5FA" />
              <h3 style={{ margin: 0, color: '#FFFFFF' }}>CareerQuest</h3>
            </div>
            <p>
              An interactive career guidance and technology awareness platform developed as a 
              <strong> Community Engagement Project (CEP)</strong>. Tailored for Class 9 and Class 10 school students 
              to understand their natural interests, discover diverse educational pathways, and explore emerging technologies.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-slate" style={{ background: '#1E293B', color: '#93C5FD', borderColor: '#334155' }}>
                Class 9 & 10 Focus
              </span>
              <span className="badge badge-slate" style={{ background: '#1E293B', color: '#FCD34D', borderColor: '#334155' }}>
                Student CEP Initiative
              </span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><button type="button" className="footer-link" onClick={() => handleNav('home')}>Home</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('assessment')}>Career Assessment</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Explore Careers</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('roadmaps')}>Career Roadmaps</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Technology Awareness</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('resources')}>Learning Resources</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('feedback')}>Student Feedback</button></li>
            </ul>
          </div>

          {/* Educational Streams Col */}
          <div>
            <h4 className="footer-col-title">Streams After 10th</h4>
            <ul className="footer-links">
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Science (PCM / Math focus)</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Science (PCB / Biology focus)</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Commerce (With/Without Maths)</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Humanities & Social Sciences</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('careers')}>Polytechnic & Vocational ITI</button></li>
            </ul>
          </div>

          {/* Technologies Explored Col */}
          <div>
            <h4 className="footer-col-title">Tech Awareness</h4>
            <ul className="footer-links">
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Artificial Intelligence</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Robotics & Automation</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Cybersecurity</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Internet of Things (IoT)</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Data Science</button></li>
              <li><button type="button" className="footer-link" onClick={() => handleNav('technologies')}>Drones & Clean Energy</button></li>
            </ul>
          </div>
        </div>

        {/* Ethical Educational Disclaimer */}
        <div className="footer-disclaimer-card">
          <strong style={{ color: '#FCD34D' }}>Important Educational Note: </strong>
          The assessment recommendations and pathways presented on CareerQuest are designed as starting points for healthy career exploration and discussions with teachers, parents, and counselors. They are not fixed career decrees. Every student's strengths, circumstances, and interests evolve over time. Exact stream combinations, polytechnic routes, and entrance requirements may vary by state education board and institution.
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} CareerQuest — Community Engagement Project (CEP). Designed for school students.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Clean • Modern • Educational</span>
            <span>Non-commercial open initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
