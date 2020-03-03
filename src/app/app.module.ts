import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import {ClientListComponent} from './clientlist/client-list.component';
import {StatusItemComponent} from './status-item/status-item.component';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {HistoricoComponent} from './historico/historico.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    StatusItemComponent,
    TransacoesComponent,
    HistoricoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
