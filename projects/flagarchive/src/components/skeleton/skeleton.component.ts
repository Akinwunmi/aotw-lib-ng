import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-skeleton',
  styleUrl: './skeleton.component.css',
  template: '',
})
export class FlagSkeletonComponent {
  @HostBinding('class.soft')
  @Input()
  public soft = false;

  @HostBinding('class.loading')
  @Input()
  public loading = false;
}
