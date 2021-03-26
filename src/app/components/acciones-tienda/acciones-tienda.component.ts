import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';

@Component({
  selector: 'app-acciones-tienda',
  templateUrl: './acciones-tienda.component.html'
})
export class AccionesTiendaComponent implements OnInit {

  accion: any;
  opt1: boolean = false;
  opt2: boolean = false;
  opt3: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cambioAccion() {
    console.log(this.accion);
    this.limpiarOpciones();
    switch (this.accion) {
      case 'opt1':
        this.opt1 = true;
        break;
      case 'opt2':
        this.opt2 = true;
        break;
      case 'opt3':
        this.opt3 = true;
        break;
    
      default:
        break;
    }

  }

  limpiarOpciones() {
    this.opt1 = false;
    this.opt2 = false;
    this.opt3 = false;
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
      /* this.router.navigate(['/']);
      this._loginService.mostrarHeader = true; */
    });
  }

}
