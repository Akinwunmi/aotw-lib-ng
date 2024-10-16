import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FlagButtonDirective } from '../../../directives';
import { FlagIconComponent } from '../../icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagButtonDirective, FlagIconComponent],
  selector: 'flag-dialog-footer',
  standalone: true,
  styleUrl: '../../card/card-footer/card-footer.component.css',
  templateUrl: '../../card/card-footer/card-footer.component.html',
})
export class FlagDialogFooterComponent {}
