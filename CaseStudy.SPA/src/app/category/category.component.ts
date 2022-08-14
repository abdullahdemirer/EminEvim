import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

import { CategoryService } from '../services/category.service';
import { Category } from './category';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private alert: AlertService,
    private sharedService:SharedService,
  ) { }

  
  title = 'Kategori Listesi';
  categories: Category[] = [];
  url="";
  eklenenKategory="";
  ngOnInit() {
  this.defaultActiveClassAdd()
    this.getData();

  }
  ngDoCheck(){
    this.sharedService.currentCategoryName.subscribe(addedCategory => {

      if(addedCategory!="" && this.categories.findIndex(x=> x.categoryName ==this.eklenenKategory ) == -1 ){
        this.removeActiveClass();
        this.defaultActiveClassAdd();
        this.getData()
        this.sharedService.updateCategoryName("");
      }

    });
  
    
  }
  removeActiveClass() {
    var allButtons = document.querySelectorAll('.list-group-item');
    allButtons.forEach(x=> x.classList.remove('active'));
  }

  getData() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
      this.categories = []
        data.forEach(element => {
          var elements = element.toLocaleLowerCase().split(" ");
          this.categories.push({
            categoryName: element,
            categoryUrl: elements.join("-")
          })
        });

      },
      error: (e) => {
        this.alert.error("Hata meydana geldi.")
      },
    });
  }

  changeButtonCss(e){
    this.removeActiveClass();
    var button = document.getElementById(e.srcElement.id);
    button.classList.add('active');
  }

  defaultActiveClassAdd(){
    var button = document.getElementById('categoryButton1');
    button.classList.add('active');
  }
  
}
