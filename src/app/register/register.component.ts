import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppValidators } from '../shared/validators/app-validators';
import { UserService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    cpf: this.fb.control('', [Validators.required,
       AppValidators.cpfValidator]),
  });


  constructor(private fb: FormBuilder,
     private clienteService: UserService,
      private router: Router) { }

  ngOnInit(): void {
  }


  saveUser():void {
    if (this.form.valid) {
      this.clienteService.registerUser(this.form.value)
      .subscribe(() => this.router.navigateByUrl('/login'));
    }
  }
}
