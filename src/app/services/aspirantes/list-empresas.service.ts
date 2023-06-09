import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmpresasReqResponsive } from '../../models/reqres-EmpResponse';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ListEmpresasService {

  constructor( private http: HttpClient) {}

  cargarEmpresas() {
    const url = 'http://localhost:8080/empresas';
    return this.http.get<EmpresasReqResponsive[]>(url);
  }

}
