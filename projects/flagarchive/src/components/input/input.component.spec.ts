import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagInputComponent } from './input.component';

describe('FlagInputComponent', () => {
  let component: FlagInputComponent;
  let fixture: ComponentFixture<FlagInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
