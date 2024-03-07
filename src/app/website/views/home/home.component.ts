import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({
      name: 'title',
      content:
        "👨🏻‍💻  Francoder | 🚀 Let's Take User Experience to the Next Level",
    });
    this.meta.updateTag({
      name: 'description',
      content:
        "Get to Know Francoder: A boundary-pushing developer dedicated to elevating user experiences. Crafting captivating interfaces that leave a lasting impression, I prioritize performance, accessibility, and usability to ensure every interface is user-friendly and adaptable across all devices. Let's elevate your online presence together!",
    });
    this.meta.updateTag({
      property: 'og:title',
      content:
        "👨🏻‍💻  Francoder | 🚀 Let's Take User Experience to the Next Level",
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Get to Know Francoder: A boundary-pushing developer dedicated to elevating user experiences. Crafting captivating interfaces that leave a lasting impression, I prioritize performance, accessibility, and usability to ensure every interface is user-friendly and adaptable across all devices. Let's elevate your online presence together!",
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        "👨🏻‍💻  Francoder | 🚀 Let's Take User Experience to the Next Level",
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "Get to Know Francoder: A boundary-pushing developer dedicated to elevating user experiences. Crafting captivating interfaces that leave a lasting impression, I prioritize performance, accessibility, and usability to ensure every interface is user-friendly and adaptable across all devices. Let's elevate your online presence together!",
    });
  }
}
