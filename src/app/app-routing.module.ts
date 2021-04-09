import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionSolicitadaComponent } from './components/accion-solicitada/accion-solicitada.component';
import { AccionesCedisComponent } from './components/acciones-cedis/acciones-cedis.component';
import { DevolucionProveedorComponent } from './components/acciones-cedis/acciones/devolucion-proveedor/devolucion-proveedor.component';
import { DonacionComponent } from './components/acciones-cedis/acciones/donacion/donacion.component';
import { EnvioDestruccionComponent } from './components/acciones-cedis/acciones/envio-destruccion/envio-destruccion.component';
import { VentaLoteComponent } from './components/acciones-cedis/acciones/venta-lote/venta-lote.component';
import { AccionesTiendaComponent } from './components/acciones-tienda/acciones-tienda.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { ComboDescuentoComponent } from './components/combo-descuento/combo-descuento.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { InventarioDetalleComponent } from './components/inventario-detalle/inventario-detalle.component';
import { InventarioRiesgoComponent } from './components/inventario-riesgo/inventario-riesgo.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MasComponent } from './components/mas/mas.component';
import { MatrizInventarioRiesgoComponent } from './components/matriz-inventario-riesgo/matriz-inventario-riesgo.component';
import { VisualizaAccionesComponent } from './components/visualiza-acciones/visualiza-acciones.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'detalle/:id', component: InventarioDetalleComponent },
  { path: 'acciones-tienda', component: AccionesTiendaComponent },
  { path: 'acciones-tienda/:id', component: AccionesTiendaComponent },
  { path: 'combo-descuento', component: ComboDescuentoComponent },
  { path: 'inventario-riesgo', component: InventarioRiesgoComponent },
  { path: 'matriz-inventario-riesgo', component: MatrizInventarioRiesgoComponent },
  { path: 'alertas', component: AlertasComponent },
  { path: 'mas', component: MasComponent },
  { path: 'visualiza-acciones', component: VisualizaAccionesComponent },
  { path: 'accion-solicitada', component: AccionSolicitadaComponent },
  { path: 'acciones-cedis', component: AccionesCedisComponent },
  { path: 'acciones-cedir/devolucion-proveedor', component: DevolucionProveedorComponent },
  { path: 'acciones-cedir/donacion', component: DonacionComponent },
  { path: 'acciones-cedir/envio-destruccion', component: EnvioDestruccionComponent },
  { path: 'acciones-cedir/venta-lote', component: VentaLoteComponent },
  { path: 'home', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
