import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { DatepickerDialog } from 'src/app/shared/dialogs/datepicker/datepicker.dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-devolucion-proveedor',
  templateUrl: './devolucion-proveedor.component.html'
})
export class DevolucionProveedorComponent implements OnInit {
  
  constructor(public _HeaderFooterService: HeaderFooterService, public dialog: MatDialog) {
    this._HeaderFooterService.construirHeader('', 'Devolución a proveedor', true, false, false);
  }

  ngOnInit(): void {
  }

  abrirDialog() {
    const dialogRef = this.dialog.open(DatepickerDialog, {
      disableClose: true,
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if(result) {
    //     if(this._TerritoriosService.territorios[0].estatus) {
    //       this.territoriosSeleccionados = 'Todos los territorios'
    //     } else {
    //       this.territoriosSeleccionados = '';
    //       this._TerritoriosService.territorios.forEach(element => {
    //         if(element.estatus){
    //           this.territoriosSeleccionados += element.nombre + ', ';
    //         }
    //       });
    //       this.territoriosSeleccionados = this.territoriosSeleccionados.slice(0, -2);
    //     }
    //     this.validarFormulario();
    //     this._TerritoriosService.limpiarTerritorios();
    //   }
    // });
  }

}
