import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-card-content',
  standalone: true,
  styleUrl: './card-content.component.css',
  templateUrl: './card-content.component.html',
})
export class FlagCardContentComponent {}
