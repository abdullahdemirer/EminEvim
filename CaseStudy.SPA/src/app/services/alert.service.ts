import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  success(message) {
    this.toastr.success('', 'Eleman Eklendi.', {
      timeOut: 800,
      progressBar: true
    })
  }

  error(message) {
    this.toastr.error('', message, {
      timeOut: 800,
      progressBar: true
    })
  }



}
