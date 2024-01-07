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
  ngOnInit(): void {
    gsap.to('#scrollbar', {
      transform: 'translate(50%, -50%) rotate(-100deg)',
      scrollTrigger: {
        scrub: true,
        trigger: '.banner',
        start: 'top top',
      },
    });
  }
}
