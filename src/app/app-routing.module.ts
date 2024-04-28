import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';

const routes: Routes = [
  { path: 'perfil-vehicular', component: PerfilVeicularComponent },
  { path: 'infraccion9', component: Infraccion9Component },
  // Agrega más rutas según necesites
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
