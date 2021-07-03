import { Component, OnInit, Input } from '@angular/core';
import { ExpenseGroup } from '../../model/expense-group';

@Component({
  selector: 'app-expense-group',
  templateUrl: './expense-group.component.html',
  styleUrls: ['./expense-group.component.css']
})
export class ExpenseGroupComponent implements OnInit {

  @Input()
  group!: ExpenseGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
