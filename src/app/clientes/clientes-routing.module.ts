import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {BeneficiosComponent} from './beneficios/beneficios.component';
import {HistoricoComponent} from './historico/historico.component';
import {ClientesComponent} from './clientes.component';


const routes: Routes = [
  {
    path: '', component: ClientesComponent, children: [
      {path: '', component: TransacoesComponent},
      {path: 'beneficios', component: BeneficiosComponent},
      {
        path: 'historico',
        component: HistoricoComponent
      },
    ]
  },
  {
    path: ':id', component: ClientesComponent, children: [
      {path: '', component: TransacoesComponent},
      {path: 'beneficios', component: BeneficiosComponent},
      {
        path: 'historico',
        component: HistoricoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {
}
