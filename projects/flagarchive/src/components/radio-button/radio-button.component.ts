import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagRadioButtonComponent,
    },
  ],
  selector: 'flag-radio-button',
  standalone: true,
  styleUrls: ['../form-field/checkable-input.css', './radio-button.component.css'],
  templateUrl: './radio-button.component.html',
})
export class FlagRadioButtonComponent implements ControlValueAccessor {
  checked = model(false);
  disabled = model(false);
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

  @HostListener('click')
  onClick() {
    this.checked.set(true);
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
