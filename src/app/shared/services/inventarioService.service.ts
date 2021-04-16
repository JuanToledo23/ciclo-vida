import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InventarioService {

    fechaSeleccionada: any;

    mostrarFiltros: boolean = false;

    inventario = [
        { id: 0, tiendas: 50, descuento: 50, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 1, tiendas: 50, descuento: 50, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'No resurtible', piezas: '1,027' },
        { id: 2, tiendas: 50, descuento: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Línea', piezas: '1,027' },
        { id: 3, tiendas: 50, descuento: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Nuevo', piezas: '1,027' },        
        { id: 4, tiendas: 50, descuento: 80, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' }, 
        { id: 5, tiendas: 50, descuento: 50, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'No resurtible', piezas: '1,027' },
        { id: 6, tiendas: 50, descuento: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Línea', piezas: '1,027' },
        { id: 7, tiendas: 50, descuento: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Nuevo', piezas: '1,027' },    
    ];

    inventarioRiesgo = [
        { id: 0, territorio: 'Bajío', piezas: '1500', tiendas: '50', costo: '249k' },
        { id: 0, territorio: 'Golfo', piezas: '1200', tiendas: '50', costo: '230k' },
        { id: 0, territorio: 'Metro Norte', piezas: '1100', tiendas: '50', costo: '220k' },
        { id: 0, territorio: 'Metro Sur', piezas: '2000', tiendas: '50', costo: '180k' },
        { id: 0, territorio: 'Occidente', piezas: '350', tiendas: '50', costo: '150k' },
        { id: 0, territorio: 'Pacifico Norte', piezas: '800', tiendas: '50', costo: '120k' },
        { id: 0, territorio: 'Pacifico Sur', piezas: '850', tiendas: '50', costo: '120k' },
        { id: 0, territorio: 'Sureste', piezas: '950', tiendas: '50', costo: '110k' },
    ];

    tiendas = [
        { nombre: 'Mega Elektra Av. Aguascalientes', piezas: '1500', costo: '50K' },
        { nombre: 'Mega Aguascalientes 2 Asunción', piezas: '350', costo: '34K' },
        { nombre: 'Mega Elektra Aguascalientes Siglo XXI', piezas: '300', costo: '20K' },
        { nombre: 'Elektra Mega Ags Circunvalación Pte', piezas: '300', costo: '20K' },
        { nombre: 'Elektra Allende 117', piezas: '300', costo: '18K' },
        { nombre: 'Elektra Guadalajara, Jal', piezas: '280', costo: '18K' },
        { nombre: 'Mega Elektra Av. Aguascalientes', piezas: '1500', costo: '50K' },
        { nombre: 'Mega Aguascalientes 2 Asunción', piezas: '350', costo: '34K' },
        { nombre: 'Mega Elektra Aguascalientes Siglo XXI', piezas: '300', costo: '20K' },
        { nombre: 'Elektra Mega Ags Circunvalación Pte', piezas: '300', costo: '20K' },
        { nombre: 'Elektra Allende 117', piezas: '300', costo: '18K' },
        { nombre: 'Elektra Guadalajara, Jal', piezas: '280', costo: '18K' },
    ];

    constructor() { }

    getInventario() {
        return this.inventario;
    }
    getInventarioRiesgo() {
        return this.inventarioRiesgo;
    }
    getTiendas() {
        return this.tiendas;
    }
}

