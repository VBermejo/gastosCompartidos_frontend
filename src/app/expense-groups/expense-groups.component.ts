import { Component, OnInit } from '@angular/core';
import { ExpenseGroup } from '../model/expense-group';
import { Member } from '../model/member';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-expense-groups',
  templateUrl: './expense-groups.component.html',
  styleUrls: ['./expense-groups.component.css']
})
export class ExpenseGroupsComponent implements OnInit {

  private members: Member[] = [
      new Member(1, "Francisco Buyo", "2021-07-01"),
      new Member(2, "Alfonso Pérez", "2021-07-02"),
      new Member(3, "Raúl González", "2021-07-02"),
      new Member(4, "José María Gutiérrez", "2021-07-02")
  ];


  private payments: Payment[] = [
      new Payment(1, 100, "Cena", '2021-07-02 20:01:45', this.members[0]),
      new Payment(2, 10, "Taxi", '2021-07-03 04:59:45', this.members[1]),
      new Payment(3, 53.40, "Compra", '2021-07-03 16:01:03', this.members[1]),
  ];


  expenseGroups: ExpenseGroup[] = [
    new ExpenseGroup(1, "prueba1", '2021.-07-03', this.payments),
    new ExpenseGroup(2, "prueba2", '2021.-07-03', this.payments)
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
