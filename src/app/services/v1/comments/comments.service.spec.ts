import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { delay, of } from 'rxjs';
import { Comment } from './interface/comments-api.interface';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Comments', () => {
  let service: CommentsService;
  let restServiceMock: any;
  beforeEach(() => {
    restServiceMock = {
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };
    TestBed.configureTestingModule({
      providers: [CommentsService, provideHttpClient()],
    });
    service = TestBed.inject(CommentsService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
