import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagPillComponent } from './pill.component';

describe('FlagPillComponent', () => {
  let component: FlagPillComponent;
  let fixture: ComponentFixture<FlagPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagPillComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
