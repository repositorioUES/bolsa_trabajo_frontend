import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class InfoAspiService {

  constructor(private http: HttpClient) { }

  public addInfoAspi(asp:any) {
    return this.http.post(`${baseUrl}/aspirantes`,asp);
  }

}
