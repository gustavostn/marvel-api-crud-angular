import { Character } from './../../../models/interface/character.interface';
import { inject, Injectable } from '@angular/core';
import { RestService } from '../../shared/rest.service';
import { map, Observable, tap } from 'rxjs';
import { CharacterApiResponse } from './interface/characters-api.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _restService = inject(RestService);
  public readonly path = 'v1/public/characters';

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
}
