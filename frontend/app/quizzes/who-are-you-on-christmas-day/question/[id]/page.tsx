'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import ZustandQuizProgress from '@/components/quiz/ZustandQuizProgress';
import { questions } from '@/lib/data/questions';
import { useQuizStore } from '@/store/useQuizStore';

interface QuestionPageProps {
  params: {
    id: string;
  };
}

/**
 * Dynamic question page for the Christmas quiz.
 * 
 * Routes: /quizzes/who-are-you-on-christmas-day/question/[id]
 */
export default function QuestionPage({ params }: QuestionPageProps) {
  const router = useRouter();
  const { answers, setAnswer, resetQuiz } = useQuizStore();
  const [isMounted, setIsMounted] = useState(false);
  
  // Parse ID from URL params
  const questionId = parseInt(params.id, 10);
  const totalQuestions = questions.length;
  const isValidId = !isNaN(questionId) && questionId >= 1 && questionId <= totalQuestions;
  
  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Validation: redirect to first question if invalid
  useEffect(() => {
    if (isMounted && !isValidId) {
      router.replace('/quizzes/who-are-you-on-christmas-day/question/1');
    }
  }, [isValidId, router, isMounted]);

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) return null;
  if (!isValidId) return null;

  // Debug: Log questions to verify import
  console.log('Questions loaded:', questions);

  const questionIndex = questionId - 1;
  const rawQuestion = questions[questionIndex];
  
  // Transform the question data structure to match QuizQuestion component expectations
  // Convert choices (with label/value) to options (with id/text)
  const currentQuestionData = rawQuestion ? {
    id: rawQuestion.id,
    text: rawQuestion.text,
    options: rawQuestion.choices.map(choice => ({
      id: choice.value, // 'A', 'B', 'C', 'D', 'E'
      text: choice.label, // Thai text
    })),
  } : null;

  const selectedAnswer = answers[questionId] || null;

  // Safety check: if question not found, redirect
  if (!currentQuestionData) {
    router.replace('/quizzes/who-are-you-on-christmas-day/question/1');
    return null;
  }

  const handleAnswerSelect = (answerId: string) => {
    setAnswer(questionId, answerId);
  };

  const handleNext = () => {
    if (questionId < totalQuestions) {
      router.push(`/quizzes/who-are-you-on-christmas-day/question/${questionId + 1}`);
    } else {
      // Navigate to result page on last question
      router.push('/quizzes/who-are-you-on-christmas-day/result');
    }
  };

  const handlePrevious = () => {
    if (questionId > 1) {
      router.push(`/quizzes/who-are-you-on-christmas-day/question/${questionId - 1}`);
    }
  };

  const handleExitQuiz = () => {
    resetQuiz();
    router.push('/quizzes/who-are-you-on-christmas-day');
  };

  const handleStepClick = (questionNumber: number) => {
    // Calculate furthest question reached based on answers
    const answeredQuestionNumbers = Object.keys(answers).map(Number);
    const furthestReached = answeredQuestionNumbers.length > 0 
      ? Math.max(...answeredQuestionNumbers) 
      : 0;
    
    // Allow navigation to: any answered question OR the next question after furthest reached
    const maxReachableQuestion = Math.max(furthestReached + 1, 1);
    
    // Only navigate if the question is reachable
    if (questionNumber >= 1 && questionNumber <= maxReachableQuestion && questionNumber <= totalQuestions) {
      router.push(`/quizzes/who-are-you-on-christmas-day/question/${questionNumber}`);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative">
      {/* Exit Quiz Button - Positioned absolutely at top-left of screen */}
      <button
        onClick={handleExitQuiz}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors rounded-full p-2 hover:bg-gray-100 dark:hover:bg-white/10"
        aria-label="Exit Quiz"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          close
        </span>
        <span className="hidden sm:inline text-sm font-medium">Exit Quiz</span>
      </button>

      {/* Content container with top padding to avoid Exit button overlap */}
      <div className="flex flex-col pt-24">
        <ZustandQuizProgress
          currentQuestion={questionId}
          totalQuestions={totalQuestions}
          onStepClick={handleStepClick}
        />
        
        <div className="container mx-auto px-4 pt-8 pb-8 max-w-4xl">
          <QuizQuestion
            question={currentQuestionData}
            questionNumber={questionId}
            totalQuestions={totalQuestions}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoPrevious={questionId > 1}
            isLastQuestion={questionId === totalQuestions}
          />
        </div>
      </div>
    </div>
  );
}
