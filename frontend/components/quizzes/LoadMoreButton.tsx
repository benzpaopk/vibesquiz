'use client';

/**
 * Load more button component.
 * 
 * Allows users to load additional quizzes (pagination).
 */
export default function LoadMoreButton() {
  const handleLoadMore = () => {
    // In production, this would load more quizzes from an API
    console.log('Load more quizzes');
    // TODO: Implement pagination logic
  };

  return (
    <div className="flex justify-center pt-8">
      <button
        onClick={handleLoadMore}
        className="flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full border border-[#392828] bg-transparent text-sm font-bold text-white transition-colors hover:bg-[#392828]"
      >
        Load More Themes
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
          expand_more
        </span>
      </button>
    </div>
  );
}

