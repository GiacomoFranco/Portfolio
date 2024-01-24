import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';
import SplitType from 'split-type';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  @Input() x: number | string;
  @Input() y: number | string;
  @Input() start: string = '-30% center';
  @Input() duration: number | string = 1;
  @Input() delay: number | string;
  @Input() stagger: number | undefined | string = 0.2;
  @Input() selectorClassAnimation: string;
  @Input() markers: boolean = false;
  @Input() ease: string = 'power';

  // Para cuando el conenido viene de la API le damos un tiempo de que
  // se renderize en el template y aplicamos el scroll reveal

  pendingState: boolean;
  @Input() set isPending(state: boolean) {
    this.pendingState = state;
    if (!state) {
      console.log('here');
      this.animation();
    }
  }

  animation() {
    const text = new SplitType('#bannerTitle', { types: 'lines' });

    console.log('aaaaaaa');
    console.log(text.lines);

      const tl = gsap.timeline();
      gsap.from(text.lines,
        {
          opacity: 0,
          duration: 1.5,
          x: 150,
          delay: 1,
          ease: 'power4.out',
          skewX: 3,
          stagger: .1
        }
      );
  }

  // animation() {
  //     gsap.from(
  //       this.selectorClassAnimation
  //         ? `.${this.selectorClassAnimation}`
  //         : this.element.nativeElement,
  //       {
  //         x: this.x,
  //         y: this.y,
  //         opacity: 0,
  //         ease: this.ease,
  //         duration: this.duration,
  //         stagger:
  //           typeof this.stagger !== 'string'
  //             ? this.stagger
  //             : parseInt(this.stagger),
  //         delay: this.delay,
  //         scrollTrigger: {
  //           trigger: this.element.nativeElement,
  //           start: this.start,
  //           markers: this.markers,
  //         },
  //       }
  //     );
  // }

  ngAfterViewInit(): void {
    // Si el componente no es asíncrono que ejecute inmediatamente la animación

    if (!this.pendingState) {
      console.log(this.selectorClassAnimation);

      // debugger;
      this.animation();
    }
  }
}
