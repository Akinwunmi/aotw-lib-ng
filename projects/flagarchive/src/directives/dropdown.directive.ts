import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, merge, Observable } from 'rxjs';

@Directive({
  selector: '[flagDropdownTrigger]',
  standalone: true,
})
export class FlagDropdownDirective implements OnDestroy {
  contentRef = input.required<TemplateRef<unknown>>({
    alias: 'flagDropdownTrigger',
  });

  isOpen = model(false);

  @HostListener('click')
  handleClick() {
    this.isOpen.set(!this.isOpen());
    this.#toggle();
  }

  #destroyRef = inject(DestroyRef);
  #elementRef = inject(ElementRef<HTMLElement>);
  #overlay = inject(Overlay);
  #viewContainerRef = inject(ViewContainerRef);

  #overlayRef?: OverlayRef;

  ngOnDestroy() {
    this.isOpen.set(false);
    this.#overlayRef?.dispose();
  }

  close() {
    this.isOpen.set(false);
    this.#overlayRef?.detach();
  }

  open() {
    const xStart: Pick<ConnectedPosition, 'originX' | 'overlayX'> = {
      originX: 'start',
      overlayX: 'start',
    };
    const xEnd: Pick<ConnectedPosition, 'originX' | 'overlayX'> = {
      originX: 'end',
      overlayX: 'end',
    };
    const yTop: Pick<ConnectedPosition, 'originY' | 'overlayY'> = {
      originY: 'top',
      overlayY: 'bottom',
    };
    const yBottom: Pick<ConnectedPosition, 'originY' | 'overlayY'> = {
      originY: 'bottom',
      overlayY: 'top',
    };
    const positions: ConnectedPosition[] = [
      { ...xStart, ...yBottom, offsetY: 4 },
      { ...xEnd, ...yBottom, offsetY: 4 },
      { ...xStart, ...yTop, offsetY: -4 },
      { ...xEnd, ...yTop, offsetY: -4 },
    ];
    const templatePortal = new TemplatePortal(this.contentRef(), this.#viewContainerRef);

    this.#overlayRef = this.#overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.#overlay.scrollStrategies.reposition(),
      positionStrategy: this.#overlay
        .position()
        .flexibleConnectedTo(this.#elementRef)
        .withPositions(positions),
    });
    this.#overlayRef.attach(templatePortal);

    this.#actions()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.isOpen.set(false);
        this.#toggle();
      });
  }

  #actions(): Observable<MouseEvent | void> {
    if (!this.#overlayRef) {
      return EMPTY;
    }

    const backdropClick$ = this.#overlayRef.backdropClick();
    const detachments$ = this.#overlayRef.detachments();

    return merge(backdropClick$, detachments$);
  }

  #toggle() {
    if (this.isOpen()) {
      this.open();
    } else {
      this.close();
    }
  }
}
