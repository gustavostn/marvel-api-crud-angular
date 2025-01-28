import { inject, Injectable } from '@angular/core';
import { CharactersService as CharactersApiService } from '../../services/v1/characters/characters.service';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _charactersService = inject(CharactersApiService);

  public characters() {
    return this._charactersService.getCharacters();
  }
}
