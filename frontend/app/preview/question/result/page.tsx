'use client';

import QuizResults from '@/components/quiz/QuizResults';

/**
 * Preview page for quiz results component.
 * 
 * Access at: /preview/question/result
 * 
 * This allows you to preview the results page without completing a quiz.
 */
export default function QuestionResultPreviewPage() {
  // Mock results data for preview
  const mockResults = {
    character: 'The Chaotic Elf',
    description:
      'You claimed you\'d buy gifts in November, but here you are panic-shopping on the 24th. Your toxic trait is eating all the cookies before Santa arrives and blaming the dog. You are the life of the party, but the death of any organized plan.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Chaotic Elf" on VibeQuiz!',
    archetype: 'Archetype #042',
    stats: {
      naughtiness: 95,
      holidaySpirit: 12,
    },
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizResults
        results={mockResults}
        sessionId="preview_session"
        quizSlug="who-are-you-on-christmas-day"
      />
    </div>
  );
}
