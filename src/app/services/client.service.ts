import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/client';
import { Observable } from 'rxjs';
import { Point } from '../models/point';
import { UserPayload } from '../models/user-payload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  retrieveClients(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  retrieveClient(clientId: string): Observable<User> {
    return this.http.get<User>(`${environment.api}/users/${clientId}`);
  }

  registerUser(user: UserPayload) {
    return this.http
    .post<User>(`${environment.api}/users/register`, user);
  }
}
