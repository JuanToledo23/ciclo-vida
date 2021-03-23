import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioDetalleComponent } from './components/inventario-detalle/inventario-detalle.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  { path: '', component: InventarioComponent },
  { path: 'detalle/:id', component: InventarioDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
