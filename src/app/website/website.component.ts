import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollComponent } from './components/scroll/scroll.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-website',
  standalone: true,
  imports: [RouterOutlet, ScrollComponent, AsideComponent, FooterComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss',
})
export class WebsiteComponent {
}
