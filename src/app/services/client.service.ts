import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {IPontos} from '../models/pontos';
import {ICliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  buscarClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('/api/clientes').pipe(shareReplay());
  }

  buscarPontos(): Observable<IPontos> {
    return this.http.get<IPontos>('/api/pontos').pipe(shareReplay());
  }
}
