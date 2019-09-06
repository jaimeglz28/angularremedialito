import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './componentes/profile/profile.component'

import {RegistroComponent} from './componentes/registro/registro.component';
import {InicioComponent} from './componentes/inicio/inicio.component'
import {Authentictionservice} from './authentication.service'
import {AuthGuardservice} from './auth-guard.service';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { VerpartidasComponent } from './componentes/verpartidas/verpartidas.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';
import { EsperandoComponent } from './componentes/esperando/esperando.component';




const routes: Routes =[
  {path:'',component:InicioComponent},
  {path:'Login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'profile',
  component:ProfileComponent,
  canActivate: [AuthGuardservice]},
  {path:'verpartida', component:VerpartidasComponent},
  {path:'administrador', component:AdministradorComponent},
  {path:'jugador', component:JugadorComponent},
  {path:'esperando', component:EsperandoComponent}
  
  
  


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegistroComponent,
    InicioComponent,
    InicioComponent,
    RegistroComponent,
    AdministradorComponent,
    VerpartidasComponent,
    JugadorComponent,
    EsperandoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Authentictionservice, AuthGuardservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
