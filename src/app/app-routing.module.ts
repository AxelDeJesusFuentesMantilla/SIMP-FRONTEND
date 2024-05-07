import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
<<<<<<< Updated upstream
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; // Importamos la página
import { HistorialComponent } from './pages/historial/historial.component';
const routes: Routes = [
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent},
  { path: 'ingreso-de-placas', component: MainContentComponent},
  
  { path: 'infraccion8', component: Infraccion8Component }, // Ruta para la página
  {path: 'historial', component: HistorialComponent},
=======
import { LoginComponent } from './pages/login/login.component';
import { Registro1Component } from './pages/registro1/registro1.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { Infraccion5Component } from './pages/infraccion5/infraccion5.component';
import { BusquedaIncorrectaComponent } from './pages/busqueda-incorrecta/busqueda-incorrecta.component';

import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';

import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';
import { Infraccion6Component } from './pages/infraccion6/infraccion6.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; // Importamos la página
import { HistorialComponent } from './pages/historial/historial.component';
import { PerfilVehicularRegistradoComponent } from './pages/perfil-vehicular-registrado/perfil-vehicular-registrado.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent },
  { path: 'busqueda-fallo', component: BusquedaIncorrectaComponent },
  { path: 'perfil-vehicular', component: PerfilVeicularComponent },
  {path: 'perfil-vehicular-registrado', component: PerfilVehicularRegistradoComponent},
  { path: 'ingreso-de-placas', component: MainContentComponent },
  { path: 'historial', component: HistorialComponent  },
  { path: 'infraccion-1', component: Registro1Component },
  { path: 'infraccion-2', component: Infraccion5Component },
  { path: 'infraccion-6', component: Infraccion6Component },
  { path: 'infraccion-8', component: Infraccion8Component },
  { path: 'resumen-infraccion', component: Infraccion9Component },
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
>>>>>>> Stashed changes
];
>>>>>>> interfaces

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
