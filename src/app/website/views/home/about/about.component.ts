import { Component } from '@angular/core';
import { CounterUpDirective } from '@app/website/shared/directives/counter-up.directive';
import { ScrollRevealDirective } from '@app/website/shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, CounterUpDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
