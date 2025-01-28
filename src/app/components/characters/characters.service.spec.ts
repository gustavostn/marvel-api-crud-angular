import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';

describe('Service: Characters', () => {
  let service: CharactersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService],
    });
    service = TestBed.inject(CharactersService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
