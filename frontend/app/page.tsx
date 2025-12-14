import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import QuizCollections from '@/components/QuizCollections';
import SocialShare from '@/components/SocialShare';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VibeQuiz - Holiday Personality Quizzes',
  description: 'Discover your inner elf. Take the ultimate holiday personality test today and find out which festive vibe matches your soul.',
  keywords: ['quiz', 'holiday', 'christmas', 'personality test', 'vibe quiz'],
  openGraph: {
    title: 'VibeQuiz - Holiday Personality Quizzes',
    description: 'Discover your inner elf. Take the ultimate holiday personality test today.',
    type: 'website',
  },
};

/**
 * Home page component for VibeQuiz quiz platform.
 * 
 * Displays hero section, quiz collections, and social sharing options.
 */
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Navigation />
      <main className="layout-container flex h-full grow flex-col items-center">
        <Hero />
        <StatsBar />
        <QuizCollections />
        <SocialShare />
      </main>
      <Footer />
    </div>
  );
}
