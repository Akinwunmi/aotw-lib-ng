import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagRadioButtonComponent } from './radio-button.component';

describe('FlagRadioButtonComponent', () => {
  let component: FlagRadioButtonComponent;
  let fixture: ComponentFixture<FlagRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagRadioButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
