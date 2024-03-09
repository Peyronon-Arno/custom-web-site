import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipe/translate.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgForOf } from '@angular/common';

export interface FooterMedia {
  icon: string;
  tooltip: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule,
    NgForOf,
    TranslatePipe,
  ],
})
export class FooterComponent {
  protected readonly phone = '07 87 23 06 11';
  protected readonly email = 'arno.peyronon@gmail.com';
  protected readonly medias: FooterMedia[] = [
    {
      icon: 'fa-github',
      tooltip: 'GitHub',
      link: '',
    },
    {
      icon: 'fa-linkedin',
      tooltip: 'LinkedIn',
      link: '',
    },
    {
      icon: 'fa-twitter',
      tooltip: 'Twitter',
      link: '',
    },
  ];
}
