'use client';

import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizProgress from '@/components/quiz/QuizProgress';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Preview page for quiz question component.
 * 
 * Access at: /preview/question
 * 
 * This allows you to preview the question page without going through
 * the full quiz flow. Useful for development and testing.
 */
export default function QuestionPreviewPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionNumber, setQuestionNumber] = useState(3);

  // Mock question data for preview
  const mockQuestion = {
    id: 3,
    text: 'What is your ideal Christmas Eve activity?',
    options: [
      { id: 'A', text: "Watching 'Home Alone' for the 100th time" },
      { id: 'B', text: 'Party hopping until dawn' },
      { id: 'C', text: 'Sleeping; holidays are for rest' },
      { id: 'D', text: 'Cooking a feast for the whole family' },
      { id: 'E', text: 'Last-minute shopping panic' },
    ],
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    console.log('Selected answer:', answer);
  };

  const handleNext = () => {
    console.log('Next clicked');
    if (questionNumber < 20) {
      setQuestionNumber(questionNumber + 1);
      setSelectedAnswer(null);
    } else {
      // Navigate to results page
      router.push('/preview/question/result');
    }
  };

  const handlePrevious = () => {
    console.log('Previous clicked');
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizProgress
        currentQuestion={questionNumber}
        totalQuestions={20}
        sessionId="preview_session"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <QuizQuestion
          question={mockQuestion}
          questionNumber={questionNumber}
          totalQuestions={20}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoPrevious={questionNumber > 1}
          isLastQuestion={questionNumber === 20}
        />
      </div>
    </div>
  );
}
