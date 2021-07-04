import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { PayGroupService } from 'src/app/service/pay-group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public member: Member = new Member(NaN, "", "");
  public title: string = "Añadir amigo al grupo";
  public groupId: number;

  constructor(private payGroupService: PayGroupService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.groupId = params['id'];
    });
  }

  public create():void {
    if (this.member && this.member.name !== '') {
      let waitDialog = Swal.fire({
        title: 'Nuevo miembro',
        html: 'Por favor, espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });  
  
      this.payGroupService.createMemberAndAddToGroup(this.groupId, this.member).subscribe(
        response => {
          this.router.navigate(["/groups"]);          
          Swal.fire('Nuevo miembro',  `Miembro ${response.name} añadido con éxito`,  'success');
        },
        error => {
          Swal.fire('Error',  `Ha ocurrido un error en la creación del nuevo miembro`,  'error');
        }
      );
    }
  }

}
