import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  @Input() x: number | string;
  @Input() y: number | string = '20px';
  @Input() start: string = '-200px center';
  @Input() duration: number | string = .3;
  @Input() delay: number;
  @Input() stagger: number | undefined | string = 0.2;
  @Input() selectorClassAnimation: string;
  @Input() markers: boolean = false;
  @Input() ease: string = 'power';
  @Input() toggleActions: string = 'play none none reverse';

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

  // animation() {
  //   const text = new SplitType('#bannerTitle', { types: 'lines' });

  //     const tl = gsap.timeline();
  //     gsap.from(text.lines,
  //       {
  //         opacity: 0,
  //         duration: 1.5,
  //         y: 50,
  //         delay: 1,
  //         ease: 'power4.out',
  //         skewX: 3,
  //         stagger: .1
  //       }
  //     );
  // }

  animation() {
      gsap.from(
        this.selectorClassAnimation
          ? `.${this.selectorClassAnimation}`
          : this.element.nativeElement,
        {
          x: this.x,
          y: this.y,
          opacity: 0,
          ease: this.ease,
          delay: this.delay,
          repeatDelay: this.delay,
          duration: this.duration,
          stagger:
            typeof this.stagger !== 'string'
              ? this.stagger
              : parseInt(this.stagger),
          scrollTrigger: {
            trigger: this.element.nativeElement,
            toggleActions: this.toggleActions,
            start: this.start,
            markers: this.markers,
          },
        }
      );
  }

  ngAfterViewInit(): void {
    // Si el componente no es asíncrono que ejecute inmediatamente la animación

    if (!this.pendingState) {
      this.animation();
    }
  }
}
