import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionesTiendaComponent } from './components/acciones-tienda/acciones-tienda.component';
import { InventarioDetalleComponent } from './components/inventario-detalle/inventario-detalle.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  { path: '', component: InventarioComponent },
  { path: 'detalle/:id', component: InventarioDetalleComponent },
  { path: 'acciones-tienda', component: AccionesTiendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
