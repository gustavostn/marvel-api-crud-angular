import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentsService } from '../../services/v1/comments/comments.service';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styles: [
    `
      .comment-box {
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
      }

      .input-field {
        width: 100%;
        margin-bottom: 15px;
      }

      .divider {
        margin: 15px 0;
      }

      .comment-card {
        margin-top: 10px;
      }
    `,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass,
    TitleCasePipe,
    MatIconModule,
    MatIconButton,
  ],
})
export class CommentSectionComponent {
  public form!: FormGroup;

  // TO DO: Block to editing or delete others comments besides
  // the user's own
  public comments: {
    name: string;
    text: string;
    id: number;
  }[] = [
    {
      id: 1,
      name: 'Gustavo Carvalho',
      text: 'My favorite!',
    },
    {
      id: 2,
      name: 'Ananda Ferreira',
      text: 'Awesome!',
    },
  ];
  public submit = signal(false);
  public loading = signal(false);

  private _commentsService = inject(CommentsService);

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      id: [''],
      name: ['', Validators.required],
      text: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  public addComment() {
    this.submit.set(true);
    if (this.form.invalid) return;
    this.loading.set(true);
    if (this.form.get('id')) this._saveCommentEdit();
    else this.createComment();
  }

  public createComment(): void {
    if (this.form.get('id')) {
    }
    this.form.get('id')?.setValue(Date.now());
    this._commentsService.createComment(this.form.value).subscribe(() => {
      this.comments.push(this.form.value);
      this.form.reset();
      this.submit.set(false);
      this.loading.set(false);
    });
  }

  public editComment(commentId: number): void {
    const comment = this.comments.find((comment) => comment.id === commentId)!;
    this.form.setValue(comment);
  }

  private _saveCommentEdit() {
    this.loading.set(true);
    this._commentsService.editComment(this.form.value).subscribe(() => {
      const idx = this.comments.findIndex(
        (item) => item.id === this.form.value.id
      );
      this.comments[idx] = this.form.value;
      this.submit.set(false);
      this.loading.set(false);
      this.form.reset();
    });
  }

  // TO DO: Add a modal to confirm the deletion of a comment
  public deleteComment(commentId: number): void {
    this.loading.set(true);
    this._commentsService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
      this.loading.set(false);
    });
  }

  public close(): void {
    this.form.reset();
    this.submit.set(false);
  }
}
