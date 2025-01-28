import { Character } from './../../../models/interface/character.interface';
import { inject, Injectable } from '@angular/core';
import { RestService } from '../../shared/rest.service';
import { map, Observable, Subject } from 'rxjs';
import { CharacterApiResponse } from './interface/characters-api.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _restService = inject(RestService);
  public readonly path = 'v1/public/characters';

  private _searchCharactersByNameStatus$ = new Subject<{
    status: 'LOADING' | 'LOADED' | 'ERROR';
    data: null | { error: boolean; data: CharacterApiResponse };
  }>();

  public onSearchCharactersByName$() {
    return this._searchCharactersByNameStatus$.asObservable();
  }

  public getCharacters(
    offset: string,
    limit: string
  ): Observable<{
    error: boolean;
    data: CharacterApiResponse;
  }> {
    return this._restService
      .get<CharacterApiResponse>(this.path, { offset, limit })
      .pipe(
        map((response) => {
          if (response.error)
            return { error: true, data: {} as CharacterApiResponse };
          response.data.results = this._handleCharacters(response.data.results);
          return { error: false, data: response.data };
        })
      );
  }

  private _handleCharacters(characters: Character[]): Character[] {
    return characters.map((item) => {
      item.thumbnail.url = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      item.firstAppearance = new Date(item.modified).getFullYear();
      return item;
    });
  }

  public getCharacterByName(name: string): Observable<{
    error: boolean;
    data: CharacterApiResponse;
  }> {
    this._searchCharactersByNameStatus$.next({ status: 'LOADING', data: null });
    return this._restService
      .get<CharacterApiResponse>(this.path, { nameStartsWith: name })
      .pipe(
        map((response) => {
          if (response.error) {
            const data = { error: true, data: {} as CharacterApiResponse };
            this._searchCharactersByNameStatus$.next({ status: 'ERROR', data });
            return data;
          }
          response.data.results = this._handleCharacters(response.data.results);
          const data = {
            error: false,
            data: response.data,
          };
          this._searchCharactersByNameStatus$.next({ status: 'LOADED', data });
          return data;
        })
      );
  }

  public getCharacterByID(id: number): Observable<{
    error: boolean;
    data: Character;
  }> {
    return this._restService
      .get<CharacterApiResponse>(`${this.path}/${id}`)
      .pipe(
        map((response) => {
          if (response.error) return { error: true, data: {} as Character };
          return {
            error: false,
            data: this._handleCharacters(response.data.results)[0],
          };
        })
      );
  }
}
