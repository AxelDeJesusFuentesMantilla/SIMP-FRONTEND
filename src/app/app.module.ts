import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

import { Registro1Component } from './registro1/registro1.component';
import { ColorPickerModalComponent } from './color-picker-modal/color-picker-modal.component';
import { InfraccionFotosComponent } from './infraccion-fotos/infraccion-fotos.component';
import { BotonesComponent } from './botones/botones.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/ingreso-de-placas/search/search.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { FormComponent } from './pages/ingreso-de-placas/form/form.component';
<<<<<<< Updated upstream
import {BotonesLateralesComponent} from './components/botones-laterales/botones-laterales.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component';//se importa la página que se pondrá como ruta
=======
//Imports para el ingreso de infraccion
import { Registro1Component } from './pages/registro1/registro1.component';
import { ColorPickerModalComponent } from './components/color-picker-modal/color-picker-modal.component';


import { BotonesComponent } from './components/botones/botones.component';
import { TriangulosFondoLoginComponent } from './components/triangulos-fondo-login/triangulos-fondo-login.component';
import { Infraccion2FormularioComponent } from './components/infraccion2-formulario/infraccion2-formulario.component';
import { Infraccion5Component } from './pages/infraccion5/infraccion5.component';
import { FormularioInfraccion5Component } from './components/formulario-infraccion5/formulario-infraccion5.component';
import { BarraDeProgresoComponent } from './components/barra-de-progreso/barra-de-progreso.component';
import { InfraccionesAgregadasComponent } from './components/infracciones-agregadas/infracciones-agregadas.component';
import { BusquedaIncorrectaComponent } from './pages/busqueda-incorrecta/busqueda-incorrecta.component';

// pages

import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';
import { Infraccion6Component } from './pages/infraccion6/infraccion6.component';
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';

//components

import { BotonesLateralesComponent } from './components/botones-laterales/botones-laterales.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; 
>>>>>>> Stashed changes
import { IconLineContainerComponent } from './components/icon-line-container/icon-line-container.component';
import { VentanaPopUpComponent } from './components/ventana-pop-up/ventana-pop-up.component';
import { HistorialComponent } from './pages/historial/historial.component';
<<<<<<< Updated upstream
>>>>>>> interfaces
=======
import { NavBarInfraccion8Component } from './components/nav-bar-infraccion8/nav-bar-infraccion8.component';
import { PerfilVehicularRegistradoComponent } from './pages/perfil-vehicular-registrado/perfil-vehicular-registrado.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Registro1Component,
    ColorPickerModalComponent,
<<<<<<< Updated upstream
    InfraccionFotosComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule
=======
=======
    BotonesComponent,
    TriangulosFondoLoginComponent,
    Infraccion2FormularioComponent,
    Infraccion5Component,
    FormularioInfraccion5Component,
    BarraDeProgresoComponent,
    InfraccionesAgregadasComponent,
    BusquedaIncorrectaComponent,
    PerfilVeicularComponent,
    Infraccion9Component,
>>>>>>> Stashed changes
    SearchComponent,
    NavBarComponent,
    MainContentComponent,
    CountdownTimerComponent,
    BusquedaLogradaComponent,
    FormComponent,
    BotonesLateralesComponent,
    Infraccion8Component,
    IconLineContainerComponent,
    VentanaPopUpComponent,
    HistorialComponent,
<<<<<<< Updated upstream

=======
    NavBarInfraccion8Component,
    Infraccion6Component,
    PerfilVehicularRegistradoComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> interfaces
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> interfaces
