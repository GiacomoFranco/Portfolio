import { Component } from '@angular/core';
import { SimpleButtonComponent } from '@app/website/shared/simple-button/simple-button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SimpleButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

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
