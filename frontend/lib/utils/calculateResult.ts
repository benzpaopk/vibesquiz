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
 * Calculate MBTI type from user's answers using weighted scoring system
 * 
 * @param answers - Object mapping question IDs to answer choices (e.g., { 1: 'A', 2: 'B' })
 * @returns 4-letter MBTI code (e.g., "ENFP", "ISTJ")
 */
export function calculateMBTI(answers: Record<number, string>): MBTIType {
  // Initialize 4 counters (Positive = first trait, Negative = second trait)
  let score_EI = 0; // Positive = E, Negative = I
  let score_SN = 0; // Positive = S, Negative = N
  let score_TF = 0; // Positive = T, Negative = F
  let score_JP = 0; // Positive = J, Negative = P

  // Process each answer
  for (const [questionIdStr, answer] of Object.entries(answers)) {
    const questionId = parseInt(questionIdStr, 10);
    const answerUpper = answer.toUpperCase();

    // 1. Energy Axis (E vs I) - Q1, Q5, Q9
    if (questionId === 1 || questionId === 5) {
      // Q1 & Q5: A, B = +2 (E), C = 0, D, E = -2 (I)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_EI += 2;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_EI -= 2;
      }
      // C = 0 (no change)
    } else if (questionId === 9) {
      // Q9 (Influence): A (Santa), C (Reindeer) = +1 (E)
      // D (Snowman), E (Grinch) = -1 (I)
      // B (Elf) = 0
      if (answerUpper === 'A' || answerUpper === 'C') {
        score_EI += 1;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_EI -= 1;
      }
      // B = 0 (no change)
    }

    // 2. Information Axis (S vs N) - Q2, Q6, Q10
    if (questionId === 2) {
      // Q2: A, B = +2 (S), C = 0, D, E = -2 (N)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_SN += 2;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_SN -= 2;
      }
      // C = 0 (no change)
    } else if (questionId === 6) {
      // Q6: A (Cash), B (Voucher), C (Resell) = +2 (S - Concrete value)
      // D (Rare), E (Handmade/Letter) = -2 (N - Abstract/Sentimental)
      if (answerUpper === 'A' || answerUpper === 'B' || answerUpper === 'C') {
        score_SN += 2;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_SN -= 2;
      }
    } else if (questionId === 10) {
      // Q10 (Influence): A (Rich), B (Health) = +1 (S)
      // C (World), D (Self), E (Survival) = -1 (N)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_SN += 1;
      } else if (answerUpper === 'C' || answerUpper === 'D' || answerUpper === 'E') {
        score_SN -= 1;
      }
    }

    // 3. Decision Axis (T vs F) - Q3, Q7, Q9, Q10
    if (questionId === 3) {
      // Q3: A (Stop crying), B (Analyze) = +2 (T)
      // C = 0
      // D (Cry with), E (Cheer up) = -2 (F)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_TF += 2;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_TF -= 2;
      }
      // C = 0 (no change)
    } else if (questionId === 7) {
      // Q7: A (Complain), B (Calc cost) = +2 (T)
      // C (Suppress), D (Care), E (Joke) = -2 (F)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_TF += 2;
      } else if (answerUpper === 'C' || answerUpper === 'D' || answerUpper === 'E') {
        score_TF -= 2;
      }
    } else if (questionId === 9) {
      // Q9 (Influence): E (Grinch) = +1 (T)
      // D (Snowman) = -1 (F)
      // Other answers don't affect TF
      if (answerUpper === 'E') {
        score_TF += 1;
      } else if (answerUpper === 'D') {
        score_TF -= 1;
      }
    } else if (questionId === 10) {
      // Q10 (Influence): A (Success) = +1 (T)
      // C (Kindness) = -1 (F)
      // Other answers don't affect TF
      if (answerUpper === 'A') {
        score_TF += 1;
      } else if (answerUpper === 'C') {
        score_TF -= 1;
      }
    }

    // 4. Lifestyle Axis (J vs P) - Q4, Q8, Q9
    if (questionId === 4) {
      // Q4: A (Early), B (Standard), C (Outsource) = +2 (J)
      // D (Last minute), E (In car) = -2 (P)
      if (answerUpper === 'A' || answerUpper === 'B' || answerUpper === 'C') {
        score_JP += 2;
      } else if (answerUpper === 'D' || answerUpper === 'E') {
        score_JP -= 2;
      }
    } else if (questionId === 8) {
      // Q8: A (Sleep early), B (Preparing) = +2 (J)
      // C, D, E (Flow/Late) = -2 (P)
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_JP += 2;
      } else if (answerUpper === 'C' || answerUpper === 'D' || answerUpper === 'E') {
        score_JP -= 2;
      }
    } else if (questionId === 9) {
      // Q9 (Influence): A (Santa), B (Elf) = +1 (J - Organized/Leader)
      // C (Reindeer), E (Grinch) = -1 (P - Adaptable/Indy)
      // D doesn't affect JP
      if (answerUpper === 'A' || answerUpper === 'B') {
        score_JP += 1;
      } else if (answerUpper === 'C' || answerUpper === 'E') {
        score_JP -= 1;
      }
    }
  }

  // Determine letters with tie-breaker rules
  // If score is exactly 0, use default tie-breaker
  const firstLetter = score_EI > 0 ? 'E' : score_EI < 0 ? 'I' : 'E'; // Default to E (Christmas is social)
  const secondLetter = score_SN > 0 ? 'S' : score_SN < 0 ? 'N' : 'S'; // Default to S (Questions relate to physical gifts/events)
  const thirdLetter = score_TF > 0 ? 'T' : score_TF < 0 ? 'F' : 'F'; // Default to F (Holiday spirit is about feeling)
  const fourthLetter = score_JP > 0 ? 'J' : score_JP < 0 ? 'P' : 'P'; // Default to P (Parties are chaotic)

  // Combine into MBTI type
  const mbtiType = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}` as MBTIType;

  return mbtiType;
}
