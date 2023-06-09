import { Component } from '@angular/core';
import { InfoAspiService } from 'src/app/services/aspirantes/info-aspi.service';

@Component({
  selector: 'app-info-aspi',
  templateUrl: './info-aspi.component.html',
  styles: [
  ]
})
export class InfoAspiComponent {
  constructor(private infoAspiService:InfoAspiService) {}
}
