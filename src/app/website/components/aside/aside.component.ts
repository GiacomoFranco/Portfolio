import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  asideFirstLoadAnim() {
    gsap.from('#aside-social-media', { delay: 1, duration: 1.5, opacity: 0,  ease: 'power4.out', });
  }

  ngOnInit(){
    this.asideFirstLoadAnim();
  }
}
