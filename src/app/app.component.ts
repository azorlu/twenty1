import { Component, OnInit } from '@angular/core';

import { Card } from './card';
import { Suit } from './suit.enum';
import { Rank } from './rank.enum';
import { CardFormatter } from './card-formatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  sampleCard: Card;

  ngOnInit() {
    const cf = CardFormatter.getInstance();
    this.sampleCard = new Card(Suit.Spades, Rank.Ace);
    this.title  = cf.ShortHand(this.sampleCard);
  }

}
