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

    constructor(
        public location: Location
    ) { }

    goBack() {
        this.location.back();
    }

    construirHeader(ico: string, titulo: string, regresar: boolean, buscador: boolean, tituloAmarillo?: string) {
        this.iconoHeader = ico;
        this.titulo = titulo;
        this.regresar = regresar;
        this.buscador = buscador;
        this.tituloAmarillo = tituloAmarillo;
    }
}

