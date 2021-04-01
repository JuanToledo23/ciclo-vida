import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-inventario-riesgo',
  templateUrl: './inventario-riesgo.component.html'
})
export class InventarioRiesgoComponent implements OnInit {

  inventarioRiesgo: any;

  constructor(public _InventarioService: InventarioService, public _HeaderFooterService: HeaderFooterService, public dialog: MatDialog) {
    this.inventarioRiesgo = this._InventarioService.getInventarioRiesgo();
    this._HeaderFooterService.construirHeader('', 'Inventario en riesgo', true, false, true); 
  }

  ngOnInit(): void {
  }

  abrirTiendas() {
    const dialogRef = this.dialog.open(FormularioDialog, {
      disableClose: true,
      data: {
          tipo: 4,
          titulo: 'Tiendas',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
/*         if(this._TerritoriosService.territorios[0].estatus) {
          this.territoriosSeleccionados = 'Todos los territorios'
        } else {
          this.territoriosSeleccionados = '';
          this._TerritoriosService.territorios.forEach(element => {
            if(element.estatus){
              this.territoriosSeleccionados += element.nombre + ', ';
            }
          });
          this.territoriosSeleccionados = this.territoriosSeleccionados.slice(0, -2);
        }
        this.validarFormulario(); */
      }
    });
  }

}
