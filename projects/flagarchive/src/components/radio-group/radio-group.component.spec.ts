import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagRadioGroupComponent } from './radio-group.component';

describe('FlagRadioGroupComponent', () => {
  let component: FlagRadioGroupComponent;
  let fixture: ComponentFixture<FlagRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagRadioGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
