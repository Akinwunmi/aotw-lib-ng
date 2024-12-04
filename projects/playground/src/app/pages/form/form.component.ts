import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FlagCheckboxComponent,
  FlagCheckboxGroupComponent,
  FlagInputComponent,
  FlagRadioButtonComponent,
  FlagRadioGroupComponent,
} from 'projects/flagarchive/src/components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FlagCheckboxComponent,
    FlagCheckboxGroupComponent,
    FlagInputComponent,
    FlagRadioButtonComponent,
    FlagRadioGroupComponent,
    JsonPipe,
    ReactiveFormsModule,
  ],
  standalone: true,
  styleUrl: './form.component.css',
  templateUrl: './form.component.html',
})
export class FormComponent {
  hobbies = ['Reading', 'Writing', 'Coding'];
  form = new FormGroup({
    name: new FormControl<string>(''),
    hobbies: new FormArray(this.hobbies.map(() => new FormControl(true))),
    favoriteHobby: new FormControl<string>(''),
    favoriteNumber: new FormControl<number>(0),
  });

  submit() {
    console.log(this.form.value);
  }
}
