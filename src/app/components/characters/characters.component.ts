import { Component, OnInit, signal } from '@angular/core';
import { Character } from '../../models/interface/character.interface';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  imports: [CharacterCardComponent],
})
export class CharactersComponent implements OnInit {
  public characters = signal<Character[]>([]);
  constructor() {}

  ngOnInit() {
    this.characters.set([
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
          url: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/96303',
              name: 'Deadpool (1997) #44',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=54421692d980c3dcd9ee4f2b83f97712',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=54421692d980c3dcd9ee4f2b83f97712',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=54421692d980c3dcd9ee4f2b83f97712',
          },
        ],
      },
      {
        id: 1010370,
        name: 'Alpha Flight',
        description: '',
        modified: '2016-05-05T14:39:01-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088',
          extension: 'jpg',
          url: 'http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088.jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010370',
        comics: {
          available: 226,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010370/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39654',
              name: 'Alpha Flight (2011) #0.1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/393',
              name: 'Alpha Flight (2004) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/106868',
              name: 'Alpha Flight (2023) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
              name: 'Alpha Flight (1983) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
              name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/456',
              name: 'Alpha Flight (2004) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
              name: 'Alpha Flight (1983) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38569',
              name: 'Alpha Flight (2011) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/106870',
              name: 'Alpha Flight (2023) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39818',
              name: 'Alpha Flight (2011) #2 (Eaglesham Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
              name: 'Alpha Flight (1983) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/616',
              name: 'Alpha Flight (2004) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/106871',
              name: 'Alpha Flight (2023) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39820',
              name: 'Alpha Flight (2011) #3 (Eaglesham Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/106872',
              name: 'Alpha Flight (2023) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
              name: 'Alpha Flight (2011) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/677',
              name: 'Alpha Flight (2004) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
              name: 'Alpha Flight (1983) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/106873',
              name: 'Alpha Flight (2023) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38568',
              name: 'Alpha Flight (2011) #5',
            },
          ],
          returned: 20,
        },
        series: {
          available: 48,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010370/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
              name: 'Alpha Flight (2004 - 2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
              name: 'Alpha Flight (2011 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/36873',
              name: 'Alpha Flight (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27041',
              name: 'Alpha Flight Facsimile Edition (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27625',
              name: 'Alpha Flight: True North (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/18142',
              name: 'Amazing X-Men (2013 - 2015)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/28069',
              name: 'Annihilation: Scourge (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
              name: 'Astonishing X-Men (2004 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
              name: 'Cable (1993 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20718',
              name: 'Captain Marvel (2016 - 2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22552',
              name: 'Champions (2016 - 2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/11854',
              name: 'Chaos War (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13468',
              name: 'Chaos War One-Shots (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
              name: 'Chaos War: Alpha Flight (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/21692',
              name: 'Civil War II: Choosing Sides (2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16542',
              name: 'Deadpool (2012 - 2015)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14399',
              name: 'Essential X-Men Vol. 2 (All-New Edition) (2011 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
              name: 'Fantastic Four (1961 - 1998)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 395,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010370/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2922',
              name: '1 of 4 - Days of Future Present Past Participle',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2924',
              name: 'Interior #2924',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2926',
              name: 'Interior #2926',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2928',
              name: 'Interior #2928',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2930',
              name: 'Interior #2930',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2932',
              name: 'Interior #2932',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2934',
              name: 'Interior #2934',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2936',
              name: '"WAXING POETIC" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2938',
              name: '"WAXING POETIC" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2940',
              name: '2 of 4 - Days of Future Present Past Participle',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2942',
              name: '3 of 4 - Days of Future Present Past Participle',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2944',
              name: '4 of 4 - Days of Future Present Past Participle',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13113',
              name: 'With Malice Toward All!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/18775',
              name: 'Hook, Line, and Sinker',
              type: '',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/20797',
              name: 'What if Alpha Flight talked like T.V. Canadians?',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/21096',
              name: 'Alpha Flight (1983) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/21097',
              name: 'Tundra!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/21098',
              name: 'Cover #21098',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/21099',
              name: 'Blood Battle',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/21100',
              name: 'Family Ties',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010370/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
              name: 'Monsters Unleashed',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
              name: 'Original Sin',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
              name: 'Secret Wars II',
            },
          ],
          returned: 7,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/126/alpha_flight?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Alpha_Flight?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010370/alpha_flight?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
        ],
      },
      {
        id: 1011324,
        name: 'Alpha Flight (Ultimate)',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
          url: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011324',
        comics: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011324/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21177',
              name: 'Ultimate X-Men (2001) #94',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21326',
              name: 'Ultimate X-Men (2001) #95',
            },
          ],
          returned: 2,
        },
        series: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011324/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
              name: 'Ultimate X-Men (2001 - 2009)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011324/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46780',
              name: 'Ultimate X-Men (2001) #94',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46781',
              name: '1 of 4',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47101',
              name: 'Ultimate X-Men (2001) #95',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47102',
              name: '2 of 4',
              type: 'interiorStory',
            },
          ],
          returned: 4,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011324/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/126/alpha_flight?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Alpha%20Flight%20(Ultimate)?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011324/alpha_flight_ultimate?utm_campaign=apiRef&utm_source=edc9531ea872c74a2855ed93a5903229',
          },
        ],
      },
    ]);
  }
}
