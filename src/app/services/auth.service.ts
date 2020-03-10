import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../models/client";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private Http: HttpClient) {}

  authenticate({
    username,
    password
  }: {
    username: string;
    password: string;
  }): Observable<User> {
    return this.Http.post<User>(`${environment.api}/users/authenticate`, {
      password,
      username
    }).pipe(tap(user => (this.token = user.token)));
  }

  set token(token: string) {
    localStorage.setItem("token", token);
  }

  get token(): string {
    return localStorage.getItem("token");
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }
}
