import { Card } from './card';

export class Hand {

  private readonly cards: Array<Card>;
  constructor() {
    this.cards = new Array<Card>();
  }

  get Cards(): Array<Card> {
    return this.cards;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }
}
