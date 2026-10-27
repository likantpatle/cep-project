import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { RESOURCE_CATEGORIES, filterResources } from '../data/resources';
import ResourceCard from '../components/ResourceCard';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filtered = useMemo(() => {
    return filterResources({
      category: selectedCategory,
      search: searchQuery,
      level: selectedLevel
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  return (
    <div className="resources-layout">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Curated Learning Library</span>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Free Learning Resources for Students
          </h1>
          <p className="section-desc">
            Explore carefully selected, high-quality, free educational platforms, coding sandboxes, 
            science simulations, and government career portals to start building skills today.
          </p>
        </div>

        {/* Free and open-access callout */}
        <div className="callout callout-success" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <Sparkles size={18} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--emerald)' }}>100% Free & Open-Access: </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                All resources listed on CareerQuest are non-commercial, publicly accessible, or provide free student tiers. 
                You never need to pay to explore these learning materials.
              </span>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="search-filter-card">
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon-pos" />
            <input
              type="text"
              className="search-input"
              placeholder="Search resources by title, topic, or provider (e.g. Python, Khan Academy, NCERT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search learning resources"
            />
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="category-select">Category:</label>
              <select
                id="category-select"
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {RESOURCE_CATEGORIES.map((cat, i) => (
                  <option key={i} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="level-select">Learning Level:</label>
              <select
                id="level-select"
                className="filter-select"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="all">All Levels (Beginner & Intermediate)</option>
                <option value="beginner">Beginner Friendly</option>
                <option value="intermediate">Intermediate / Challenging</option>
              </select>
            </div>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="stream-pills">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', alignSelf: 'center', marginRight: '0.5rem' }}>
              Quick Categories:
            </span>
            {RESOURCE_CATEGORIES.slice(0, 7).map((cat, i) => (
              <button
                key={i}
                type="button"
                className={`stream-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count & Reset */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Showing <strong>{filtered.length}</strong> resources in <em>{selectedCategory}</em>
          </span>

          {(searchQuery || selectedCategory !== 'All Categories' || selectedLevel !== 'all') && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedLevel('all');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Resources Grid */}
        {filtered.length > 0 ? (
          <div className="resources-grid">
            {filtered.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
            <BookOpen size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>No resources match your search</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try searching with different keywords or selecting "All Categories".
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedLevel('all');
              }}
            >
              Show All Resources
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
