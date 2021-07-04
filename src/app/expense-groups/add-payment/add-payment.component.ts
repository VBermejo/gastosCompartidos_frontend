import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { Payment } from 'src/app/model/payment';
import { PayGroupService } from 'src/app/service/pay-group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  public payment: Payment = new Payment(NaN, NaN, "", "", new Member(NaN, "", ""), NaN);
  public title: string = "Añadir nuevo pago";
  public groupId: number;
  public members: Member[];

  constructor(private payGroupService: PayGroupService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.groupId = params['id'];
    });

    this.payGroupService.getGroupMembers(this.groupId).subscribe(
      response => this.members = response
    );
  }

  public create():void {
    if (this.payment && this.payment.description && this.payment.amount !== NaN && this.payment.payerId !== NaN) {
      let waitDialog = Swal.fire({
        title: 'Nuevo gasto',
        html: 'Por favor, espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });  
      
      debugger;

      this.payGroupService.addPayment(this.groupId, this.payment).subscribe(
        response => {
          this.router.navigate(["/groups"]);          
          Swal.fire('Nuevo gasto',  `Gasto ${this.payment.description} añadido con éxito`,  'success');
        },
        error => {
          Swal.fire('Error',  `Ha ocurrido un error en la creación del gasto`,  'error');
        }
      );
    }
  }

}
