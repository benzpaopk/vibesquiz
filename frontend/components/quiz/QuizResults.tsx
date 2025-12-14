'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface QuizResultsProps {
  results: {
    character: string;
    description: string;
    imageUrl: string;
    shareText: string;
    archetype?: string;
    stats?: {
      naughtiness: number;
      holidaySpirit: number;
    };
  };
  sessionId: string;
  quizSlug: string;
  onRetake?: () => void;
}

/**
 * Quiz results component with full-screen immersive design.
 * 
 * Displays quiz results with character reveal, stats, and sharing options.
 */
export default function QuizResults({ results, sessionId, quizSlug, onRetake }: QuizResultsProps) {
  const router = useRouter();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async (platform?: 'facebook' | 'twitter' | 'instagram' | 'link') => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = results.shareText || `I got ${results.character} on VibeQuiz!`;

    if (platform === 'link') {
      // Copy to clipboard
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
      // Use native share API
      try {
        await navigator.share({
          title: `I got ${results.character} on VibeQuiz!`,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
      return;
    }

    // Fallback to platform-specific URLs
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

  const handleRetake = () => {
    if (onRetake) {
      onRetake();
    } else {
      router.push(`/quiz/${quizSlug}/start`);
    }
  };


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
              onClick={handleRetake}
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
            <p className="text-primary font-bold uppercase tracking-widest text-sm">
              คำนวณผลลัพธ์แล้ว
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              บุคลิกภาพคริสต์มาสของคุณคือ...
            </h1>
            <p className="text-white/60 text-lg font-medium max-w-2xl">
              จากทางเลือกในชีวิตที่น่าสงสัยของคุณ AI ได้สร้างบุคลิกภาพวันหยุดของคุณแล้ว
            </p>
          </div>

          {/* Main Result Card */}
          <div className="group relative rounded-2xl bg-surface-dark border border-white/5 p-6 md:p-8 shadow-[0_0_50px_-12px_rgba(236,19,19,0.15)] hover:shadow-[0_0_60px_-12px_rgba(236,19,19,0.3)] transition-all duration-500">
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-stretch">
              {/* Text Content (Left) */}
              <div className="flex flex-col gap-6 flex-[3] justify-center">
                {/* Archetype Tag & Title */}
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/5 px-3 py-1 border border-white/10">
                    <span
                      className="material-symbols-outlined text-sm text-primary"
                      aria-hidden="true"
                    >
                      fingerprint
                    </span>
                    <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                      {results.archetype || 'Archetype #042'}
                    </span>
                  </div>
                  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                    {results.character}
                  </h2>
                </div>

                {/* Description */}
                <div className="bg-surface-darker/50 rounded-xl p-5 border border-white/5">
                  <p className="text-gray-300 text-lg leading-relaxed">{results.description}</p>
                </div>
              </div>

              {/* Image Content (Right) */}
              <div className="flex-[2] relative group/image">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 blur-lg group-hover/image:opacity-30 transition-opacity duration-500" />
                <div className="relative h-full min-h-[400px] w-full rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden">
                  <Image
                    src={results.imageUrl}
                    alt={`${results.character} character illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-[10px] font-mono text-white/50 border border-white/10">
                      AI GENERATED IMAGE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer / Share Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-xl font-bold">เปิดเผยตัวเองให้เพื่อนๆ:</h3>
              <p className="text-white/50 text-sm">ไม่ต้องกังวล พวกเขาน่าจะรู้อยู่แล้ว</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleShare('facebook')}
                className="size-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Share on Facebook"
              >
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  public
                </span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="size-12 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Share on Twitter"
              >
                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="size-12 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Share on Instagram"
              >
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  photo_camera
                </span>
              </button>
              <div className="w-px h-8 bg-white/10 mx-2" aria-hidden="true" />
              <button
                onClick={() => handleShare('link')}
                className="h-12 px-6 rounded-full bg-primary hover:bg-red-600 text-white font-bold flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(236,19,19,0.4)] hover:shadow-[0_0_30px_rgba(236,19,19,0.6)]"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  share
                </span>
                <span>{isSharing ? 'คัดลอกลิงก์แล้ว!' : 'แชร์ลิงก์'}</span>
              </button>
            </div>
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
