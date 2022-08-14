import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';
import { Product } from './product/product';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/add',component:ProductAddComponent},
  {path:'products/category/:categoryName',component:ProductComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
