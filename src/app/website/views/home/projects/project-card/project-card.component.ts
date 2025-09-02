import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleButtonComponent } from '@app/website/shared/simple-button/simple-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, SimpleButtonComponent],
  template: `
    <a
      [href]="project.button.redirectsTo"
      target="_blank"
      class="card-content"
      [ngStyle]="{
        backgroundImage: 'url(' + project.image.url + ')',
        backgroundPosition: project.image.position
      }"
    >
      <h4 class="project-title">{{ project.title }}</h4>
      <app-simple-button [buttonOptions]="project.button" />
    </a>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: any;
}
