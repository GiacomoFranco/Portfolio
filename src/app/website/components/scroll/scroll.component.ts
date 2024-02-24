import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
})
export class ScrollComponent {
  scrollFirstLoadAnim() {
    gsap.from('#scroll-component', {
      delay: 1,
      duration: 1.5,
      opacity: 0,
      ease: 'power4.out',
    });
  }

  scrollEffectAnim() {
    gsap.to('#scrollbar', {
      transform: 'rotate(-100deg)',
      scrollTrigger: {
        scrub: true,
        trigger: '.banner',
        start: 'top top',
      },
    });
  }

  ngOnInit(): void {
    this.scrollFirstLoadAnim();
    this.scrollEffectAnim();
  }
}
