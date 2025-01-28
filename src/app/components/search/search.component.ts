import {
  Component,
  inject,
  input,
  OnChanges,
  OnDestroy,
  output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass } from '@angular/common';
import { CharactersService } from '../../services/v1/characters/characters.service';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';

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
export class SearchComponent implements OnChanges, OnDestroy {
  public close = output<void>();
  public visible = input<boolean>();

  public loading = signal<boolean>(false);
  public valueToSearch: string = '';

  private _charactersService = inject(CharactersService);
  private _searchCharacterSubject$ = new Subject<void>();
  private _onDestroy$ = new Subject<void>();

  ngOnChanges(changes: SimpleChanges) {
    const { visible } = changes;
    if (visible?.currentValue) this._initializeSubscriptions();
    else if (visible?.currentValue === false) {
      this._onDestroy$.next();
      this._onDestroy$.complete();
    }
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private _initializeSubscriptions(): void {
    // Creating a debounce time to prevent many requests
    this._charactersService
      .onSearchCharactersByName$()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(({ status }) => this.loading.set(status === 'LOADING'));

    this._searchCharacterSubject$
      .pipe(
        filter(() => !this.loading() && this.valueToSearch.length > 0),
        debounceTime(200),
        takeUntil(this._onDestroy$)
      )
      .subscribe(() => {
        this.loading.set(true);
        this._charactersService
          .getCharacterByName(this._normalizeSearchText(this.valueToSearch))
          .subscribe(console.log);
      });
  }

  public searchCharacter(): void {
    if (!this.valueToSearch || this.valueToSearch.length < 2) return;
    this._searchCharacterSubject$.next();
  }

  public closeSearch(): void {
    this.valueToSearch = '';
    this.close.emit();
  }

  private _normalizeSearchText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
