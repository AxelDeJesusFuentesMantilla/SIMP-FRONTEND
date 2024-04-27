import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
