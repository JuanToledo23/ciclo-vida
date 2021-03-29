import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TerritoriosService } from '../../services/territotiosService.service';

@Component({
  selector: 'app-formulario-dialog',
  templateUrl: './formulario.dialog.html'
})
export class FormularioDialog implements OnInit {

  territorios: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _TerritoriosService: TerritoriosService) {
    console.log(this.data);
    this.territorios = this._TerritoriosService.getTerritorios();
  }

  ngOnInit(): void {
  }

  seleccionTerritorio(territorio) {
    this._TerritoriosService.seleccionarTerritorio(territorio);
  }

}
