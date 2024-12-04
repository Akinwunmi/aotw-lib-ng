import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.checked]': 'checked()',
    '[class.disabled]': 'disabled()',
    '(click)': 'onClick()',
    '(keyup)': 'onKeyUp($event)',
  },
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
  label = input.required<string>();
  value = input.required<string>();

  checked = model(false);
  disabled = model(false);
  name = model('');

  uuid = crypto.randomUUID();

  #onChange: (value: string) => void = () => {
    // noop
  };

  #onTouched: () => void = () => {
    // noop
  };

  onClick() {
    this.checked.set(true);
    this.#onChange(this.value());
    this.#onTouched();
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onClick();
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this.#onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.#onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled.set(disabled);
  }

  writeValue(value: string) {
    this.checked.set(this.value() === value);
  }
}
