import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCheckboxGroupComponent } from './checkbox-group.component';

describe('FlagCheckboxGroupComponent', () => {
  let component: FlagCheckboxGroupComponent;
  let fixture: ComponentFixture<FlagCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCheckboxGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
