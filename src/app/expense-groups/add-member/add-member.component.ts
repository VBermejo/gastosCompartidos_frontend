import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { PayGroupService } from 'src/app/service/pay-group.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public member: Member = new Member(0, "", "");
  public title: string = "Añadir amigo al grupo";
  public groupId: number = 1;

  constructor(private payGroupService: PayGroupService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public create():void {
    this.payGroupService.createMemberAndAddToGroup(this.groupId, this.member).subscribe(
      response => this.router.navigate(["/groups"])
    );
  }

}
