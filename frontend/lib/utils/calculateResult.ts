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
 * Calculate MBTI type from user's answers using counter comparison system
 * 
 * Questions 1-5: E vs I
 * Questions 6-10: S vs N
 * Questions 11-15: T vs F
 * Questions 16-20: J vs P
 * 
 * Scoring: A=+2 Left, B=+1 Left, C=0, D=+1 Right, E=+2 Right
 * 
 * @param answers - Object mapping question IDs to answer choices (e.g., { 1: 'A', 2: 'B' })
 * @returns 4-letter MBTI code (e.g., "ENFP", "ISTJ")
 */
export function calculateMBTI(answers: Record<number, string>): MBTIType {
  // Initialize score counters for each trait
  let eScore = 0; // Extraversion
  let iScore = 0; // Introversion
  let sScore = 0; // Sensing
  let nScore = 0; // Intuition
  let tScore = 0; // Thinking
  let fScore = 0; // Feeling
  let jScore = 0; // Judging
  let pScore = 0; // Perceiving

  // Iterate through all answers (questions 1-20)
  for (const [questionIdStr, answer] of Object.entries(answers)) {
    const questionId = parseInt(questionIdStr, 10);
    const answerUpper = answer.toUpperCase().trim();

    // Skip invalid question IDs or answers
    if (questionId < 1 || questionId > 20 || !['A', 'B', 'C', 'D', 'E'].includes(answerUpper)) {
      continue;
    }

    // Determine which axis this question belongs to and apply scoring
    if (questionId >= 1 && questionId <= 5) {
      // Questions 1-5: E vs I axis
      if (answerUpper === 'A') {
        eScore += 2; // Strong Left (E)
      } else if (answerUpper === 'B') {
        eScore += 1; // Moderate Left (E)
      } else if (answerUpper === 'C') {
        // Neutral - do nothing
      } else if (answerUpper === 'D') {
        iScore += 1; // Moderate Right (I)
      } else if (answerUpper === 'E') {
        iScore += 2; // Strong Right (I)
      }
    } else if (questionId >= 6 && questionId <= 10) {
      // Questions 6-10: S vs N axis
      if (answerUpper === 'A') {
        sScore += 2; // Strong Left (S)
      } else if (answerUpper === 'B') {
        sScore += 1; // Moderate Left (S)
      } else if (answerUpper === 'C') {
        // Neutral - do nothing
      } else if (answerUpper === 'D') {
        nScore += 1; // Moderate Right (N)
      } else if (answerUpper === 'E') {
        nScore += 2; // Strong Right (N)
      }
    } else if (questionId >= 11 && questionId <= 15) {
      // Questions 11-15: T vs F axis
      if (answerUpper === 'A') {
        tScore += 2; // Strong Left (T)
      } else if (answerUpper === 'B') {
        tScore += 1; // Moderate Left (T)
      } else if (answerUpper === 'C') {
        // Neutral - do nothing
      } else if (answerUpper === 'D') {
        fScore += 1; // Moderate Right (F)
      } else if (answerUpper === 'E') {
        fScore += 2; // Strong Right (F)
      }
    } else if (questionId >= 16 && questionId <= 20) {
      // Questions 16-20: J vs P axis
      if (answerUpper === 'A') {
        jScore += 2; // Strong Left (J)
      } else if (answerUpper === 'B') {
        jScore += 1; // Moderate Left (J)
      } else if (answerUpper === 'C') {
        // Neutral - do nothing
      } else if (answerUpper === 'D') {
        pScore += 1; // Moderate Right (P)
      } else if (answerUpper === 'E') {
        pScore += 2; // Strong Right (P)
      }
    }
  }

  // Determine winning letter for each axis (using >= for tie-breaker, defaulting to Left)
  const firstLetter = eScore >= iScore ? 'E' : 'I';
  const secondLetter = sScore >= nScore ? 'S' : 'N';
  const thirdLetter = tScore >= fScore ? 'T' : 'F';
  const fourthLetter = jScore >= pScore ? 'J' : 'P';

  // Combine into MBTI type
  const mbtiType = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}` as MBTIType;

  return mbtiType;
}
