import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {

private categoryName = new BehaviorSubject('');
currentCategoryName = this.categoryName.asObservable();

 constructor() {

 }
 updateCategoryName(cattegoryName: string) {
 this.categoryName.next(cattegoryName)
 }
}
