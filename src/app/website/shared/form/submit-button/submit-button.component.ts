import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  template: `
      <button>{{ text }} <img class="arrow-icon" src="/assets/images/go-to-section-icon-black.svg" alt="ícono enviar"></button>
  `,
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent {
  @Input() text: string;
}
