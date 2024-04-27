import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; // Importamos la página
import { HistorialComponent } from './pages/historial/historial.component';
const routes: Routes = [
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent},
  { path: 'ingreso-de-placas', component: MainContentComponent},
  
  { path: 'infraccion8', component: Infraccion8Component }, // Ruta para la página
  {path: 'historial', component: HistorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
