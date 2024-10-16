import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDialogContentComponent } from './dialog-content.component';

describe('FlagDialogContentComponent', () => {
  let component: FlagDialogContentComponent;
  let fixture: ComponentFixture<FlagDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagDialogContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
