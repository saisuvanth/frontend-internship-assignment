import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, filter } from 'rxjs';
import { TrendingSubjects } from 'src/app/core/models/book-response.model';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  searchKey: string;
  pageName: string;

  constructor(private router: ActivatedRoute) {
    this.bookSearch = new FormControl('');
    this.pageName = 'Home';
    this.searchKey = '';
  }



  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      if (params['search']) {
        this.bookSearch.setValue(params['search']);
        this.pageName = 'Search'
        this.searchKey = params['search']
      }
    })
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
      ).
      subscribe((value: string) => {
        this.searchKey = value;
      });
  }
}
