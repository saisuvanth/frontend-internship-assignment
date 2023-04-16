import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { BookResponse, SearchResponse } from '../models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private apiService: ApiService) { }

  getBooksBySearch(search: string, limit: number, offset: number): Observable<SearchResponse> {
    return this.apiService.get('/search.json?q=' + search + '&limit=' + limit + '&offset=' + offset);
  }
}
