/**
 * MBTI Result Calculation Utility
 * 
 * Maps quiz answers to MBTI personality types based on 16 personality types.
 */

export type MBTIType = 
  | 'ENFP' | 'ENFJ' | 'ENTP' | 'ENTJ'
  | 'INFP' | 'INFJ' | 'INTP' | 'INTJ'
  | 'ESFP' | 'ESFJ' | 'ESTP' | 'ESTJ'
  | 'ISFP' | 'ISFJ' | 'ISTP' | 'ISTJ';

export type MBTIScores = {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
};

/**
 * Question to MBTI Trait Pair Mapping
 * - Q1, Q5, Q9 -> E vs I (Extraversion vs Introversion)
 * - Q2, Q6 -> S vs N (Sensing vs Intuition)
 * - Q3, Q7, Q10 -> T vs F (Thinking vs Feeling)
 * - Q4, Q8 -> J vs P (Judging vs Perceiving)
 */
const QUESTION_TO_TRAIT_MAP: Record<number, 'EI' | 'SN' | 'TF' | 'JP'> = {
  1: 'EI',
  2: 'SN',
  3: 'TF',
  4: 'JP',
  5: 'EI',
  6: 'SN',
  7: 'TF',
  8: 'JP',
  9: 'EI',
  10: 'TF',
};

/**
 * Answer choice to trait mapping
 * Mapping based on typical MBTI logic:
 * - A, B typically lean: E (Extraversion), S (Sensing), T (Thinking), J (Judging)
 * - C, D, E typically lean: I (Introversion), N (Intuition), F (Feeling), P (Perceiving)
 */
const ANSWER_TO_TRAIT_MAP: Record<string, { EI?: 'E' | 'I'; SN?: 'S' | 'N'; TF?: 'T' | 'F'; JP?: 'J' | 'P' }> = {
  'A': { EI: 'E', SN: 'S', TF: 'T', JP: 'J' }, // First trait for all pairs
  'B': { EI: 'E', SN: 'S', TF: 'F', JP: 'J' }, // E, S, F, J (F for feeling-oriented)
  'C': { EI: 'I', SN: 'N', TF: 'T', JP: 'P' }, // I, N, T, P (mixed)
  'D': { EI: 'I', SN: 'N', TF: 'F', JP: 'P' }, // Second trait for all pairs
  'E': { EI: 'I', SN: 'N', TF: 'F', JP: 'P' }, // Second trait for all pairs
};

/**
 * Calculate MBTI type from user's answers
 * 
 * @param answers - Object mapping question IDs to answer choices (e.g., { 1: 'A', 2: 'B' })
 * @returns 4-letter MBTI code (e.g., "ENFP", "ISTJ")
 */
export function calculateMBTI(answers: Record<number, string>): MBTIType {
  // Initialize scores
  const scores: MBTIScores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Loop through answers and accumulate scores
  Object.entries(answers).forEach(([questionIdStr, answerId]) => {
    const questionId = parseInt(questionIdStr, 10);
    const traitPair = QUESTION_TO_TRAIT_MAP[questionId];
    const answerMapping = ANSWER_TO_TRAIT_MAP[answerId];

    if (!traitPair || !answerMapping) return;

    // Add score based on trait pair
    switch (traitPair) {
      case 'EI':
        if (answerMapping.EI === 'E') scores.E++;
        if (answerMapping.EI === 'I') scores.I++;
        break;
      case 'SN':
        if (answerMapping.SN === 'S') scores.S++;
        if (answerMapping.SN === 'N') scores.N++;
        break;
      case 'TF':
        if (answerMapping.TF === 'T') scores.T++;
        if (answerMapping.TF === 'F') scores.F++;
        break;
      case 'JP':
        if (answerMapping.JP === 'J') scores.J++;
        if (answerMapping.JP === 'P') scores.P++;
        break;
    }
  });

  // Determine winner for each trait pair (>= favors first letter)
  const firstLetter = scores.E >= scores.I ? 'E' : 'I';
  const secondLetter = scores.S >= scores.N ? 'S' : 'N';
  const thirdLetter = scores.T >= scores.F ? 'T' : 'F';
  const fourthLetter = scores.J >= scores.P ? 'J' : 'P';

  // Combine into MBTI type
  const mbtiType = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}` as MBTIType;

  return mbtiType;
}
