import { CharactersService } from './characters.service';
import { TestBed } from '@angular/core/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

fdescribe('Service: Characters', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        provideHttpClient(withInterceptorsFromDi()),
      ],
    });
    service = TestBed.inject(CharactersService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
