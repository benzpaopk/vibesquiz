'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { generateSessionId, initializeQuizSession } from '@/lib/quiz-session';

/**
 * Quiz start page component.
 * 
 * Initializes quiz session and redirects to first question.
 * This ensures proper session tracking and state management.
 */
export default function QuizStartPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    // Initialize quiz session
    const sessionId = generateSessionId();
    initializeQuizSession(slug, sessionId);

    // Redirect to first question immediately
    router.replace(`/quiz/${slug}/question/1?session=${sessionId}`);
  }, [slug, router]);

  // Show minimal loading state during redirect
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary" />
        <p className="mt-4 text-gray-600 dark:text-gray-400">Starting quiz...</p>
      </div>
    </div>
  );
}
