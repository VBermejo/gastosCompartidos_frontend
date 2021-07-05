import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { PayGroupService } from 'src/app/service/pay-group.service';

@Injectable({
  providedIn: 'root'
})
export class AddPaymentModalService {

  show: boolean = false;
  groupId: number;
  public members: Map<number, Member[]> = new Map();

  constructor(private router: Router, private payGroupService: PayGroupService) { }

  open(groupId: number) {
    
    this.payGroupService.getGroupMembers(groupId).subscribe(
      response => this.members.set(groupId, response)
    );
    this.show = true;
    this.groupId = groupId;
  }

  close () {
    this.show = false;
    // this.router.navigate(["/login"]);
  }
}
