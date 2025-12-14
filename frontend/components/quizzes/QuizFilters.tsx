'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Filter {
  id: string;
  label: string;
  icon: string;
}

/**
 * Quiz filters component with category chips.
 * 
 * Allows users to filter quizzes by category/theme.
 */
export default function QuizFilters() {
  const [activeFilter, setActiveFilter] = useState('popular');

  const filters: Filter[] = [
    { id: 'popular', label: 'Popular', icon: 'local_fire_department' },
    { id: 'love', label: 'Love Life', icon: 'favorite' },
    { id: 'office', label: 'Office Party', icon: 'work' },
    { id: 'wholesome', label: 'Wholesome', icon: 'sentiment_very_satisfied' },
    { id: 'naughty', label: 'Naughty List', icon: 'warning' },
    { id: 'movies', label: 'Movies', icon: 'movie' },
  ];

  return (
    <section className="flex flex-col gap-6" id="quizzes">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-tight text-white">Trending Themes</h2>
          <p className="text-[#b99d9d]">Curated quizzes blowing up on TikTok right now.</p>
        </div>
        <Link
          href="#"
          className="group flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-red-600"
        >
          See all themes
          <span
            className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Chips Scroller */}
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide md:mx-0 md:px-0">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-md shadow-primary/20 font-bold'
                : 'bg-[#392828] text-white hover:bg-[#4a3535]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {filter.icon}
            </span>
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  );
}

