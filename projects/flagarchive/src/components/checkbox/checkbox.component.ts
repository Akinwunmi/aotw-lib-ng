import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FlagIconComponent } from '../icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagIconComponent],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagCheckboxComponent,
    },
  ],
  selector: 'flag-checkbox',
  styleUrls: ['../form-field/checkable-input.css', './checkbox.component.css'],
  templateUrl: './checkbox.component.html',
})
export class FlagCheckboxComponent implements ControlValueAccessor {
  checked = model(false);
  disabled = model(false);
  indeterminate = model(false);
  name = model('');

  uuid = crypto.randomUUID();

  @HostBinding('class.checked')
  get checkedClass(): boolean {
    return this.checked();
  }

  @HostBinding('class.disabled')
  get disabledClass(): boolean {
    return this.disabled();
  }

  @HostBinding('class.indeterminate')
  get indeterminateClass(): boolean {
    return this.indeterminate();
  }

  @HostListener('click')
  onClick() {
    if (!this.checked()) {
      this.indeterminate.set(false);
    }
    this.checked.set(!this.checked());
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
