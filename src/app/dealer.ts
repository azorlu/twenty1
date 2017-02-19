import { Suit } from './suit.enum';
import { Rank } from './rank.enum';
import { Card } from './card';
import { Deck } from './deck';
import { EnumExtension } from './enum-extension';

export class Dealer {
  private static instance: Dealer = new Dealer();

  public static getInstance(): Dealer {
    return Dealer.instance;
  }

  constructor() {

    if (Dealer.instance) {
      throw new Error('Error: Instantiation failed: Use Dealer.getInstance() instead of new.');
    }

    Dealer.instance = this;
  }

  public getDeck(jokerCount?: Number): Deck {

    const cards = new Array<Card>();
    const suitValues = EnumExtension.getValues(Suit);
    const rankValues = EnumExtension.getValues(Rank);
    for (const sv of suitValues) {
      for (const rv of rankValues) {
        if (sv !== 0 && rv !== 0) {
          const card = new Card(sv as Suit, rv as Rank);
          cards.push(card);
        }
      }
    }

    if (jokerCount && jokerCount > 0) {
      for (let i = 0; i < jokerCount; i++) {
        cards.push(new Card(Suit.None, Rank.None));
      }
    }

    return new Deck(this.shuffle(cards));
  }

  private getRandomInt(minVal: number, maxVal: number, inclusive?: boolean): number {
    const min: number = Math.ceil(minVal);
    const max: number = Math.floor(maxVal);
    const k = inclusive ? 1 : 0;
    return Math.floor(Math.random() * (max - min + k)) + min;
  }

  public shuffle(cards: Array<Card>): Array<Card> {
    for (let i = 0; i < cards.length; i++) {
      const r = this.getRandomInt(i, cards.length - 1, true);
      [cards[i], cards[r]] = [cards[r], cards[i]];
    }
    return cards;
  }
}
