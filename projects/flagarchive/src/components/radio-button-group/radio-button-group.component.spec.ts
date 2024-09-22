import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagRadioButtonGroupComponent } from './radio-button-group.component';

describe('FlagRadioButtonGroupComponent', () => {
  let component: FlagRadioButtonGroupComponent;
  let fixture: ComponentFixture<FlagRadioButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagRadioButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagRadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
