import { Injectable } from '@angular/core';
import { Card } from './card';
import { Suit } from './suit.enum';
import { Rank } from './rank.enum';
import { Dealer } from './dealer';
import { Deck } from './deck';
import { Hand } from './hand';
import { GameResult } from './game-result.enum';

@Injectable()
export class GameService {
  private readonly dealer: Dealer;
  private deck: Deck;
  private initialCardCount: number;
  private targetValue: number;
  private standValue: number;

  dealerHand: Hand;
  playerHand: Hand;
  dealerHandValue: number;
  playerHandValue: number;
  gameResult: GameResult;

  constructor() {
    this.dealer = Dealer.getInstance();
    this.initialCardCount = 2;
    this.targetValue = 21;
    // The dealer must hit until the cards total 17 or more points.
    this.standValue = 17;
    this.startNewGame();
  }

  startNewGame() {
    this.deck = this.dealDeck();
    this.dealerHand = this.dealHand();
    this.playerHand = this.dealHand();
    this.evaluateGame();
  }

  playerHit() {
    this.playerHand.addCard(this.dealCard());
    this.evaluateGame();
  }

  private dealerHit() {
    this.dealerHand.addCard(this.dealCard());
    this.evaluateGame();
  }

  playerStand() {
    this.evaluateGame();
    this.continueGame();
  }

  private continueGame() {
    while (this.gameResult === GameResult.Undecided && this.dealerHandValue < this.standValue) {
      this.dealerHit();
    }
  }

  evaluateGame() {
    this.dealerHandValue = this.getHandValue(this.dealerHand);
    this.playerHandValue = this.getHandValue(this.playerHand);

    if (this.playerHandValue > this.targetValue) {
      this.gameResult = GameResult.DealerWins;
    } else if (this.dealerHandValue > this.targetValue) {
      this.gameResult = GameResult.PlayerWins;
    } else if (this.dealerHandValue === this.playerHandValue) {
      this.gameResult = GameResult.Push;
    } else if (this.playerHandValue === this.targetValue) {
      this.gameResult = GameResult.PlayerWins;
    } else if (this.dealerHandValue === this.targetValue) {
      this.gameResult = GameResult.DealerWins;
    } else if (this.playerHandValue > this.dealerHandValue && this.dealerHandValue >= this.standValue) {
      this.gameResult = GameResult.PlayerWins;
    } else if (this.playerHandValue < this.dealerHandValue && this.dealerHandValue >= this.standValue) {
      this.gameResult = GameResult.DealerWins;
    } else {
      this.gameResult = GameResult.Undecided;
    }
  }

  dealDeck(): Deck {
    return this.dealer.getDeck();
  }

  dealCard(): Card {
    if (this.deck.hasCards()) {
      return this.deck.getTopCard();
    } else {
      return undefined;
    }
  }

  dealHand(): Hand {
    const hand: Hand = new Hand();
    for (let i = 0; i < this.initialCardCount; i++) {
      if (this.deck.hasCards()) {
        hand.addCard(this.deck.getTopCard());
      }
    }
    return hand;
  }

  getHandValue(hand: Hand): number {
    let value = 0;
    let hasAnyAce = false;
    // count all aces as 1 (soft value)
    // and if the total is less than (target value - 10) add 10 to total
    // as only one ace may need to be counted as 11 (hard value)
    for (const card of hand.Cards) {
      value += card.isFaceCard() ? 10 : card.Rank;
      if (card.isAce()) {
        hasAnyAce = true;
      }
    }
    if (hasAnyAce && value - 10 <= this.targetValue) {
      value += 10;
    }
    return value;
  }

}
