import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'VibeQuiz - Holiday Personality Quizzes',
    template: '%s | VibeQuiz',
  },
  description: 'Discover your inner elf. Take the ultimate holiday personality test today and find out which festive vibe matches your soul.',
};

/**
 * Root layout component.
 * 
 * Provides global styles, fonts, and HTML structure for the application.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${prompt.variable} bg-background-light dark:bg-background-dark font-body text-gray-900 dark:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
