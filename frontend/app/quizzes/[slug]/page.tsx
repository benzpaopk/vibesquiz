import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuizHero from '@/components/quiz/QuizHero';
import QuizStats from '@/components/quiz/QuizStats';
import QuizFeatures from '@/components/quiz/QuizFeatures';

interface QuizPageProps {
  params: {
    slug: string;
  };
}

/**
 * Generate metadata for quiz pages.
 */
export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const quizData = getQuizData(params.slug);

  return {
    title: `${quizData.title} | VibeQuiz`,
    description: quizData.description,
    keywords: ['quiz', 'holiday', 'christmas', 'personality test', 'vibe quiz', params.slug],
    openGraph: {
      title: `${quizData.title} | VibeQuiz`,
      description: quizData.description,
      type: 'website',
    },
  };
}

/**
 * Get quiz data based on slug.
 * In production, this would fetch from an API or database.
 */
function getQuizData(slug: string) {
  const quizzes: Record<string, { title: string; description: string }> = {
    'who-are-you-on-christmas-day': {
      title: 'คุณเป็นใครในวันคริสต์มาส?',
      description:
        'คุณเป็นซานต้าที่ใจดี? เอลฟ์ที่ซน? หรือไกด์กวางเรนเดียร์? ค้นหาบุคลิกภาพที่แท้จริงของคุณในเวลาเพียง 2 นาที!',
    },
  };

  return (
    quizzes[slug] || {
      title: 'แบบทดสอบบุคลิกภาพวันหยุด',
      description: 'ค้นพบบุคลิกภาพวันหยุดของคุณด้วยแบบทดสอบสนุกๆ ของเรา!',
    }
  );
}

/**
 * Quiz page component.
 * 
 * Displays quiz landing page with hero, stats, and features.
 */
export default function QuizPage({ params }: QuizPageProps) {
  const quizData = getQuizData(params.slug);

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
          <QuizHero quizData={{ ...quizData, slug: params.slug }} />
          <QuizStats />
          <QuizFeatures />
        </div>
      </main>

      <Footer />
    </div>
  );
}
