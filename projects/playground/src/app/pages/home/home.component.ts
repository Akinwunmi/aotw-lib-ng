import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject, TemplateRef, viewChild } from '@angular/core';
import {
  FlagDialogComponent,
  FlagDialogContentComponent,
  FlagDialogFooterComponent,
  FlagDialogHeaderComponent,
  FlagYearPickerComponent,
} from 'projects/flagarchive/src/components';
import { FlagButtonDirective } from 'projects/flagarchive/src/directives';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FlagButtonDirective,
    FlagDialogComponent,
    FlagDialogContentComponent,
    FlagDialogFooterComponent,
    FlagDialogHeaderComponent,
    FlagYearPickerComponent,
  ],
  standalone: true,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly #dialog = inject(Dialog);

  dialogTemplate = viewChild.required<TemplateRef<FlagDialogComponent>>('dialog');

  #dialogRef?: DialogRef<string>;

  closeDialog() {
    this.#dialogRef?.close();
  }

  openDialog() {
    this.#dialogRef = this.#dialog.open<string>(this.dialogTemplate());
  }
}
