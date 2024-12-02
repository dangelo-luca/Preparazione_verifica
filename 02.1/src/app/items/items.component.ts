import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  productId: string | null = null;
  productDetails: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    // Recupera l'ID del prodotto dalla rotta
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.getProductDetails(this.productId);
    }
  }

  getProductDetails(id: string): void {
    this.searchService.getProductById(id).subscribe(response => {
      this.productDetails = response;
      console.log(response); // Controlla il risultato nella console
    });
  }
}
