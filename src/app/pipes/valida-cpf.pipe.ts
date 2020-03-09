import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validaCpf'
})
export class ValidaCpfPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
