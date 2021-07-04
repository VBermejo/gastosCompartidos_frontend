import { Component, OnInit } from '@angular/core';
import { ExpenseGroup } from '../model/expense-group';
import { Member } from '../model/member';
import { Payment } from '../model/payment';
import { PayGroupService } from '../service/pay-group.service';

@Component({
  selector: 'app-expense-groups',
  templateUrl: './expense-groups.component.html',
  styleUrls: ['./expense-groups.component.css']
})
export class ExpenseGroupsComponent implements OnInit {

  expenseGroups: ExpenseGroup[] = [];
  
  constructor(private payGroupService: PayGroupService) { }

  ngOnInit(): void {
      //TODO obtener memberId from user
      this.payGroupService.getGroups(1).subscribe(
        expenseGroups => this.expenseGroups = expenseGroups
      );

  }

}
