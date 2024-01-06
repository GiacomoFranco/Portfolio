import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { WebsiteComponent } from './website/website.component';

export const routes: Routes = [
  {
    title: 'website',
    path: '',
    component: WebsiteComponent,
    children: [{ title: 'home', path: '', component: HomeComponent }],
  },
];
