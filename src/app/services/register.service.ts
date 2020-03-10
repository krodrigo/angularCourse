import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerClient(register: Register): Observable<Register> {
    return this.http.post<Register>(`http://localhost:4000/users/register`, register);
  }

  authenticate(username: string, password: string): Observable<Register> {
    return this.http.post<Register>(`http://localhost:4000/users/authenticate`, {password, username})
    .pipe(tap(user => this.token = user.token));
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }
}
