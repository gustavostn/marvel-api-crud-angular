import { CharactersService } from './characters.service';
import { CharactersService as CharactersApiService } from '../../../services/v1/characters/characters.service';
import { of } from 'rxjs';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { characterMock } from '../../../../tests/character.mock';

describe('CharactersService', () => {
  let service: CharactersService;
  let charactersApiService: jest.Mocked<CharactersApiService>;

  beforeEach(waitForAsync(() => {
    const apiServiceMock = {
      getCharacters: jest.fn(),
      onSearchCharactersByName$: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        { provide: CharactersApiService, useValue: apiServiceMock },
      ],
    });

    service = TestBed.inject(CharactersService);
    charactersApiService = TestBed.inject(
      CharactersApiService
    ) as jest.Mocked<CharactersApiService>;
  }));

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should call getCharacters with correct parameters', () => {
    const offset = 0;
    const limit = 10;
    charactersApiService.getCharacters.mockReturnValue(
      of({ error: true, data: {} as any })
    );

    service.characters(offset, limit).subscribe();

    expect(charactersApiService.getCharacters).toHaveBeenCalledWith(
      offset.toString(),
      limit.toString()
    );
  });

  it('Should return characters from getCharacters()', () => {
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
    const result = returnMock;
    charactersApiService.getCharacters.mockReturnValue(of(returnMock));
    service.characters(0, 10).subscribe((data) => {
      result.data.results[0].thumbnail.url = `${characterMock.thumbnail.path}.${characterMock.thumbnail.extension}`;
      expect(data).toEqual(returnMock);
    });
  });

  it('Should call onSearchCharactersByName$', () => {
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

    const resultMock = { status: 'LOADED', data: returnMock };

    charactersApiService.onSearchCharactersByName$.mockReturnValue(
      of({ status: 'LOADED', data: returnMock })
    );
    const result = service.onSearchByName();
    result.subscribe((data) => {
      expect(data).toEqual(resultMock);
    });
  });
});
