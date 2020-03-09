import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppValidators } from '../app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    nome: this.fb.control('', Validators.required),
    usuario: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    cpf: this.fb.control('', AppValidators.cpfValidator),
    senha: this.fb.control('', Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
