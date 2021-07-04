import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseGroup } from '../model/expense-group';
import { MemberService } from '../service/member.service';
import { PayGroupService } from '../service/pay-group.service';

@Component({
  selector: 'app-expense-groups',
  templateUrl: './expense-groups.component.html',
  styleUrls: ['./expense-groups.component.css']
})
export class ExpenseGroupsComponent implements OnInit {

  expenseGroups: ExpenseGroup[] = [];
  
  constructor(private payGroupService: PayGroupService, private memberService: MemberService, private router: Router) { }

  ngOnInit(): void {
      let userId: number = Number(sessionStorage.getItem("userId"));
      if (userId) {
        this.memberService.getByUser(userId).subscribe(
          response => {
            if(response) {
              this.payGroupService.getGroups(response.id).subscribe(
                expenseGroups => this.expenseGroups = expenseGroups
              );
            }
          });
      } else {        
        this.router.navigate(["/login"]);
      }

  }

}
