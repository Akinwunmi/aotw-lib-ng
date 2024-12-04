import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-dialog-content',
  standalone: true,
  styleUrl: '../../card/card-content/card-content.component.css',
  templateUrl: '../../card/card-content/card-content.component.html',
})
export class FlagDialogContentComponent {}
