import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../models/interface/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styles: [
    `
      .cursor-pointer {
        cursor: pointer;
      }
    `,
  ],
  imports: [NgClass],
})
export class CharacterCardComponent {
  public character = input<Character>();
  public loading = input<boolean>();

  private _router = inject(Router);

  public openCharacterPage() {
    this._router.navigateByUrl(`character/${this.character()!.id}`);
  }
}
