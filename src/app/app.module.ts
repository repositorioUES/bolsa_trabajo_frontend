import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

/*
* Componentes creados por el usuario
*/
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


/*
* Interceptores
*/
import {authInterceptorProviders} from "./services/auth.interceptor";

/*
* Componentes de Angular Material
*/
import { MatButtonModule} from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AdministradorDashboardComponent } from './pages/Roles/Administrador/administrador-dashboard/administrador-dashboard.component';
import { AspiranteDashboardComponent } from './pages/Roles/Aspirante/aspirante-dashboard/aspirante-dashboard.component';
import { EmpresaDashboardComponent } from './pages/Roles/Empresa/empresa-dashboard/empresa-dashboard.component';
import { InvitadoDashboardComponent } from './pages/Roles/Invitado/invitado-dashboard/invitado-dashboard.component';
import { ListEmpresasComponent } from './pages/aspirantes/list-empresas/list-empresas.component';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from './pages/aspirantes/ofertas/ofertas.component';
import { InfoAspiComponent } from './pages/aspirantes/info-aspi/info-aspi.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    AdministradorDashboardComponent,
    AspiranteDashboardComponent,
    EmpresaDashboardComponent,
    InvitadoDashboardComponent,
    ListEmpresasComponent,
    OfertasComponent,
    InfoAspiComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
