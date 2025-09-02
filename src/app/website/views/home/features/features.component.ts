import { Component } from '@angular/core';
import { ScrollRevealDirective } from '@app/website/shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
