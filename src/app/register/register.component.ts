import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    cpf: this.fb.control('', Validators.required),
    senha: this.fb.control('', Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
