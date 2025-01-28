import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';
import { RestService } from '../../shared/rest.service';
import { of, throwError } from 'rxjs';
import { CharacterApiResponse } from './interface/characters-api.interface';
import { characterMock } from '../../../../tests/character.mock';

describe('CharactersService', () => {
  let service: CharactersService;
  let restServiceMock: jest.Mocked<RestService>;

  beforeEach(() => {
    restServiceMock = {
      get: jest.fn(),
    } as any;

    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        { provide: RestService, useValue: restServiceMock },
      ],
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCharacters', () => {
    it('Should handle error response when the API returns an error', (done) => {
      restServiceMock.get.mockReturnValue(of({ error: true, data: {} }));

      service.getCharacters('0', '10').subscribe((response) => {
        expect(response.error).toBe(true);
        done();
      });
    });
  });

  describe('getCharacterByName', () => {
    it('Should emit ERRORS status when the API response contains an error', (done) => {
      restServiceMock.get.mockReturnValue(of({ error: true, data: {} }));

      service.onSearchCharactersByName$().subscribe((status) => {
        if (status.status === 'ERROR') {
          expect(status.status).toBe('ERROR');
          done();
        }
      });

      service.getCharacterByName('Spiderman').subscribe();
    });
  });

  describe('getCharacterByID', () => {
    it('should return character data when API response is successful', (done) => {
      const mockCharacter = {
        id: 1,
        name: 'Spiderman',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035890fb0a',
          extension: 'jpg',
        },
        firstAppearance: 1962,
      };

      restServiceMock.get.mockReturnValue(
        of({ error: false, data: { results: [mockCharacter] } })
      );

      service.getCharacterByID(1).subscribe((response) => {
        expect(response.error).toBe(false);
        expect(response.data.name).toBe('Spiderman');
        done();
      });
    });

    it('Should return error when the API response has an error', (done) => {
      restServiceMock.get.mockReturnValue(of({ error: true, data: {} }));
      service.getCharacterByID(1).subscribe((response) => {
        expect(response.error).toBe(true);
        done();
      });
    });
  });
});
