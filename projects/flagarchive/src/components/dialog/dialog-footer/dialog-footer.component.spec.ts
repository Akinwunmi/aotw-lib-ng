import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDialogFooterComponent } from './dialog-footer.component';

describe('FlagDialogFooterComponent', () => {
  let component: FlagDialogFooterComponent;
  let fixture: ComponentFixture<FlagDialogFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagDialogFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagDialogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
