import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
path ="https://localhost:5001/api/products"

getProducts(categoryName):Observable<Product[]>{
  if(categoryName==null){
    return this.http.get<Product[]>(this.path)
  }
  console.log(categoryName)
  return this.http.get<Product[]>(this.path+"/getProductsByCategoryName?categoryName="+categoryName)
}

addProducts(product:Product){

  return this.http.post(this.path,product)
}
 
}
