import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from '../helper';
import { Observable } from 'rxjs';
import { AspirantesReqResponsive } from 'src/app/models/reqres-AspResponse';
import { InfoAspi } from 'src/app/models/info-aspi';
import { Aspir } from './aspir';



@Injectable({
  providedIn: 'root'
})
export class InfoAspiService {

  constructor(private http: HttpClient) { }


  //GUARDAR
  public addInfoAspi(aspirante:Aspir) {
      console.log('http://localhost:8080/aspirantes/genero/'+aspirante.genero+'/usuario/'+aspirante.usuario);
      console.log(aspirante);
      return this.http.post('http://localhost:8080/aspirantes/genero/1/usuario/3', aspirante);
  }







  //CARGAR UNO
  cargarAspirante(id:number) {
    return this.http.get<AspirantesReqResponsive>(`${baseUrl}/{id}`);
  }
  //ELIMINARR UNO
  eliminarAspirante(id:number) {
    return this.http.delete<AspirantesReqResponsive>(`${baseUrl}/{id}`);
  }


}
function isLoggedIn() {
  let tokenStr = localStorage.getItem('token');
  if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
    return false;
  }else{
    return true;
  }
}

