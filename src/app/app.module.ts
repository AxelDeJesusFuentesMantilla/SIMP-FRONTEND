import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

import { Registro1Component } from './registro1/registro1.component';
import { ColorPickerModalComponent } from './color-picker-modal/color-picker-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    Registro1Component,
    ColorPickerModalComponent
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