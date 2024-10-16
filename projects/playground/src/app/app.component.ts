import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, TemplateRef, viewChild } from '@angular/core';
import {
  FlagCardComponent,
  FlagCheckboxComponent,
  FlagFormFieldComponent,
  FlagIconComponent,
  FlagListItemComponent,
  FlagDialogComponent,
  FlagDialogContentComponent,
  FlagDialogFooterComponent,
  FlagDialogHeaderComponent,
  FlagPillComponent,
  PillType,
} from 'projects/flagarchive/src/components';
import { FlagButtonDirective, FlagDropdownDirective } from 'projects/flagarchive/src/directives';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FlagButtonDirective,
    FlagCardComponent,
    FlagCheckboxComponent,
    FlagDropdownDirective,
    FlagFormFieldComponent,
    FlagIconComponent,
    FlagListItemComponent,
    FlagDialogComponent,
    FlagDialogContentComponent,
    FlagDialogFooterComponent,
    FlagDialogHeaderComponent,
    FlagPillComponent,
    NgOptimizedImage,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly #dialog = inject(Dialog);

  dialogTemplate = viewChild.required<TemplateRef<FlagDialogComponent>>('dialog');
  dropdownTrigger = viewChild.required(FlagDropdownDirective);

  pillType = PillType;

  isMenuOpen = false;

  #dialogRef?: DialogRef<string>;

  closeDialog() {
    this.#dialogRef?.close();
  }

  closeMenu() {
    this.dropdownTrigger().close();
    this.isMenuOpen = false;
  }

  openDialog() {
    this.#dialogRef = this.#dialog.open<string>(this.dialogTemplate());
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
      return;
    }
    this.#openMenu();
  }

  #openMenu() {
    this.dropdownTrigger().open();
    this.isMenuOpen = true;
  }
}
