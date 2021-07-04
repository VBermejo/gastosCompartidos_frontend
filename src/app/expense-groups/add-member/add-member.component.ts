import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public member: Member;
  public title: string = "Añadir amigo al grupo";

  constructor() {
    this.member = new Member();
  }

  ngOnInit(): void {
  }

  public create():void {
    console.log("clicked!");
    console.log(this.member);
  }

}
