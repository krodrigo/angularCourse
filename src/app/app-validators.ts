import { FormControl } from '@angular/forms';
import { ValidaCpfPipe } from '../pipes/valida-cpf.pipe';

export class AppValidators {
    static cpfValidator(control: FormControl) {
        return new ValidaCpfPipe().transform(control.value) ? null : { data: 'CPF inválido' };
    }
}