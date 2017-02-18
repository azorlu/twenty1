import {Suit} from './suit.enum';
import {Rank} from './rank.enum';

export class Card {
  constructor(readonly suit: Suit,
    readonly rank: Rank) {
  }

  get Suit(): Suit {
    return this.suit;
  }

  get Rank(): Rank {
    return this.rank;
  }

  public IsJoker(): boolean {
    return this.suit === Suit.None && this.rank === Rank.None;
  }

  public IsFaceCard(): boolean {
    return this.rank >= 11;
  }

  public toString(): string {
    return this.IsJoker() ? 'Joker' : `${Rank[this.rank]} of ${Suit[this.suit]}`;
  }
}
