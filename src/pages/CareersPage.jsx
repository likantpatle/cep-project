import React, { useState, useMemo } from 'react';
import { Search, Filter, Compass, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { CAREERS, CAREER_DOMAINS, EDUCATIONAL_STREAMS, filterCareers } from '../data/careers';
import CareerCard from '../components/CareerCard';
import CareerDetailModal from '../components/CareerDetailModal';

export default function CareersPage({ 
  initialDomain = 'all', 
  onSelectRoadmap, 
  setActivePage 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState(initialDomain);
  const [activeCareerModal, setActiveCareerModal] = useState(null);

  const filteredCareers = useMemo(() => {
    return filterCareers({
      search: searchQuery,
      stream: selectedStream,
      domain: selectedDomain
    });
  }, [searchQuery, selectedStream, selectedDomain]);

  return (
    <div className="careers-layout">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Career Library</span>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Explore Career Possibilities
          </h1>
          <p className="section-desc">
            Discover a wide range of career fields, the real work professionals do, and the educational 
            streams after Class 10 that lead into them.
          </p>
        </div>

        {/* Educational Streams Guidance Note */}
        <div className="callout callout-info" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <BookOpen size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--primary)' }}>Understanding Streams After Class 10: </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                In India, students typically choose between <strong>Science (PCM / PCB)</strong>, 
                <strong> Commerce (with or without Mathematics)</strong>, <strong>Humanities / Arts</strong>, 
                or <strong>Vocational / Polytechnic Diploma</strong> pathways. Remember that many careers 
                (such as Law, Design, Civil Services, and Entrepreneurship) are open to students from ANY stream!
              </span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="search-filter-card">
          {/* Search Input */}
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon-pos" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by career title, skill (e.g. Python, drawing, lab), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search careers"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="domain-filter">Career Domain:</label>
              <select
                id="domain-filter"
                className="filter-select"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                <option value="all">All Domains ({CAREER_DOMAINS.length})</option>
                {CAREER_DOMAINS.map((dom, i) => (
                  <option key={i} value={dom}>{dom}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="stream-filter">Educational Stream After 10th:</label>
              <select
                id="stream-filter"
                className="filter-select"
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
              >
                {EDUCATIONAL_STREAMS.map((st) => (
                  <option key={st.id} value={st.id}>{st.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stream Filter Pills */}
          <div className="stream-pills">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', alignSelf: 'center', marginRight: '0.5rem' }}>
              Quick Stream Filters:
            </span>
            {EDUCATIONAL_STREAMS.map((st) => (
              <button
                key={st.id}
                type="button"
                className={`stream-pill ${selectedStream === st.id ? 'active' : ''}`}
                onClick={() => setSelectedStream(st.id)}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Reset */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Showing <strong>{filteredCareers.length}</strong> careers
          </span>

          {(searchQuery || selectedStream !== 'all' || selectedDomain !== 'all') && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedStream('all');
                setSelectedDomain('all');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Careers Grid */}
        {filteredCareers.length > 0 ? (
          <div className="careers-grid">
            {filteredCareers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                onSelectCareer={(c) => setActiveCareerModal(c)}
                onSelectRoadmap={(rId) => onSelectRoadmap(rId)}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
            <Compass size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>No careers match your search</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try adjusting your search terms or selecting "All Streams" and "All Domains".
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedStream('all');
                setSelectedDomain('all');
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Career Detail Modal */}
      {activeCareerModal && (
        <CareerDetailModal
          career={activeCareerModal}
          onClose={() => setActiveCareerModal(null)}
          onSelectRoadmap={(rId) => {
            setActiveCareerModal(null);
            onSelectRoadmap(rId);
          }}
        />
      )}
    </div>
  );
}
