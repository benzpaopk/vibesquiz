'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Navigation component with responsive menu.
 * 
 * Includes logo, navigation links, and login button.
 * Mobile menu toggle functionality included.
 */
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#392828]/10 dark:border-[#392828] bg-surface-light/80 dark:bg-[#181111]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 flex flex-1 justify-center py-3">
          <div className="layout-content-container flex w-full max-w-[1200px] flex-1 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 text-primary dark:text-white cursor-pointer"
              aria-label="VibeQuiz Home"
            >
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  forest
                </span>
              </div>
              <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                VibeQuiz
              </h2>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-6 lg:gap-9">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary text-sm font-bold leading-normal transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/quizzes"
                  className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                >
                  Quizzes
                </Link>
                <Link
                  href="/leaderboard"
                  className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                >
                  Leaderboard
                </Link>
              </div>
              <Link
                href="/login"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-red-700 transition-all text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#392828]/10 dark:border-[#392828] px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/quizzes"
                className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quizzes
              </Link>
              <Link
                href="/leaderboard"
                className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-red-700 transition-all text-white text-sm font-bold leading-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
