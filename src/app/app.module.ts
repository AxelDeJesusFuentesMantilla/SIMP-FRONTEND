import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    FondoLoginComponent,
    FormularioLoginComponent,
    LoginComponent,
    PagenotfoundComponent,
    AppComponent,
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
    Infraccion2FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
