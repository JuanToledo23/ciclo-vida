import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionesTiendaComponent } from './components/acciones-tienda/acciones-tienda.component';
import { ComboDescuentoComponent } from './components/combo-descuento/combo-descuento.component';
import { InventarioDetalleComponent } from './components/inventario-detalle/inventario-detalle.component';
import { InventarioRiesgoComponent } from './components/inventario-riesgo/inventario-riesgo.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MatrizInventarioRiesgoComponent } from './components/matriz-inventario-riesgo/matriz-inventario-riesgo.component';

const routes: Routes = [
  { path: '', component: InventarioComponent },
  { path: 'detalle/:id', component: InventarioDetalleComponent },
  { path: 'acciones-tienda', component: AccionesTiendaComponent },
  { path: 'acciones-tienda/:id', component: AccionesTiendaComponent },
  { path: 'combo-descuento', component: ComboDescuentoComponent },
  { path: 'inventario-riesgo', component: InventarioRiesgoComponent },
  { path: 'matriz-inventario-riesgo', component: MatrizInventarioRiesgoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
