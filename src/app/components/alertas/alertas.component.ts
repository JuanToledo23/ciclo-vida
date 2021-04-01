import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html'
})
export class AlertasComponent implements OnInit {

  alertas = [
    { alertaNoLeida: true, texto: 'Sin venta más de 2 años', hora: '12:46', texto2: '5,000 colchones set restonic', descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    { alertaNoLeida: false, texto: 'Sin venta más de 2 años', hora: '12:46', texto2: '5,000 colchones set restonic', descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  ];

  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('ico-campana', 'Alertas', false, false, true);
  }

  ngOnInit(): void {
  }



}
