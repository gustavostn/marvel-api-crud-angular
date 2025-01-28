import { Component, inject, OnInit, signal } from '@angular/core';
import { Character } from '../../models/interface/character.interface';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharactersService } from './characters.service';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [
    `
      .characters-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 180px);
        gap: 8px;
        justify-content: space-between;
      }
    `,
  ],
  imports: [NgClass, CharacterCardComponent, ErrorMessageComponent],
})
export class CharactersComponent implements OnInit {
  public characters = signal<Character[]>([]);
  public requestError = signal<boolean>(false);
  public loading = signal<boolean>(true);

  public readonly charactersPlaceholders = new Array(20);
  private _service = inject(CharactersService);

  ngOnInit() {
    this._getCharacters();
  }

  private _getCharacters() {
    this._service.characters().subscribe({
      next: (response) => {
        this.characters.set(response.data.results);
        this.loading.set(false);
        this.requestError.set(false);
      },
      error: () => {
        this.characters.set([]);
        this.loading.set(false);
        this.requestError.set(true);
      },
    });
  }

  public reloadApplication() {
    window.location.reload();
  }
}
