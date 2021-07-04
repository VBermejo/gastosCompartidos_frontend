import { Component, Input, OnInit } from '@angular/core';
import { Balance } from 'src/app/model/balance';
import { BalanceService } from 'src/app/service/balance.service';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  @Input()
  groupId!: number;
  
  balance: Balance[] = [];

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.balanceService.calculate(this.groupId).subscribe(
      balance => this.balance = balance
    );
  }

  public formatedCash(balance: Balance) :string {
    return Utils.formatAmount(balance.amount);        
  } 

}
