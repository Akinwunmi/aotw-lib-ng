import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-list-item',
  standalone: true,
  styleUrl: './list-item.component.css',
  templateUrl: './list-item.component.html',
})
export class FlagListItemComponent {
  public active = input(false);
  public disabled = input(false);
  public interactive = input(true);

  @HostBinding('class.active')
  protected get activeClass(): boolean {
    return this.active();
  }

  @HostBinding('class.disabled')
  protected get disabledClass(): boolean {
    return this.disabled();
  }

  @HostBinding('class.interactive')
  protected get interactiveClass(): boolean {
    return this.interactive();
  }
}
