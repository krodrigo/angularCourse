import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

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
  
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private  dialog:  MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.form.valid) { return; }
    
    this.registerService.authenticate(this.form.value.usuario, this.form.value.senha).subscribe(
      res =>this.router.navigate(['/clientes']), 
      err => console.error( err.error.message)
      );
    }
}
