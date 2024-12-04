import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

import { FlagCardComponent } from '../card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-dialog',
  standalone: true,
  styleUrls: ['../card/card.component.css', './dialog.component.css'],
  templateUrl: '../card/card.component.html',
})
export class FlagDialogComponent extends FlagCardComponent {
  large = input(false);

  @HostBinding('class.large')
  get largeClass(): boolean {
    return this.large();
  }
}
