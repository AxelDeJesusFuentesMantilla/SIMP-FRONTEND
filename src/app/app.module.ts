import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectionComponent } from './Componets/category-selection/category-selection.component';
import { ManualEntryComponent } from './Componets/manual-entry/manual-entry.component';
import { Infraccion3Component } from './Pages/infraccion3/infraccion3.component';

@NgModule({
  declarations: [
    AppComponent,
   CategorySelectionComponent,
   ManualEntryComponent,
   Infraccion3Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    // Asegúrate de incluir FormsModule en el array de imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
