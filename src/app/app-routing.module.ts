import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./clientes/clientes.module').then(
        m => m.ClientesModule
      )
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'corrected'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
