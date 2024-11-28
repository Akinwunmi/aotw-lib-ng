import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { FlagButtonDirective } from '../../../directives';
import { FlagIconComponent } from '../../icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagButtonDirective, FlagIconComponent],
  selector: 'flag-dialog-header',
  styleUrls: ['../../card/card-header/card-header.component.css', './dialog-header.component.css'],
  templateUrl: './dialog-header.component.html',
})
export class FlagDialogHeaderComponent {
  close = output();

  onClose(): void {
    this.close.emit();
  }
}
