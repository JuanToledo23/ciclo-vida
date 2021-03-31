import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from '../../services/headerFooterService.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  opcionesFooter: any;

  constructor(public _HeaderFooterService: HeaderFooterService) {
    this.opcionesFooter = this._HeaderFooterService.getOpcionesFooter();
  }

  ngOnInit(): void {
  }

  cambioOpcion(opcion) {
    console.log(opcion)
    this.opcionesFooter.forEach(element => {
      element.estatus = false;
    });
    opcion.estatus = true;
  }

}
