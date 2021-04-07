import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-accion-solicitada',
  templateUrl: './accion-solicitada.component.html'
})
export class AccionSolicitadaComponent implements OnInit {

  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Acciones solicitadas', true, false, true);
  }

  ngOnInit(): void {
  }

}
