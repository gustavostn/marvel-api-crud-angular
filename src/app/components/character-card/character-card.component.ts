import { Component, input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  public character = input<any>();
}
