import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommentSectionComponent } from './comment-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../../services/v1/comments/comments.service';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

describe('CommentSectionComponent', () => {
  let component: CommentSectionComponent;
  let fixture: ComponentFixture<CommentSectionComponent>;
  let mockCommentsService: jest.Mocked<CommentsService>;

  beforeEach(waitForAsync(() => {
    mockCommentsService = {
      createComment: jest.fn(() => of(true)),
      editComment: jest.fn(() => of(true)),
      deleteComment: jest.fn(() => of(true)),
    } as any;

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatIconModule],
      providers: [{ provide: CommentsService, useValue: mockCommentsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should add a new comment when the form is valid', () => {
    component.form.markAsDirty();
    component.form.markAsTouched();
    component.form.setValue({
      id: 0,
      name: 'Gustavo Carvalho',
      text: 'This is a comment.',
    });
    fixture.detectChanges();

    mockCommentsService.createComment.mockReturnValue(of(true));
    component.addComment();

    expect(mockCommentsService.createComment).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: 'Gustavo Carvalho',
      text: 'This is a comment.',
    });
  });

  it('Should not add a comment when the form is invalid', () => {
    component.form.setValue({
      id: '',
      name: '',
      text: 'This is a comment.',
    });
    component.addComment();
    expect(mockCommentsService.createComment).not.toHaveBeenCalled();
  });

  it('Should call editComment when editing a comment', () => {
    const comment = {
      id: 1,
      name: 'Gustavo Carvalho',
      text: 'This is a comment.',
    };
    component.comments = [comment];
    component.form.setValue(comment);
    component.editComment(comment.id);
    expect(component.form.value).toEqual(comment);
  });

  it('Should delete a comment when the delete button is clicked', () => {
    const commentId = 1;
    const comment = {
      id: commentId,
      name: 'Gustavo Carvalho',
      text: 'This is a comment.',
    };
    component.comments = [comment];
    mockCommentsService.deleteComment.mockReturnValue(of(true));
    component.deleteComment(commentId);
    expect(mockCommentsService.deleteComment).toHaveBeenCalledWith(commentId);
    expect(component.comments.length).toBe(0);
  });
});
