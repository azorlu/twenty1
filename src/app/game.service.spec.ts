import { TestBed, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import {} from 'jasmine';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
