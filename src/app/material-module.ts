import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'}
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "ico-inventario-activo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/inventario-activo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-buscar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/buscar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-flecha",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/flecha.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-llama",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/llama.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-campana",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/campana.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-menu",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/menu.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-regresar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/regresar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-puntos",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/puntos.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-promo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/promo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-editar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/editar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-basura",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/basura.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-lupa",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/lupa.svg")
    );
  }
}
