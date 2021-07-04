import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public user: User = new User(NaN, "", "");

  ngOnInit(): void {
  }

  public login(): void {
    if (this.user && this.user.username !== '' && this.user.password !== '') {      
        let waitDialog = Swal.fire({
        html: 'Por favor, espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });   
      this.userService.login(this.user).subscribe(
        response => {
          Swal.close();
          if (response) {
            sessionStorage.setItem("userId", response.toString());
            this.router.navigate(["/groups"]); 
          } else {
            Swal.fire('Error',  'Las credenciales no son válidas',  'error');
          }
        },
        error => {
          Swal.fire('Error',  'Ha ocurrido un error en el proceso de login',  'error');
        }
      );
    } else {
      Swal.fire('',  'Debe introducir los datos de su usuario',  'warning');
    }
  }
}
