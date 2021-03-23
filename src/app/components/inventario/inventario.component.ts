import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {

  inventario: any;

  constructor(public _InventarioService: InventarioService) {
    this.inventario = this._InventarioService.getInventario();
  }

  ngOnInit(): void {
  }

}
