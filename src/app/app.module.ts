import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

// pages
import { Registro1Component } from './pages/registro1/registro1.component';
import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';

//components
import { ColorPickerModalComponent } from './components/color-picker-modal/color-picker-modal.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { SearchComponent } from './pages/ingreso-de-placas/search/search.component';
import { FormComponent } from './pages/ingreso-de-placas/form/form.component';

import { BotonesComponent } from './components/botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    Registro1Component,
    PerfilVeicularComponent,
    BusquedaLogradaComponent,
    MainContentComponent,
    ColorPickerModalComponent,
    CountdownTimerComponent,
    NavBarComponent,
    SearchComponent,
    FormComponent,
    BotonesComponent,
    Infraccion9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }