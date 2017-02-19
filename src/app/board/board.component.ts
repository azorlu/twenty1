import { Component, OnInit } from '@angular/core';

import { Hand } from '../hand';
import { GameService } from '../game.service';
import { GameResult } from '../game-result.enum';

@Component({
  selector: 'app-board',
  providers: [GameService],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  dealerHand: Hand;
  playerHand: Hand;
  dealerHandValue: number;
  playerHandValue: number;
  gameResult: GameResult;
  gameResultText: string;

  constructor(public gameService: GameService) {
    this.onStartNewGame();
  }

  ngOnInit() {
  }

  startNewGame() {
    this.gameService.startNewGame();
    this.dealerHand = this.gameService.dealerHand;
    this.playerHand = this.gameService.playerHand;
  }

  displayHandValues() {
    this.dealerHandValue = this.gameService.dealerHandValue;
    this.playerHandValue = this.gameService.playerHandValue;
  }

  onStartNewGame() {
    this.startNewGame();
    this.checkGameResult();
  }

  onHit() {
    this.gameService.playerHit();
    this.checkGameResult();
  }

  onStand() {
    this.gameService.playerStand();
    this.checkGameResult();
  }

  checkGameResult() {
    this.displayHandValues();
    this.gameResult = this.gameService.gameResult;
    this.gameResultText = GameResult[this.gameResult];
  }

}
