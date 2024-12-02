import { Component } from '@angular/core';
import { SearchService } from '../api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  results: any;

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.searchProducts(this.searchTerm).subscribe(response => {
      this.results = response;
      console.log(response);
    });
  }
}
