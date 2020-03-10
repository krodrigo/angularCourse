import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfDirective } from './cpf.directive';
import { DateFormatDirective } from './date-format.directive';



@NgModule({
  declarations: [CpfDirective, DateFormatDirective,],
  imports: [
    CommonModule
  ],
  exports: [
    CpfDirective, DateFormatDirective,
  ]
})
export class DirectivesModule { }
