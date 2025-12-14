'use client';

import Image from 'next/image';
import Link from 'next/link';

interface QuizCardProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    category: string;
    categoryIcon: string;
    imageUrl: string;
    imageAlt: string;
    badge?: 'popular' | 'new';
    slug: string;
  };
}

/**
 * Quiz card component.
 * 
 * Displays a single quiz with image, title, description, and CTA button.
 */
export default function QuizCard({ quiz }: QuizCardProps) {
  const buttonText = quiz.badge === 'new' ? 'ทำแบบทดสอบ' : quiz.title === 'กูรูของขวัญ' ? 'ค้นหา' : 'เล่นเลย';

  return (
    <div className="group relative flex flex-col rounded-[2rem] bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#392828] overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        {quiz.badge && (
          <div
            className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
              quiz.badge === 'popular' ? 'bg-black/50 backdrop-blur-md' : 'bg-primary'
            }`}
          >
            {quiz.badge === 'popular' && (
              <span className="material-symbols-outlined text-sm text-yellow-400" aria-hidden="true">
                star
              </span>
            )}
            <span>{quiz.badge === 'popular' ? 'ยอดนิยม' : 'ใหม่'}</span>
          </div>
        )}

        <div className="h-full w-full relative transition-transform duration-700 group-hover:scale-110">
          <Image
            src={quiz.imageUrl}
            alt={quiz.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            {quiz.categoryIcon}
          </span>
          <span className="text-primary text-xs font-bold uppercase tracking-wider">
            {quiz.category}
          </span>
        </div>

        <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">{quiz.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {quiz.description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/quiz/${quiz.slug}`}
            className="w-full flex items-center justify-center gap-2 rounded-full h-12 bg-gray-100 dark:bg-[#3d2929] hover:bg-primary group-hover:bg-primary text-gray-900 dark:text-white group-hover:text-white font-bold transition-colors"
          >
            <span>{buttonText}</span>
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
