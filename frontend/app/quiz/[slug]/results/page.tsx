'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import QuizResults from '@/components/quiz/QuizResults';
import { getQuizSession, completeQuizSession } from '@/lib/quiz-session';

interface ResultsPageProps {
  params: {
    slug: string;
  };
}

/**
 * Quiz results page component.
 * 
 * Displays quiz results based on answers and allows sharing.
 */
export default function ResultsPage({ params }: ResultsPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const slug = params.slug as string;

  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    const session = getQuizSession(sessionId);
    if (!session || session.slug !== slug) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    // Calculate and load results
    loadResults();
  }, [sessionId, slug, router]);

  const loadResults = async () => {
    try {
      setIsLoading(true);
      const session = getQuizSession(sessionId!);
      
      if (!session || !session.answers || session.answers.length !== 10) {
        setError('Quiz not completed');
        return;
      }

      // In production, calculate results via API
      const calculatedResults = calculateResults(session.answers);
      setResults(calculatedResults);

      // Mark session as completed
      completeQuizSession(sessionId!);
    } catch (err) {
      setError('Failed to load results');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateResults = (answers: string[]) => {
    // Mock result calculation
    // In production, this would be done server-side
    const resultTypes = ['Santa', 'Elf', 'Reindeer', 'Grinch', 'Snowman'];
    const resultIndex = answers.length % resultTypes.length;
    
    return {
      character: resultTypes[resultIndex],
      description: `You are a ${resultTypes[resultIndex]}! This describes your personality...`,
      imageUrl: 'https://via.placeholder.com/400',
      shareText: `I got ${resultTypes[resultIndex]} on VibeQuiz!`,
    };
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Calculating your results...</p>
        </div>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <p className="text-red-500">{error || 'Results not available'}</p>
          <Link
            href={`/quizzes/${slug}`}
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-white"
          >
            Back to Quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizResults
        results={results}
        sessionId={sessionId!}
        quizSlug={slug}
      />
    </div>
  );
}
