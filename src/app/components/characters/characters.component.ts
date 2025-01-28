import { Component, inject, OnInit, signal } from '@angular/core';
import { Character } from '../../models/interface/character.interface';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharactersService } from './characters.service';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NgClass } from '@angular/common';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { CharacterPagination } from '../../services/v1/characters/interface/characters-api.interface';

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
  imports: [
    NgClass,
    CharacterCardComponent,
    ErrorMessageComponent,
    MatPaginatorModule,
  ],
})
export class CharactersComponent implements OnInit {
  public characters = signal<Character[]>([]);
  public requestError = signal<boolean>(false);
  public loading = signal<boolean>(true);
  public pagination = signal<CharacterPagination | undefined>(undefined);
  private _servicePagination = signal<PageEvent>({
    length: 0,
    pageIndex: 0,
    pageSize: 20,
    previousPageIndex: 0,
  });

  public readonly charactersPlaceholders = new Array(10);
  private _service = inject(CharactersService);

  ngOnInit() {
    this._getCharacters();
    this._handleCharacterSearchByName();
  }

  private _getCharacters() {
    this._service
      .characters(
        this._servicePagination().pageIndex,
        this._servicePagination().pageSize
      )
      .subscribe({
        next: (response) => {
          this.characters.set(response.data.results);
          this.loading.set(false);
          this.requestError.set(false);
          this.pagination.set(response.data);
        },
        error: () => {
          this.characters.set([]);
          this.loading.set(false);
          this.requestError.set(true);
        },
      });
  }

  // TODO: Handle items per page and others pagination logics to
  // this search way too
  private _handleCharacterSearchByName() {
    this._service.onSearchByName().subscribe({
      next: ({ data, status }) => {
        if (status === 'LOADING') {
          this._onRefreshContent();
          return;
        }
        this.characters.set(data!.data.results);
        this.loading.set(false);
        this.requestError.set(false);
        this.pagination.set(data!.data);
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

  private _onRefreshContent() {
    this.characters.set([]);
    this.loading.set(true);
    this.requestError.set(false);
  }

  public handlePageEvent(event: PageEvent) {
    this._servicePagination.set(event);
    this._getCharacters();
    this._onRefreshContent();
  }
}
