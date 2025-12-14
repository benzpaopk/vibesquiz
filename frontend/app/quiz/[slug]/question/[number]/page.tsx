'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizProgress from '@/components/quiz/QuizProgress';
import { getQuizSession, saveAnswer, getQuizData } from '@/lib/quiz-session';

interface QuestionPageProps {
  params: {
    slug: string;
    number: string;
  };
}

/**
 * Quiz question page component.
 * 
 * Displays individual question with options and handles navigation.
 * Tracks answers and manages quiz session state.
 */
export default function QuestionPage({ params }: QuestionPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const questionNumber = parseInt(params.number, 10);
  const slug = params.slug as string;

  const [question, setQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Validate session
    if (!sessionId) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    const session = getQuizSession(sessionId);
    if (!session || session.slug !== slug) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    // Load question data
    loadQuestion();
  }, [sessionId, slug, questionNumber, router]);

  const loadQuestion = async () => {
    try {
      setIsLoading(true);
      const quizData = getQuizData(slug);
      
      // In production, fetch from API
      // For now, use mock data
      const questions = quizData.questions || generateMockQuestions();
      
      if (questionNumber < 1 || questionNumber > questions.length) {
        setError('Invalid question number');
        return;
      }

      const currentQuestion = questions[questionNumber - 1];
      setQuestion(currentQuestion);

      // Load previously selected answer if exists
      const session = getQuizSession(sessionId!);
      const savedAnswer = session?.answers[questionNumber - 1];
      if (savedAnswer) {
        setSelectedAnswer(savedAnswer);
      }
    } catch (err) {
      setError('Failed to load question');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    // Auto-save answer
    if (sessionId) {
      saveAnswer(sessionId, questionNumber - 1, answer);
    }
  };

  const handleNext = async () => {
    if (!selectedAnswer) return;

    // Ensure answer is saved before navigation
    if (sessionId) {
      saveAnswer(sessionId, questionNumber - 1, selectedAnswer);
    }

    const totalQuestions = 10; // From quiz config
    if (questionNumber < totalQuestions) {
      router.push(`/quiz/${slug}/question/${questionNumber + 1}?session=${sessionId}`);
    } else {
      // Small delay to ensure answer is saved
      await new Promise((resolve) => setTimeout(resolve, 100));
      // Navigate to results
      router.push(`/quiz/${slug}/results?session=${sessionId}`);
    }
  };

  const handlePrevious = () => {
    if (questionNumber > 1) {
      router.push(`/quiz/${slug}/question/${questionNumber - 1}?session=${sessionId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">กำลังโหลดคำถาม...</p>
        </div>
      </div>
    );
  }

  if (error || !question) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <p className="text-red-500">{error || 'ไม่พบคำถาม'}</p>
          <button
            onClick={() => router.push(`/quizzes/${slug}`)}
            className="mt-4 rounded-full bg-primary px-6 py-2 text-white"
          >
            กลับไปแบบทดสอบ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizProgress
        currentQuestion={questionNumber}
        totalQuestions={10}
        sessionId={sessionId!}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <QuizQuestion
          question={question}
          questionNumber={questionNumber}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoPrevious={questionNumber > 1}
          isLastQuestion={questionNumber === 10}
        />
      </div>
    </div>
  );
}

/**
 * Generate mock questions for development.
 * In production, this would come from an API.
 */
function generateMockQuestions() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    text: `คำถามข้อที่ ${i + 1}: อะไรที่อธิบายสไตล์วันหยุดของคุณได้ดีที่สุด?`,
    options: [
      { id: 'A', text: 'Option A' },
      { id: 'B', text: 'Option B' },
      { id: 'C', text: 'Option C' },
      { id: 'D', text: 'Option D' },
      { id: 'E', text: 'Option E' },
    ],
  }));
}
