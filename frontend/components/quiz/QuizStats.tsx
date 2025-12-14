/**
 * Quiz stats section component.
 * 
 * Displays statistics cards for the quiz.
 */
export default function QuizStats() {
  const stats = [
    {
      label: 'ผู้เล่นวันนี้',
      value: '10k+',
      change: '+15%',
      icon: 'trending_up',
      color: 'green',
    },
    {
      label: 'แชร์',
      value: '5,400',
      change: '+22%',
      icon: 'share',
      color: 'blue',
    },
    {
      label: 'ตัวละครลับ',
      value: '12',
      valueSuffix: 'ประเภท',
      icon: 'lock_open',
      color: 'purple',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-[#2a1a1a] border border-gray-100 dark:border-[#543b3b] shadow-sm hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
              <div
                className={`p-2 rounded-full ${
                  stat.color === 'green'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : stat.color === 'blue'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                }`}
              >
                <span className="material-symbols-outlined !text-[20px]" aria-hidden="true">
                  {stat.icon}
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#181111] dark:text-white text-3xl font-bold">
                {stat.value}
                {stat.valueSuffix && (
                  <span className="text-sm font-normal text-gray-400"> {stat.valueSuffix}</span>
                )}
              </p>
              {stat.change && (
                <p className="text-green-500 text-sm font-bold">{stat.change}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
