import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FlagRadioButtonComponent } from '../radio-button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FlagRadioButtonGroupComponent,
      multi: true,
    },
  ],
  selector: 'flag-radio-button-group',
  standalone: true,
  styleUrl: './radio-button-group.component.css',
  templateUrl: './radio-button-group.component.html',
})
export class FlagRadioButtonGroupComponent implements AfterContentInit, ControlValueAccessor {
  radioButtons = contentChildren(FlagRadioButtonComponent);

  #onChange: (value: unknown) => void = () => {
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

  registerOnTouched() {
    // noop
  }

  setDisabledState?(isDisabled: boolean) {
    this.radioButtons().forEach(radio => radio.disabled.set(isDisabled));
  }

  writeValue(value: boolean) {
    this.radioButtons().forEach(radio => {
      radio.checked.set(value);
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

        this.#onChange(radio.checked());
      });
    });
  }

  #setRadioButtonsName() {
    this.radioButtons().forEach(radio => {
      radio.name.set(this.#uuid);
    });
  }
}
