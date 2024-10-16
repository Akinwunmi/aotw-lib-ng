import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDialogHeaderComponent } from './dialog-header.component';

describe('FlagDialogHeaderComponent', () => {
  let component: FlagDialogHeaderComponent;
  let fixture: ComponentFixture<FlagDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagDialogHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
