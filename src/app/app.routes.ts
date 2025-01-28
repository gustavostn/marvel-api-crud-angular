import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterHistoryComponent } from './pages/character-history/character-history.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (component) => component.HomeComponent
      ),
  },
  {
    path: 'character/:id',
    component: CharacterHistoryComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
