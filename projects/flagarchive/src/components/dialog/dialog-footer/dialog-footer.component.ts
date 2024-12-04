import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-dialog-footer',
  standalone: true,
  styleUrl: '../../card/card-footer/card-footer.component.css',
  templateUrl: '../../card/card-footer/card-footer.component.html',
})
export class FlagDialogFooterComponent {}
