import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  public user = {
    username : '',
    password : '',
    emailUsuario : ''
  }


  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Usuario guardado con exito','Aceptar',{
          duration : 3000,
          verticalPosition : 'top',
          horizontalPosition : 'right'
        });
      },(error) => {
        this.snack.open('Verifique campos requeridos','Aceptar',{
          duration : 3000,
          verticalPosition : 'top',
          horizontalPosition : 'right'
        });
      }
    )
  }


}
