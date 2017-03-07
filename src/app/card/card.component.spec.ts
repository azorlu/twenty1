import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { CardComponent } from './card.component';
import { Card } from '../card';
import { Suit } from '../suit.enum';
import { Rank } from '../rank.enum';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = new Card(Suit.Spades, Rank.Ace);
    fixture.detectChanges(); // detect changes should be called before querying debug element
    de = fixture.debugElement.query(By.css('img'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render in an img tag', async(() => {
    expect(el.getAttribute('src')).toBe(component.img);
  }));

});
