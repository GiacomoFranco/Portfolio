import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      class="redirection-button__simple"
      [href]="button.redirectsTo"
      target="_blank"
      >{{ button.title
      }}<img
        class="arrow-icon"
        src="/assets/images/go-to-section-icon-green.svg"
        alt="Go to section icon"
    /></a>
  `,
  styleUrl: './simple-button.component.scss',
})
export class SimpleButtonComponent {
  @Input('buttonOptions') button: {
    title: string;
    redirectsTo: string;
  };
}
