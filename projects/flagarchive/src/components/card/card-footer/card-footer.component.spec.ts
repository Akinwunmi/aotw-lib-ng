import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardFooterComponent } from './card-footer.component';

describe('FlagCardFooterComponent', () => {
  let component: FlagCardFooterComponent;
  let fixture: ComponentFixture<FlagCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCardFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
