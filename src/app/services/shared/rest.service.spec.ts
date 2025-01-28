import { TestBed } from '@angular/core/testing';
import { RestService } from './rest.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('Service: Rest', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService, provideHttpClient(withInterceptorsFromDi())],
    });
    service = TestBed.inject(RestService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
