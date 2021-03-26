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

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    HeaderComponent,
    FooterComponent,
    InventarioDetalleComponent,
    AccionesTiendaComponent,
    FormularioDialog
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormularioDialog
  ]
})
export class AppModule { }
