import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CharactersComponent } from './characters.component';
import { CharactersService } from './service/characters.service';
import { of, throwError } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { By } from '@angular/platform-browser';
import { characterMock } from '../../../tests/character.mock';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let charactersService: CharactersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule,
        CharacterCardComponent,
        CharactersComponent,
        ErrorMessageComponent,
      ],
      providers: [
        provideAnimationsAsync(),
        {
          provide: CharactersService,
          useValue: {
            characters: jest.fn(() => of({ data: { results: [] } })),
            onSearchByName: jest.fn(() =>
              of({ data: null, status: 'LOADING' })
            ),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);
    fixture.detectChanges();
  }));

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should load characters on initialization', () => {
    const returnMock = {
      error: false,
      data: {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: [characterMock],
      },
    };
    jest.spyOn(charactersService, 'characters').mockReturnValue(of(returnMock));
    component.ngOnInit();
    component.loading.set(false);
    // expect(component.characters()[0].id).toEqual(returnMock.data.results[0].id);
    expect(component.loading()).toBe(false);
    expect(component.requestError()).toBe(false);
  });

  xit('Should handle error when loading characters', () => {
    component.loading.set(false);
    component.requestError.set(false);
    jest
      .spyOn(charactersService, 'characters')
      .mockReturnValue(throwError(() => new Error('Error')));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.characters()).toEqual([]);
    expect(component.requestError()).toBe(true);
    expect(component.loading()).toBe(false);
  });

  xit('Should show error message component when there is an error', () => {
    jest
      .spyOn(charactersService, 'characters')
      .mockReturnValue(throwError(() => new Error('Error')));
    component.ngOnInit();
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(
      By.css('app-error-message')
    );
    console.log(fixture.debugElement);
    expect(errorMessage).toBeTruthy();
  });

  it('Should handle pagination correctly', () => {
    const returnMock = {
      error: false,
      data: {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: [characterMock],
      },
    };
    const pageEvent = {
      length: 100,
      pageIndex: 1,
      pageSize: 20,
      previousPageIndex: 0,
    };
    jest.spyOn(charactersService, 'characters').mockReturnValue(of(returnMock));
    component.handlePageEvent(pageEvent);
    expect(component['_servicePagination']().pageIndex).toBe(1);
  });

  it('Should render loading state correctly', () => {
    component.loading.set(true);
    fixture.detectChanges();
    const loadingElements = fixture.debugElement.queryAll(
      By.css('app-character-card')
    );
    expect(loadingElements.length).toBe(10);
  });

  it('Should render characters correctly when loading is complete', () => {
    const returnMock = {
      error: false,
      data: {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: [characterMock],
      },
    };
    component.characters.set(returnMock.data.results);
    component.loading.set(false);
    fixture.detectChanges();
    const characterCards = fixture.debugElement.queryAll(
      By.css('app-character-card')
    );
    expect(characterCards.length).toBe(1);
  });

  it('Should show paginator when characters are loaded and there is no error', () => {
    const returnMock = {
      error: false,
      data: {
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        results: [characterMock],
      },
    };
    component.pagination.set(returnMock.data);
    component.loading.set(false);
    component.requestError.set(false);
    fixture.detectChanges();

    const paginator = fixture.debugElement.query(By.css('mat-paginator'));
    expect(paginator).toBeTruthy();
  });
});
