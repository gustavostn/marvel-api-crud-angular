import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterHistoryComponent } from './character-history.component';

describe('CharacterHistoryComponent', () => {
  let component: CharacterHistoryComponent;
  let fixture: ComponentFixture<CharacterHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CharacterHistoryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });
});
