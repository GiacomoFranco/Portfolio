import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { BannerComponent } from './banner/banner.component';
import { CaracteristicsComponent } from './caracteristics/caracteristics.component';
import { FeaturesComponent } from './features/features.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollRevealDirective, BannerComponent, AboutComponent, CaracteristicsComponent, FeaturesComponent, IntroductionComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
