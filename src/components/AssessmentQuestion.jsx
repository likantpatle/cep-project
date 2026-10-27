import React from 'react';
import { ArrowLeft, ArrowRight, SkipForward, RotateCcw } from 'lucide-react';

export default function AssessmentQuestion({
  question,
  selectedIndex,
  onSelectOption,
  onPrevious,
  onNext,
  onSkip,
  onRestart,
  isFirst,
  isLast,
}) {
  return (
    <div className="assessment-card">
      <span className="question-category">{question.category}</span>
      <h2 className="question-text">{question.question}</h2>

      <div className="options-list" role="radiogroup" aria-label={question.question}>
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectOption(index)}
            >
              <div className="option-indicator">
                {isSelected && <div className="option-indicator-dot" />}
              </div>
              <span className="option-text">{option.text}</span>
            </button>
          );
        })}
      </div>

      <div className="assessment-nav-bar">
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onPrevious}
            disabled={isFirst}
            style={{ opacity: isFirst ? 0.5 : 1, cursor: isFirst ? 'not-allowed' : 'pointer' }}
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onRestart}
            title="Start from beginning"
          >
            <RotateCcw size={14} />
            <span>Restart</span>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onSkip}
            title="Skip this question"
          >
            <span>Skip</span>
            <SkipForward size={14} />
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onNext}
          >
            <span>{isLast ? 'View My Results' : 'Next Question'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
