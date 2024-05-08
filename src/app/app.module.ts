import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de incluir ReactiveFormsModule aquí
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule aquí

import { AppComponent } from './app.component';
import { FondoLoginComponent } from './components/fondo-login/fondo-login.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';

//Import para Ingrso de placas y Busqueda lograda
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './pages/ingreso-de-placas/search/search.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { FormComponent } from './pages/ingreso-de-placas/form/form.component';
//Imports para el ingreso de infraccion
import { Registro1Component } from './pages/registro1/registro1.component';
import { ColorPickerModalComponent } from './components/color-picker-modal/color-picker-modal.component';
//Imports para Interfaz InfraccionFotos
import { InfraccionFotosComponent } from './pages/infraccion-fotos/infraccion-fotos.component';
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
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';

//components

import { BotonesLateralesComponent } from './components/botones-laterales/botones-laterales.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; 
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
    FondoLoginComponent,
    FormularioLoginComponent,
    LoginComponent,
    PagenotfoundComponent,
    SearchComponent,
    NavBarComponent,
    MainContentComponent,
    CountdownTimerComponent,
    BusquedaLogradaComponent,
    FormComponent,
    Registro1Component,
    ColorPickerModalComponent,
    InfraccionFotosComponent,
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
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
