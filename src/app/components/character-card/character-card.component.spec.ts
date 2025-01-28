import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CharacterCardComponent } from './character-card.component';
import { characterMock } from '../../../tests/character.mock';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    fixture.componentRef.setInput('loading', false);
    fixture.componentRef.setInput('character', characterMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should nav to character page when called openCharacterPage ', () => {
    const spyFnRef = jest.spyOn<any, any>(
      component['_router'],
      'navigateByUrl'
    );
    component.openCharacterPage();
    expect(spyFnRef).toHaveBeenCalledWith('character/1010906');
  });

  it('Should display placeholder content when loading is true', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.componentRef.setInput('character', undefined);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('placeholder');
  });
});
