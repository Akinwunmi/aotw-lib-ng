import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-card-header',
  standalone: true,
  styleUrl: './card-header.component.css',
  templateUrl: './card-header.component.html',
})
export class FlagCardHeaderComponent {}
