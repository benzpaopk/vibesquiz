import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuizzesHero from '@/components/quizzes/QuizzesHero';
import QuizFilters from '@/components/quizzes/QuizFilters';
import QuizGrid from '@/components/quizzes/QuizGrid';
import LoadMoreButton from '@/components/quizzes/LoadMoreButton';

export const metadata: Metadata = {
  title: 'All Quizzes | VibeQuiz',
  description: 'Explore our collection of holiday personality quizzes. Find your Christmas persona, love forecast, and more!',
  keywords: ['quizzes', 'holiday', 'christmas', 'personality test', 'vibe quiz'],
};

/**
 * Quizzes listing page.
 * 
 * Displays all available quizzes with filtering and search functionality.
 */
export default function QuizzesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <Navigation />
      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-[1440px] flex-col gap-10 px-6 py-10 lg:px-20">
          <QuizzesHero />
          <QuizFilters />
          <QuizGrid />
          <LoadMoreButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}

