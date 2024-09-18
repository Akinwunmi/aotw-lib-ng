import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-tab',
  standalone: true,
  styleUrl: './tab.component.css',
  templateUrl: './tab.component.html',
})
export class FlagTabComponent {
  public disabled = input(false);

  @HostBinding('class.disabled')
  public get disabledClass(): boolean {
    return this.disabled();
  }
}
