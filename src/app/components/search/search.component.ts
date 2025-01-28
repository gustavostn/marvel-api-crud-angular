import {
  Component,
  computed,
  input,
  Input,
  OnChanges,
  output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .search-character {
        position: relative;
        overflow: hidden;
        height: 0px;
        opacity: 0;
        transform: translateY(-20px);
        transition: height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;

        &.show {
          height: 110px;
          opacity: 1;
          transform: translateY(0);
        }

        &.hide {
          height: 0;
          opacity: 0;
          transform: translateY(-20px);
        }
      }
    `,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
  ],
})
export class SearchComponent {
  public close = output<void>();
  public visible = input<boolean>();
  public valueToSearch: string = '';

  public searchCharacter(): void {
    if (!this.valueToSearch) return;
  }

  public closeSearch(): void {
    this.valueToSearch = '';
    this.close.emit();
  }
}
