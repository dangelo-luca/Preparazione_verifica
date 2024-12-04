import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  productId: string | null = null;
  productDetails: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    // Recupera l'ID del prodotto dalla rotta
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProductDetails(this.productId);
    }
  }

  loadProductDetails(id: string): void {
    this.searchService.getProductById(id).subscribe((response) => {
      this.productDetails = response;
      console.log(this.productDetails); // Debug della risposta
    });
  }
}
