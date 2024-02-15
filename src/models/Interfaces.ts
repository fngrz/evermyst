export interface Player {
    id: string;
    power: number;
    boost: number;
}

export interface Play {
    id: string;
    dice_1: number;
    dice_2: number;
    total: number;
  }
  
export interface Result {
    outcome: 'win' | 'draw';
    winners: string[]; // Adjusted to hold an array of winners
    play: Record<string, Play>;
}