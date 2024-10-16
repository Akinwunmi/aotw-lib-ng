import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDialogComponent } from './dialog.component';

describe('FlagDialogComponent', () => {
  let component: FlagDialogComponent;
  let fixture: ComponentFixture<FlagDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
