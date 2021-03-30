import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { TerritoriosService } from 'src/app/shared/services/territotiosService.service';

@Component({
  selector: 'app-acciones-tienda',
  templateUrl: './acciones-tienda.component.html'
})
export class AccionesTiendaComponent implements OnInit {

  accion: any;
  opt1: boolean = false;
  opt2: boolean = false;
  opt3: boolean = false;

  territoriosSeleccionados: string = '';

  canal: any;
  descuento: any;
  continueButton: boolean = false;
  continueButton2: boolean = false;

  articulosLigar = [
    {id: 0, texto: ''},
  ];

  constructor(public dialog: MatDialog, public _TerritoriosService: TerritoriosService, public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Acciones en tienda', true, false, false); 
  }

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
    this.validarFormulario();
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
    if(this.accion === '' || this.canal === '' || this.descuento === '', this.territoriosSeleccionados === '') {
      this.continueButton = false;
    } else {
      this.continueButton = true;
    }
  }

  validarFormulario2() {
    this.continueButton2 = true;
    this.articulosLigar.forEach(element => {
      if(!element.texto) {
        this.continueButton2 = false;
      }
    });
  }

  previsualizar() {
    const dialogRef = this.dialog.open(FormularioDialog, {
      disableClose: true,
      data: {
          tipo: 1,
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
      }
    });
  }

  agregrArticulo() {
    this.articulosLigar.push(
      {id: this.articulosLigar.length + 1, texto: ''}
    );
  }

}
