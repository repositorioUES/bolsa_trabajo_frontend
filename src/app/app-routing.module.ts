import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./pages/registro/registro.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AdministradorDashboardComponent} from "./pages/Roles/Administrador/administrador-dashboard/administrador-dashboard.component";
import {AspiranteDashboardComponent} from "./pages/Roles/Aspirante/aspirante-dashboard/aspirante-dashboard.component";
import {EmpresaDashboardComponent} from "./pages/Roles/Empresa/empresa-dashboard/empresa-dashboard.component";
import {InvitadoDashboardComponent} from "./pages/Roles/Invitado/invitado-dashboard/invitado-dashboard.component";

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'registrar',
    component : RegistroComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'invitado',
    component : InvitadoDashboardComponent,
    pathMatch : 'full'
  },
  {
    path : 'administrador',
    component : AdministradorDashboardComponent,
    pathMatch : 'full'
  },
  {
    path : 'aspirante',
    component : AspiranteDashboardComponent,
    pathMatch : 'full'
  },
  {
    path : 'empresa',
    component : EmpresaDashboardComponent,
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
