import { Component,OnInit } from '@angular/core';
import { ListEmpresasService } from '../../../services/aspirantes/list-empresas.service';
import { EmpresasReqResponsive } from '../../../models/reqres-EmpResponse';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

export class AppComponent {
}

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styles: [

  ]
})
export class ListEmpresasComponent implements OnInit{

  public empresas: any =[];
  public filteredEmpresas: any=[];
  public filterBy='';
  constructor(private listEmpresasService:ListEmpresasService ){}

  ngOnInit() {

    this.listEmpresasService.cargarEmpresas()
        .subscribe( (resp: EmpresasReqResponsive[]) => {

          console.log(resp[0]);
          this.empresas=resp ;
          this.filteredEmpresas = [...this.empresas];
        });
  }
  filter() {
    this.filteredEmpresas = [...this.empresas.filter((empre: { name: string | string[]; }) => empre.name.includes(this.filterBy))];
  }

}
