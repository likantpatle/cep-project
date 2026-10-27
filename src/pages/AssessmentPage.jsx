import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS, calculateAssessmentProfile } from '../data/assessmentQuestions';
import ProgressBar from '../components/ProgressBar';
import AssessmentQuestion from '../components/AssessmentQuestion';
import { Sparkles, HelpCircle } from 'lucide-react';

export default function AssessmentPage({ onCompleteAssessment, setActivePage }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // answers: array of { questionId, selectedOptionIndex }
  const [answers, setAnswers] = useState(
    ASSESSMENT_QUESTIONS.map(q => ({ questionId: q.id, selectedOptionIndex: null }))
  );

  const currentQ = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQ.id);

  const handleSelectOption = (optionIndex) => {
    setAnswers(prev => 
      prev.map(a => a.questionId === currentQ.id ? { ...a, selectedOptionIndex: optionIndex } : a)
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      // Calculate results and navigate
      const results = calculateAssessmentProfile(answers);
      onCompleteAssessment(results);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleSkip = () => {
    // Leave unanswered and move to next
    handleNext();
  };

  const handleRestart = () => {
    if (window.confirm('Would you like to restart the assessment from Question 1? Your current choices will be cleared.')) {
      setAnswers(ASSESSMENT_QUESTIONS.map(q => ({ questionId: q.id, selectedOptionIndex: null })));
      setCurrentQuestionIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="assessment-layout">
      <div className="container">
        <div className="assessment-header">
          <div className="hero-badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Self-Discovery Assessment</span>
          </div>
          <h1 style={{ fontSize: '2.1rem', marginBottom: '0.5rem' }}>
            Discover Your Interest Profile
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
            There are no right or wrong answers. Select the options that feel most genuine to you. 
            Your choices help identify what types of activities you enjoy most.
          </p>
        </div>

        {/* Visual Progress Bar */}
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={ASSESSMENT_QUESTIONS.length}
        />

        {/* Active Question Box */}
        <AssessmentQuestion
          question={currentQ}
          selectedIndex={currentAnswer?.selectedOptionIndex}
          onSelectOption={handleSelectOption}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSkip={handleSkip}
          onRestart={handleRestart}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1}
        />

        {/* Reassuring note for students */}
        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <span>Tip: You can always use the "Previous" button to review or change any past answers.</span>
        </div>
      </div>
    </div>
  );
}
