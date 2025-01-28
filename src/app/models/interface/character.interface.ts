export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: CharacterImage;
  resourceURI: string;
  firstAppearance: number;
  comics: CharacterComics;
  series: CharacterSeries;
  stories: CharacterStories;
  events: CharacterEvents;
  urls: CharacterUrls[];
}

interface CharacterImage {
  path: string;
  extension: string;
  url: string;
}

interface CharacterComics {
  available: number;
  collectionURI: string;
  items: CharacterItems[];
  returned: number;
}

interface CharacterSeries {
  available: number;
  collectionURI: string;
  items: CharacterItems[];
  returned: number;
}

interface CharacterItems {
  resourceURI: string;
  name: string;
}

type ExtendedCharacterItems = CharacterItems & { type: string };

interface CharacterStories {
  available: number;
  collectionURI: string;
  items: ExtendedCharacterItems[];
  returned: number;
}

interface CharacterEvents {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
  }[];
  returned: number;
}

interface CharacterUrls {
  type: string;
  url: string;
}

export interface CharacterDetails {
  label: string;
  key: 'comics' | 'series' | 'stories';
  description: string;
}
