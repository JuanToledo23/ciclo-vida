import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-matriz-inventario-riesgo',
  templateUrl: './matriz-inventario-riesgo.component.html'
})
export class MatrizInventarioRiesgoComponent implements OnInit {

  botonesRotacion = [
    { nombre: 'Total', estatus: true },
    { nombre: '>6M', estatus: false },
    { nombre: '< 6', estatus: false },
    { nombre: '< 1', estatus: false },
    { nombre: '< 2', estatus: false },
    { nombre: 'SV', estatus: false },
  ];

  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Inventario', true, false, true);
  }

  ngOnInit(): void {
  }

}
