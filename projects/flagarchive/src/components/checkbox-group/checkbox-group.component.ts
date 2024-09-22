import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-checkbox-group',
  standalone: true,
  styleUrl: './checkbox-group.component.css',
  templateUrl: './checkbox-group.component.html',
})
export class FlagCheckboxGroupComponent {}
