import Link from 'next/link';

/**
 * Footer component.
 * 
 * Displays copyright, brand name, and footer links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-[#392828] py-8">
      <div className="layout-container px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-900 dark:text-white text-lg font-bold">VibeQuiz</h2>
          <span className="text-gray-400">© {currentYear}</span>
        </div>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-gray-500 hover:text-primary text-sm font-medium transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-500 hover:text-primary text-sm font-medium transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-primary text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
