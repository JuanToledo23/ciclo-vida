import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { TerritoriosService } from 'src/app/shared/services/territotiosService.service';

@Component({
  selector: 'app-combo-descuento',
  templateUrl: './combo-descuento.component.html'
})
export class ComboDescuentoComponent implements OnInit {

  territoriosSeleccionados: string = '';

  descuento: string = '';

  continueButton: boolean = false;

  constructor(public _HeaderFooterService: HeaderFooterService, public _TerritoriosService: TerritoriosService, public dialog: MatDialog, private router: Router) {
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
    if(this.descuento === '', this.territoriosSeleccionados === '') {
      this.continueButton = false;
    } else {
      this.continueButton = true;
    }
  }

  previsualizar() {
    const dialogRef = this.dialog.open(FormularioDialog, {
      disableClose: true,
      data: {
          tipo: 3,
          titulo: '',
          botonAceptar: 'Enviar solicitud',
          botonCancelar: 'Cancelar'
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const dialogRef = this.dialog.open(FormularioDialog, {
          disableClose: true,
          data: {
              tipo: 2,
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.router.navigate(['/acciones-tienda']);
          }
        });
      }
    });
  }

}
