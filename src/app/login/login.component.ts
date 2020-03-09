import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppValidators } from '../app-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    usuario: this.fb.control('', Validators.required),
    senha: this.fb.control('', Validators.required)
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
