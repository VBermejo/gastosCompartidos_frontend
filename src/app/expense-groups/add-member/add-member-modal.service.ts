import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddMemberModalService {

  show: boolean = false;
  groupId: number;

  constructor(private router: Router) { }

  open(groupId: number) {
    this.show = true;
    this.groupId = groupId;
  }

  close () {
    this.show = false;
    // this.router.navigate(["/login"]);
  }
}
