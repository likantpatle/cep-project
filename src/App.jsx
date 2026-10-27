import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import ResultsPage from './pages/ResultsPage';
import CareersPage from './pages/CareersPage';
import RoadmapsPage from './pages/RoadmapsPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ResourcesPage from './pages/ResourcesPage';
import FeedbackPage from './pages/FeedbackPage';

export default function App() {
  // Read initial page from hash if present
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages = ['home', 'assessment', 'results', 'careers', 'roadmaps', 'technologies', 'resources', 'feedback'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState(getPageFromHash);
  const [assessmentResults, setAssessmentResults] = useState(() => {
    try {
      const saved = localStorage.getItem('careerquest_assessment_results');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [selectedRoadmapId, setSelectedRoadmapId] = useState('engineering-software');
  const [initialCareersDomain, setInitialCareersDomain] = useState('all');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setActivePage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteAssessment = (results) => {
    setAssessmentResults(results);
    try {
      localStorage.setItem('careerquest_assessment_results', JSON.stringify(results));
    } catch (e) {
      console.warn('Could not save results to localStorage', e);
    }
    navigateTo('results');
  };

  const handleRetakeAssessment = () => {
    navigateTo('assessment');
  };

  const handleSelectDomain = (domain) => {
    setInitialCareersDomain(domain);
    navigateTo('careers');
  };

  const handleSelectRoadmap = (roadmapId) => {
    setSelectedRoadmapId(roadmapId);
    navigateTo('roadmaps');
  };

  const handleFilterCareersByTech = (techTitle) => {
    setInitialCareersDomain('Emerging Technologies');
    navigateTo('careers');
  };

  return (
    <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage 
            setActivePage={navigateTo} 
            onSelectDomain={handleSelectDomain} 
          />
        )}

        {activePage === 'assessment' && (
          <AssessmentPage 
            onCompleteAssessment={handleCompleteAssessment} 
            setActivePage={navigateTo} 
          />
        )}

        {activePage === 'results' && (
          <ResultsPage
            assessmentResults={assessmentResults}
            onRetakeAssessment={handleRetakeAssessment}
            onSelectCareer={() => navigateTo('careers')}
            onSelectRoadmap={handleSelectRoadmap}
            setActivePage={navigateTo}
          />
        )}

        {activePage === 'careers' && (
          <CareersPage
            initialDomain={initialCareersDomain}
            onSelectRoadmap={handleSelectRoadmap}
            setActivePage={navigateTo}
          />
        )}

        {activePage === 'roadmaps' && (
          <RoadmapsPage
            selectedRoadmapId={selectedRoadmapId}
          />
        )}

        {activePage === 'technologies' && (
          <TechnologiesPage
            onFilterCareersByTech={handleFilterCareersByTech}
            setActivePage={navigateTo}
          />
        )}

        {activePage === 'resources' && (
          <ResourcesPage />
        )}

        {activePage === 'feedback' && (
          <FeedbackPage setActivePage={navigateTo} />
        )}
      </main>

      <Footer setActivePage={navigateTo} />
    </div>
  );
}
