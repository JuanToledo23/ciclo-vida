import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TerritoriosService {

    territorios = [
        { id: 0, nombre: 'Todos', piezas: '5,000', estatus: false },
        { id: 1, nombre: 'Norte', piezas: '500', estatus: false },
        { id: 2, nombre: 'Bajío', piezas: '300', estatus: false },
        { id: 3, nombre: 'Occidente', piezas: '800', estatus: false },
        { id: 4, nombre: 'Golfo', piezas: '520', estatus: false },
        { id: 5, nombre: 'Pacifico Norte', piezas: '800', estatus: false },
        { id: 6, nombre: 'Metro Norte', piezas: '200', estatus: false },
        { id: 7, nombre: 'Pacifico Sur', piezas: '900', estatus: false },
        { id: 8, nombre: 'Metro Sur', piezas: '550', estatus: false },
        { id: 9, nombre: 'Sureste', piezas: '430', estatus: false },
    ];

    territoriosSeleccionados = [];

    constructor(
    ) { }

    getTerritorios() {
        return this.territorios;
    }

    seleccionarTerritorio(ter) {
        if(ter.id === 0 && ter.estatus === true) {
            this.territorios.forEach(element => {
                element.estatus = true;
            });
        } else if (ter.id === 0 && ter.estatus === false) {
            this.territorios.forEach(element => {
                element.estatus = false;
            });
        }
        this.territorios[0].estatus = this.validarTerritorios();
    }

    validarTerritorios() {
        let est = true;
        for (let index = 1; index < this.territorios.length; index++) {
            const element = this.territorios[index];
            if(!element.estatus) {
                est = false;
            }
        }
        return est;
    }

    getTerritoriosSeleccionados() {
        return this.territoriosSeleccionados;
    }

    limpiarTerritorios() {
        this.territorios.forEach(element => {
            element.estatus = false
        });
        this.territoriosSeleccionados = [];
    }

}

