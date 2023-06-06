import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent /*implements OnInit*/ {

  /*
  public user = {
    username : '',
    password : '',
    email : ''
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('El nombre del usuario es requerido')

      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado con exito')
      },(error) => {
        console.log(error);
        alert('Error en el sistema')
      }
    )
  }

   */

}
