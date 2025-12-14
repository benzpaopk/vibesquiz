import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizState {
  answers: Record<number, string>;
  setAnswer: (questionId: number, answerId: string) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: {},
      setAnswer: (questionId, answerId) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: answerId },
        })),
      resetQuiz: () => set({ answers: {} }),
    }),
    {
      name: 'quiz-storage',
    }
  )
);
