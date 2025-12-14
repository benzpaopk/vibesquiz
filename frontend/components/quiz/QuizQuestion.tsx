'use client';

import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: Array<{ id: string; text: string }>;
}

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

/**
 * Quiz question component.
 * 
 * Displays question with 5 options (A-E) and navigation controls.
 */
export default function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoPrevious,
  isLastQuestion,
}: QuizQuestionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    if (!selectedAnswer) return;
    
    setIsSubmitting(true);
    // Small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 150));
    onNext();
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Question Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <span className="text-sm font-bold text-primary">
            Question {questionNumber} of 10
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#181111] dark:text-white leading-tight">
          {question.text}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto w-full">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onAnswerSelect(option.id)}
              className={`
                relative flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-200
                text-left
                ${
                  isSelected
                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20 scale-[1.02]'
                    : 'border-gray-200 dark:border-[#543b3b] bg-white dark:bg-[#2a1a1a] hover:border-primary/50 hover:scale-[1.01]'
                }
              `}
            >
              {/* Option Label */}
              <div
                className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                  ${
                    isSelected
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-[#392828] text-gray-700 dark:text-gray-300'
                  }
                `}
              >
                {option.id}
              </div>

              {/* Option Text */}
              <span
                className={`
                  flex-1 text-lg font-medium
                  ${isSelected ? 'text-[#181111] dark:text-white' : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                {option.text}
              </span>

              {/* Selected Indicator */}
              {isSelected && (
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4 max-w-2xl mx-auto w-full pt-4">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
            ${
              canGoPrevious
                ? 'bg-gray-100 dark:bg-[#392828] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#4a3535]'
                : 'bg-gray-50 dark:bg-[#2a1a1a] text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_back
          </span>
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={!selectedAnswer || isSubmitting}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all
            ${
              selectedAnswer && !isSubmitting
                ? 'bg-primary text-white hover:bg-red-700 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105'
                : 'bg-gray-300 dark:bg-[#392828] text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isLastQuestion ? 'See Results' : 'Next'}
          <span className="material-symbols-outlined" aria-hidden="true">
            {isLastQuestion ? 'emoji_events' : 'arrow_forward'}
          </span>
        </button>
      </div>
    </div>
  );
}
