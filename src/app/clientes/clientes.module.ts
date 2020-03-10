import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {HistoricoComponent} from './historico/historico.component';
import {ListItemComponentComponent} from './list-item-component/list-item-component.component';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientesComponent} from './clientes.component';
import { SharedModule } from '../shared/shared.module';
import { BeneficiosComponent } from './beneficios/beneficios.component';


@NgModule({
  declarations: [
    TransacoesComponent,
    HistoricoComponent,
    ListItemComponentComponent,
    ClientDetailsComponent,
    ClientesComponent,
    BeneficiosComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ClientesModule { }
