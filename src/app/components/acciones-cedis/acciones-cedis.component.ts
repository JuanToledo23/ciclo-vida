import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-acciones-cedis',
  templateUrl: './acciones-cedis.component.html'
})
export class AccionesCedisComponent implements OnInit {

  accion: string = '';

  constructor(public _HeaderFooterService: HeaderFooterService, private router: Router) {
    this._HeaderFooterService.construirHeader('', 'Más opciones', true, false, false);
  }

  ngOnInit(): void {
  }

  continuar() {
    console.log(this.accion);
    switch (this.accion) {
      case 'opt1':
        this.router.navigate(['/acciones-cedir/devolucion-proveedor']);
        break;
      case 'opt2':
        this.router.navigate(['/acciones-cedir/donacion']);
        break;
      case 'opt3':
        this.router.navigate(['/acciones-cedir/venta-lote']);
        break;
      case 'opt4':
        this.router.navigate(['/acciones-cedir/envio-destruccion']);
        break;
    
      default:
        break;
    }
  }

}
