import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { PayGroupService } from 'src/app/service/pay-group.service';
import Swal from 'sweetalert2';
import { AddMemberModalService } from './add-member-modal.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public member: Member = new Member(NaN, "", "");
  public title: string = "Añadir amigo al grupo";

  @Input()
  public groupId: number;

  constructor(private payGroupService: PayGroupService, public modalService: AddMemberModalService) {
  }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params => {
    //   this.groupId = params['id'];
    // });
  }

  public create():void {
    if (this.member && this.member.name !== '') {
      this.closeModal();
      let waitDialog = Swal.fire({
        title: 'Nuevo miembro',
        html: 'Por favor, espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });      
      this.payGroupService.createMemberAndAddToGroup(this.modalService.groupId, this.member).subscribe(
        response => {
          // this.router.navigate(["/groups"]);          
          Swal.fire('Nuevo miembro',  `Miembro ${response.name} añadido con éxito`,  'success');
        },
        error => {
          Swal.fire('Error',  `Ha ocurrido un error en la creación del nuevo miembro`,  'error');
        }
      );
    } else {
      Swal.fire('',  "Los datos son obligatorios",  'warning');
    }
  }
  
  closeModal() {
    this.member = new Member(NaN, "", "");
    this.modalService.close()
  }

}
