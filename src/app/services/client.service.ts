import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';
import { Point } from '../models/point';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  retrieveClients(): Observable<Array<Client>> {
    return this.http.get<Client[]>(`${environment.api}/clientes`);
  }

  retrievePoints(): Observable<Point> {
    return this.http.get<Point>(`${environment.api}/pontos`);
  }
}
