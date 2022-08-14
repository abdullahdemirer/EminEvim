import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http:HttpClient) { }
path ="https://localhost:5001/api/products"

getCategories():Observable<string[]>{
  return this.http.get<string[]>(this.path+"/getcategories")
}

}
