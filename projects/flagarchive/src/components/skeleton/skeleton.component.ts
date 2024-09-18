import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flag-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrl: './skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagSkeletonComponent {
  @HostBinding('class.soft')
  @Input()
  public soft = false;

  @HostBinding('class.loading')
  @Input()
  public loading = false;
}
