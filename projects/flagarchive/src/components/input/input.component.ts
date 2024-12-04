import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FlagFormFieldComponent } from '../form-field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'input',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagInputComponent,
      multi: true,
    },
  ],
  selector: 'flag-input',
  standalone: true,
  styleUrls: ['../form-field/form-field.component.css', './input.component.css'],
  templateUrl: './input.component.html',
})
export class FlagInputComponent extends FlagFormFieldComponent implements ControlValueAccessor {
  placeholder = input('');
  type = input('text');

  disabled = model(false);
  value = model<string | number>('');

  uuid = crypto.randomUUID();

  #onChange: (value: string | number) => void = () => {
    // noop
  };

  #onTouched: () => void = () => {
    // noop
  };

  onBlur(): void {
    this.#onTouched();
  }

  onInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.#setValue(value);
    this.#onChange(this.value());
  }

  registerOnChange(fn: (value: string | number) => void) {
    this.#onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.#onTouched = fn;
  }

  setDisabledState?(disabled: boolean) {
    this.disabled.set(disabled);
  }

  writeValue(value: string) {
    this.#setValue(value);
  }

  #setValue(value: string) {
    this.value.set(this.type() === 'number' ? Number(value) : value);
  }
}