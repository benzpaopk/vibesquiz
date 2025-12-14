'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizResults from '@/components/quiz/QuizResults';
import { useQuizStore } from '@/store/useQuizStore';
import { calculateCharacter } from '@/lib/quiz-calculator';
import type { CharacterResult } from '@/lib/data/christmas-characters';

/**
 * Result page for the Christmas quiz.
 * 
 * Routes: /quizzes/who-are-you-on-christmas-day/result
 */
export default function ResultPage() {
  const router = useRouter();
  const { answers, resetQuiz } = useQuizStore();
  const [results, setResults] = useState<CharacterResult | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate results and validate answers
  useEffect(() => {
    if (!isMounted) return;

    // Validation: redirect if no answers
    const answerKeys = Object.keys(answers);
    if (answerKeys.length === 0) {
      router.replace('/quizzes/who-are-you-on-christmas-day');
      return;
    }

    // Calculate character based on answers
    const calculatedResult = calculateCharacter(answers);
    setResults(calculatedResult);
  }, [answers, isMounted, router]);

  // Handle Play Again - reset quiz and redirect to first question
  const handlePlayAgain = () => {
    // Reset quiz state first
    resetQuiz();
    // Navigate to first question after reset
    router.push('/quizzes/who-are-you-on-christmas-day/question/1');
  };

  // Don't render until mounted
  if (!isMounted) return null;

  // Show loading state while calculating
  if (!results) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg">Calculating your Christmas persona...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizResults
        results={results}
        sessionId="christmas-quiz-session"
        quizSlug="who-are-you-on-christmas-day"
        onRetake={handlePlayAgain}
      />
    </div>
  );
}
