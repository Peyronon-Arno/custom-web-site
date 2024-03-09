import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '../../pipe/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgForOf,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly title = 'Title';
  protected readonly navItems: { path: string; label: string }[] = [];
}
