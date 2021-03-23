import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InventarioService {

    inventario = [
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'No resurtible', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
        { id: 0, img: 'assets/img/colchon.png', categoria: 'colchones', nombre: 'Set Restonic Queen Size Grey', sku: '6002623', cantidad: '$ 3, 874,871', estado: 'Discontinuo', piezas: '1,027' },
    ];

    constructor() { }

    getInventario() {
        return this.inventario;
    }
}

