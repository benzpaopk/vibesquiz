'use client';

import { calculateMBTI } from '@/lib/utils/calculateResult';

/**
 * Debug page to test MBTI calculation logic.
 * 
 * Access at: /debug/logic-test
 * 
 * This page allows testing the calculateMBTI function with various answer patterns
 * to verify the logic works correctly.
 */
export default function LogicTestPage() {
  // Test Case 1: The Extrovert Leader (All 'A' answers)
  const case1Answers: Record<number, string> = {};
  for (let i = 1; i <= 20; i++) {
    case1Answers[i] = 'A';
  }
  const case1Result = calculateMBTI(case1Answers);

  // Test Case 2: The Introvert Artist (All 'E' answers)
  const case2Answers: Record<number, string> = {};
  for (let i = 1; i <= 20; i++) {
    case2Answers[i] = 'E';
  }
  const case2Result = calculateMBTI(case2Answers);

  // Test Case 3: The Ambivert (Mixed answers - alternating A and E)
  const case3Answers: Record<number, string> = {};
  for (let i = 1; i <= 20; i++) {
    case3Answers[i] = i % 2 === 1 ? 'A' : 'E'; // Odd = A, Even = E
  }
  const case3Result = calculateMBTI(case3Answers);

  // Helper function to format answers for display
  const formatAnswers = (answers: Record<number, string>): string => {
    return Object.entries(answers)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([id, answer]) => `Q${id}:${answer}`)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">MBTI Logic Test Page</h1>
        <p className="text-gray-400 mb-8">
          This page tests the calculateMBTI function with different answer patterns to verify the calculation logic.
        </p>

        {/* Test Case 1 */}
        <div className="bg-surface-dark rounded-lg p-6 mb-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">
            Case 1: The Extrovert Leader
          </h2>
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              <strong className="text-primary">Result:</strong>{' '}
              <span className="text-2xl font-bold text-white">{case1Result}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Expected:</strong> ESTJ (All A = E, S, T, J)
            </p>
          </div>
          <div className="bg-surface-darker rounded p-4">
            <p className="text-xs text-gray-500 mb-2">Answers:</p>
            <p className="text-sm text-gray-300 font-mono break-all">
              {formatAnswers(case1Answers)}
            </p>
          </div>
        </div>

        {/* Test Case 2 */}
        <div className="bg-surface-dark rounded-lg p-6 mb-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">
            Case 2: The Introvert Artist
          </h2>
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              <strong className="text-primary">Result:</strong>{' '}
              <span className="text-2xl font-bold text-white">{case2Result}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Expected:</strong> INFP (All E = I, N, F, P)
            </p>
          </div>
          <div className="bg-surface-darker rounded p-4">
            <p className="text-xs text-gray-500 mb-2">Answers:</p>
            <p className="text-sm text-gray-300 font-mono break-all">
              {formatAnswers(case2Answers)}
            </p>
          </div>
        </div>

        {/* Test Case 3 */}
        <div className="bg-surface-dark rounded-lg p-6 mb-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">
            Case 3: The Ambivert (Mixed)
          </h2>
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              <strong className="text-primary">Result:</strong>{' '}
              <span className="text-2xl font-bold text-white">{case3Result}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Pattern:</strong> Alternating A and E (Q1=A, Q2=E, Q3=A...)
            </p>
          </div>
          <div className="bg-surface-darker rounded p-4">
            <p className="text-xs text-gray-500 mb-2">Answers:</p>
            <p className="text-sm text-gray-300 font-mono break-all">
              {formatAnswers(case3Answers)}
            </p>
          </div>
        </div>

        {/* Scoring Explanation */}
        <div className="bg-surface-dark rounded-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Scoring System</h2>
          <div className="text-sm text-gray-300 space-y-2">
            <p>
              <strong>Questions 1-5:</strong> E vs I axis
            </p>
            <p>
              <strong>Questions 6-10:</strong> S vs N axis
            </p>
            <p>
              <strong>Questions 11-15:</strong> T vs F axis
            </p>
            <p>
              <strong>Questions 16-20:</strong> J vs P axis
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-bold mb-2">Answer Scoring:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>A:</strong> +2 to Left trait (E, S, T, J)</li>
                <li><strong>B:</strong> +1 to Left trait</li>
                <li><strong>C:</strong> 0 (neutral)</li>
                <li><strong>D:</strong> +1 to Right trait (I, N, F, P)</li>
                <li><strong>E:</strong> +2 to Right trait</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
