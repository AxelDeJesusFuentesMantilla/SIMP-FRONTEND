import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FondoLoginComponent } from './fondo-login/fondo-login.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { RouterModule,Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes=[
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: '/Login',
    pathMatch: 'full'

  },
  {
    path:'**',
    component: PagenotfoundComponent
  },
]
;

@NgModule({
  declarations: [
    AppComponent,
    FondoLoginComponent,
    FormularioLoginComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
