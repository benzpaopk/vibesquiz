/**
 * Stats bar component with marquee animation.
 * 
 * Displays scrolling statistics about quiz engagement.
 */
export default function StatsBar() {
  const stats = [
    { icon: 'bolt', text: '14,203 Quizzes Taken Today' },
    { text: '85k+ Vibes Matched' },
    { text: '4.5k Shares on TikTok' },
    { text: 'New "Grinch Mode" Quiz Added!' },
  ];

  return (
    <div className="w-full bg-primary/5 border-y border-primary/10 overflow-hidden py-4">
      <div className="flex gap-12 whitespace-nowrap animate-marquee px-4 justify-center md:justify-start">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            {stat.icon && (
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                {stat.icon}
              </span>
            )}
            {!stat.icon && index > 0 && <span className="text-primary" aria-hidden="true">•</span>}
            <span className="font-bold text-gray-900 dark:text-white">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
