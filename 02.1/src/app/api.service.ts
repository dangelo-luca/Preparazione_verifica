import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  searchProducts(searchTerm: string): Observable<any> {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&page_size=10&json=true`;
    return this.http.get<any>(url);
  }
}

