import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Point } from '../models/point';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  retrieveClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.api}/clientes`);
  }

  retrieveClientPoints(): Observable<Point> {
    return this.http.get<Point>(`${environment.api}/pontos`);
  }
  retrieveClient(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${environment.api}/clientes/${clientId}`);
  }
}
