import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { EChartsOption, number } from 'echarts';

@Component({
  selector: 'app-matriz-inventario-riesgo',
  templateUrl: './matriz-inventario-riesgo.component.html'
})
export class MatrizInventarioRiesgoComponent implements OnInit {

  textoIzquierda: string = 'Total';
  textoDerecha: string = '$6,490,520,272';

  botonesRotacion = [
    { nombre: 'Total', textoDuracion: 'Total', cantidad: '$6,490,520,272', estatus: true },
    { nombre: '>6M', textoDuracion: 'Menor a 6 meses', cantidad: '$850,000,000', estatus: false },
    { nombre: '< 6', textoDuracion: '6 meses a 1 año', cantidad: '$860,000,000', estatus: false },
    { nombre: '< 1', textoDuracion: 'Más de 1 año', cantidad: '$850,000,000', estatus: false },
    { nombre: '< 2', textoDuracion: 'Más de 2 años', cantidad: '$860,000,000', estatus: false },
    { nombre: 'SV', textoDuracion: 'Sin venta', cantidad: '$964,000,000', estatus: false },
  ];

  discontinuo = [
    { value: 99, color: '#FFCC00' },
    { value: 83, color: '#FF9F17' },
    { value: 68, color: '#CC3333' },
  ];
  nr = [
    { value: 192, color: '#FFCC00' },
    { value: 60, color: '#FF9F17' },
    { value: 32, color: '#CC3333' },
  ];
  linea = [
    { value: 248, color: '#FF9F17' },
    { value: 175, color: '#CC3333' },
  ];
  nuevo = [
    { value: 35, color: '#FF9F17' },
    { value: 25, color: '#CC3333' },
  ];



  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Matriz de inventario en riesgo', true, false, true);
  }

  ngOnInit(): void {
  }

  datosAleatorios() {
    this.limpiarDatos();
    this.discontinuo.push({value: this.numeroAleatorio(), color: '#FFCC00'});
    this.discontinuo.push({value: this.numeroAleatorio(), color: '#FF9F17'});
    this.discontinuo.push({value: this.numeroAleatorio(), color: '#CC3333'});
    this.nr.push({value: this.numeroAleatorio(), color: '#FFCC00'});
    this.nr.push({value: this.numeroAleatorio(), color: '#FF9F17'});
    this.nr.push({value: this.numeroAleatorio(), color: '#CC3333'});
    this.linea.push({value: this.numeroAleatorio(), color: '#FF9F17'});
    this.linea.push({value: this.numeroAleatorio(), color: '#CC3333'});
    this.nuevo.push({value: this.numeroAleatorio(), color: '#FF9F17'});
    this.nuevo.push({value: this.numeroAleatorio(), color: '#CC3333'});
  }

  limpiarDatos() {
    this.discontinuo = [];
    this.nr = [];
    this.linea = [];
    this.nuevo = [];
  }


  numeroAleatorio() {
    return Math.floor(Math.random() * 300) + 0;
  }

  sumatoria(array) {
    let suma: number = 0;
    array.forEach(element => {
      suma += element.value;
    });
    return suma;
  }

  porcentaje(valor, sumatoria) {
    let porcent: number = 0;
    porcent = (valor*100)/sumatoria;
    return porcent;
  }

  selecionarOpcion(boton) {
    this.botonesRotacion.forEach(element => {
      element.estatus = false;
    });
    boton.estatus = true;
    this.textoIzquierda = boton.textoDuracion;
    this.textoDerecha = boton.cantidad;
    this.datosAleatorios();
  }

}
