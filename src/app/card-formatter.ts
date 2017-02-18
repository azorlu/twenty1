import { Suit } from './suit.enum';
import { Rank } from './rank.enum';
import { Card } from './card';

export class CardFormatter {

  private static instance: CardFormatter = new CardFormatter();

  private static suitSymbols: { [id: number]: string; };
  private static rankSymbols: { [id: number]: string; };

  public static getInstance(): CardFormatter {
    return CardFormatter.instance;
  }

  private static init() {
    CardFormatter.suitSymbols = {};
    CardFormatter.rankSymbols = {};

    CardFormatter.suitSymbols[Suit.None] = 'Jr';
    CardFormatter.suitSymbols[Suit.Hearts] = '♥';
    CardFormatter.suitSymbols[Suit.Diamonds] = '♦';
    CardFormatter.suitSymbols[Suit.Spades] = '♠';
    CardFormatter.suitSymbols[Suit.Clubs] = '♣';

    CardFormatter.rankSymbols[Rank.None] = '';
    CardFormatter.rankSymbols[Rank.Ace] = 'A';
    CardFormatter.rankSymbols[Rank.Two] = '2';
    CardFormatter.rankSymbols[Rank.Three] = '3';
    CardFormatter.rankSymbols[Rank.Four] = '4';
    CardFormatter.rankSymbols[Rank.Five] = '5';
    CardFormatter.rankSymbols[Rank.Six] = '6';
    CardFormatter.rankSymbols[Rank.Seven] = '7';
    CardFormatter.rankSymbols[Rank.Eight] = '8';
    CardFormatter.rankSymbols[Rank.Nine] = '9';
    CardFormatter.rankSymbols[Rank.Ten] = 'T';
    CardFormatter.rankSymbols[Rank.Jack] = 'J';
    CardFormatter.rankSymbols[Rank.Queen] = 'Q';
    CardFormatter.rankSymbols[Rank.King] = 'K';
  }

  constructor() {

    if (CardFormatter.instance) {
      throw new Error('Error: Instantiation failed: Use CardFormatter.getInstance() instead of new.');
    }

    CardFormatter.instance = this;

    CardFormatter.init();
  }

  // Bridge type shorthand
  public ShortHand(card: Card): string {
    return card.IsJoker() ?
      CardFormatter.suitSymbols[card.Suit] :
      CardFormatter.suitSymbols[card.Suit] +
      CardFormatter.rankSymbols[card.Rank];
  }

}
