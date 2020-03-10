import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { CpfFormatDirective } from './directives/cpf-format.directive';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from './shared/material/material.module';
import {RegisterComponent} from './register/register.component';
import { RegisterService } from './services/register.service';
import { ValidaCpfPipe } from './pipes/valida-cpf.pipe';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CpfFormatDirective,
    ValidaCpfPipe,
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
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, deps: [RegisterService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
