import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FlagFormFieldComponent } from '../form-field';
import { FlagRadioButtonComponent } from '../radio-button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'radiogroup',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagRadioGroupComponent,
      multi: true,
    },
  ],
  selector: 'flag-radio-group',
  standalone: true,
  styleUrl: '../form-field/form-field.component.css',
  templateUrl: '../form-field/form-field.component.html',
})
export class FlagRadioGroupComponent
  extends FlagFormFieldComponent
  implements AfterContentInit, ControlValueAccessor
{
  radioButtons = contentChildren(FlagRadioButtonComponent);

  #onChange: (value: unknown) => void = () => {
    // noop
  };

  #onTouched: () => void = () => {
    // noop
  };

  #uuid = crypto.randomUUID();

  ngAfterContentInit() {
    this.#setRadioButtonsName();
    this.#handleCheckedChange();
  }

  registerOnChange(fn: (value: unknown) => void) {
    this.#onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.#onTouched = fn;
  }

  setDisabledState?(disabled: boolean) {
    this.radioButtons().forEach(radio => radio.disabled.set(disabled));
  }

  writeValue(value: string) {
    this.radioButtons().forEach(radio => {
      radio.writeValue(value);
    });
  }

  #handleCheckedChange() {
    this.radioButtons().forEach(radio => {
      radio.checked.subscribe(checked => {
        if (!checked) {
          return;
        }

        this.radioButtons().forEach(otherRadio => {
          if (otherRadio !== radio) {
            otherRadio.checked.set(false);
          }
        });
      });

      radio.registerOnChange(value => {
        this.#onChange(value);
        this.#onTouched();
      });
    });
  }

  #setRadioButtonsName() {
    this.radioButtons().forEach(radio => {
      radio.name.set(this.#uuid);
    });
  }
}
