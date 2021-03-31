import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';
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
  territoriosSeleccionados2: string = '';

  canal: any;
  descuento: any;
  continueButton: boolean = false;
  continueButton2: boolean = false;
  continueButton3: boolean = false;

  inventario: any = [];
  articuloMostrado: any;

  articulosLigar = [
    {id: 0, texto: ''},
  ];
  articulosLigar2 = [
    {id: 0, texto: ''},
  ];

  constructor(public dialog: MatDialog, public _TerritoriosService: TerritoriosService, public _HeaderFooterService: HeaderFooterService, private router: Router, private route: ActivatedRoute, public _InventarioService: InventarioService) {
    this._HeaderFooterService.construirHeader('', 'Acciones en tienda', true, false, false);

    
    this.inventario = this._InventarioService.getInventario();

    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.articuloMostrado = this.inventario.find((video: { id: number; }) => video.id === idFromRoute);
    if(this.articuloMostrado) {
      this.accion = 'opt1';
      this.canal = 'opt1';
      this.descuento = 'opt1';
      this.territoriosSeleccionados = 'Bajío, Pacifico Sur';
      this.cambioAccion();
      this.continueButton = true;
    }
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
        this._TerritoriosService.limpiarTerritorios();
      }
    });
  }

  seleccionarTerritorio2() {
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
          this.territoriosSeleccionados2 = 'Todos los territorios'
        } else {
          this.territoriosSeleccionados2 = '';
          this._TerritoriosService.territorios.forEach(element => {
            if(element.estatus){
              this.territoriosSeleccionados2 += element.nombre + ', ';
            }
          });
          this.territoriosSeleccionados2 = this.territoriosSeleccionados2.slice(0, -2);
        }
        this.validarFormulario3();
        this._TerritoriosService.limpiarTerritorios();
      }
    });
  }

  validarFormulario() {
    if(this.accion !== '' || this.canal !== '' || this.descuento !== '', this.territoriosSeleccionados !== '') {
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
  validarFormulario3() {
    this.continueButton3 = true;
    this.articulosLigar2.forEach(element => {
      if(!element.texto) {
        this.continueButton3 = false;
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
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.limpiarOpciones();
            this.accion = '';
          }
        });
      }
    });
    
  }
  previsualizar2() {
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
            this.limpiarOpciones();
            this.accion = '';
          }
        });
      }
    });
  }

  agregrArticulo() {
    this.articulosLigar.push(
      {id: this.articulosLigar.length + 1, texto: ''}
    );
  }
  agregrArticulo2() {
    this.articulosLigar2.push(
      {id: this.articulosLigar2.length + 1, texto: ''}
    );
  }

}
