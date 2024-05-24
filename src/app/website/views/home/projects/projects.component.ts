import { Component } from '@angular/core';
import { SimpleButtonComponent } from '@app/website/shared/simple-button/simple-button.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, SimpleButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Control Legal',
      button: {
        title: 'View More',
        redirectsTo: 'https://controllegal.netlify.app/',
      },
    },
    {
      title: 'Sinapsis Website',
      button: {
        title: 'View More',
        redirectsTo: 'https://sinapsis.global/home',
      },
    },
    {
      title: 'Mine Marketplace',
      button: {
        title: 'View More',
        redirectsTo: '#',
      },
    },
  ];

  projectRedirect = {
    title: 'Do you want to see more projects?',
    redirectsTo: '#',
  };
}
