import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-card-footer',
  standalone: true,
  styleUrl: './card-footer.component.css',
  templateUrl: './card-footer.component.html',
})
export class FlagCardFooterComponent {}
