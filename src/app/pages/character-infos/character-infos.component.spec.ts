import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterHistoryComponent } from './character-infos.component';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('CharacterInfoComponent', () => {
  let component: CharacterHistoryComponent;
  let fixture: ComponentFixture<CharacterHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CharacterHistoryComponent],
      providers: [
        provideHttpClient(),
        provideAnimationsAsync(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should call _verifyRouteParams', () => {
    const spyFnRef = jest.spyOn<any, any>(component, '_verifyRouteParams');
    component.ngOnInit();
    expect(spyFnRef).toHaveBeenCalled();
  });

  it('Should call _getCharacterData when has param ID', () => {
    const spyFnRef = jest.spyOn<any, any>(component, '_getCharacterData');
    component.ngOnInit();
    expect(spyFnRef).toHaveBeenCalled();
  });

  it('Should call _getCharacterData when has param ID', () => {
    const spyFnRef = jest.spyOn<any, any>(component, '_getCharacterData');
    component.ngOnInit();
    expect(spyFnRef).toHaveBeenCalled();
  });
});
