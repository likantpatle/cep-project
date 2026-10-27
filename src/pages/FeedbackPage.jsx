import React, { useState } from 'react';
import { Star, CheckCircle, Send, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function FeedbackPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    studentClass: 'Class 10',
    school: '',
    easyToUnderstand: 'Yes, very easy',
    discoveredNewCareer: 'Yes, several',
    roadmapUseful: 'Very helpful',
    favoriteFeature: 'Career Assessment',
    overallThoughts: '',
    improvements: '',
    rating: 5
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.studentClass) {
      setErrorMsg('Please select your class.');
      return;
    }

    // Save to local storage for local/offline persistence
    try {
      const existing = JSON.parse(localStorage.getItem('careerquest_feedbacks') || '[]');
      const newEntry = {
        ...formData,
        submittedAt: new Date().toISOString()
      };
      existing.push(newEntry);
      localStorage.setItem('careerquest_feedbacks', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not save feedback to localStorage:', err);
    }

    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="feedback-layout">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Student & Faculty Voices</span>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Help Us Improve CareerQuest
          </h1>
          <p className="section-desc">
            This website is part of our Community Engagement Project (CEP). Your feedback helps our student 
            team understand whether the questions, roadmaps, and explanations were clear and beneficial.
          </p>
        </div>

        <div className="feedback-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">
                <CheckCircle size={36} />
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                Thank you for your feedback!
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 2rem auto' }}>
                Your response has been recorded in our project database. We will use your suggestions 
                to make CareerQuest even more helpful for future high school students.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      studentClass: 'Class 10',
                      school: '',
                      easyToUnderstand: 'Yes, very easy',
                      discoveredNewCareer: 'Yes, several',
                      roadmapUseful: 'Very helpful',
                      favoriteFeature: 'Career Assessment',
                      overallThoughts: '',
                      improvements: '',
                      rating: 5
                    });
                  }}
                >
                  <span>Submit Another Response</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActivePage('home')}
                >
                  <span>Return to Home</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {errorMsg && (
                <div className="callout callout-warning" style={{ margin: '0 0 1.5rem 0' }}>
                  {errorMsg}
                </div>
              )}

              {/* Basic Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="student-name" className="form-label">
                    Your Name (Optional):
                  </label>
                  <input
                    id="student-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Rahul / Ananya"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="student-class" className="form-label">
                    Your Class / Role: <span style={{ color: 'var(--rose)' }}>*</span>
                  </label>
                  <select
                    id="student-class"
                    className="form-select"
                    value={formData.studentClass}
                    onChange={(e) => handleInputChange('studentClass', e.target.value)}
                    required
                  >
                    <option value="Class 9">Class 9 Student</option>
                    <option value="Class 10">Class 10 Student</option>
                    <option value="Class 11">Class 11 Student</option>
                    <option value="Class 12">Class 12 Student</option>
                    <option value="School Teacher">School Teacher / Counselor</option>
                    <option value="College Faculty">College Faculty / Judge</option>
                    <option value="Parent / Other">Parent / Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="school-name" className="form-label">
                  School / College Name (Optional):
                </label>
                <input
                  id="school-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Kendriya Vidyalaya / Delhi Public School / Govt High School"
                  value={formData.school}
                  onChange={(e) => handleInputChange('school', e.target.value)}
                />
              </div>

              {/* Question 1: Was assessment easy to understand */}
              <div className="form-group">
                <label className="form-label">
                  Was the career assessment easy to understand?
                </label>
                <div className="form-radio-group">
                  {['Yes, very easy', 'Mostly clear', 'A few terms were difficult'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`radio-pill ${formData.easyToUnderstand === opt ? 'selected' : ''}`}
                      onClick={() => handleInputChange('easyToUnderstand', opt)}
                    >
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Did you discover any new career? */}
              <div className="form-group">
                <label className="form-label">
                  Did you discover any new careers or streams you hadn't heard of before?
                </label>
                <div className="form-radio-group">
                  {['Yes, several new careers', 'Yes, one or two', 'No, already familiar with them'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`radio-pill ${formData.discoveredNewCareer === opt ? 'selected' : ''}`}
                      onClick={() => handleInputChange('discoveredNewCareer', opt)}
                    >
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Was career roadmap useful? */}
              <div className="form-group">
                <label className="form-label">
                  Was the career roadmap timeline useful?
                </label>
                <div className="form-radio-group">
                  {['Very helpful', 'Helpful overview', 'Need more detailed stages'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`radio-pill ${formData.roadmapUseful === opt ? 'selected' : ''}`}
                      onClick={() => handleInputChange('roadmapUseful', opt)}
                    >
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Favorite Feature */}
              <div className="form-group">
                <label htmlFor="favorite-feature" className="form-label">
                  Which feature of CareerQuest did you find most useful?
                </label>
                <select
                  id="favorite-feature"
                  className="form-select"
                  value={formData.favoriteFeature}
                  onChange={(e) => handleInputChange('favoriteFeature', e.target.value)}
                >
                  <option value="Career Assessment">Career Assessment Quiz</option>
                  <option value="Explore Careers">Comprehensive Career Library</option>
                  <option value="Career Roadmaps">Step-by-Step Roadmaps</option>
                  <option value="Technology Awareness">Technology Awareness Guides</option>
                  <option value="Learning Resources">Free Educational Resources</option>
                </select>
              </div>

              {/* Thoughts text area */}
              <div className="form-group">
                <label htmlFor="overall-thoughts" className="form-label">
                  What did you think about CareerQuest?
                </label>
                <textarea
                  id="overall-thoughts"
                  className="form-textarea"
                  rows="3"
                  placeholder="Tell us what you liked or what was most interesting..."
                  value={formData.overallThoughts}
                  onChange={(e) => handleInputChange('overallThoughts', e.target.value)}
                />
              </div>

              {/* Improvements text area */}
              <div className="form-group">
                <label htmlFor="improvements" className="form-label">
                  What should we improve or add next?
                </label>
                <textarea
                  id="improvements"
                  className="form-textarea"
                  rows="2"
                  placeholder="Any specific careers, languages, or features you would like to see?"
                  value={formData.improvements}
                  onChange={(e) => handleInputChange('improvements', e.target.value)}
                />
              </div>

              {/* Star Rating */}
              <div className="form-group">
                <label className="form-label">
                  Overall Rating for CareerQuest:
                </label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${formData.rating >= star ? 'filled' : ''}`}
                      onClick={() => handleInputChange('rating', star)}
                      aria-label={`Rate ${star} star`}
                    >
                      <Star size={28} fill={formData.rating >= star ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                  <span style={{ alignSelf: 'center', marginLeft: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                    {formData.rating} out of 5 stars
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  <Send size={18} />
                  <span>Submit Feedback</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
