import { Pipe, PipeTransform } from '@angular/core';
import * as cpf from  '@fnando/cpf';

@Pipe({
  name: 'validaCpf'
})
export class ValidaCpfPipe implements PipeTransform {

  transform(value: string): boolean {
    return cpf.isValid(value);
  }
}
