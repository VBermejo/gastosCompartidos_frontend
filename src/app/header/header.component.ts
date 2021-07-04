import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Gastos compartidos'

  constructor() { }

  ngOnInit(): void {
  }
  
  logout() {
    sessionStorage.removeItem("userId");
  }

}
