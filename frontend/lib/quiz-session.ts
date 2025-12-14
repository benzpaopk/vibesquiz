/**
 * Quiz session management utilities.
 * 
 * Handles session creation, answer storage, and session tracking.
 * Uses localStorage for persistence across page refreshes.
 */

export interface QuizSession {
  sessionId: string;
  slug: string;
  startedAt: number;
  completedAt?: number;
  answers: string[];
  currentQuestion?: number;
}

const SESSION_STORAGE_KEY = 'vibequiz_session';
const SESSION_EXPIRY_HOURS = 24;

/**
 * Generate a unique session ID.
 */
export function generateSessionId(): string {
  return `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Initialize a new quiz session.
 */
export function initializeQuizSession(slug: string, sessionId: string): QuizSession {
  const session: QuizSession = {
    sessionId,
    slug,
    startedAt: Date.now(),
    answers: [],
    currentQuestion: 1,
  };

  // Store in localStorage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  
  // Also store in sessionStorage for quick access
  sessionStorage.setItem(sessionId, JSON.stringify(session));

  // Track session start (for analytics)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_started', {
      quiz_slug: slug,
      session_id: sessionId,
    });
  }

  return session;
}

/**
 * Get quiz session by session ID.
 */
export function getQuizSession(sessionId: string): QuizSession | null {
  try {
    // Try sessionStorage first (faster)
    const sessionData = sessionStorage.getItem(sessionId);
    if (sessionData) {
      return JSON.parse(sessionData);
    }

    // Fallback to localStorage
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      const session: QuizSession = JSON.parse(stored);
      if (session.sessionId === sessionId) {
        return session;
      }
    }
  } catch (error) {
    console.error('Error reading quiz session:', error);
  }

  return null;
}

/**
 * Save answer for a specific question.
 */
export function saveAnswer(sessionId: string, questionIndex: number, answer: string): void {
  const session = getQuizSession(sessionId);
  if (!session) {
    console.error('Session not found');
    return;
  }

  // Update answers array
  session.answers[questionIndex] = answer;
  session.currentQuestion = questionIndex + 2; // Next question number

  // Update storage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  sessionStorage.setItem(sessionId, JSON.stringify(session));

  // Track answer (for analytics)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_answer', {
      quiz_slug: session.slug,
      session_id: sessionId,
      question_number: questionIndex + 1,
      answer: answer,
    });
  }
}

/**
 * Mark quiz session as completed.
 */
export function completeQuizSession(sessionId: string): void {
  const session = getQuizSession(sessionId);
  if (!session) {
    return;
  }

  session.completedAt = Date.now();

  // Update storage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  sessionStorage.setItem(sessionId, JSON.stringify(session));

  // Track completion (for analytics)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_completed', {
      quiz_slug: session.slug,
      session_id: sessionId,
      duration: session.completedAt - session.startedAt,
    });
  }
}

/**
 * Get quiz data (questions, etc.).
 * In production, this would fetch from an API.
 */
export function getQuizData(slug: string): any {
  // Mock data - replace with API call
  return {
    slug,
    title: 'Who Are You on Christmas Day?',
    description: 'Discover your holiday personality!',
    totalQuestions: 10,
    questions: [], // Would be fetched from API
  };
}

/**
 * Clean up expired sessions.
 */
export function cleanupExpiredSessions(): void {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!stored) return;

    const session: QuizSession = JSON.parse(stored);
    const now = Date.now();
    const expiryTime = SESSION_EXPIRY_HOURS * 60 * 60 * 1000;

    if (now - session.startedAt > expiryTime) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(session.sessionId);
    }
  } catch (error) {
    console.error('Error cleaning up sessions:', error);
  }
}

/**
 * Get current active session.
 */
export function getActiveSession(): QuizSession | null {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!stored) return null;

    const session: QuizSession = JSON.parse(stored);
    const now = Date.now();
    const expiryTime = SESSION_EXPIRY_HOURS * 60 * 60 * 1000;

    // Check if session is expired
    if (now - session.startedAt > expiryTime) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    return session;
  } catch (error) {
    console.error('Error getting active session:', error);
    return null;
  }
}
