import { AbstractControl } from '@angular/forms';
import { IsCPFPipe } from '../pipes/is-cpf.pipe';

export class AppValidators {
  static cpfValidator(control: AbstractControl) {
    return control.value && !(new IsCPFPipe()
    .transform(control.value)) ? {cpf: 'CPF inválido'} : null;
  }
}
