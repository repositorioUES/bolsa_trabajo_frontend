import { Component } from '@angular/core';
import { OfertasReqResponsive } from 'src/app/models/reqres-OferResponse';
import { OfertasService } from 'src/app/services/aspirantes/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: [
  ]
})
export class OfertasComponent {
  public ofertas: any =[];
  public filteredOfertas: any=[];
  public filterBy='';
  constructor(private listOfertasService:OfertasService ){}
  ngOnInit() {

    this.listOfertasService.cargarOfertas()
        .subscribe( (resp: OfertasReqResponsive[]) => {

          //console.log(resp[0]);
          this.ofertas=resp ;

          this.filteredOfertas = [...this.ofertas];
        });
  }
  filter() {
    this.filteredOfertas = [...this.ofertas.filter((ofer: { nombre: string | string[]; }) => ofer.nombre.includes(this.filterBy))];
  }
}
