import { Component, OnInit } from '@angular/core';
import { InfoAspiService } from 'src/app/services/aspirantes/info-aspi.service';
import { InfoAspi } from '../../../models/info-aspi';
import { Router } from '@angular/router';
import { Aspir } from 'src/app/services/aspirantes/aspir';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-info-aspi',
  templateUrl: './info-aspi.component.html',
  styles: [
  ]
})
export class InfoAspiComponent  implements OnInit{
  aspi:Aspir = new Aspir();
  constructor(private infoAspiService:InfoAspiService, private router:Router, private loginService:LoginService) {}
  public aspirantes: any;
  ngOnInit(): void {
  }


  create():void{

    this.loginService.isLoggedIn();

    //console.log(this.aspi)
    this.infoAspiService.addInfoAspi(this.aspi);
  }






}
