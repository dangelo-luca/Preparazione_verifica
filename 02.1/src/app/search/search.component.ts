import { Component } from '@angular/core';
import { SearchService } from '../api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  results: any;

  constructor(private searchService: SearchService, private http: HttpClient) {}

  onSearch() {
    this.searchService.searchProducts(this.searchTerm).subscribe(response => {
      this.results = response;
      console.log(response);
    });
  }

  getProductById(id: string): Observable<any> {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    return this.http.get<any>(url);
  }
}
