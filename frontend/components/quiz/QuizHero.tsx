'use client';

import Image from 'next/image';
import Link from 'next/link';

interface QuizHeroProps {
  quizData: {
    title: string;
    description: string;
    slug?: string;
  };
}

/**
 * Quiz hero section component.
 * 
 * Displays quiz title, description, CTA buttons, and hero image.
 */
export default function QuizHero({ quizData }: QuizHeroProps) {
  return (
    <section className="@container">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 flex-1 text-center md:text-left items-center md:items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary !text-[18px]" aria-hidden="true">
              verified
            </span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Trending #1 Quiz
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#181111] dark:text-white drop-shadow-sm">
              Who Are You on
              <br />
              <span className="text-primary relative inline-block">
                Christmas Day?
                {/* Underline decoration */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-white dark:text-white opacity-30"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                  aria-hidden="true"
                >
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 max-w-[500px] leading-relaxed">
              {quizData.description}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Link
              href={`/quiz/${quizData.slug || 'who-are-you-on-christmas-day'}/start`}
              className="group relative flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white text-lg font-bold shadow-[0_0_20px_rgba(236,19,19,0.4)] hover:shadow-[0_0_30px_rgba(236,19,19,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Start Quiz Now!
                <span
                  className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </span>
            </Link>
            <button
              type="button"
              className="flex items-center justify-center h-14 px-6 rounded-full bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-[#181111] dark:text-white text-base font-bold transition-all w-full sm:w-auto"
            >
              View Preview
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-background-light dark:border-background-dark bg-gray-300"
                  aria-label={`User avatar ${i}`}
                />
              ))}
            </span>
            <span>10,000+ played today</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-[500px] relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[60px] animate-pulse" />
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out border-4 border-white/10 dark:border-white/5 bg-[#221010]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd"
              alt="Modern 3D illustration of a cool Santa DJing with reindeer"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              priority
            />

            {/* Overlay Content on Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-white font-bold text-sm">🎅 Character Reveal</p>
              <p className="text-gray-200 text-xs">Unlock your true persona</p>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-background-light dark:bg-[#392828] rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-[bounce_3s_infinite]">
            <span className="text-4xl" role="img" aria-label="Christmas tree">
              🎄
            </span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-[bounce_4s_infinite_1s]">
            <span className="text-3xl" role="img" aria-label="Gift">
              🎁
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
