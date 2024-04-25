//AQUÍ SE DECLARA EL RUTEO DE LAS NUEVAS PAGES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { BusquedaIncorrectaComponent } from './pages/busqueda-incorrecta/busqueda-incorrecta.component';

const routes: Routes = [
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent},
  { path: 'ingreso-de-placas', component: MainContentComponent},
  { path: 'busqueda-incorrecta', component: BusquedaIncorrectaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
