import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';

import { FlagTabComponent, Tab } from '../tab';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlagTabComponent, NgStyle],
  selector: 'flag-tab-group',
  standalone: true,
  styleUrl: './tab-group.component.css',
  templateUrl: './tab-group.component.html',
})
export class FlagTabGroupComponent {
  public tabs = input.required<Tab[]>();

  public active = model(0);

  public linePosition = computed(() => `${(100 / this.tabs().length) * this.active()}%`);
  public lineWidth = computed(() => `${100 / this.tabs().length}%`);

  public setActive(id: number): void {
    this.active.set(id);
  }
}
