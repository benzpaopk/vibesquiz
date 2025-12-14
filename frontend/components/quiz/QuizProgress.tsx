'use client';

import { useEffect, useState } from 'react';
import { getQuizSession } from '@/lib/quiz-session';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  sessionId: string;
}

/**
 * Quiz progress bar component.
 * 
 * Displays progress through the quiz and allows navigation to previous questions.
 */
export default function QuizProgress({
  currentQuestion,
  totalQuestions,
  sessionId,
}: QuizProgressProps) {
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Load answered questions from session
    const session = getQuizSession(sessionId);
    if (session?.answers) {
      const answered = new Set<number>();
      session.answers.forEach((answer, index) => {
        if (answer) {
          answered.add(index + 1);
        }
      });
      setAnsweredQuestions(answered);
    }
  }, [sessionId, currentQuestion]);

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

            return (
              <div
                key={questionNum}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                  ${
                    isCurrent
                      ? 'bg-primary text-white scale-110 ring-2 ring-primary ring-offset-2'
                      : isPast
                        ? 'bg-green-500 text-white'
                        : isAnswered
                          ? 'bg-primary/30 text-primary'
                          : 'bg-gray-200 dark:bg-[#392828] text-gray-500 dark:text-gray-400'
                  }
                `}
                title={`คำถามข้อที่ ${questionNum}${isAnswered ? ' (ตอบแล้ว)' : ''}`}
              >
                {questionNum}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
