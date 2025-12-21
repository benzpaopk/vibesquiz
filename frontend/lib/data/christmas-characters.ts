export interface CharacterResult {
  id: string;
  title: string;
  description: string;
  quote: string;
  stats: Array<{ label: string; value: number }>;
  warning: string;
  bestMatch: string;
  nemesis: string;
  image: string;
}
