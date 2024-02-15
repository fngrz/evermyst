import random from 'random';

import { Player, Play, Result } from '../models/Interfaces'

export function simulateMatchup(player1: Player, player2: Player): Result {
    // Generate dice rolls
    const p1d1 = random.int(1, 6);
    const p1d2 = random.int(1, 6);
    const p2d1 = random.int(1, 6);
    const p2d2 = random.int(1, 6);
  
    // Check for double-sixes condition
    const p1d6 = p1d1 === 6 && p1d2 === 6;
    const p2d6 = p2d1 === 6 && p2d2 === 6;
  
    // Calculate total score
    const p1total = (p1d1 + p1d2) * player1.power * player1.boost;
    const p2total = (p2d1 + p2d2) * player2.power * player2.boost;
  
    let outcome: 'win' | 'draw';
    let winners: string[];
  
    // Determine outcome based on double-sixes rule
    if (p1d6 && p2d6) {
      outcome = 'draw';
      winners = [player1.id, player2.id];
    } else if (p1d6) {
      outcome = 'win';
      winners = [player1.id];
    } else if (p2d6) {
      outcome = 'win';
      winners = [player2.id];
    } else if (p1total > p2total) {
      outcome = 'win';
      winners = [player1.id];
    } else if (p2total > p1total) {
      outcome = 'win';
      winners = [player2.id];
    } else {
      outcome = 'draw';
      winners = [player1.id, player2.id];
    }
  
    // Construct the result object
    const result: Result = {
      outcome: outcome,
      winners: winners,
      play: {
        [player1.id]: {
          id: player1.id,
          dice_1: p1d1,
          dice_2: p1d2,
          total: p1total,
        },
        [player2.id]: {
          id: player2.id,
          dice_1: p2d1,
          dice_2: p2d2,
          total: p2total,
        },
      },
    };
  
    return result;
  }