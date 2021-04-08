import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventarioComponent } from './components/inventario/inventario.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InventarioDetalleComponent } from './components/inventario-detalle/inventario-detalle.component';


import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AccionesTiendaComponent } from './components/acciones-tienda/acciones-tienda.component';
import { FormularioDialog } from './shared/dialogs/formulario/formulario.dialog';
import { ComboDescuentoComponent } from './components/combo-descuento/combo-descuento.component';
import { InventarioRiesgoComponent } from './components/inventario-riesgo/inventario-riesgo.component';
import { MatrizInventarioRiesgoComponent } from './components/matriz-inventario-riesgo/matriz-inventario-riesgo.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { MasComponent } from './components/mas/mas.component';
import { VisualizaAccionesComponent } from './components/visualiza-acciones/visualiza-acciones.component';
import { AccionSolicitadaComponent } from './components/accion-solicitada/accion-solicitada.component';
import { AccionesCedisComponent } from './components/acciones-cedis/acciones-cedis.component';
import { DevolucionProveedorComponent } from './components/acciones-cedis/acciones/devolucion-proveedor/devolucion-proveedor.component';
import { VentaLoteComponent } from './components/acciones-cedis/acciones/venta-lote/venta-lote.component';
import { DonacionComponent } from './components/acciones-cedis/acciones/donacion/donacion.component';
import { EnvioDestruccionComponent } from './components/acciones-cedis/acciones/envio-destruccion/envio-destruccion.component';
import { DatepickerDialog, NombreMesPipe } from './shared/dialogs/datepicker/datepicker.dialog';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './shared/dialogs/datepicker/custom-date-adapter';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    HeaderComponent,
    FooterComponent,
    InventarioDetalleComponent,
    AccionesTiendaComponent,
    FormularioDialog,
    DatepickerDialog,
    ComboDescuentoComponent,
    InventarioRiesgoComponent,
    MatrizInventarioRiesgoComponent,
    AlertasComponent,
    MasComponent,
    VisualizaAccionesComponent,
    AccionSolicitadaComponent,
    AccionesCedisComponent,
    DevolucionProveedorComponent,
    VentaLoteComponent,
    DonacionComponent,
    EnvioDestruccionComponent,
    NombreMesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    IvyCarouselModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    SatDatepickerModule, SatNativeDateModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormularioDialog,
    DatepickerDialog,
  ]
})
export class AppModule { }
