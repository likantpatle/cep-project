import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Career Assessment' },
    { id: 'careers', label: 'Explore Careers' },
    { id: 'roadmaps', label: 'Career Roadmaps' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'resources', label: 'Resources' },
    { id: 'feedback', label: 'Feedback' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-wrapper"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <div className="brand-icon-box">
            <Compass size={24} strokeWidth={2.2} />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">CareerQuest</span>
            <span className="brand-subtext">Community Engagement Project</span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => handleNavClick('assessment')}
          >
            <span>Start Assessment</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`mobile-drawer-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                style={{ width: '100%', textAlign: 'left' }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={() => handleNavClick('assessment')}
        >
          <span>Start Assessment</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}
