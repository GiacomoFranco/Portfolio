import { Directive, ElementRef, Input } from '@angular/core';
import { gsap, Power1 } from 'gsap';

@Directive({
  selector: '[counterUp]',
  standalone: true,
})
export class CounterUpDirective {

  constructor(private element: ElementRef) {}

  pendingState: boolean;

  @Input() start: string = '-200px center';
  @Input() duration: number | string = 2;
  @Input() delay: number | string;
  @Input() set isPending(state: boolean) {
    this.pendingState = state;
    if (!state) {
      this.animation();
    }
  }

  animation() {
    gsap.from(this.element.nativeElement, {
      // ease: this.ease,
      duration: this.duration,
      delay: this.delay,
      textContent: 0,
      ease: Power1.easeOut,
      snap: { textContent: 1 },
      stagger: 1,
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: this.start,
      },
    });
  }

  ngAfterViewInit(): void {
    // Si el componente no es asíncrono que ejecute inmediatamente la animación

    if (!this.pendingState) {
      this.animation();
    }
  }
}
