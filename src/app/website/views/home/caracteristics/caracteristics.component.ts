import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '@app/website/shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-caracteristics',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './caracteristics.component.html',
  styleUrl: './caracteristics.component.scss'
})
export class CaracteristicsComponent {

}
