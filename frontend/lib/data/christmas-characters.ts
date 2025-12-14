export interface CharacterResult {
  character: string;
  description: string;
  imageUrl: string;
  shareText: string;
  archetype: string;
  stats: {
    naughtiness: number;
    holidaySpirit: number;
  };
}

export const christmasCharacters: Record<string, CharacterResult> = {
  Elf: {
    character: 'The Chaotic Elf',
    description:
      'You claimed you\'d buy gifts in November, but here you are panic-shopping on the 24th. Your toxic trait is eating all the cookies before Santa arrives and blaming the dog. You are the life of the party, but the death of any organized plan.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Chaotic Elf" on VibeQuiz!',
    archetype: 'Archetype #042',
    stats: {
      naughtiness: 95,
      holidaySpirit: 85,
    },
  },
  Santa: {
    character: 'The Generous Santa',
    description:
      'You\'re the one who actually remembers everyone\'s gifts, wraps them perfectly, and shows up on time with homemade cookies. Your holiday spirit is off the charts, and you make everyone around you feel special. You\'re basically the MVP of December.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Generous Santa" on VibeQuiz!',
    archetype: 'Archetype #001',
    stats: {
      naughtiness: 5,
      holidaySpirit: 98,
    },
  },
  Grinch: {
    character: 'The Reluctant Grinch',
    description:
      'You pretend to hate the holidays, but deep down you\'re secretly vibing with the festive chaos. You\'ll complain about the music, roll your eyes at decorations, but still show up to every party and somehow end up having a good time. Classic case of "I hate it but I love it."',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Reluctant Grinch" on VibeQuiz!',
    archetype: 'Archetype #088',
    stats: {
      naughtiness: 70,
      holidaySpirit: 40,
    },
  },
  Reindeer: {
    character: 'The Cozy Reindeer',
    description:
      'You\'re all about the cozy vibes—hot cocoa, fuzzy blankets, and watching snow fall from your window. You bring peace and calm to the holiday chaos. People come to you when they need to decompress from the festive madness. You\'re the holiday therapist everyone needs.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
    shareText: 'I got "The Cozy Reindeer" on VibeQuiz!',
    archetype: 'Archetype #033',
    stats: {
      naughtiness: 15,
      holidaySpirit: 75,
    },
  },
  Scrooge: {
    character: 'The Practical Scrooge',
    description:
      'You\'re not anti-Christmas, you\'re just... efficient. Why wrap gifts when gift bags exist? Why bake for 6 hours when the store has cookies? You appreciate the holidays, but you\'ve optimized them for maximum productivity and minimal stress. Respect.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
    shareText: 'I got "The Practical Scrooge" on VibeQuiz!',
    archetype: 'Archetype #099',
    stats: {
      naughtiness: 25,
      holidaySpirit: 30,
    },
  },
};
