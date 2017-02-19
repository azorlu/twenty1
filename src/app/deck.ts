import { Card } from './card';

export class Deck {
  constructor(private readonly cards: Array<Card>) {
  }

  get Cards(): Array<Card> {
    return this.cards;
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }

  getTopCard(): Card {
    if (this.hasCards()) {
      return this.cards.shift();
    } else {
      return undefined;
    }
  }
}
