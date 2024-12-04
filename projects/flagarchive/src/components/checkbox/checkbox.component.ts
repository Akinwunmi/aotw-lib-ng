import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FlagIconComponent } from '../icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.checked]': 'checked()',
    '[class.disabled]': 'disabled()',
    '[class.indeterminate]': 'indeterminate()',
    '(click)': 'onClick()',
    '(keyup)': 'onKeyUp($event)',
  },
  imports: [FlagIconComponent],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagCheckboxComponent,
    },
  ],
  selector: 'flag-checkbox',
  standalone: true,
  styleUrls: ['../form-field/checkable-input.css', './checkbox.component.css'],
  templateUrl: './checkbox.component.html',
})
export class FlagCheckboxComponent {
  label = input.required<string>();

  checked = model(false);
  disabled = model(false);
  indeterminate = model(false);
  name = model('');

  uuid = crypto.randomUUID();

  onClick() {
    if (!this.checked()) {
      this.indeterminate.set(false);
    }
    this.checked.set(!this.checked());
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onClick();
    }
  }

  registerOnChange(fn: (value: boolean) => void) {
    this.checked.subscribe(fn);
  }

  registerOnTouched() {
    // noop
  }

  setDisabledState(disabled: boolean) {
    this.disabled.set(disabled);
  }

  writeValue(value: boolean) {
    this.checked.set(value);
  }
}
