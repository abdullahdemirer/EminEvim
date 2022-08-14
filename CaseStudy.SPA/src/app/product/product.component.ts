import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alert: AlertService, 
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = "Ürünler";
  dataGoster = false;
  products: Product[] = [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params)
      this.productService.getProducts(params["categoryName"]).subscribe({
        next: (data) => {
          this.products = data;
          this.dataGoster = true;
        },
        error: (e) => {
          this.alert.error("Hata meydana geldi.")
        },
      });
    })

    
  }
}


