import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card';
import {Suit} from '../suit.enum';
import {Rank} from '../rank.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  public img: string;

  constructor() {
   }

  ngOnInit() {
    this.img = this.getImgPath();
  }

  getImgPath(): string {
    let fn = '';
    const ext = '.svg';
    const dir = './assets/svg-cards/';

    if (this.card.isJoker()) {
      fn = 'black_joker';
    } else if (this.card.isAce() || this.card.isFaceCard()) {
      fn = `${Rank[this.card.Rank].toLowerCase()}_of_${Suit[this.card.Suit].toLowerCase()}`;
    } else {
      fn = `${this.card.Rank}_of_${Suit[this.card.Suit].toLowerCase()}`;
    }

    return dir + fn + ext;
  }

}
