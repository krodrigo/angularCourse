import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {HistoricoComponent} from './historico/historico.component';
import {ListItemComponentComponent} from './list-item-component/list-item-component.component';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/material/material.module';
import {ClientesComponent} from './clientes.component';
import {FormattedCpfPipe} from '../pipes/formatted-cpf.pipe';
import {DateFormatDirective} from '../directives/date-format.directive';


@NgModule({
  declarations: [
    TransacoesComponent,
    HistoricoComponent,
    ListItemComponentComponent,
    ClientDetailsComponent,
    ClientesComponent,
    FormattedCpfPipe,
    DateFormatDirective,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ClientesModule { }
