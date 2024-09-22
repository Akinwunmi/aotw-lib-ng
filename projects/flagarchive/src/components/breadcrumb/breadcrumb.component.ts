import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { FlagIconComponent } from '../icon';

import { BreadcrumbItem } from './breadcrumb.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagIconComponent],
  selector: 'flag-breadcrumb',
  standalone: true,
  styleUrl: './breadcrumb.component.css',
  templateUrl: './breadcrumb.component.html',
})
export class FlagBreadcrumbComponent {
  public items = input.required<BreadcrumbItem[]>();

  public selectedItem = output<BreadcrumbItem>();

  public selectItem(item: BreadcrumbItem): void {
    this.selectedItem.emit(item);
  }
}
