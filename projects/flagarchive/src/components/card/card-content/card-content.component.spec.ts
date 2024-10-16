import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardContentComponent } from './card-content.component';

describe('FlagCardContentComponent', () => {
  let component: FlagCardContentComponent;
  let fixture: ComponentFixture<FlagCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCardContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
