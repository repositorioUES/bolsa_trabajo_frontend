import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OfertasReqResponsive } from '../../models/reqres-OferResponse';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor( private http: HttpClient) {}

  cargarOfertas() {
    const url = 'http://localhost:8080/ofertas';
    return this.http.get<OfertasReqResponsive[]>(url);
  }
}
