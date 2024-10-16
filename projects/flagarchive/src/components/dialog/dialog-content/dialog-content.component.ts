import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FlagButtonDirective } from '../../../directives';
import { FlagIconComponent } from '../../icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagButtonDirective, FlagIconComponent],
  selector: 'flag-dialog-content',
  standalone: true,
  styleUrl: '../../card/card-content/card-content.component.css',
  templateUrl: '../../card/card-content/card-content.component.html',
})
export class FlagDialogContentComponent {}
