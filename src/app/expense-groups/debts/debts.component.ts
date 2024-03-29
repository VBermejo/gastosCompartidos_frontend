import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/model/debt';
import { DebtsService } from 'src/app/service/debts.service';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  @Input()
  groupId!: number;

  
  debts: Debt[] = [];

  constructor(private debtsService: DebtsService) { }

  ngOnInit(): void {
    this.debtsService.getByGroup(this.groupId).subscribe(
      debts => this.debts = debts
    );
  }

  public formatedCash(debt: Debt) :string {
    return Utils.formatAmount(debt.cash);        
  } 

}
