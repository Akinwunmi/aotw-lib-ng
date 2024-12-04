import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-form-field',
  standalone: true,
  styleUrl: './form-field.component.css',
  templateUrl: './form-field.component.html',
})
export class FlagFormFieldComponent {
  label = input.required<string>();
  errorMessage = input<string>();
  infoMessage = input<string>();
  required = input(false);
}
