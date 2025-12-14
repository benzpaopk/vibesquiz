import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section for quizzes listing page.
 * 
 * Displays featured quiz with CTA buttons.
 */
export default function QuizzesHero() {
  return (
    <section className="@container">
      <div className="flex flex-col gap-8 overflow-hidden rounded-[2.5rem] bg-[#2a1d1d] p-8 shadow-2xl md:flex-row md:items-center md:p-12 lg:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Weekly Feature
            </span>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Find Your Inner <br /> <span className="text-primary">Christmas Elf</span> 🎄
            </h1>
            <p className="max-w-lg text-lg text-[#b99d9d]">
              Are you the chaotic wrapping paper shredder or the organizational mastermind? Unwrap
              your true personality now.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/quiz/who-are-you-on-christmas-day/start"
              className="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-red-600 hover:shadow-xl"
            >
              Start Quiz
            </Link>
            <Link
              href="#quizzes"
              className="flex h-12 items-center justify-center rounded-full bg-[#392828] px-8 text-base font-bold text-white transition-all hover:bg-[#4a3535]"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="aspect-video w-full flex-1 overflow-hidden rounded-[2rem] bg-cover bg-center shadow-inner md:aspect-[4/3] lg:h-[400px] relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfGSCrOZvzUcmEQnX-aNqDwhTSBQtGnTiMc1T8AwI6y736uIeex0lpLfedVEMXZpHxfhgQh-UQ2Xuieaq8IYxp-zZDdmqReEACTGTESpeO8R4vFbRU1bGdABFWDXAXJUWBS0biULV1YVCkat7yMWE73-S52Xlo7-EHQAIM4FQrmhkgy0AHK1mVN0wQH8GKpgYEydUKk0wLouuubF6SWMlHczvv9OHRtWJAbqUaJUBQwIwvAFUVX5v9_-g4Abkcm12GGpMKA0LlLEut"
            alt="A festive digital illustration of an elf holding a present with a mischievous smile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

