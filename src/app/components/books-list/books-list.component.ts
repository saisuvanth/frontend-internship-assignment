import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';
import { BooksService } from 'src/app/core/services/books.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { shareReplay } from 'rxjs';


@Component({
  selector: 'front-end-internship-assignment-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit, OnChanges {
  faSpinner = faSpinner;
  limit = 30;
  offset: number;
  loading = true;
  totalBooks: number;
  booksData: Book[];

  @Input() searchKey: string;
  @ViewChild(MatPaginator, {}) paginator: any = MatPaginator;

  constructor(private booksService: BooksService) {
    this.searchKey = '';
    this.offset = 0;
    this.totalBooks = 0;
    this.booksData = []
    this.paginator;
  }


  ngOnInit(): void {
    const paginatorIntl = this.paginator._intl;
    paginatorIntl.nextPageLabel = ''
    paginatorIntl.previousPageLabel = ''
  }



  ngOnChanges(_: SimpleChanges): void {
    this.loading = true;
    try {
      this.offset = 0;
      this.searchBooksBySearchKey(this.searchKey);
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  }


  getBooks(pageIndex: number) {
    this.loading = true;
    setTimeout(() => {
      try {
        this.offset = pageIndex * this.limit;
        this.searchBooksBySearchKey(this.searchKey);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }, 0);
  }

  searchBooksBySearchKey(searchKey: string) {
    this.booksService.getBooksBySearch(searchKey, this.limit, this.offset).pipe(shareReplay(1)).subscribe((data) => {
      console.log(data);
      this.totalBooks = data.numFound;
      this.booksData = data.docs;
      this.offset = data.offset;
    });
  }

}
