import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {

  inventario: any;

  constructor(public _InventarioService: InventarioService, public _HeaderFooterService: HeaderFooterService) {
    this.inventario = this._InventarioService.getInventario();
    this._HeaderFooterService.construirHeader('ico-inventario-activo', 'Inventario', false, true, true, 'Hogar');
  }

  ngOnInit(): void {
  }

}
