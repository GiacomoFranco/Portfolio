import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollComponent } from './shared/scroll/scroll.component';


@Component({
  selector: 'app-website',
  standalone: true,
  imports: [RouterOutlet, ScrollComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss',
})
export class WebsiteComponent {
}
