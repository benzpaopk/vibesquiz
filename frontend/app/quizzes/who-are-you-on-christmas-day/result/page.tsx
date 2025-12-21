'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/useQuizStore';
import { calculateCharacter } from '@/lib/quiz-calculator';
import type { CharacterResult } from '@/lib/data/christmas-characters';

/**
 * Result page for the Christmas quiz.
 * 
 * Routes: /quizzes/who-are-you-on-christmas-day/result
 */
export default function ResultPage() {
  const router = useRouter();
  const { answers, resetQuiz } = useQuizStore();
  const [results, setResults] = useState<CharacterResult | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate results and validate answers
  useEffect(() => {
    if (!isMounted) return;

    // Validation: redirect if no answers
    const answerKeys = Object.keys(answers);
    if (answerKeys.length === 0) {
      router.replace('/quizzes/who-are-you-on-christmas-day');
      return;
    }

    // Calculate character based on answers
    const calculatedResult = calculateCharacter(answers);
    setResults(calculatedResult);
  }, [answers, isMounted, router]);

  // Handle Play Again - reset quiz and redirect to first question
  const handlePlayAgain = () => {
    resetQuiz();
    router.push('/quizzes/who-are-you-on-christmas-day/question/1');
  };

  const handleShare = async (platform?: 'facebook' | 'twitter' | 'instagram' | 'link') => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = results ? `ฉันได้ "${results.title}" ใน VibeQuiz!` : '';

    if (platform === 'link') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setIsSharing(true);
        setTimeout(() => setIsSharing(false), 2000);
      } catch (error) {
        console.error('Failed to copy link:', error);
      }
      return;
    }

    if (navigator.share && !platform) {
      try {
        await navigator.share({
          title: shareText,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
      return;
    }

    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      instagram: `https://www.instagram.com/`,
    };

    if (platform && urls[platform]) {
      if (platform === 'instagram') {
        alert('Share on Instagram by copying the link and posting it in your story!');
        return;
      }
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Don't render until mounted
  if (!isMounted) return null;

  // Show loading state while calculating
  if (!results) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg">Calculating your Christmas persona...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="px-6 md:px-10 py-4 flex items-center justify-between max-w-[1200px] mx-auto w-full">
          <Link
            href="/"
            className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                ac_unit
              </span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">VibeQuiz</h2>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white/70 hover:text-primary transition-colors text-sm font-semibold"
              >
                Home
              </Link>
              <Link
                href="/quizzes"
                className="text-white/70 hover:text-primary transition-colors text-sm font-semibold"
              >
                All Quizzes
              </Link>
            </div>
            <button
              onClick={handlePlayAgain}
              className="hidden sm:flex h-10 px-5 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-all"
            >
              ทำใหม่
            </button>
            <button className="sm:hidden text-white" aria-label="Menu">
              <span className="material-symbols-outlined" aria-hidden="true">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="flex-1 w-full px-4 md:px-10 py-8 md:py-12 flex justify-center">
        <div className="max-w-[1000px] w-full flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              คริสต์มาสนี้คุณคือ...
            </h1>
          </div>

          {/* Header Section: Title, Description, Image */}
          <div className="group relative rounded-2xl bg-surface-dark border border-white/5 p-6 md:p-8 shadow-[0_0_50px_-12px_rgba(236,19,19,0.15)] hover:shadow-[0_0_60px_-12px_rgba(236,19,19,0.3)] transition-all duration-500">
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              {/* Text Content (Left) */}
              <div className="flex flex-col gap-4 flex-1 w-full">
                {/* MBTI Badge */}
                <div className="flex justify-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold tracking-widest text-sm mb-4">
                    {results.id}
                  </span>
                </div>
                {/* Title and Description merged */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed break-words text-center">
                  <span className="text-white">{results.title}</span>{' '}
                  <span className="text-white">{results.description}</span>
                </h1>
              </div>

              {/* Image Content (Right) */}
              <div className="relative group/image w-full max-w-md lg:max-w-lg flex-shrink-0">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 blur-lg group-hover/image:opacity-30 transition-opacity duration-500" />
                <div className="w-full aspect-square relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/10">
                  <Image
                    src={results.image}
                    alt={`${results.title} character illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 512px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-surface-darker/50 rounded-xl p-6 md:p-8 border-l-4 border-primary/50">
            <blockquote className="text-gray-200 text-lg md:text-xl italic leading-relaxed text-center">
              "{results.quote}"
            </blockquote>
          </div>

          {/* Stats Section */}
          <div className="bg-surface-dark rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="text-white text-2xl font-bold mb-6">ค่าพลัง</h3>
            <div className="flex flex-col gap-6">
              {results.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm md:text-base font-medium">
                      {stat.label}
                    </span>
                    <span className="text-white text-sm md:text-base font-bold">
                      {stat.value}%
                    </span>
                  </div>
                  {/* Linear Progress Bar */}
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Warning Card */}
            <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">ข้อควรระวัง</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {results.warning}
                  </p>
                </div>
              </div>
            </div>

            {/* Best Match Card */}
            <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-red-500/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❤️</span>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">คู่หู</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {results.bestMatch}
                  </p>
                </div>
              </div>
            </div>

            {/* Nemesis Card */}
            <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-gray-600/20 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💀</span>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">ศัตรู</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {results.nemesis}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => handleShare('instagram')}
              className="px-8 py-4 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] text-white font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                share
              </span>
              <span>แชร์ไป Story IG!</span>
            </button>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-8 text-center text-white/30 text-xs">
        <p>© {new Date().getFullYear()} VibeQuiz. Powered by Holiday Spirit & AI.</p>
      </footer>
    </div>
  );
}
