import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPaymentModalService {

  show: boolean = false;

  constructor() { }

  open() {
    this.show = true;
  }

  close () {
    this.show = false;
  }
}
