import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CharactersComponent } from '../../components/characters/characters.component';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-characters></app-characters>
  `,
  imports: [HeaderComponent, CharactersComponent],
  providers: [],
})
export class HomeComponent {}
