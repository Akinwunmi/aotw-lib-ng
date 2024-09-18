import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  model,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Step } from './stepper.model';
import { FlagStepperService } from './stepper.service';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  selector: 'flag-stepper',
  standalone: true,
  styleUrls: ['./stepper.component.css'],
  templateUrl: './stepper.component.html',
})
export class FlagStepperComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  private stepperService = inject(FlagStepperService);

  public steps = model.required<Step[]>();
  public activeStep = model(0);

  public ngOnInit(): void {
    this.stepperService.steps$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(steps => {
      this.steps.set(steps);
      this.cdr.detectChanges();
    });
  }

  public setActiveStep(index: number): void {
    this.activeStep.set(index);
  }
}
