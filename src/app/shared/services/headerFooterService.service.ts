import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HeaderFooterService {

    iconoHeader: string = 'ico-inventario-activo';
    titulo: string = '';
    tituloAmarillo: string = '';
    regresar: boolean = false;
    buscador: boolean = false;
    mostrarFooter: boolean = true;
    mostrarHeader: boolean = true;

    opcionesFooter = [
        { nombre: 'Inventario', img: 'ico-inventario-activo', rute: '', estatus: true },
        { nombre: 'Matriz de riesgo', img: 'ico-llama', rute: '/matriz-inventario-riesgo', estatus: false },
        { nombre: 'Alertas', img: 'ico-campana', rute: '/alertas', estatus: false },
        { nombre: 'Más', img: 'ico-menu', rute: '/mas', estatus: false },
    ];

    constructor(
        public location: Location
    ) { }

    goBack() {
        this.location.back();
    }

    construirHeader(ico: string, titulo: string, regresar: boolean, buscador: boolean, mostrarFooter: boolean, tituloAmarillo?: string) {
        this.iconoHeader = ico;
        this.titulo = titulo;
        this.regresar = regresar;
        this.buscador = buscador;
        this.tituloAmarillo = tituloAmarillo;
        this.mostrarFooter = mostrarFooter;
    }

    getOpcionesFooter() {
        return this.opcionesFooter;
    }
}

