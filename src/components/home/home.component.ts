import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImageComponent } from './image/image.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ButtonsComponent, ImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
