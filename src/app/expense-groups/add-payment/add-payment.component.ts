import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { Payment } from 'src/app/model/payment';
import { PayGroupService } from 'src/app/service/pay-group.service';
import Swal from 'sweetalert2';
import { AddPaymentModalService } from './add-payment-modal.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  public payment: Payment = new Payment(NaN, NaN, "", "", new Member(NaN, "", ""), NaN);
  public title: string = "Añadir nuevo pago";

  @Input()
  public groupId: number;

  constructor(private payGroupService: PayGroupService, public modalService: AddPaymentModalService, private router: Router) { }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params => {
    //   this.groupId = params['id'];
    // });
  }

  public create():void {
    if (this.payment && this.payment.description && this.payment.amount !== NaN && this.payment.payerId !== NaN) {
      this.closeModal();
      let waitDialog = Swal.fire({
        title: 'Nuevo gasto',
        html: 'Por favor, espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      }); 

      this.payGroupService.addPayment(this.modalService.groupId, this.payment).subscribe(
        response => {
          Swal.fire('Nuevo gasto',  `Gasto ${this.payment.description} añadido con éxito`,  'success');          
          this.payment = new Payment(NaN, NaN, "", "", new Member(NaN, "", ""), NaN);
          this.router.navigate(["/login"]);
        },
        error => {
          Swal.fire('Error',  `Ha ocurrido un error en la creación del gasto`,  'error');
        }
      );
    }
  }

    
  closeModal() {
    this.modalService.close()
  }

}
