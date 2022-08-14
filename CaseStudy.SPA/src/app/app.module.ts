import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';

@NgModule({
  declarations: [				
    AppComponent,
      ProductComponent,
      NavComponent,
      CategoryComponent,
      ProductAddComponent,
      NotFoundPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
