import { Component, Input } from '@angular/core';
import { TrendingSubjects } from 'src/app/core/models/book-response.model';

@Component({
  selector: 'front-end-internship-assignment-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  @Input() pageName: string;

  constructor() {
    this.pageName = 'Home';
  }

  trendingSubjects: Array<TrendingSubjects> = [
    { name: 'JavaScript', link: 'javascript' },
    { name: 'CSS', link: 'css' },
    { name: 'HTML', link: 'html' },
    { name: 'Harry Potter', link: 'harry potter' },
    { name: 'Crypto', link: 'crypto' },
  ];
}
