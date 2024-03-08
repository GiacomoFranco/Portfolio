import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SimpleButtonComponent } from '@website-shared/simple-button/simple-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollRevealDirective, SimpleButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects = {
    projectCards: {
      title: 'Mine Marketplace',
      button: {
        title: 'View More',
        redirectsTo: '#',
      },
    },
    projectRedirect: {
      title: 'Do you want to see more projects?',
      redirectsTo: '#',
    },
  };
}
