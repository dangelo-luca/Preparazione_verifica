import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    

  

  datiCarta: any;
  caricamento = false;

  constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const NomeProdotto = params.get('Prodotto')!;
      this.fetchdatiCarta(NomeProdotto);
    });
  }

  fetchdatiCarta(NomeProdotto: string): void {
    this.caricamento = true;
    const url = `https://world.openfoodfacts.org/cgi/search.pl?{NomeProdotto}`; 
    this.http.get(url).subscribe(
      (data) => {
        this.datiCarta = data;
        this.caricamento = false;
      },
      (error) => {
        console.error('Prodotto non trovata', error);
        this.caricamento = false;
      }
    );
  }
}
