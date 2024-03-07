import { Routes } from '@angular/router';
import { HomeComponent } from './website/views/home/home.component';
import { WebsiteComponent } from './website/website.component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
