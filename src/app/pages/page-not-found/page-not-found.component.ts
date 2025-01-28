import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div
      class="container text-center d-flex flex-column align-items-center justify-content-center vh-100"
    >
      <img
        src="https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/deadpool-char.2aea1ef9.gif"
        alt="Page Not Found"
        class="img-fluid"
        style="max-width: 400px"
      />
      <h1 class="mt-4 text-danger fw-bold">404 - Page Not Found</h1>
      <p class="text-light">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <a href="/" class="btn btn-danger mt-3">Go to Home</a>
    </div>
  `,
})
export class PageNotFoundComponent {}
