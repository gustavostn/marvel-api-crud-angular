import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchComponent } from '../search/search.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SearchComponent,
    NgClass,
  ],
})
export class HeaderComponent {
  public displayHomeIcon = input(false);
  public displaySearchCharacter: boolean = false;

  // TODO: Enable button after loading all home content
  public handleSearchVisibility() {
    this.displaySearchCharacter = !this.displaySearchCharacter;
  }
}
