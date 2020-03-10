import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppValidators } from '../app-validators';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service'
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.form.valid) { return; }
    
    const reg: Register = {
      id: 'id', 
      name: this.form.value.nome, 
      username:this.form.value.usuario, 
      email:this.form.value.email, 
      cpf: this.form.value.cpf, 
      password: this.form.value.senha, 
      token: ''};

    console.log(reg);

    this.registerService.registerClient(reg).subscribe();
    this.router.navigate(['/login']);
  }
}
