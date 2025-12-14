import { calculateMBTI } from './utils/calculateResult';
import { MBTI_CHRISTMAS_CHARACTERS } from './data/mbti-characters';
import type { CharacterResult } from './data/christmas-characters';

/**
 * Calculate the Christmas character based on user's answers using MBTI personality types.
 * 
 * Maps answers to MBTI traits and returns the corresponding Christmas character.
 */
export function calculateCharacter(answers: Record<number, string>): CharacterResult {
  // Calculate MBTI type from answers
  const mbtiType = calculateMBTI(answers);
  
  // Return the corresponding character
  return MBTI_CHRISTMAS_CHARACTERS[mbtiType] || MBTI_CHRISTMAS_CHARACTERS.ENFP;
}
