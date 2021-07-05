import { Component, OnInit, Input } from '@angular/core';
import { ExpenseGroup } from '../../model/expense-group';
import { AddMemberModalService } from '../add-member/add-member-modal.service';
import { AddPaymentModalService } from '../add-payment/add-payment-modal.service';

@Component({
  selector: 'app-expense-group',
  templateUrl: './expense-group.component.html',
  styleUrls: ['./expense-group.component.css']
})
export class ExpenseGroupComponent implements OnInit {

  @Input()
  group!: ExpenseGroup;

  public showNewMemberModal: boolean = false;

  constructor(private addMemberModalService: AddMemberModalService, private addPaymenModalService: AddPaymentModalService) { }

  ngOnInit(): void {
    if (this.group) {
      this.group.payments.sort((a, b) => (a.creationDate > b.creationDate ? -1 : 1));
    }
  }


  openNewMemberModal(groupId: number) {
    this.addMemberModalService.open(groupId);
  }

  openNewPaymenyModal(groupId: number) {
    this.addPaymenModalService.open(groupId);
  }

}
