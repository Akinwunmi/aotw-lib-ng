import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  FlagCardComponent,
  FlagCheckboxComponent,
  FlagIconComponent,
  FlagListItemComponent,
  FlagPillComponent,
  PillType,
} from 'projects/flagarchive/src/components';
import { FlagDropdownDirective } from 'projects/flagarchive/src/directives';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FlagCardComponent,
    FlagCheckboxComponent,
    FlagDropdownDirective,
    FlagIconComponent,
    FlagListItemComponent,
    FlagPillComponent,
    NgOptimizedImage,
    RouterOutlet,
  ],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly #router = inject(Router);

  dropdownTrigger = viewChild.required(FlagDropdownDirective);

  pillType = PillType;

  isMenuOpen = false;

  goToPage(page: string) {
    this.#router.navigate([page]);
    this.#closeMenu();
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.#closeMenu();
      return;
    }
    this.#openMenu();
  }

  #closeMenu() {
    this.dropdownTrigger().close();
    this.isMenuOpen = false;
  }

  #openMenu() {
    this.dropdownTrigger().open();
    this.isMenuOpen = true;
  }
}
