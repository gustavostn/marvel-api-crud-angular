import { Component, output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div
      class="hstack align-items-center justify-content-center gap-3 flex-wrap"
    >
      <div class="vstack gap-3 h-100">
        <h2 class="mt-3 fs-1 text-danger">Oops! Something went wrong!</h2>
        <button
          class="btn btn-outline-primary"
          color="primary"
          (click)="retry.emit()"
        >
          Retry
        </button>
      </div>
      <img
        src="https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/captain-marvel-char.c7a46c65.jpg"
        height="440px"
        alt="Error image"
      />
    </div>
  `,
})
export class ErrorMessageComponent {
  public retry = output();
}
