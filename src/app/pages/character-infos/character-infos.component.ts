import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from '../../components/header/header.component';
import {
  Character,
  CharacterDetails,
} from '../../models/interface/character.interface';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { NgTemplateOutlet } from '@angular/common';
import { filter } from 'rxjs';
import { CharactersService } from '../../services/v1/characters/characters.service';
import { CommentSectionComponent } from '../../components/comment-section/comment-section.component';

@Component({
  selector: 'app-character-infos',
  templateUrl: './character-infos.component.html',

  imports: [
    MatExpansionModule,
    HeaderComponent,
    ErrorMessageComponent,
    NgTemplateOutlet,
    CommentSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterHistoryComponent implements OnInit {
  private _activeRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _charactersService = inject(CharactersService);

  public character = signal<Character | undefined>(undefined);
  public loading = signal<boolean>(true);

  public characterDetails: CharacterDetails[] = [
    {
      label: 'Comics',
      key: 'comics',
      description: 'The comics the character appears in',
    },
    {
      label: 'Series',
      key: 'series',
      description: 'The series the character appears in',
    },
    {
      label: 'Stories',
      key: 'stories',
      description: 'The stories the character appears in',
    },
  ];

  ngOnInit() {
    this._verifyRouteParams();
  }

  private _verifyRouteParams(): void {
    this._activeRoute.params
      .pipe(filter((params) => params['id']))
      .subscribe((params) => {
        if (!params || !params['id']) return;
        this._getCharacterData(params['id']);
      });
  }

  private _getCharacterData(id: number): void {
    this._charactersService.getCharacterByID(id).subscribe({
      next: (result) => {
        this.character.set(result.data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.character.set(undefined);
      },
    });
  }

  public backToInitialPage(): void {
    // TO DO: Clear user navigation history to prevent access the page with problem again
    this._router.navigateByUrl('/');
  }

  comments: { name: string; text: string }[] = [];
  name: string = '';
  text: string = '';

  addComment() {
    if (this.name.trim() && this.text.trim()) {
      this.comments.push({ name: this.name, text: this.text });
      this.text = '';
    }
  }
}
