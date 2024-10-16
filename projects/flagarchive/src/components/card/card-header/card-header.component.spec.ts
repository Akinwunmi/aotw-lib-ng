import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardHeaderComponent } from './card-header.component';

describe('FlagCardHeaderComponent', () => {
  let component: FlagCardHeaderComponent;
  let fixture: ComponentFixture<FlagCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
