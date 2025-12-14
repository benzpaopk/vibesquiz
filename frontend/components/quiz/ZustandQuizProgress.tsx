'use client';

import { useEffect, useState } from 'react';
import { useQuizStore } from '@/store/useQuizStore';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  onStepClick?: (questionNumber: number) => void;
}

/**
 * Quiz progress bar component for Zustand-based quiz state.
 * 
 * Displays progress through the quiz based on Zustand store answers.
 */
export default function ZustandQuizProgress({
  currentQuestion,
  totalQuestions,
  onStepClick,
}: QuizProgressProps) {
  const { answers } = useQuizStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-[#392828] h-[73px]">
        {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  const answeredQuestions = new Set(Object.keys(answers).map(Number));
  
  // Calculate furthest question reached based on answers
  const answeredQuestionNumbers = Array.from(answeredQuestions);
  const furthestReached = answeredQuestionNumbers.length > 0 
    ? Math.max(...answeredQuestionNumbers) 
    : 0;
  
  // Allow navigation to: any answered question OR the next question after furthest reached
  const maxReachableQuestion = Math.max(furthestReached + 1, 1);
  
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-[#392828]">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-[#392828] rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[60px] text-right">
            {currentQuestion}/{totalQuestions}
          </span>
        </div>

        {/* Question Dots */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Array.from({ length: totalQuestions }, (_, i) => {
            const questionNum = i + 1;
            const isAnswered = answeredQuestions.has(questionNum);
            const isCurrent = questionNum === currentQuestion;
            const isPast = questionNum < currentQuestion;
            
            // Step is reachable if: it has an answer OR it's the next question after furthest reached
            const isReachable = questionNum <= maxReachableQuestion;
            const isFuture = questionNum > maxReachableQuestion;

            const handleClick = () => {
              if (isReachable && onStepClick) {
                onStepClick(questionNum);
              }
            };

            return (
              <button
                key={questionNum}
                type="button"
                onClick={handleClick}
                disabled={isFuture}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                  ${
                    isCurrent
                      ? 'bg-primary text-white scale-110 ring-2 ring-primary ring-offset-2 cursor-pointer hover:opacity-80'
                      : isPast
                        ? 'bg-green-500 text-white cursor-pointer hover:opacity-80'
                        : isAnswered
                          ? 'bg-primary/30 text-primary cursor-pointer hover:opacity-80'
                          : isReachable
                            ? 'bg-gray-200 dark:bg-[#392828] text-gray-500 dark:text-gray-400 cursor-pointer hover:opacity-80'
                            : 'bg-gray-200 dark:bg-[#392828] text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60'
                  }
                `}
                title={
                  isFuture
                    ? `Question ${questionNum} (not available yet)`
                    : isAnswered
                      ? `Question ${questionNum} (answered) - Click to review`
                      : `Question ${questionNum} - Click to navigate`
                }
                aria-label={
                  isFuture
                    ? `Question ${questionNum} - Not available yet`
                    : `Go to question ${questionNum}`
                }
              >
                {questionNum}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
