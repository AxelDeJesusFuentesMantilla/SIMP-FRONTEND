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
import {BotonesLateralesComponent} from './components/botones-laterales/botones-laterales.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component';//se importa la página que se pondrá como ruta
import { IconLineContainerComponent } from './components/icon-line-container/icon-line-container.component';
import { LetreroSuperiorComponent } from './components/letrero-superior/letrero-superior.component';
import { BotonElegirUbicacionComponent } from './components/boton-elegir-ubicacion/boton-elegir-ubicacion.component';
import { EtiquetaContenidoComponent } from './components/etiqueta-contenido/etiqueta-contenido.component';
import { LineaHorizontalComponent } from './components/linea-horizontal/linea-horizontal.component';
import { VentanaPopUpComponent } from './components/ventana-pop-up/ventana-pop-up.component';
import { HistorialComponent } from './pages/historial/historial.component';
>>>>>>> interfaces

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Registro1Component,
    ColorPickerModalComponent,
    InfraccionFotosComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule
=======
    SearchComponent,
    NavBarComponent,
    MainContentComponent,
    CountdownTimerComponent,
    BusquedaLogradaComponent,
    FormComponent,
    BotonesLateralesComponent,
    Infraccion8Component,
    IconLineContainerComponent,
    LetreroSuperiorComponent,
    BotonElegirUbicacionComponent,
    EtiquetaContenidoComponent,
    LineaHorizontalComponent,
    VentanaPopUpComponent,
    HistorialComponent,

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
