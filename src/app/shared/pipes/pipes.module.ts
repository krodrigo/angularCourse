import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedCpfPipe } from './formatted-cpf.pipe';
import { IsCPFPipe } from './is-cpf.pipe';



@NgModule({
  declarations: [
    FormattedCpfPipe,
    IsCPFPipe
  ],
  exports: [
    FormattedCpfPipe,
    IsCPFPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
