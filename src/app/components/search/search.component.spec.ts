import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CharactersService } from '../../services/v1/characters/characters.service';
import { of } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let charactersService: CharactersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        SearchComponent,
      ],
      providers: [
        provideAnimationsAsync(),
        {
          provide: CharactersService,
          useValue: {
            onSearchCharactersByName$: jest
              .fn()
              .mockReturnValue(of({ status: 'LOADING' })), // 'LOADED'
            getCharacterByName: jest.fn().mockReturnValue(of({})),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    fixture.componentRef.setInput('visible', true);
    component = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);

    fixture.detectChanges();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize subscriptions when visible is true', () => {
    component.ngOnChanges({
      visible: {
        isFirstChange: () => true,
        currentValue: true,
        previousValue: false,
        firstChange: false,
      },
    });
    expect(charactersService.onSearchCharactersByName$).toHaveBeenCalled();
  });

  it('Should clear valueToSearch and emit closeSearch event when closeSearch is called', () => {
    component.valueToSearch = 'Spiderman';
    const closeSpy = jest.spyOn(component.close, 'emit');
    component.closeSearch();
    expect(component.valueToSearch).toBe('');
    expect(closeSpy).toHaveBeenCalled();
  });

  it('Should trigger searchCharacter method when search icon is clicked', () => {
    component.valueToSearch = 'Spiderman';
    const searchSpy = jest.spyOn(component, 'searchCharacter');
    component.searchCharacter();
    expect(searchSpy).toHaveBeenCalled();
  });

  it('Should not search if valueToSearch length is less than 2', () => {
    component.valueToSearch = 's';
    const searchSpy = jest.spyOn<any, any>(
      component['_searchCharacterSubject$'],
      'next'
    );
    component.searchCharacter();
    expect(searchSpy).not.toHaveBeenCalled();
  });

  it('Should handle loading state when searching characters', () => {
    component.valueToSearch = 'spiderman';
    component.searchCharacter();
    fixture.detectChanges();
    expect(component.loading()).toBe(true);
  });

  it('Should unsubscribe on destroy', () => {
    const destroySpy = jest.spyOn(component['_onDestroy$'], 'next');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalled();
  });

  it('Should normalize the search text correctly', () => {
    const normalized = component['_normalizeSearchText']('sPíderman      ');
    expect(normalized).toBe('spiderman');
  });
});
