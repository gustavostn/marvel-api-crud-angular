import { Character } from './../../../../models/interface/character.interface';

export interface CharacterApiResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}
