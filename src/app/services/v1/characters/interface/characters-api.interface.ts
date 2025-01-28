import { Character } from './../../../../models/interface/character.interface';

export interface CharacterPagination {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export type CharacterApiResponse = CharacterPagination & {
  results: Character[];
};
