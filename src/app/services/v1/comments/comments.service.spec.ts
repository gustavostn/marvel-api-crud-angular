import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';

describe('Service: Comments', () => {
  let service: CommentsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService],
    });
    service = TestBed.inject(CommentsService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
