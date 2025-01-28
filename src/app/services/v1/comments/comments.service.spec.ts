import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { RestService } from '../../shared/rest.service';
import { of } from 'rxjs';
import { Comment } from './interface/comments-api.interface';

describe('CommentsService', () => {
  let service: CommentsService;
  let restServiceMock: jest.Mocked<RestService>;

  beforeEach(() => {
    restServiceMock = {
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    } as any;

    TestBed.configureTestingModule({
      providers: [
        CommentsService,
        { provide: RestService, useValue: restServiceMock },
      ],
    });
    service = TestBed.inject(CommentsService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createComment', () => {
    it('SHould successfully create a comment', (done) => {
      const mockComment: Comment = {
        id: 1,
        text: 'Test comment',
        name: 'Gustavo Carvalho',
      };
      restServiceMock.post.mockReturnValue(of({ data: {}, error: false }));

      service.createComment(mockComment).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('Should handle error on create comment', (done) => {
      restServiceMock.post.mockReturnValue(of({ data: {}, error: true }));
      service
        .createComment({
          id: 0,
          name: 'Gustavo Carvalho',
          text: 'Test comment',
        })
        .subscribe((result) => {
          expect(result).toBe(true); // it will still return true in the map
          done();
        });
    });
  });

  describe('editComments', () => {
    it('Should successfully edit a comment', (done) => {
      const mockComment: Comment = {
        name: 'Gustavo Carvalho',
        id: 3,
        text: 'Updated comment',
      };

      restServiceMock.put.mockReturnValue(of({ data: {}, error: false }));

      service.editComment(mockComment).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('should handle error on edit comment', (done) => {
      const mockComment: Comment = {
        id: 1,
        text: 'Updated comment',
        name: 'Gustavo Carvalho',
      };

      restServiceMock.put.mockReturnValue(of({ data: {}, error: true }));

      service.editComment(mockComment).subscribe((result) => {
        expect(result).toBe(true); // it will still return true in the map
        done();
      });
    });
  });

  describe('deleteComment', () => {
    it('should successfully delete a comment', (done) => {
      const mockId = 1;

      restServiceMock.delete.mockReturnValue(of({ error: false, data: {} }));

      service.deleteComment(mockId).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('should handle error on delete comment', (done) => {
      const mockId = 1;

      restServiceMock.delete.mockReturnValue(of({ error: true, data: {} }));

      service.deleteComment(mockId).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });
  });
});
