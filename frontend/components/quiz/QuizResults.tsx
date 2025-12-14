'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Social sharing handled inline

interface QuizResultsProps {
  results: {
    character: string;
    description: string;
    imageUrl: string;
    shareText: string;
  };
  sessionId: string;
  quizSlug: string;
}

/**
 * Quiz results component.
 * 
 * Displays quiz results with character reveal and sharing options.
 */
export default function QuizResults({ results, sessionId, quizSlug }: QuizResultsProps) {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I got ${results.character} on VibeQuiz!`,
          text: results.shareText,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setIsSharing(true);
      setTimeout(() => setIsSharing(false), 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Results Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            emoji_events
          </span>
          <span className="text-sm font-bold text-primary">Quiz Complete!</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#181111] dark:text-white mb-4">
          You Are...
        </h1>
      </div>

      {/* Character Reveal Card */}
      <div className="bg-white dark:bg-[#2a1a1a] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#543b3b] mb-8">
        {/* Character Image */}
        <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-transparent">
          <Image
            src={results.imageUrl}
            alt={`${results.character} character`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* Character Info */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-4">
              {results.character}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {results.description}
            </p>
          </div>

          {/* Share Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                share
              </span>
              {isSharing ? 'Link Copied!' : 'Share Results'}
            </button>
            <Link
              href={`/quizzes/${quizSlug}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 dark:bg-[#392828] text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-[#4a3535] transition-all"
            >
              Take Again
            </Link>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/quizzes"
          className="text-center px-6 py-3 rounded-full bg-white dark:bg-[#2a1a1a] border border-gray-200 dark:border-[#543b3b] text-gray-700 dark:text-gray-300 font-medium hover:border-primary/50 transition-all"
        >
          Explore More Quizzes
        </Link>
        <Link
          href="/leaderboard"
          className="text-center px-6 py-3 rounded-full bg-white dark:bg-[#2a1a1a] border border-gray-200 dark:border-[#543b3b] text-gray-700 dark:text-gray-300 font-medium hover:border-primary/50 transition-all"
        >
          View Leaderboard
        </Link>
      </div>
    </div>
  );
}
