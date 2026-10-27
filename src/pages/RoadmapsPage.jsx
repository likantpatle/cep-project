import React, { useState } from 'react';
import { ROADMAPS, getRoadmapById } from '../data/roadmaps';
import RoadmapTimeline from '../components/RoadmapTimeline';
import { Layers, Sparkles, BookOpen } from 'lucide-react';

export default function RoadmapsPage({ selectedRoadmapId = 'engineering-software' }) {
  const [currentRoadmapId, setCurrentRoadmapId] = useState(selectedRoadmapId);

  const activeRoadmap = getRoadmapById(currentRoadmapId);

  return (
    <div className="roadmaps-layout">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Step-by-Step Guidance</span>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Career Roadmaps & Pathways
          </h1>
          <p className="section-desc">
            Explore clear, realistic timelines showing what subjects to focus on in Class 9–10, 
            how to choose streams after 10th, and how to reach your career goals.
          </p>
        </div>

        {/* Roadmap Selector Horizontal Bar */}
        <div className="roadmap-selector-bar" role="tablist" aria-label="Career Roadmaps">
          {ROADMAPS.map((r) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={currentRoadmapId === r.id}
              className={`roadmap-tab-btn ${currentRoadmapId === r.id ? 'active' : ''}`}
              onClick={() => setCurrentRoadmapId(r.id)}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Roadmap Timeline Viewer */}
        <RoadmapTimeline roadmap={activeRoadmap} />
      </div>
    </div>
  );
}
