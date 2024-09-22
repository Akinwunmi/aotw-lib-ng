import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-icon',
  standalone: true,
  styleUrl: './icon.component.css',
  templateUrl: './icon.component.html',
})
export class FlagIconComponent implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostBinding('class')
  protected iconClass = 'material-symbols-rounded';

  public ngOnInit(): void {
    const height = getComputedStyle(this.elementRef.nativeElement).fontSize;
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', height);
  }
}
