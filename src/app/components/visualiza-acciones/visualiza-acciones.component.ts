import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-visualiza-acciones',
  templateUrl: './visualiza-acciones.component.html'
})
export class VisualizaAccionesComponent implements OnInit {

  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Más opciones', true, false, true);
  }

  ngOnInit(): void {
  }

}
