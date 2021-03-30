import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { TerritoriosService } from 'src/app/shared/services/territotiosService.service';

@Component({
  selector: 'app-combo-descuento',
  templateUrl: './combo-descuento.component.html'
})
export class ComboDescuentoComponent implements OnInit {

  territoriosSeleccionados: string = '';

  constructor(public _HeaderFooterService: HeaderFooterService, public _TerritoriosService: TerritoriosService, public dialog: MatDialog) {
    this._HeaderFooterService.construirHeader('', 'Combo con descuento', true, false, false); 
  }

  ngOnInit(): void {
  }

  seleccionarTerritorio() {
    const dialogRef = this.dialog.open(FormularioDialog, {
      disableClose: true,
      data: {
          tipo: 0,
          titulo: 'Selecciona uno o varios territorios',
          botonAceptar: 'Continuar',
          botonCancelar: 'Cancelar'
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if(this._TerritoriosService.territorios[0].estatus) {
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
        this.validarFormulario();
      }
    });
  }

  validarFormulario() {
    // if(this.accion === '' || this.canal === '' || this.descuento === '', this.territoriosSeleccionados === '') {
    //   this.continueButton = false;
    // } else {
    //   this.continueButton = true;
    // }
  }

}
