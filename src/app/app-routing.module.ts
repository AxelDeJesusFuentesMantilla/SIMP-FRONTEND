import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { LoginComponent } from './pages/login/login.component';
import { Registro1Component } from './pages/registro1/registro1.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent },
  { path: 'ingreso-de-placas', component: MainContentComponent },
  { path: 'infraccion-1', component: Registro1Component},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
