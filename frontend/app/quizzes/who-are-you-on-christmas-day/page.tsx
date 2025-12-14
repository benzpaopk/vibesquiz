'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuizHero from '@/components/quiz/QuizHero';
import QuizStats from '@/components/quiz/QuizStats';
import QuizFeatures from '@/components/quiz/QuizFeatures';
import { useQuizStore } from '@/store/useQuizStore';

/**
 * Landing page for the "Who are you on Christmas Day" quiz.
 * 
 * Routes: /quizzes/who-are-you-on-christmas-day
 * 
 * This page automatically resets the quiz state when visited to ensure
 * a fresh start every time.
 */
export default function ChristmasQuizLandingPage() {
  const router = useRouter();
  const { resetQuiz } = useQuizStore();

  // Auto-reset quiz state when landing page loads
  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  const quizData = {
    title: 'Who Are You on Christmas Day?',
    description:
      'Are you a kind-hearted Santa? A mischievous elf? Or a reindeer guide? Find your true persona in just 2 minutes!',
    slug: 'who-are-you-on-christmas-day',
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      {/* Decoration / Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <Navigation />

      <main className="flex flex-1 flex-col items-center px-4 md:px-10 py-8 md:py-12 relative z-10">
        <div className="layout-content-container flex flex-col max-w-[1024px] w-full gap-16">
          <QuizHero quizData={quizData} />
          <QuizStats />
          <QuizFeatures />
        </div>
      </main>

      <Footer />
    </div>
  );
}
