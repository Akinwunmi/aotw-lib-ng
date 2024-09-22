import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

import { PillTheme, PillType } from './pill.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-pill',
  standalone: true,
  styleUrl: './pill.component.css',
  templateUrl: './pill.component.html',
})
export class FlagPillComponent {
  public theme = input(PillTheme.Light);
  public type = input(PillType.Primary);

  @HostBinding('class')
  public get class(): string {
    return `${this.theme()} ${this.type()}`;
  }
}
