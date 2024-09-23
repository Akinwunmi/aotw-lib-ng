import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import {
  FlagCardComponent,
  FlagCheckboxComponent,
  FlagIconComponent,
  FlagListItemComponent,
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
    FlagIconComponent,
    FlagListItemComponent,
    FlagPillComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  dropdownTrigger = viewChild.required(FlagDropdownDirective);

  pillType = PillType;

  isMenuOpen = false;

  closeMenu() {
    this.dropdownTrigger().close();
    this.isMenuOpen = false;
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
