import { Component, Input, OnInit } from '@angular/core';
import { Balance } from 'src/app/model/balance';
import { BalanceService } from 'src/app/service/balance.service';

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

}
