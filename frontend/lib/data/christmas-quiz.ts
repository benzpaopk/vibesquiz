export interface Question {
  id: number;
  text: string;
  options: Array<{ id: string; text: string; type: string }>;
}

export const christmasQuestions: Question[] = [
  {
    id: 1,
    text: "It's December 1st. What's the first thing you do?",
    options: [
      { id: 'A', text: 'Blast Mariah Carey on loop.', type: 'Elf' },
      { id: 'B', text: 'Start your holiday shopping spreadsheet.', type: 'Santa' },
      { id: 'C', text: 'Complain about how early it is.', type: 'Grinch' },
      { id: 'D', text: 'Light a cinnamon candle and read.', type: 'Reindeer' },
      { id: 'E', text: 'Ignore it until December 24th.', type: 'Scrooge' },
    ],
  },
  {
    id: 2,
    text: "What's your go-to Christmas movie?",
    options: [
      { id: 'A', text: 'Elf', type: 'Elf' },
      { id: 'B', text: "It's a Wonderful Life", type: 'Santa' },
      { id: 'C', text: 'Die Hard', type: 'Grinch' },
      { id: 'D', text: 'The Polar Express', type: 'Reindeer' },
      { id: 'E', text: 'Any movie that has nothing to do with Christmas', type: 'Scrooge' },
    ],
  },
  {
    id: 3,
    text: 'What is your ideal Christmas Eve activity?',
    options: [
      { id: 'A', text: "Party hopping until dawn", type: 'Elf' },
      { id: 'B', text: 'Cooking a feast for the whole family', type: 'Santa' },
      { id: 'C', text: 'Sleeping; holidays are for rest', type: 'Grinch' },
      { id: 'D', text: "Watching 'Home Alone' for the 100th time", type: 'Reindeer' },
      { id: 'E', text: 'Working late to avoid festivities', type: 'Scrooge' },
    ],
  },
  {
    id: 4,
    text: 'Pick a holiday treat.',
    options: [
      { id: 'A', text: 'Candy Canes', type: 'Elf' },
      { id: 'B', text: 'Homemade Cookies', type: 'Santa' },
      { id: 'C', text: 'Fruitcake (ironically)', type: 'Grinch' },
      { id: 'D', text: 'Hot Cocoa with extra marshmallows', type: 'Reindeer' },
      { id: 'E', text: 'Regular coffee, hold the holiday cheer', type: 'Scrooge' },
    ],
  },
  {
    id: 5,
    text: 'How do you handle gift wrapping?',
    options: [
      { id: 'A', text: 'Glitter everywhere!', type: 'Elf' },
      { id: 'B', text: 'Perfectly folded corners and bows.', type: 'Santa' },
      { id: 'C', text: 'Bag it and tag it.', type: 'Grinch' },
      { id: 'D', text: 'Recycled paper and twine.', type: 'Reindeer' },
      { id: 'E', text: "Gift cards - no wrapping needed", type: 'Scrooge' },
    ],
  },
  {
    id: 6,
    text: 'Snow is falling. You...',
    options: [
      { id: 'A', text: 'Run outside and build a snowman!', type: 'Elf' },
      { id: 'B', text: 'Shovel the driveway for the neighbors.', type: 'Santa' },
      { id: 'C', text: 'Close the blinds.', type: 'Grinch' },
      { id: 'D', text: 'Watch it fall from the window.', type: 'Reindeer' },
      { id: 'E', text: 'Complain about the traffic delays', type: 'Scrooge' },
    ],
  },
  {
    id: 7,
    text: "What's your role at the family dinner?",
    options: [
      { id: 'A', text: 'The entertainer keeping everyone laughing.', type: 'Elf' },
      { id: 'B', text: 'The host making sure everyone is fed.', type: 'Santa' },
      { id: 'C', text: 'The one hiding in the corner.', type: 'Grinch' },
      { id: 'D', text: 'The peacemaker.', type: 'Reindeer' },
      { id: 'E', text: 'The one who shows up late and leaves early', type: 'Scrooge' },
    ],
  },
  {
    id: 8,
    text: 'Christmas music is...',
    options: [
      { id: 'A', text: 'Life itself.', type: 'Elf' },
      { id: 'B', text: 'A nice background tradition.', type: 'Santa' },
      { id: 'C', text: 'Torture.', type: 'Grinch' },
      { id: 'D', text: 'Nostalgic and sweet.', type: 'Reindeer' },
      { id: 'E', text: 'Unnecessary noise pollution', type: 'Scrooge' },
    ],
  },
  {
    id: 9,
    text: 'When do you take down the decorations?',
    options: [
      { id: 'A', text: 'Never.', type: 'Elf' },
      { id: 'B', text: 'January 6th (Epiphany).', type: 'Santa' },
      { id: 'C', text: 'December 26th.', type: 'Grinch' },
      { id: 'D', text: "New Year's Day.", type: 'Reindeer' },
      { id: 'E', text: 'They never went up in the first place', type: 'Scrooge' },
    ],
  },
  {
    id: 10,
    text: 'The best part of Christmas is...',
    options: [
      { id: 'A', text: 'The magic and excitement.', type: 'Elf' },
      { id: 'B', text: 'Giving to others.', type: 'Santa' },
      { id: 'C', text: "When it's over.", type: 'Grinch' },
      { id: 'D', text: 'Spending time with loved ones.', type: 'Reindeer' },
      { id: 'E', text: 'The day after when everything is on sale', type: 'Scrooge' },
    ],
  },
];
