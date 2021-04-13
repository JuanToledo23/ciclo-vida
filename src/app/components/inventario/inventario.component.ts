import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {

  inventario: any;

  mostrarFiltros: boolean = false;

  encabezados = [
    {id: 0, titulo: 'Estatus', estatus: true},
    {id: 1, titulo: 'Rotación', estatus: false},
    {id: 2, titulo: 'Descuento', estatus: false},
  ];

  botonesEstatus = [
    {id: 0, titulo: 'Discontinuo', estatus: true, padding: '0px 5px'},
    {id: 1, titulo: 'No resurtible', estatus: false, padding: '0px 5px'},
    {id: 2, titulo: 'Línea', estatus: false, padding: '0px 6px'},
    {id: 3, titulo: 'Nuevos', estatus: false, padding: '0px 4px'},
  ];

  botonesRotacion = [
    {id: 0, titulo: 'Menor a 6 meses', estatus: true, padding: '0px 3px'},
    {id: 1, titulo: '6 meses a 1 año', estatus: false, padding: '0px 3px'},
    {id: 2, titulo: 'Más de 1 año', estatus: false, padding: '0px 3px'},
    {id: 3, titulo: 'Más de 2 años', estatus: false, padding: '0px 3px'},
    {id: 4, titulo: 'Sin venta', estatus: false, padding: '0px 3px'},
  ];
  botonesDescuento = [
    {id: 0, titulo: 'Con descuento', estatus: true, padding: '0px 3px'},
    {id: 1, titulo: 'Sin descuento', estatus: false, padding: '0px 3px'},
  ];

  constructor(public _InventarioService: InventarioService, public _HeaderFooterService: HeaderFooterService, public dialog: MatDialog) {
    this.inventario = this._InventarioService.getInventario();
    this._HeaderFooterService.construirHeader('ico-inventario-activo', 'Inventario', false, true, true, 'Hogar');
    this._HeaderFooterService.mostrarHeader = true;
  }

  ngOnInit(): void {

      const dialogRef = this.dialog.open(FormularioDialog, {
        disableClose: true,
        data: {
            tipo: 5
        },
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result) {}
      });
  }

  seleccionEstatus(boton) {
    this.botonesEstatus.forEach(element => {
      element.estatus = false;
    });
    boton.estatus = true;
  }

  seleccionRotacion(boton) {
    this.botonesRotacion.forEach(element => {
      element.estatus = false;
    });
    boton.estatus = true;
  }

  seleccionDescuento(boton) {
    this.botonesDescuento.forEach(element => {
      element.estatus = false;
    });
    boton.estatus = true;
  }

  seleccionEncabezado(encabezado) {
    this.encabezados.forEach(element => {
      element.estatus = false;
    });
    encabezado.estatus = true;
  }

}
