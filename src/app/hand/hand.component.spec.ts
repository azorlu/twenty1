import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { HandComponent } from './hand.component';
import { CardComponent } from '../card/card.component';
import { Card } from '../card';
import { Suit } from '../suit.enum';
import { Rank } from '../rank.enum';
import { Hand } from '../hand';

describe('HandComponent', () => {
  let component: HandComponent;
  let fixture: ComponentFixture<HandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [HandComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandComponent);
    component = fixture.componentInstance;
    const hand: Hand = new Hand();
    hand.addCard(new Card(Suit.Spades, Rank.Ace));
    hand.addCard(new Card(Suit.Clubs, Rank.Ace));
    component.hand = hand;
    fixture.detectChanges(); // detect changes should be called before querying debug element
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
