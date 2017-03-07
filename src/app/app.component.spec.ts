import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        AppComponent, BoardComponent, HandComponent, CardComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Black Jack'`, async(() => {
    expect(component.title).toEqual('Black Jack');
  }));

  it('should render title in a h2 tag', async(() => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  }));

});
