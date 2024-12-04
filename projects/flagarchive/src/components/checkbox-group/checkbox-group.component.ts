import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FlagFormFieldComponent } from '../form-field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group',
  },
  selector: 'flag-checkbox-group',
  standalone: true,
  styleUrl: '../form-field/form-field.component.css',
  templateUrl: '../form-field/form-field.component.html',
})
export class FlagCheckboxGroupComponent extends FlagFormFieldComponent {}
