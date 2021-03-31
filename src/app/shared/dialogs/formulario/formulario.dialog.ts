import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventarioService } from '../../services/inventarioService.service';
import { TerritoriosService } from '../../services/territotiosService.service';

@Component({
  selector: 'app-formulario-dialog',
  templateUrl: './formulario.dialog.html'
})
export class FormularioDialog implements OnInit {

  territorios: any;

  tiendas: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _TerritoriosService: TerritoriosService, public _InventarioService: InventarioService) {
    console.log(this.data);
    this.territorios = this._TerritoriosService.getTerritorios();
    this.tiendas = this._InventarioService.getTiendas();
  }

  ngOnInit(): void {
  }

  seleccionTerritorio(territorio) {
    this._TerritoriosService.seleccionarTerritorio(territorio);
  }

}
