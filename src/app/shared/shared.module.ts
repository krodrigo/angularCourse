import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  exports: [DirectivesModule, PipesModule, MaterialModule],
  imports: [
    CommonModule,
    DirectivesModule, PipesModule, MaterialModule
  ]
})
export class SharedModule { }
