import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-card',
  standalone: true,
  styleUrl: './card.component.css',
  templateUrl: './card.component.html',
})
export class FlagCardComponent {}
