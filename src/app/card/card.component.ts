import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { Suit } from '../suit.enum';
import { Rank } from '../rank.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card;
  constructor() {
   }

  ngOnInit() {
     this.card = new Card(Suit.Spades, Rank.Jack);
  }

  setCard(cardParam: Card) {
    this.card = cardParam;
  }

}
