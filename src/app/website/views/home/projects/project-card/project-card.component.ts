import { Component, Input } from '@angular/core';
import { SimpleButtonComponent } from '@app/website/shared/simple-button/simple-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SimpleButtonComponent],
  template: `
    <div class="card-content">
      <h4 class="project-title">{{ project.title }}</h4>
      <app-simple-button [buttonOptions]="project.button" />
    </div>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: any;
}
