import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input()
  payment!: Payment;
  public name: string = "";
  public amount: string = "";
  public reason: string = "";
  public duration: string = "";

  constructor() {

   }

  ngOnInit(): void {
    this.name = this.payment.payer.name!;
    this.amount = Utils.formatAmount(this.payment.amount);
    this.reason = this.payment.description;
    this.duration = Utils.getDurationStr(this.payment.creationDate);
  }


}
