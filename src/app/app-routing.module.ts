import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./pages/registro/registro.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AdministradorDashboardComponent} from "./pages/Roles/Administrador/administrador-dashboard/administrador-dashboard.component";
import {AspiranteDashboardComponent} from "./pages/Roles/Aspirante/aspirante-dashboard/aspirante-dashboard.component";
import {EmpresaDashboardComponent} from "./pages/Roles/Empresa/empresa-dashboard/empresa-dashboard.component";
import {InvitadoDashboardComponent} from "./pages/Roles/Invitado/invitado-dashboard/invitado-dashboard.component";
import {AdministradorGuard} from "./services/guard/administrador.guard";
import {InvitadoGuard} from "./services/guard/invitado.guard";
import {AspiranteGuard} from "./services/guard/aspirante.guard";
import {EmpresaGuard} from "./services/guard/empresa.guard";

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
    pathMatch : 'full',
    canActivate:[InvitadoGuard]
  },
  {
    path : 'administrador',
    component : AdministradorDashboardComponent,
    pathMatch : 'full',
    canActivate:[AdministradorGuard]
  },
  {
    path : 'aspirante',
    component : AspiranteDashboardComponent,
    pathMatch : 'full',
    canActivate:[AspiranteGuard]
  },
  {
    path : 'empresa',
    component : EmpresaDashboardComponent,
    pathMatch : 'full',
    canActivate:[EmpresaGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
