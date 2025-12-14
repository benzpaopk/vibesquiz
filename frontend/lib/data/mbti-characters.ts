import type { CharacterResult } from './christmas-characters';
import type { MBTIType } from '../utils/calculateResult';

/**
 * Christmas Characters mapped to 16 MBTI personality types
 */
export const MBTI_CHRISTMAS_CHARACTERS: Record<MBTIType, CharacterResult> = {
  // ENFP - The Enthusiastic Reindeer
  ENFP: {
    character: 'The Enthusiastic Reindeer',
    description:
      'You bring infectious energy to every holiday gathering! Full of wild ideas and spontaneous joy, you\'re the one who suggests building a snowman at midnight or starting a flash mob in the mall. Your excitement is contagious, and you make Christmas magical for everyone around you.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Enthusiastic Reindeer" (ENFP) on VibeQuiz!',
    archetype: 'Archetype #001',
    stats: {
      naughtiness: 75,
      holidaySpirit: 95,
    },
  },

  // ENFJ - The Generous Santa
  ENFJ: {
    character: 'The Generous Santa',
    description:
      'You\'re the heart of Christmas! Always thinking of others, you spend months planning perfect gifts and ensuring everyone feels included. You host amazing parties, remember everyone\'s dietary restrictions, and somehow make time for everyone. You\'re the one who makes Christmas feel like home.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Generous Santa" (ENFJ) on VibeQuiz!',
    archetype: 'Archetype #002',
    stats: {
      naughtiness: 10,
      holidaySpirit: 100,
    },
  },

  // ENTP - The Chaotic Elf
  ENTP: {
    character: 'The Chaotic Elf',
    description:
      'You claimed you\'d buy gifts in November, but here you are panic-shopping on the 24th. Your toxic trait is eating all the cookies before Santa arrives and blaming the dog. You are the life of the party, but the death of any organized plan. Embrace the chaos!',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Chaotic Elf" (ENTP) on VibeQuiz!',
    archetype: 'Archetype #003',
    stats: {
      naughtiness: 95,
      holidaySpirit: 80,
    },
  },

  // ENTJ - The Master Planner
  ENTJ: {
    character: 'The Master Planner',
    description:
      'Christmas doesn\'t happen without your spreadsheets. You\'ve planned every gift, every meal, every decoration placement since July. You coordinate family schedules, delegate tasks, and somehow make it all look effortless. You\'re the CEO of Christmas.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Master Planner" (ENTJ) on VibeQuiz!',
    archetype: 'Archetype #004',
    stats: {
      naughtiness: 20,
      holidaySpirit: 85,
    },
  },

  // INFP - The Dreamy Reindeer
  INFP: {
    character: 'The Dreamy Reindeer',
    description:
      'You see the magic in everything. Christmas isn\'t just a holiday—it\'s a feeling, a moment frozen in time. You write heartfelt cards, create meaningful traditions, and remember what Christmas truly means. You\'re the keeper of holiday memories.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Dreamy Reindeer" (INFP) on VibeQuiz!',
    archetype: 'Archetype #005',
    stats: {
      naughtiness: 25,
      holidaySpirit: 90,
    },
  },

  // INFJ - The Wise Gift-Giver
  INFJ: {
    character: 'The Wise Gift-Giver',
    description:
      'You give the best gifts because you actually listen. You remember that one thing someone mentioned in March and surprise them with it. You understand people deeply and create experiences that matter. Your gifts show you care, and that\'s the real magic.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Wise Gift-Giver" (INFJ) on VibeQuiz!',
    archetype: 'Archetype #006',
    stats: {
      naughtiness: 15,
      holidaySpirit: 95,
    },
  },

  // INTP - The Analytical Scrooge
  INTP: {
    character: 'The Analytical Scrooge',
    description:
      'You\'re not anti-Christmas, you\'re just... logical. Why wrap gifts when gift bags exist? Why bake for 6 hours when the store has cookies? You appreciate the holidays, but you\'ve optimized them for maximum efficiency. You\'re the one who actually reads the instruction manual.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Analytical Scrooge" (INTP) on VibeQuiz!',
    archetype: 'Archetype #007',
    stats: {
      naughtiness: 30,
      holidaySpirit: 35,
    },
  },

  // INTJ - The Strategic Organizer
  INTJ: {
    character: 'The Strategic Organizer',
    description:
      'You\'ve had Christmas planned since last Christmas. Every gift is thought through, every tradition has a purpose, and every decoration serves a function. You create systems that work, and your holiday efficiency is unmatched. You make Christmas look easy.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Strategic Organizer" (INTJ) on VibeQuiz!',
    archetype: 'Archetype #008',
    stats: {
      naughtiness: 25,
      holidaySpirit: 70,
    },
  },

  // ESFP - The Party Animal
  ESFP: {
    character: 'The Party Animal',
    description:
      'You live for the holiday parties! You\'re the one dancing to Mariah Carey, starting carol sing-alongs, and turning every gathering into a celebration. Your energy is infectious, and you make sure everyone has fun. Christmas is your playground.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Party Animal" (ESFP) on VibeQuiz!',
    archetype: 'Archetype #009',
    stats: {
      naughtiness: 80,
      holidaySpirit: 95,
    },
  },

  // ESFJ - The Perfect Host
  ESFJ: {
    character: 'The Perfect Host',
    description:
      'Everyone\'s favorite holiday host! You remember who likes what food, you make everyone feel welcome, and your home is perfectly decorated. You excel at creating warm, inviting spaces where memories are made. You\'re the glue that holds holiday gatherings together.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Perfect Host" (ESFJ) on VibeQuiz!',
    archetype: 'Archetype #010',
    stats: {
      naughtiness: 20,
      holidaySpirit: 98,
    },
  },

  // ESTP - The Spontaneous Celebrator
  ESTP: {
    character: 'The Spontaneous Celebrator',
    description:
      'You\'re here for a good time, not a long time! Last-minute shopping sprees? Check. Impromptu holiday adventures? Absolutely. You live in the moment and make every Christmas celebration exciting. You\'re the one who suggests going caroling at 10 PM.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Spontaneous Celebrator" (ESTP) on VibeQuiz!',
    archetype: 'Archetype #011',
    stats: {
      naughtiness: 85,
      holidaySpirit: 85,
    },
  },

  // ESTJ - The Holiday Manager
  ESTJ: {
    character: 'The Holiday Manager',
    description:
      'You run Christmas like a well-oiled machine. From organizing family schedules to ensuring traditions are followed perfectly, you make sure everything runs smoothly. Your organizational skills are legendary, and Christmas wouldn\'t be the same without your planning.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Holiday Manager" (ESTJ) on VibeQuiz!',
    archetype: 'Archetype #012',
    stats: {
      naughtiness: 15,
      holidaySpirit: 88,
    },
  },

  // ISFP - The Cozy Reindeer
  ISFP: {
    character: 'The Cozy Reindeer',
    description:
      'You\'re all about the cozy vibes—hot cocoa, fuzzy blankets, and watching snow fall from your window. You bring peace and calm to the holiday chaos. People come to you when they need to decompress from the festive madness. You\'re the holiday therapist everyone needs.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Cozy Reindeer" (ISFP) on VibeQuiz!',
    archetype: 'Archetype #013',
    stats: {
      naughtiness: 20,
      holidaySpirit: 75,
    },
  },

  // ISFJ - The Thoughtful Helper
  ISFJ: {
    character: 'The Thoughtful Helper',
    description:
      'You notice what others need before they ask. You\'re the one who brings extra blankets, remembers to save leftovers for everyone, and quietly makes sure everyone\'s comfortable. Your kindness is genuine and your attention to detail makes everyone feel special.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Thoughtful Helper" (ISFJ) on VibeQuiz!',
    archetype: 'Archetype #014',
    stats: {
      naughtiness: 10,
      holidaySpirit: 92,
    },
  },

  // ISTP - The Reluctant Participant
  ISTP: {
    character: 'The Reluctant Participant',
    description:
      'You pretend to hate the holidays, but deep down you\'re secretly vibing with the festive chaos. You\'ll complain about the music, roll your eyes at decorations, but still show up to every party and somehow end up having a good time. Classic case of "I hate it but I love it."',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Reluctant Participant" (ISTP) on VibeQuiz!',
    archetype: 'Archetype #015',
    stats: {
      naughtiness: 65,
      holidaySpirit: 45,
    },
  },

  // ISTJ - The Traditionalist
  ISTJ: {
    character: 'The Traditionalist',
    description:
      'Traditions matter to you. You know exactly when to put up decorations, which ornaments go where, and how the family dinner should be served. You keep the holiday memories alive by following the same rituals year after year. Consistency is your gift to the holidays.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Traditionalist" (ISTJ) on VibeQuiz!',
    archetype: 'Archetype #016',
    stats: {
      naughtiness: 20,
      holidaySpirit: 80,
    },
  },
};
