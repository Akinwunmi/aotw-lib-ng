import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCheckboxComponent } from './checkbox.component';

describe('FlagCheckboxComponent', () => {
  let component: FlagCheckboxComponent;
  let fixture: ComponentFixture<FlagCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
