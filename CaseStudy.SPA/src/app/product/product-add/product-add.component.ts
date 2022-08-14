import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from 'src/app/services/product.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private alert: AlertService,
    private sharedService:SharedService,
    private router: Router) { }
  title = "Yeni Ürün Ekle"
  model: Product = new Product();

  ngOnInit() {
   
  }

  addProduct(form: NgForm) {
    this.productService.addProducts(this.model).subscribe({
      next: (response: any) => {
        this.alert.success(response.message)
        this.sharedService.updateCategoryName(this.model.categoryName);
        this.router.navigate(['/products']);
      },
      error: (e) => {
        this.alert.error("Hata meydana geldi.")
      },
    })
  }
}
