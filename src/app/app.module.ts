import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './componentes/profile/profile.component'

import {RegistroComponent} from './componentes/registro/registro.component';
import {InicioComponent} from './componentes/inicio/inicio.component'
import {Authentictionservice} from './authentication.service'
import {AuthGuardservice} from './auth-guard.service';



const routes: Routes =[
  {path:'',component:InicioComponent},
  {path:'Login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'profile',
  component:ProfileComponent,
  canActivate: [AuthGuardservice]}
  
  
  


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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [Authentictionservice, AuthGuardservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
