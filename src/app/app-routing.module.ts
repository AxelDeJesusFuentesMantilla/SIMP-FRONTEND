import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';

const routes: Routes = [
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent},
  { path: 'ingreso-de-placas', component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
