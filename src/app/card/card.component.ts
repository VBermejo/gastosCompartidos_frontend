import { Component, OnInit, Input } from '@angular/core';


const defaultValue: string = "Sin especificar";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  topLeft: string = defaultValue;

  @Input()
  topRight: string = defaultValue;

  @Input()
  bottomLeft: string = defaultValue;

  @Input()
  bottomRight: string = defaultValue;

  constructor() { }

  ngOnInit(): void {
  }

}
