import { Card } from './card';

export class Deck {
  constructor(readonly cards: Array<Card>) {
  }

  get Cards(): Array<Card> {
    return this.cards;
  }
}
